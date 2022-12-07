import React from "react";

import HeaderContent from "../header content card/HeaderContent";
import Socials from "../socials/Socials";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container-child-1"></div>
      <HeaderContent className="header-container-child-2" />
      <Socials />
    </div>
  );
};

export default Header;
