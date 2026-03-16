"use client";
import React, { useState, useEffect } from "react";
import "./Project.css";
import TiltedCard from "../TiltedCard";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      name: "Secure-Creds",
      github: "https://github.com/Abhishek-Verma0/PETV83L-Abhishek-Verma-Secure-Credential-Manager-With-Key-Encryption",
      img: "https://ik.imagekit.io/Mr01Wick/Secure-creds.png",
      description: "Credential manager with high-level key encryption.",
      year: "2025"
    },
    {
      name: "Artsy AI",
      github: "https://github.com/Abhishek-Verma0/Artsy-AI",
      img: "https://ik.imagekit.io/Mr01Wick/Artsy.png",
      description: "AI-powered art style prediction platform`.",
      year: "2025"
    },
    {
      name: "Classic Snake",
      github: "https://github.com/Abhishek-Verma0/Snake-Game",
      img: "https://ik.imagekit.io/Mr01Wick/classic-snake.jpg",
      description: "Retro snake game built with C/C++ logic.",
      year: "2026"
    },
    {
      name: "Fitness Streak",
      github: "https://github.com/Abhishek-Verma0/Fitness-Streak-Tracker",
      img: "https://ik.imagekit.io/Mr01Wick/streak.webp",
      description: "Progress tracker for fitness goals and streaks.",
      year: "2025"
    }
  ];

  const [cardDimensions, setCardDimensions] = useState({
    width: "100%",
    height: "450px",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardDimensions({ width: "100%", height: "320px" });
      } else {
        setCardDimensions({ width: "100%", height: "450px" });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="projects-v2" id="project">
      <div className="section-container">
        <header className="projects-header">
          <div className="about-section-label">03 / PROJECT SHOWCASE</div>
          <h2 className="projects-heading">
            SELECTED <span className="text-gradient">WORKS</span>
          </h2>
        </header>
        
        <div className="projects-masonry">
          {projects.map((proj, idx) => (
            <motion.div 
              key={proj.name} 
              className="project-card-v2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
            >
              <div className="project-card-header">
                <span className="project-year">{proj.year}</span>
                <h3 className="project-name-v2">{proj.name}</h3>
              </div>
              
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link-v2">
                <TiltedCard
                  imageSrc={proj.img}
                  altText={proj.name}
                  captionText={proj.name}
                  containerHeight={cardDimensions.height}
                  containerWidth={cardDimensions.width}
                  imageHeight={cardDimensions.height}
                  imageWidth={cardDimensions.width}
                  rotateAmplitude={8}
                  scaleOnHover={1.03}
                  showTooltip={false}
                  displayOverlayContent
                  overlayContent={
                    <div className="project-card-overlay-v2">
                      <div className="project-view-btn">
                        View Project
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                      </div>
                    </div>
                  }
                />
              </a>
              
              <div className="project-card-footer">
                <p className="project-desc-v2">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
