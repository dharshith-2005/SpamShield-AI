import React from "react";

function StatCard({ icon, title, value, subtitle }) {
  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div>

        <h5>{title}</h5>

        <h3>{value}</h3>

        <p>{subtitle}</p>

      </div>

    </div>
  );
}

export default StatCard;