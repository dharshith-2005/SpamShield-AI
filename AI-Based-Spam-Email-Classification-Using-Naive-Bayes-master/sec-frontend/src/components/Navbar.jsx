import { FaShieldAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}

      <div className="logo">
        <FaShieldAlt className="logo-icon" />
        <h2>SpamShield AI</h2>
      </div>

      {/* Navigation */}

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#features">Features</a>
        </li>

        <li>
          <a href="#model">AI Model</a>
        </li>

        <li>
          <a href="#how">How It Works</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      {/* Button */}

      <a href="#analyzer" className="nav-btn">
        Analyze Now
      </a>

    </nav>
  );
}

export default Navbar;