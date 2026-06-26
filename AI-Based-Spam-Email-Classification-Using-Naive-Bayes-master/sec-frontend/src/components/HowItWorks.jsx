import React from "react";
import {
  FaPaste,
  FaBrain,
  FaSearch,
  FaCheckCircle,
} from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how-section" id="how">

      <h2>How It Works</h2>

      <p className="how-subtitle">
        Analyze any email in four simple steps.
      </p>

      <div className="how-grid">

        <div className="how-card">
          <div className="step">1</div>
          <FaPaste />
          <h3>Paste Email</h3>
          <p>Copy and paste the email content into the analyzer.</p>
        </div>

        <div className="how-card">
          <div className="step">2</div>
          <FaSearch />
          <h3>Feature Extraction</h3>
          <p>CountVectorizer converts the email into numerical features.</p>
        </div>

        <div className="how-card">
          <div className="step">3</div>
          <FaBrain />
          <h3>AI Prediction</h3>
          <p>The Multinomial Naive Bayes model predicts spam or safe.</p>
        </div>

        <div className="how-card">
          <div className="step">4</div>
          <FaCheckCircle />
          <h3>View Result</h3>
          <p>Instantly see whether the email is spam or legitimate.</p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;