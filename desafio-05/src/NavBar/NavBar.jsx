import React from "react";
import "./NavBar.css";
import GitHubIcon from "../assets/GitHub.svg";
import LinkedinIcon from "../assets/Linkedin.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <a href="#projetos" className="navbar-link">Projetos</a>|
        <a href="#tecnologias" className="navbar-link">Tecnologias</a>|
        <a href="#sobremim" className="navbar-link">Sobre mim</a>
      </div>

      <div className="navbar-icons">
        <a href="https://github.com/renansantosz" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" className="navbar-icon" />
        </a>
        <a href="https://linkedin.com/in/renan-santos-2b419918a" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinIcon} alt="LinkedIn" className="navbar-icon linkedin" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
