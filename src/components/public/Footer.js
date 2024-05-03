import React from "react";
import logo from "../../images/LOGO_footer.png";

import "./footer.css";

const footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo-kasa" className="logo-kasa-footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default footer;
