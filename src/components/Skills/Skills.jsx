import React from "react";
import "./Skills.scss";
import SkillCard from "../SkillCard/SkillCard.jsx";

const Skills = () => {
  const skills = [
    {
      title: "Web Development: Frontend",
      skills: ["React", "HTML", "CSS", "JavaScript", "SASS", "Responsive Design", "TypeScript", "React Native", "TailwindCSS", "ShadCN"],
    },
    {
      title: "Web Development: Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Web APIs", "Knex", "MySQL", "OAuth", "Postman", "Firebase"],
    },
    {
      title: "Other Development Tools",
      skills: ["Git/GitHub", "Command Line", "Vite", "Jira", "Docker", "Netlify", "Render", "Figma", "Agile Development", "DOM"],
    },
    {
        title: "Other Programming Languages",
        skills: ["C++", "Python", "Java", "MATLAB"],
    },
    {
      title: "Hardware",
      skills: ["Microcontrollers", "Arduino", "Raspberry Pi", "PCB Design", "Surface Mount Soldering", "FPGAs", "Embedded Systems"],
    },
    {
      title: "Engineering",
      skills: ["SolidWorks", "ROS2", "MATLAB", "LiDAR Integration", "OpenCV"],
    },
    {
      title: "Documentation & Research",
      skills: ["Notion", "Microsoft Office Suite", "Technical Writing", "Visio", "Version Control"],
    },
    {
        title: "Soft Skills",
        skills: ["Communication", "Problem-Solving", "Adaptability", "Collaboration", "Time Management", "Creativity", "Attention to detail"],
      },
  ];

  return (
    <section className="skills">
      <h2 className="skills__title">My Skills</h2>
      <div className="skills__grid">
        {skills.map((category, index) => (
          <SkillCard key={index} title={category.title} skills={category.skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
