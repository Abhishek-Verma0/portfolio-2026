"use client";
import React from "react";
import "./Skill.css";
import { motion } from "framer-motion";

const Skill = () => {
  const skills = {
    "Languages & Core": ["C / C++", "Python", "JavaScript", "SDL Graphics"],
    "Front-End": ["ReactJs", "Next.js", "Tailwind", "Framer Motion"],
    "Back-End": ["NodeJs", "Express", "MongoDB", "SQL"],
    "AI & Data": ["Python", "TensorFlow", "Pandas", "NumPy"],
  };

  return (
    <section id="skill" className="skills-v2">
      <div className="section-container">
        <header className="skills-header">
          <div className="about-section-label">02 / EXPERTISE</div>
          <h2 className="skills-heading">
            TECHNICAL <span className="text-gradient">CAPABILITIES</span>
          </h2>
        </header>

        <div className="skills-grid-v2">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              className="holographic-card skill-card-v2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
            >
              <h3 className="skill-cat-title">{category}</h3>
              <div className="skill-item-row">
                {items.map((skill, i) => (
                  <span key={i} className="skill-item-badge">
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Subtle mesh localized to card */}
              <div className="skill-card-mesh"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
