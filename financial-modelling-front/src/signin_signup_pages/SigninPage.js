import React, { useState } from "react";
import "./SigninPage.css";
import google from "../photos/google.png";
import apple from "../photos/apple.png";

// Import the logo image
import logoPath from "../photos/file.png";

const SigninPage = ({ closeSigninModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Header with Logo and Close Button */}
        <div className="modal-header">
          <img src={logoPath} alt="Logo" className="logo-top-left" />
          <button className="close-btn" onClick={closeSigninModal}>
            X
          </button>
        </div>

        <div className="signin-container">
          {/* Tabs */}
          <div className="tab-container">
            <button className="tab signin-tab active">Sign-in</button>
            <button className="tab signup-tab">Sign-up</button>
          </div>

          {/* Sign-in Form */}
          <form className="signin-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>

          {/* Social Buttons */}
          <div className="social-buttons">
            <button className="google-signin">
              <img src={google} alt="Google Icon" />
              Sign in with Google
            </button>
            <button className="apple-signin">
              <img src={apple} alt="Apple Icon" />
              Sign in with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
