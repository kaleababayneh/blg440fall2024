import "./MainPage.css";
import logo from "./../photos/pana.svg";
import { useState } from "react";
import analysisIcon from "../photos/analysis.svg";
import adaptationIcon from "../photos/adaptation.svg";
import integrationIcon from "../photos/integration.svg";
import reportingIcon from "../photos/reporting.svg";

const MainPage = ({ openSignupModal, openSigninModal, goToDashboard }) => {
  return (
    <div className="main-page">
      <header className="navbar">
        <div className="logo">Financial AI</div>
        <nav className="nav-links">
          <a href="#home" onClick={goToDashboard}>
            Home
          </a>
          <a href="#features">Features</a>
          <a href="#team">Team</a>
          <a href="#resources">Resources</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn" onClick={openSigninModal}>
            Login
          </button>
          <button className="signup-btn" onClick={openSignupModal}>
            Signup
          </button>
        </div>
      </header>
      <main className="hero-section">
        <div className="hero-text">
          <h1>Empower Your Financial Future with AI-Driven Insights</h1>
        </div>
        <div className="hero-image">
          <img src={logo} alt="logo" />
        </div>
      </main>
      <section className="why-financial-ai">
        <h2>WHY FINANCIAL AI?</h2>
        <ul className="features-list">
          <li>
            The app assists users in creating and tracking budget plans. It uses
            financial data to provide insights into income, expenses, and cash
            flow, helping businesses manage their finances effectively.
          </li>
          <li>
            The app enables businesses to perform scenario analysis by
            forecasting best-case, worst-case, and likely outcomes. This helps
            companies plan for different financial conditions and make
            adjustments as needed.
          </li>
          <li>
            Employs advanced machine learning methods, including linear
            regression, decision trees, random forests, gradient boosting
            machines, neural networks, and reinforcement learning for more
            accurate cash flow predictions.
          </li>
          <li>
            The app can incorporate external economic indicators, industry
            trends, and company-specific factors to improve forecasting
            accuracy.
          </li>
          <li>
            It leverages various forecasting techniques such as straight-line
            forecasting, time series models, and AI-based models.
          </li>
        </ul>
      </section>
      <section className="how-it-works">
        <h2>HOW IT WORKS</h2>
        <div className="steps-container">
          <div className="step">
            <img src={analysisIcon} alt="Preliminary Analysis" />
            <h3>Preliminary Analysis</h3>
            <p>We analyze your company structure and operations.</p>
          </div>
          <div className="step">
            <img src={adaptationIcon} alt="Adaptation" />
            <h3>Adaptation</h3>
            <p>Data belonging to company units are matched.</p>
          </div>
          <div className="step">
            <img src={integrationIcon} alt="Installation & Integration" />
            <h3>Installation & Integration</h3>
            <p>Installation training is provided to all business units.</p>
          </div>
          <div className="step">
            <img src={reportingIcon} alt="Reporting" />
            <h3>Reporting</h3>
            <p>Check your dashboards live on your reporting screens.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
