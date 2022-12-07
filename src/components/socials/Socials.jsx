import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./socials.css";
const Socials = () => {
  return (
    <div className="socials-container">
      <div className="socials-icon">
        <FacebookIcon fontSize="large" />
      </div>
      <div className="socials-icon">
        <LinkedInIcon fontSize="large" />
      </div>
      <div className="socials-icon">
        <GitHubIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Socials;
