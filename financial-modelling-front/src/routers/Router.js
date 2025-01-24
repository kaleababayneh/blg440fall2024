import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigator from "../navigation_bar/NavigationBar";
import MainPage from "../main_page/MainPage";
import SigninPage from "../signin_signup_pages/SigninPage";
import SignupPage from "../signin_signup_pages/SignupPage";
import Dashboard from "../Dashboard/Dashboard";
import Upload from "../upload_page/UploadPage";
import Forecast from "../forecast_page/Forecast";
import ScenarioAnalysis from "../ScenarioAnalysis/ScenarioAnalysis";
import CompaniesPage from "../companies_page/CompaniesPage";
import MultiplePage from "../multiple_page/MultiplePage"; // Import MultiplePage
import AddManuallyPage from "../multiple_page/AddManuallyPage";

const AppRouter = ({
  openSigninModal,
  openSignupModal,
  isSigninOpen,
  isSignupOpen,
  closeSigninModal,
  closeSignupModal,
  isAuthenticated,
  user,
  onLogin,
  onLogout,
}) => {
  return (
    <Router>
      <div
        className={`app-container ${
          isSigninOpen || isSignupOpen ? "blur" : ""
        }`}
      >
        <Navigator
          openSigninModal={openSigninModal}
          openSignupModal={openSignupModal}
          isAuthenticated={isAuthenticated}
          user={user}
          onLogout={onLogout}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                openSigninModal={openSigninModal}
                openSignupModal={openSignupModal}
                isAuthenticated={isAuthenticated}
                user={user}
                onLogout={onLogout}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/scenario-analysis" element={<ScenarioAnalysis />} />
          <Route path="/multiple" element={<MultiplePage />} />
          <Route path="/add-manually" element={<AddManuallyPage />} />
        </Routes>
      </div>
      {isSigninOpen && (
        <SigninPage closeSigninModal={closeSigninModal} onLogin={onLogin} />
      )}
      {isSignupOpen && (
        <SignupPage closeSignupModal={closeSignupModal} onLogin={onLogin} />
      )}
    </Router>
  );
};

export default AppRouter;
