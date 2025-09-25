import React from "react";
import "./Footer.css";
import GitHubIcon from "../assets/GitHub.svg";
import LinkedinIcon from "../assets/Linkedin.svg";
import FigmaIcon from "../assets/Figma.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          <strong>Meu contato:</strong> <br />
          12 9 9758-0945
        </p>
        <p>
          <strong>Email:</strong> <br />
          renanaraujocgsp@gmail.com
        </p>
      </div>

      <div className="footer-right">
        <a
          href="https://github.com/renansantosz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} alt="GitHub" className="footer-icon" />
        </a>
        <a
          href="https://linkedin.com/in/renan-santos-2b419918a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedinIcon} alt="LinkedIn" className="footer-icon" />
        </a>
        <a
          href="https://figma.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FigmaIcon} alt="Figma" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
