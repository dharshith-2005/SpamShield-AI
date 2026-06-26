import React, { useState } from "react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { predictSpam } from "../services/api";
import PredictionCard from "./PredictionCard";

function EmailAnalyzer() {
  const [email, setEmail] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleAnalyze = async () => {
    if (email.trim() === "") {
      alert("Please enter an email.");
      return;
    }

    try {
      const result = await predictSpam(email);

      console.log("Backend Response:", result);

      if (result.success) {
        setPrediction(result.prediction);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("API Error:", error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Unable to connect to backend.");
    }
  };

  const handleClear = () => {
    setEmail("");
    setPrediction("");
  };

  return (
    <section className="analyzer" id="analyzer">

      <div className="analyzer-card">

        <h2>Analyze Your Email</h2>

        <p>
          Paste your email content below and let AI detect whether it is
          spam or safe.
        </p>

        <textarea
          placeholder="Paste your email content here..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="bottom-row">

          <span>{email.length} Characters</span>

          <div className="buttons">

            <button
              className="clear-btn"
              onClick={handleClear}
            >
              <FaTrash />
              &nbsp;Clear
            </button>

            <button
              className="analyze-btn"
              onClick={handleAnalyze}
            >
              <FaPaperPlane />
              &nbsp;Analyze Email
            </button>

          </div>

        </div>

        <PredictionCard prediction={prediction} />

      </div>

    </section>
  );
}

export default EmailAnalyzer;