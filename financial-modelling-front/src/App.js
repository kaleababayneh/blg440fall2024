import React, { useState } from "react";
import "./App.css";
import AppRouter from "./routers/Router";

const App = () => {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isSigninOpen, setSigninOpen] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Stores the authenticated user's data

  const openSignupModal = () => setSignupOpen(true);
  const closeSignupModal = () => setSignupOpen(false);

  const openSigninModal = () => setSigninOpen(true);
  const closeSigninModal = () => setSigninOpen(false);

  const handleLogin = (username) => {
    setUser({ name: username });
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setAuthenticated(false);
  };

  return (
    <AppRouter
      openSigninModal={openSigninModal}
      openSignupModal={openSignupModal}
      isSigninOpen={isSigninOpen}
      isSignupOpen={isSignupOpen}
      closeSigninModal={closeSigninModal}
      closeSignupModal={closeSignupModal}
      isAuthenticated={isAuthenticated}
      user={user}
      onLogin={handleLogin}
      onLogout={handleLogout}
    />
  );
};

export default App;
