import React from "react";

function InfoCard({ title, value, icon, color }) {
  return (
    <div className="info-card">
      <div className="info-icon" style={{ color }}>
        {icon}
      </div>

      <h4>{title}</h4>

      <h2 style={{ color }}>
        {value}
      </h2>
    </div>
  );
}

export default InfoCard;