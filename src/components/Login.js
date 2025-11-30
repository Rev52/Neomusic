import React, { useState } from "react";
import "./style/SignUp.css";
import { Link } from "react-router-dom";

import LogoNeomusic from "../assets/images/Logo Neomusic.png";

import GoogleLogo from "../assets/images/Google.png";
import FacebookLogo from "../assets/images/Faacebook.png";
import AppleLogo from "../assets/images/Apple.png";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      {/* LEFT */}
      <div className="signup-left">
        <div className="signup-logo">
          <img src={LogoNeomusic} alt="logo" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="signup-right">
        <div className="signup-card">

          <h2>LOGIN</h2>
          <p>Welcome back!</p>

          <input
            type="text"
            name="email"
            placeholder="Email / Phone"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button className="btn-signup">Login</button>

          <div className="signup-divider">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>

          <div className="social-icons">
            <img className="icon-btn" src={GoogleLogo} alt="Google" />
            <img className="icon-btn" src={FacebookLogo} alt="Facebook" />
            <img className="icon-btn" src={AppleLogo} alt="Apple" />
          </div>

          <p className="login-text">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>

        </div>
      </div>
    </div>
  );
}
