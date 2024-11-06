import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = ({ closeSignupModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={closeSignupModal}>X</button>
        <div className="signup-container">
            <div className="tab-container">
                <button className="tab signin-tab">Sign In</button>
                <button className="tab signup-tab active">Sign Up</button>
            </div>
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

                <label>Password Confirm</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit" className="signup-button">Sign Up</button>
            </form>

            <div className="social-buttons">
                <button className="google-button">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google icon" /> */}
                    Sign in with Google
                </button>
                <button className="itu-button">Sign in with ITU Mail</button>
                <button className="apple-button">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple icon" /> */}
                    Sign In with Apple
                </button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default SignupPage;
