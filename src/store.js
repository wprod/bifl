import { createRef } from "react";
import { Vector3 } from "three";

const state = {
  sections: 8,
  pages: 7,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Motivez vos équipes",
      image: "/1.jpg",
      aspect: 1.51,
      text:
        "Améliorez l'engagement de vos collaborateurs en reconnaissant et valorisant ce qui compte pour votre entreprise"
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Reconnaissance",
      image: "/3.jpg",
      aspect: 1.5,
      text:
        "Encouragez la reconnaissance entre pairs dans vos équipes et développez une culture du feedback en lien avec vos valeurs"
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Engagement",
      image: "/5.jpg",
      aspect: 1.5037,
      text:
        "Valorisez les comportements engagés. Assurez la visibilité de vos objectifs pour aligner vos équipes sur vos enjeux globaux, et remerciez les salariés engagés"
    },
    {
      offset: 4,
      factor: 1.75,
      header: "Suivez les dynamiques",
      image: "/6.jpg",
      aspect: 1.55,
      text:
        "Mesurez l'impact de vos initiatives, suivez les dynamiques d'équipe et donnez du pouvoir à vos collaborateurs"
    }
  ],
  stripes: [
    // { offset: 0, color: "#ffca52", height: 13 },
    // { offset: 6, color: "#2c2c67", height: 20 }
  ],
  eggPlants: [
    { x: 1.3, offset: 0.1, pos: new Vector3(), scale: 1.2, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 6, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: 0, offset: 7, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
};

export default state;
