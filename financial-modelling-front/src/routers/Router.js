// src/Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigator from "../navigation_bar/NavigationBar";
import MainPage from "../main_page/MainPage";
import SigninPage from "../signin_signup_pages/SigninPage";
import SignupPage from "../signin_signup_pages/SignupPage";
import Dashboard from "../Dashboard/Dashboard";

const AppRouter = ({
  openSigninModal,
  openSignupModal,
  isSigninOpen,
  isSignupOpen,
  closeSigninModal,
  closeSignupModal,
}) => {
  return (
    <Router>
      <div
        className={`app-container ${
          isSigninOpen || isSignupOpen ? "blur" : ""
        }`}
      >
        {/* Include Navigator */}
        <Navigator
          openSigninModal={openSigninModal}
          openSignupModal={openSignupModal}
        />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>

      {/* Modals */}
      {isSigninOpen && <SigninPage closeSigninModal={closeSigninModal} />}
      {isSignupOpen && <SignupPage closeSignupModal={closeSignupModal} />}
    </Router>
  );
};

export default AppRouter;
