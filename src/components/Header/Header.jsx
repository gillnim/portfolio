import React, { useState } from "react";
import { Link } from "react-scroll"; // Import react-scroll for smooth scrolling
import "./Header.scss";
import resume from "../../assets/resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("nimratcodes@gmail.com").then(() => {
      alert("Email address copied to clipboard!");
    });
  };

  return (
    <header className="header">
      <div className="header__left">
        <span className="header__email">nimratcodes@gmail.com</span>
        <button className="header__button" onClick={copyEmail}>
          Copy
        </button>
      </div>
      <div className="header__right">
      <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="header__button"
        >
          CV
        </a>
        <a
          href="https://www.linkedin.com/in/nimrat-gill"
          target="_blank"
          rel="noopener noreferrer"
          className="header__button header__linkedin"
        >
          LinkedIn
        </a>

        <button className="header__menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`header__menu ${menuOpen ? "header__menu--open" : ""}`}>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="header__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="background"
            smooth={true}
            duration={500}
            className="header__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Background
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="header__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="header__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="connect"
            smooth={true}
            duration={500}
            className="header__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Connect
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
