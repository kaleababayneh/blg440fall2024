import "./App.css";
import MainPage from "./main_page/MainPage";
import SigninPage from "./signin_signup_pages/SigninPage";
import SignupPage from "./signin_signup_pages/SignupPage";
import Dashboard from "./Dashboard/Dashboard";
import React, { useState } from "react";

const App = () => {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isSigninOpen, setSigninOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("main"); // State for page navigation

  const openSignupModal = () => setSignupOpen(true);
  const closeSignupModal = () => setSignupOpen(false);

  const openSigninModal = () => setSigninOpen(true);
  const closeSigninModal = () => setSigninOpen(false);

  // Function to navigate to Dashboard
  const goToDashboard = () => setCurrentPage("dashboard");

  // Function to navigate back to MainPage
  const goToMainPage = () => setCurrentPage("main");

  return (
    <div>
      <div
        className={`app-container ${
          isSignupOpen || isSigninOpen ? "blur" : ""
        }`}
      >
        {/* Conditional Rendering Based on Current Page */}
        {currentPage === "main" && (
          <MainPage
            openSigninModal={openSigninModal}
            openSignupModal={openSignupModal}
            goToDashboard={goToDashboard}
          />
        )}
        {currentPage === "dashboard" && (
          <Dashboard goToMainPage={goToMainPage} />
        )}
      </div>

      {/* Modals for Signin and Signup */}
      {isSigninOpen && <SigninPage closeSigninModal={closeSigninModal} />}
      {isSignupOpen && <SignupPage closeSignupModal={closeSignupModal} />}
    </div>
  );
};

export default App;
