import './MainPage.css';
import logo from './../photos/pana.svg';
import { useState } from 'react';

const MainPage = ({ openSignupModal, openSigninModal }) => {
    return (
        <div className="main-page">
        <header className="navbar">
            <div className="logo">Financial AI</div>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#team">Team</a>
                <a href="#resources">Resources</a>
            </nav>
            <div className="auth-buttons">
            <button className="login-btn" onClick={openSigninModal}>Login</button>
                <button className="signup-btn" onClick={openSignupModal}>Signup</button>
            </div>
        </header>
        <main className='hero-section'>
            <div className="hero-text">
                <h1>Empower Your Financial Future with AI-Driven Insights</h1>
            </div>
            <div className="hero-image">
                <img src={logo}  alt="logo" />
            </div>

        </main>
    </div>
    );
}

export default MainPage;