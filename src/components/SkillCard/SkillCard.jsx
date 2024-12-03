import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ title, skills }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-card__title">{title}</h3>
      <ul className="skill-card__list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-card__item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
