import React from "react";
import {
  FaShieldAlt,
  FaBolt,
  FaBrain,
  FaChartLine
} from "react-icons/fa";

function Features() {

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Secure Detection",
      desc: "Classifies emails as spam or safe using Machine Learning."
    },
    {
      icon: <FaBolt />,
      title: "Fast Prediction",
      desc: "Instant email analysis powered by FastAPI."
    },
    {
      icon: <FaBrain />,
      title: "AI Powered",
      desc: "Built using Multinomial Naive Bayes and CountVectorizer."
    },
    {
      icon: <FaChartLine />,
      title: "High Accuracy",
      desc: "Trained on real email datasets for reliable prediction."
    }
  ];

  return (
    <section className="features" id="features">

      <h2>Why Choose SpamShield AI?</h2>

      <p className="feature-subtitle">
        Powerful AI-driven email protection with speed, security and accuracy.
      </p>

      <div className="feature-grid">

        {features.map((item, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;