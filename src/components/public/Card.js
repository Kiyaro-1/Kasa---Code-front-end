import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const card = ({ property, image }) => {
  return (
    <Link to={`/logements/${property.id}`} className="card_link">
      <article className="card_article">
        <img src={image} alt={property.title} className="card_image" />
        <div className="gradient-overlay"></div>
        <div className="card_title">{property.title}</div>
      </article>
    </Link>
  );
};

export default card;
