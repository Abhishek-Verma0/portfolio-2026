"use client";

import React from "react";
import "./contact.css";

export default function Contact() {
  const emailAddress = "neeleshabhishek@gmail.com";

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a query or project in mind? I'd love to hear from you. Let's
            connect and create something amazing together.
          </p>

          <a href={`mailto:${emailAddress}`} className="contact-button">
            Send Me an Email
          </a>
        </div>

        {/* Social Links Footer */}
        <div className="social-links-footer">
          <h3 className="social-title">Follow Me</h3>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/abhishek-verma-41132b22a"
              className="social-icon"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Abhishek-Verma0"
              className="social-icon"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://leetcode.com/u/Abhishek-Verma01/"
              className="social-icon"
              aria-label="LeetCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LeetCode</span>
            </a>
            <a
              href="https://www.instagram.com/_01morpheus?igsh=MTc2cHRvaGU1ZGEw"
              className="social-icon"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
