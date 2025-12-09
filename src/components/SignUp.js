import React, { useState } from "react";
import "./style/SignUp.css";
import { Link } from "react-router-dom";

import LogoNeomusic from "../assets/images/Logo Neomusic.png";

import GoogleLogo from "../assets/images/Google.png";
import FacebookLogo from "../assets/images/Faacebook.png";
import AppleLogo from "../assets/images/Apple.png";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
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

          <h2>SIGN UP</h2>
          <p>Just some details to get you in!</p>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
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

          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            value={form.confirm}
            onChange={handleChange}
          />

          <button className="btn-signup">Signup</button>

          <div className="signup-divider">
            <span></span>
            <span></span>
          </div>

          <p className="login-text">
            Already Registered? <Link to="/login">Login</Link>
          </p>

        </div>
      </div>
    </div>
  );
}
