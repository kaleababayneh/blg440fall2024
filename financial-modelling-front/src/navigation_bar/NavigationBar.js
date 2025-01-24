import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import logoPath from "../photos/file.png";
import MacroEconomicDatas from "./MacroEconomicDatas";

const Navigator = ({
  openSigninModal,
  openSignupModal,
  isAuthenticated,
  user,
  onLogout,
}) => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logoPath} alt="Financial AI Logo" className="logo-image" />
          <span className="logo-text">Financial AI</span>
        </div>
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "non-active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink to="/dashboard" className="nav-item">
            Dashboard
          </NavLink>
          <NavLink to="/companies" className="nav-item">
            Companies
          </NavLink>
          <NavLink to="/scenario-analysis" className="nav-item">
            Scenario Analysis
          </NavLink>
          <NavLink to="/forecast" className="nav-item">
            Forecast
          </NavLink>
          <NavLink to="/multiple" className="nav-item">
            Upload
          </NavLink>

          {/* Updated sign in sign up condition branch  */}
          {!isAuthenticated ? (
            <div className="auth-buttons">
              <button className="signin-btn" onClick={openSigninModal}>
                Sign In
              </button>
              <button className="signup-btn" onClick={openSignupModal}>
                Sign Up
              </button>
            </div>
          ) : (
            <div className="user-info">
              <span className="username"> {user.name}</span>
              <button className="logout-btn" onClick={onLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      <MacroEconomicDatas />
    </div>
  );
};

export default Navigator;
