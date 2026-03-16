"use client";
import React from "react";
import "./contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  const emailAddress = "neeleshabhishek@gmail.com";
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-verma-41132b22a" },
    { name: "GitHub", href: "https://github.com/Abhishek-Verma0" },
    { name: "LeetCode", href: "https://leetcode.com/u/Abhishek-Verma01/" },
    { name: "Instagram", href: "https://www.instagram.com/_01morpheus?igsh=MTc2cHRvaGU1ZGEw" },
  ];

  return (
    <section className="contact-v2" id="contact">
      <div className="section-container">
        <motion.div 
          className="contact-hero"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="about-section-label">04 / DISCUSS A PROJECT</div>
          <h2 className="contact-heading">
            LET'S BUILD <br />
            <span className="text-gradient">SOMETHING GREAT</span>
          </h2>
          
          <div className="contact-cta-wrapper">
            <a href={`mailto:${emailAddress}`} className="contact-main-btn">
              GET IN TOUCH
              <div className="btn-glow"></div>
            </a>
          </div>
        </motion.div>

        <div className="contact-footer-v2">
          <div className="contact-footer-left">
            <p className="footer-status">© {currentYear} Abhishek Verma</p>
          </div>
          
          <div className="contact-footer-socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                {social.name}
              </a>
            ))}
          </div>
          
          <div className="contact-footer-right">
            <p className="footer-built">Local Time: IST (GMT+5:30)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
