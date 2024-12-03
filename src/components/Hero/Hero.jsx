import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Hero.scss";
import heroImage from "../../assets/duke-nim.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Hi, I’m <span className="hero__name">Nimrat</span>.
          <br />
          Engineer. Developer. Innovator.
        </h1>
        <p className="hero__description">
          I'm a systems engineer turned software developer passionate about solving
          real-world challenges with technology. When I'm not coding, you'll find me
          taking a nap or exploring the outdoors with my dog, Duke.
        </p>
        <div className="hero__actions">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={false}
            hashSpy={false}
            className="hero__button hero__button--primary"
          >
            Explore My Work
          </Link>
          <Link
            to="connect"
            smooth={true}
            duration={500}
            spy={false}
            hashSpy={false}
            className="hero__button hero__button--secondary"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="hero__image">
        <img src={heroImage} alt="Nimrat and Duke" />
      </div>
    </section>
  );
};

export default Hero;
