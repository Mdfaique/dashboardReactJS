import React from "react";
import AdminLinks from "../adminLinks";
import './style.css'

export const AdminArea = () => {
  return (
    <div className="Admin-area">
      <div className="Admin-top">
        <div className="Admin-top-text">DashBoard</div>
        <div>👤</div>
      </div>
      <div className="Admin-middle">
        <h1>Welcome to Zenith Holidays</h1>
        <h5>A place to generate trips, stories, and more</h5>
      </div>
      <div className="Admin-bottom">
        <AdminLinks icon="🏢" title="Companies" />
        <AdminLinks icon="✈️" title="Trips" />
        <AdminLinks icon="💸" title="Expense Manager" />
        <AdminLinks icon="📝" title="Documents" />
      </div>
    </div>
  );
};
