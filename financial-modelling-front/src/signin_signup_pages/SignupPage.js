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
                </div>
            </div>
        </div>
    );
};

export default SignupPage;