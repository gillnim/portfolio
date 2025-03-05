import React from "react";
import "./Projects.scss";
import kinetiscan from '../../assets/projects/kinetiscan.jpeg'
import travelbuddy from '../../assets/projects/TravelBuddy.jpeg'
import bell from '../../assets/projects/BELL.png'
import space from '../../assets/projects/iss.png'
import bandsite from '../../assets/projects/bandsite.png'
import nitro from '../../assets/projects/nitro.png'
import braincoin from '../../assets/projects/braincoin.png'
import brainflix from '../../assets/projects/brainflix.png'
import instock from '../../assets/projects/instock.png'
import snapshot from '../../assets/projects/snapshot.png'
import happycompass from '../../assets/projects/happycompass.png'
import fems from '../../assets/projects/fems'

const projects = [
  {
    title: "Happy Compass",
    description: "Happy Compass is a landing page with a secure sign-up form, integrated with MongoDB for database security.",
    techStack: ["React", "JavaScript", "AWS Cloud", "MongoDB", "Sass"],
    link: "https://www.myhappycompass.com/",
    image: happycompass,
  },
  {
    title: "TalentTrace Snapshot",
    description: "Talent Trace Snapshot is a web app where users create personalized skill snapshots by selecting key skills, answering related questions, and tagging relevant technologies.",
    techStack: ["React", "JavaScript", "Firebase", "NoSQL", "Sass", "Firestore", "TailwindCSS", "ShadCN UI"],
    link: "https://talenttrace.web.app/users/YBkt2uL3tGxFwhW0Ryrc/Profile",
    image: snapshot,
  },
  {
    title: "Fems in Stem",
    description: "Fems in STEM is a custom WordPress website built with Elementor, featuring interactive elements and a custom form to collect user responses.",
    techStack: ["WordPress", "JavaScript", "HTML", "Elementor"],
    link: "https://femsinstem.com/",
    image: fems,
  },
  {
    title: "KinetiScan",
    description: "A pose analysis tool for rehabilitation that using computer visio to measure your range of motion.",
    techStack: ["React", "JavaScript", "Node.js", "MediaPipe", "Sass", "Chart.js", "SweetAlert2", "Multer", "JWT", "bcrypt.js"],
    link: "https://github.com/gillnim/KinetiScan",
    image: kinetiscan,
  },
  {
    title: "Autonomous Luggage Robot",
    description:
      "An autonomous robot to carry your luggage bags for safe and seameless navigation around airport",
    techStack: ["ROS2", "LiDAR", "OpenCV", "SolidWorks", "Nav2", "Shaper3D", "Machine Shop Tools", "Battery Design and Management", "Motor Driver Circuits", "PWM", "Sensor Integration", "Embedded Systems", "GPIO", "NVIDIA Jetson"],
    link: "https://drive.google.com/file/d/1cNQx4c8BpHFkC4uGkLQ-CSr-2O21qCcn/edit",
    image: travelbuddy,
  },
  {
    title: "BELL IMPACT",
    description: "Developed during a 24-hour hackathon, this project highlights Bell’s community initiatives and features a quiz page to find initiatives that fits you the best.",
    techStack: ["React", "SASS", "MySQL", "Node.js", "API", "Font API", "pagination", "HTML", "Javascript"],
    link: "https://drive.google.com/file/d/1WEJ5X7_CkX91eohfhN9GpyU35Yv7boVG/view",
    image: bell,
  },
  {
    title: "ISS Tracker",
    description: "This website tracks the current location of the international space station using an ISS API and updates it on the map plus more! ",
    techStack: ["React", "SASS", "ISS API", "HTML", "Javascript", "Leaflet", "openstreetmap"],
    link: "https://we-love-space.netlify.app/",
    image: space,
  },
  {
    title: "The Bees Knees",
    description: "This website is designed for a band The Bees Knees for community to engage and for them to update their shows.",
    techStack: ["React", "SASS", "axios", "HTML", "Javascript"],
    link: "https://the-bees-knees-band-site.netlify.app/",
    image: bandsite,
  },
  {
    title: "The Coffee Shop",
    description: "This website is designed a small coffee shop nitro",
    techStack: ["React", "CSS", "HTML"],
    link: "https://coffee-shop-nitro.netlify.app/",
    image: nitro,
  },
  {
    title: "Brain Coin",
    description: "Made in a 6 hour hackathon in a team of 3, this site features a brainstation coin tracker with currency exchanges.",
    techStack: ["React", "CSS", "HTML", "Node.js", "MySql", "Javascript"],
    link: "https://672518fcc3f86b000719671b--braincoins-2.netlify.app/top-ten",
    image: braincoin,
  },
  {
    title: "BrainFlix",
    description: "A Youtube Clone",
    techStack: ["React", "CSS", "HTML", "Node.js", "API", "Javascript"],
    link: "https://github.com/gillnim/nimrat-gill-brainflix",
    image: brainflix,
  },
  {
    title: "InStock",
    description: "InStock is a scalable Inventory Management System developed for a Fortune 500 client.",
    techStack: ["React", "CSS", "HTML", "Node.js", "API", "Javascript"],
    link: "https://github.com/gillnim/InStock_client",
    image: instock,
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div
              className="project-card__image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <ul className="project-card__tech-stack">
                {project.techStack.map((tech, idx) => (
                  <li key={idx} className="project-card__tech">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
