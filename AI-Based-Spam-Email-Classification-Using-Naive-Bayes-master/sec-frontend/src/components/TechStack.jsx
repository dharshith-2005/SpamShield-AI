import React from "react";
import {
  FaReact,
  FaPython,
  FaServer,
  FaBrain,
  FaDatabase,
} from "react-icons/fa";

function TechStack() {
  const tech = [
    {
      icon: <FaReact />,
      name: "React",
      desc: "Modern Frontend"
    },
    {
      icon: <FaServer />,
      name: "FastAPI",
      desc: "REST API Backend"
    },
    {
      icon: <FaPython />,
      name: "Python",
      desc: "Machine Learning"
    },
    {
      icon: <FaBrain />,
      name: "Naive Bayes",
      desc: "Spam Classification"
    },
    {
      icon: <FaDatabase />,
      name: "CountVectorizer",
      desc: "Text Processing"
    }
  ];

  return (
    <section className="tech-stack" id="model">

      <h2>Technology Stack</h2>

      <p className="tech-subtitle">
        Built with modern web technologies and machine learning.
      </p>

      <div className="tech-grid">

        {tech.map((item, index) => (

          <div className="tech-card" key={index}>

            <div className="tech-icon">
              {item.icon}
            </div>

            <h3>{item.name}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TechStack;