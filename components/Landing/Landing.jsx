"use client";
import React from "react";
import "./landing.css";
import TextType from "../TextType";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <section className="hero">
      {/* Background Typography */}
      <div className="hero-bg-text">ABHISHEK</div>

      <div className="section-container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <small className="hero-eyebrow">Digital Craftsman</small>
            <h1 className="hero-title">
              ABHISHEK <br /> 
              <span className="hero-title-hollow">VERMA</span>
            </h1>
          </motion.div>

          <motion.div 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <TextType
              text={[
                "Full-Stack Architect",
                "Machine Learning Enthusiast",
                "Problem Solver",
              ]}
              typingSpeed={60}
              pauseDuration={2000}
              showCursor
              cursorCharacter="_"
              deletingSpeed={30}
              loop={true}
            />
          </motion.div>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Crafting high-performance digital experiences where 
            aesthetics meet engineering. Based in India, working globally.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="#project" className="btn-premium">
              Explore Projects
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            <a href="/cv.pdf" download className="btn-outline-premium">
              Download CV
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-orbit-container">
            {/* The "Saturn Ring" */}
            <div className="hero-orbit-ring ring-1"></div>
            <div className="hero-orbit-ring ring-2"></div>
            
            <div className="hero-avatar-frame">
              <img 
                src="https://ik.imagekit.io/Mr01Wick/Profile.jpg" 
                alt="Abhishek Verma" 
                className="hero-avatar-img"
              />
              <div className="hero-avatar-glow"></div>
            </div>

            {/* Floating Tech Orbs - Enriched */}
            <div className="floating-badge badge-1">React</div>
            <div className="floating-badge badge-2">Node</div>
            <div className="floating-badge badge-3">Py</div>
            <div className="floating-badge badge-4">Next.js</div>
            <div className="floating-badge badge-5">Tailwind</div>
            <div className="floating-badge badge-6">SQL</div>
            <div className="floating-badge badge-7">Framer</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="hero-scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;
