"use client"
import "./navbar.css";
import GradientText from "../GradientText";
export default function Navbar() {
  return (
    <nav className="navbar">


      
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#skill" className="nav-link">
          Skills
        </a>
        <a href="#project" className="nav-link">
          Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      
    </nav>
  );
}
