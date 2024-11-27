import React, { useState } from 'react';
import './SigninPage.css';

const SigninPage = ({ closeSigninModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
    <div className="modal-overlay">
        <div className="modal-content">
            <button className="close-btn" onClick={closeSigninModal}>X</button>
             <div className="signup-container">
                <div className="tab-container">
                    <button className="tab signin-tab">Sign-in</button>
                    <button className="tab signup-tab active">Sign-up</button>
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

                    <button type="submit" className="signup-button">Sign In</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SigninPage;