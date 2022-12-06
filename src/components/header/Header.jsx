import React from "react";
import HeaderContent from "../header content card/HeaderContent";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container-child-1">
        <HeaderContent />
      </div>
      <HeaderContent className="header-container-child-2" />
    </div>
  );
};

export default Header;
