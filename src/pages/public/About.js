import React from "react";
import cover from "../../images/Image_source_2.png";
import DropdownMenu from "../../components/public/DropdownMenu.js";

const About = () => {
  return (
    <div className="about-page">
      <div className="about_cover">
        <img src={cover} alt="about_cover_image" />
      </div>
      <div className="dropdown-menu-container">
        <DropdownMenu
          title="Fiabilité"
          content="Les annonces publiées sur Kasa assurent une fiabilité totale. Les photos correspondent aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          customClassName="about-menu"
        />
        <DropdownMenu
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur du voisinage entraînera une exclusion de notre plateforme."
          customClassName="about-menu"
        />
        <DropdownMenu
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur du voisinage entraînera une exclusion de notre plateforme."
          customClassName="about-menu"
        />
        <DropdownMenu
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note à la fois à l'hôte et au locataire, cela permet à nos équipes de vérifier que les normes sont bien respectées. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          customClassName="about-menu"
        />
      </div>
    </div>
  );
};

export default About;
