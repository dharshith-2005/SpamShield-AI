import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Left Side */}
      <div className="hero-left">

        <div className="badge">
          <FaShieldAlt />
          <span>Advanced ML Model • 95%+ Accuracy</span>
        </div>

        <h1>
          AI Spam Email <br />
          <span>Classifier</span>
        </h1>

        <p>
          Detect spam, phishing, and malicious emails instantly using
          Machine Learning and FastAPI. Experience lightning-fast,
          AI-powered email protection with high accuracy.
        </p>

        <div className="hero-buttons">

          {/* Analyze Button */}
          <button
            className="hero-btn"
            onClick={() =>
              document
                .getElementById("analyzer")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Analyze Email
            <FaArrowRight />
          </button>

          {/* Learn More */}
          <button
            className="secondary-btn"
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>

        </div>

      </div>

      {/* Right Side */}
      <motion.div
        className="hero-right"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, 0, -2, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >

        <div className="mail-card">

          <div className="mail-icon">
            <MdOutlineMarkEmailRead />
          </div>

          <h3>Spam Detection</h3>

          <p>Machine Learning Model</p>

          <div className="status">
            <span className="dot"></span>
            Model Ready
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;