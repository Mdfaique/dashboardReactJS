import React, { useState } from "react";
import "./style.css";
import Navlinks from "../navlinks";

export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className="Main-container">
      <h1 className="Sidebar-title">Zenith Holidays</h1>
      <div className="Sidebar-nav-links">
        <Navlinks
          icon="📊"
          title="DashBoard"
          class="dashboard"
          className1="Nav-links"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <Navlinks
          icon="🏢"
          title="Companies"
          class="companies"
          className1="Nav-links"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <Navlinks
          icon="✈️"
          title="Trips"
          class="trips"
          className1="Nav-links"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <Navlinks
          icon="💸"
          title="Expense Manager"
          class="expense"
          className1="Nav-links"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <Navlinks
          icon="📝"
          title="Documents"
          class="documents"
          className1="Nav-links"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      </div>
    </div>
  );
};
