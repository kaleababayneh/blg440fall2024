import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import MacroEconomicDatas from "./MacroEconomicDatas";

const Navigator = ({ openSigninModal, openSignupModal }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Financial AI</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/forecast">Forecast</Link>
          <Link to="/past-decisions">Past Decisions</Link>
          <Link to="/scenario-analysis">Scenario Analysis</Link>
          <button className="signin-btn" onClick={openSigninModal}>
            Sign In
          </button>
          <button className="signup-btn" onClick={openSignupModal}>
            Sign Up
          </button>
        </div>
      </nav>
      <MacroEconomicDatas />
    </div>
  );
};

export default Navigator;
