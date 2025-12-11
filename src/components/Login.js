import React, { useState } from "react";
import "./style/SignUp.css";
import { Link, useNavigate } from "react-router-dom"; // 1. Import useNavigate

import LogoNeomusic from "../assets/images/Logo Neomusic.png";

// Gambar-gambar logo lain (jika digunakan nanti)
import GoogleLogo from "../assets/images/Google.png";
import FacebookLogo from "../assets/images/Faacebook.png";
import AppleLogo from "../assets/images/Apple.png";

export default function Login() {
  const navigate = useNavigate(); // 2. Inisialisasi navigate

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 3. Fungsi Login Handler
  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    
    // --- LOGIKA LOGIN (Opsional: Validasi) ---
    // Di sini biasanya Anda memanggil API ke Backend.
    // Jika sukses, baru pindah halaman.
    // Untuk prototype ini, kita langsung pindahkan saja.
    
    console.log("Login Berhasil", form);
    
    // 4. ARAHKAN KE PROFILE PAGE (Music App Anda)
    navigate('/home'); 
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

          <form onSubmit={handleLogin}> {/* Tambahkan form wrapper agar bisa enter */}
            <input
              type="text"
              name="email"
              placeholder="Email / Phone"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            {/* Tambahkan onClick atau type submit */}
            <button className="btn-signup" type="submit">Login</button>
          </form>

          <div className="signup-divider">
            <span></span>
            <span></span>
          </div>

          <p className="login-text">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>

        </div>
      </div>
    </div>
  );
}