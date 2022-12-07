import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { useEffect } from "react";
import { useState } from "react";
const Navbar = () => {
  const [navbarChange, setNavbarChange] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 300) {
      setNavbarChange(true);
    } else {
      setNavbarChange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <div className={`navbar-container ${navbarChange && `set-transition`}`}>
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
