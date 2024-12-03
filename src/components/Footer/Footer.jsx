import React from "react";
import "./Footer.scss";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/nimrat-gill"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:nimratcodes@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icon"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/gillnim"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icon"
        >
          <FaGithub />
        </a>
      </div>
      <p className="footer__copyright">© Nimrat Gill 2024</p>
    </footer>
  );
};

export default Footer;
