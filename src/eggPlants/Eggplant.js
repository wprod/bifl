import { Object3D } from "three";
import React, { useRef, useMemo } from "react";
import { useLoader, useThree, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import lerp from "lerp";
import { useBlock } from "../blocks";
import state from "../store";

const dummy = new Object3D();

export default function Eggplant() {
  const gltf = useLoader(GLTFLoader, "/gltf/Eggplant.gltf");

  useMemo(() => gltf.scene.children[0].geometry.center(), []);

  const { gl, scene, camera, clock, mouse } = useThree();
  const { contentMaxWidth, sectionHeight, mobile } = useBlock();
  const model = useRef();

  useFrame(() => {
    state.eggPlants.forEach((data, i) => {
      const time = clock.getElapsedTime() / 2;
      const { x, offset, scale, factor } = data;
      const computedScale = (contentMaxWidth / 35) * scale;

      data.pos.set(
        mobile ? 0 : x,
        lerp(data.pos.y, -sectionHeight * offset * factor + (state.top.current / state.zoom) * factor, 0.1),
        0
      );

      dummy.position.copy(data.pos);

      if (i === 0) {
        dummy.rotation.set(mouse.y, mouse.x - Math.PI, -Math.PI / 4);
      } else if (i === state.eggPlants.length - 1) {
        dummy.rotation.set(0, time, 0);
      } else dummy.rotation.set(time, time, time);

      dummy.scale.set(computedScale, computedScale, computedScale);
      dummy.updateMatrix();
      model.current.setMatrixAt(i, dummy.matrix);
      model.current.instanceMatrix.needsUpdate = true;
    });

    gl.autoClear = false;

    gl.render(scene, camera);
  }, 1);

  return (
    <>
      <instancedMesh ref={model} args={[null, null, state.eggPlants.length]} position={[0, 0, 50]}>
        <bufferGeometry attach="geometry" {...gltf.__$[1].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[1].material} name="Eggplant_BaseColor" />
      </instancedMesh>
    </>
  );
}
