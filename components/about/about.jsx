"use client";
import React from "react";
import "./about.css";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Experince", value: "2+" },
    { label: "Projects", value: "12+" },
    { label: "Hours", value: "2k+" },
  ];

  return (
    <section className="about-v2" id="about">
      <div className="section-container">
        <div className="about-grid">
          
          <motion.div 
            className="about-visual-side"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-section-label">01 / WHO I AM</div>
            <div className="about-image-wrapper holographic-card">
              <img 
                src="https://ik.imagekit.io/Mr01Wick/Profile.jpg" 
                alt="Abhishek Verma" 
                className="about-profile-img"
              />
            </div>
          </motion.div>

         
          <motion.div 
            className="about-content-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-heading">
              CRAFTING EXPERIENCE <br />
              <span className="text-gradient">NOT JUST CODE</span>
            </h2>

            <div className="about-text-content">
              <p>
                I am a multidisciplinary developer focused on the intersection of 
                <strong> Machine Learning</strong> and <strong>Modern Web Technologies</strong>.
                My approach is rooted in the belief that software should be as 
                beautiful as it is functional.
              </p>
              <p>
                Currently based in India, I've spent the last 2 years honing my 
                skills across the full stack—from building resilient backend 
                architectures to designing immersive, high-conversion frontends.
              </p>
            </div>

            <div className="about-stat-bar">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-node">
                  <div className="stat-val">{stat.value}</div>
                  <div className="stat-name">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="about-actions">
              <a href="#skill" className="btn-outline-premium small">Explore Technical Stack</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
