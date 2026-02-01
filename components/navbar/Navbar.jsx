import "./navbar.css";
import GradientText from "../GradientText";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
          >
            Abhishek Verma
          </GradientText>
        </span>
      </div>

      <div className="nav-right">
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
      </div>
    </nav>
  );
}
