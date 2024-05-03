import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./Dropdownmenu.css";

const DropdownMenu = ({ title, content, customClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("Dropdown isOpen:", isOpen);
  };

  return (
    <div className="dropdown-menu">
      <div className={`dropdown-header ${customClassName}`}>
        <p>{title}</p>
        <FontAwesomeIcon
          className={`fa-chevron ${isOpen ? "open" : ""}`}
          icon={faChevronUp}
          size="2x"
          onClick={toggleDropdown}
        />
      </div>
      {isOpen && (
        <div
          className={`dropdown-content ${customClassName} ${
            isOpen ? "open" : ""
          }`}
        >
          <div className="text-content">{content}</div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
