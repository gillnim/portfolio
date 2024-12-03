import React from "react";
import { FaRocket } from "react-icons/fa";
import "./Background.scss";

const Background = () => {
  return (
    <section className="background">
      <div className="background__content">
      <h2 className="background__title"> <FaRocket className="background__icon" /> My Journey <FaRocket className="background__icon" /> </h2>
        <p className="background__text">
          Hello! 👋 I’m Nimrat, a systems engineer turned software developer with a deep-seated passion for aerospace and technology. My journey started with a fascination for solving complex challenges, and over time, it grew into a career where I want to build solutions that combine innovation and technical depth.
        </p>

        <h3 className="background__subtitle">Education</h3>
        <p className="background__text">
          I graduated with a degree in Systems Engineering, where I honed my ability to design and integrate systems for large-scale, real-world applications. Later, I pursued a diploma in Software Engineering, adding a layer of programming and problem-solving expertise to my toolkit. This unique combination allows me to approach problems with a holistic perspective—melding the precision of engineering with the agility of software development.
        </p>

        <h3 className="background__subtitle">Professional Experience</h3>
        <p className="background__text">
          Over the years, I’ve had the opportunity to work on impactful projects:
        </p>
        <ul className="background__list">
          <li>
            <strong>Autonomous Luggage-Carrying Robot:</strong> Designed and development of an autonomous robot equipped with LiDAR and OpenCV for safe navigation in crowded airport environments. I also collaborated on hardware design using SolidWorks and contributed in its construction in a machine shop.
          </li>
          <li>
            <strong>KinetiScan:</strong> Developed a rehabilitation tool using React, Node.js, and MediaPipe that enables users to track joint angles and monitor progress during physical therapy. The project included data visualization, a responsive front end, and backend API integration for storing analysis results.
          </li>
          <li>
            <strong>Production Engineering:</strong> Designed, assembled, and tested rugged computer systems, managing tasks like soldering, PCB fitting, and laser cutting to meet strict quality standards while debugging technical issues for smooth production workflows.
          </li>
        </ul>

        <h3 className="background__subtitle">Passion for Aerospace</h3>
        <p className="background__text">
          Aerospace has always been a source of inspiration for me. From staring at the stars at night and drawing them on my scrapbook as a child to reading every NASA blog, I’ve always been drawn to this field. I’m fascinated by the problem-solving, precision, and creativity it demands—and I hope to contribute to advancements in the aerospace industry someday.
        </p>

        <h3 className="background__subtitle">Beyond Work</h3>
        <p className="background__text">
          When I’m not coding or tinkering with projects, I enjoy spending time outdoors. Hiking with my dog, Duke. It’s where I often find inspiration for my work. I’m also a beginner rock climber and crocheter, and I love challenging myself to learn new skills. In quieter moments, I like watching movies, or building miniature cardboard models.
        </p>

        <h3 className="background__subtitle">Let’s Connect!</h3>
        <p className="background__text">
          Whether it’s collaborating on an exciting project, discussing aerospace ideas, or brainstorming software solutions, I’m always excited to meet like-minded individuals. Let’s bring ideas to life!
        </p>
      </div>
    </section>
  );
};

export default Background;
