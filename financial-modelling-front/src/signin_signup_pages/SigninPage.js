import React, { useState } from "react";
import "./SigninPage.css";
import logoPath from "../photos/file.png";

const SigninPage = ({ closeSigninModal, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = email.split("@")[0]; // Extract username from email
    onLogin(username); // Pass username to onLogin
    closeSigninModal(); // Close the modal after signing in
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <img src={logoPath} alt="Logo" className="logo-top-left" />
          <button className="close-btn" onClick={closeSigninModal}>
            X
          </button>
        </div>
        <div className="signin-container">
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
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
