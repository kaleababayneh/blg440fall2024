import './App.css';
import MainPage from './main_page/MainPage';
import SigninPage from './signin_signup_pages/SigninPage';
import SignupPage from './signin_signup_pages/SignupPage';
import React, { useState } from 'react';

const App = () => {
  const [isSignupOpen, setSignupOpen] = useState(false);
    const [isSigninOpen, setSigninOpen] = useState(false);

    const openSignupModal = () => setSignupOpen(true);
    const closeSignupModal = () => setSignupOpen(false);

    const openSigninModal = () => setSigninOpen(true);
    const closeSigninModal = () => setSigninOpen(false);
  return (
    <div>
      <div className={`app-container ${isSignupOpen || isSigninOpen ? 'blur' : ''}`}>
            <MainPage openSigninModal={openSigninModal} openSignupModal={openSignupModal} />
        </div>  
        {isSigninOpen && <SigninPage closeSigninModal={closeSigninModal} />}
            {isSignupOpen && <SignupPage closeSignupModal={closeSignupModal} />}
        </div>
    
  );
}

export default App;
