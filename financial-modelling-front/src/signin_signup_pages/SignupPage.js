import React, { useState } from "react";
import "./SignupPage.css";
import logoPath from "../photos/file.png";

const SignupPage = ({ closeSignupModal, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const username = email.split("@")[0]; // Extract username from email
      onLogin(username); // Pass username to onLogin
      closeSignupModal(); // Close the modal after signing up
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <img src={logoPath} alt="Logo" className="logo-top-left" />
          <button className="close-btn" onClick={closeSignupModal}>
            X
          </button>
        </div>
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleSubmit}>
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
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
