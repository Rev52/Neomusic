import React, { useState } from "react";
import "./style/LoginAdmin.css";

import logo from "../assets/images/Logo Neomusic.png";

const LoginAdmin = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="admin-page">
      {/* HEADER */}
      <div className="admin-header">
        <img src={logo} alt="Logo" className="admin-logo" />
        <button
          className="header-login-btn"
          onClick={() => setShowLogin(true)}
        >
          Log in
        </button>
      </div>

      {/* HERO CONTENT */}
      <div className="admin-hero">
        <h1>Update Music</h1>
        <p>
          Latest music updates to add to the more enjoyable user experience,
          varied songs add new color to every activity
        </p>

        <button
          className="hero-login-btn"
          onClick={() => setShowLogin(true)}
        >
          Log In
        </button>
      </div>

      {/* LOGIN POPUP */}
      {showLogin && (
        <div className="login-overlay" onClick={() => setShowLogin(false)}>
          <div
            className="login-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>LOG IN</h2>
            <p>Complete below to proceed to the home page</p>

            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="ID Admin" />

            <button className="popup-login-btn">Log In</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginAdmin;

