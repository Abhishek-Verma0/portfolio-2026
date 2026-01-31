import  "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">Abhishek Verma</span>
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
