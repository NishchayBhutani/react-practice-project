import React from "react";

import "./navbar.css";
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-container-left'>
        <h5>Portfolio</h5>
      </div>
      <div className='navbar-container-right'>
        {/* <div className="navbar-right-items"> */}
        <div className='navbar-right-item'>ABOUT</div>
        <div className='navbar-right-item'>SKILLS</div>
        <div className='navbar-right-item'>EDUCATION</div>
        <div className='navbar-right-item'>EXPERIENCE</div>
        <div className='navbar-right-item'>VLOGS</div>
        <div className='navbar-right-item'>CONTACT</div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
