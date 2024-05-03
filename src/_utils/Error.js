import React from "react";
import { Link } from "react-router-dom";
import error from "../images/404.png";

import "./error.css";

const Error = () => {
  return (
    <div className="page-error">
      <div className="error-num">
        <img src={error} alt="error_404" />
      </div>
      <div className="error-msg">
        <p>
          <span className="line">Oups! La page que</span>{" "}
          <span className="line">vous demandez n'existe pas.</span>
        </p>
      </div>
      <Link className="error-link" to="/home">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;
