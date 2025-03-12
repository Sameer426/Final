// src/components/TeamMembers.js
import React from "react";
import "./TeamMembers.css";
import sidImage from "./assets/sid.jpg";
import rajImage from "./assets/raj.jpg";
import aniImage from "./assets/ani.jpg";

const teamMembers = [
  { name: "Anirudh Srivastava", image: aniImage },
  { name: "Raj Gupta", image: rajImage },
  { name: "Siddharth Jain", image: sidImage },
];

const TeamMembers = () => {
  return (
    <div className="team-container">
      <h2 className="main-heading">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
