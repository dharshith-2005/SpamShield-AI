import React from "react";
import {
  FaRobot,
  FaShieldAlt,
  FaCheckCircle,
  FaClock,
  FaFileAlt,
  FaFingerprint,
} from "react-icons/fa";

import InfoCard from "./InfoCard";
import StatCard from "./StatCard";

function PredictionCard({ prediction }) {
  if (!prediction) return null;

  const spam = prediction === "spam";

  return (
    <div className="prediction-dashboard">

      {/* Header */}

      <div className="prediction-header">

        <div className="robot">

          <FaRobot />

        </div>

        <div>

          <h1>AI Analysis Complete</h1>

          <p>Here's what we found in your email</p>

        </div>

      </div>

      <hr />

      {/* Main Section */}

      <div className="prediction-main">

        <div className="prediction-left">

          <div className={`shield ${spam ? "danger" : "safe"}`}>

            <FaShieldAlt />

          </div>

          <div>

            <h2
              style={{
                color: spam ? "#ff5b5b" : "#54e08d",
              }}
            >
              {spam ? "SPAM EMAIL" : "SAFE EMAIL"}
            </h2>

            <p>
              {spam
                ? "This email contains suspicious content."
                : "This email appears safe with no suspicious content."}
            </p>

          </div>

        </div>

        <div className="prediction-right">

          <InfoCard
            title="Risk Level"
            value={spam ? "HIGH" : "LOW"}
            color={spam ? "#ff5b5b" : "#54e08d"}
            icon={<FaShieldAlt />}
          />

          <InfoCard
            title="Status"
            value={spam ? "Detected" : "Clean"}
            color={spam ? "#ff5b5b" : "#54e08d"}
            icon={<FaCheckCircle />}
          />

        </div>

      </div>

      <hr />

      {/* Bottom Stats */}

      <div className="stats-grid">

        <StatCard
          icon={<FaClock />}
          title="Analyzed In"
          value="0.02 sec"
          subtitle="Lightning Fast"
        />

        <StatCard
          icon={<FaFileAlt />}
          title="Content Checked"
          value="99"
          subtitle="Characters"
        />

        <StatCard
          icon={<FaFingerprint />}
          title="Detection Engine"
          value="Naive Bayes"
          subtitle="SpamShield AI"
        />

      </div>

    </div>
  );
}

export default PredictionCard;