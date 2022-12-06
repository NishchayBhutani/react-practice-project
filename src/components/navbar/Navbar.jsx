import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
        <div>Portfolio</div>
      </div>
      <div className="navbar-container-right">
        {/* <div className="navbar-right-items"> */}
        <div className="navbar-right-item">ABOUT</div>
        <div className="navbar-right-item">SKILLS</div>
        <div className="navbar-right-item">EDUCATION</div>
        <div className="navbar-right-item">EXPERIENCE</div>
        <div className="navbar-right-item">VLOGS</div>
        <div className="navbar-right-item">CONTACT</div>
        <div className="navbar-right-hamburger">
          <FontAwesomeIcon icon={faBars} />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
