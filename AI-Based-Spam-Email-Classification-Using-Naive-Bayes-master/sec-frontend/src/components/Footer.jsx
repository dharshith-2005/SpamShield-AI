import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaShieldAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-logo">
        <FaShieldAlt />
        <h2>SpamShield AI</h2>
      </div>

      <p>
        AI-powered spam email detection built using React, FastAPI and
        Machine Learning.
      </p>

      <div className="footer-icons">

        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:your@email.com">
          <FaEnvelope />
        </a>

      </div>

      <hr />

      <p className="copyright">
        © 2026 SpamShield AI. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;