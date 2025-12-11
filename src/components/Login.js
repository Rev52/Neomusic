
import React, { useState } from "react";
<<<<<<< HEAD
import "./style/SignUp.css";
import { Link, useNavigate } from "react-router-dom"; // 1. Import useNavigate

import LogoNeomusic from "../assets/images/Logo Neomusic.png";

// Gambar-gambar logo lain (jika digunakan nanti)
import GoogleLogo from "../assets/images/Google.png";
import FacebookLogo from "../assets/images/Faacebook.png";
import AppleLogo from "../assets/images/Apple.png";
=======
import "./style/Login.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
// Import ikon mata dari react-icons/fi
import { FiEye, FiEyeOff } from "react-icons/fi"; // TAMBAHKAN INI

import LogoNeomusic from "../assets/images/Logo Neomusic.png";

// ... (Imports gambar tetap sama)
>>>>>>> 6805f18946cda19a1dbad666da431d092434df1a

export default function Login() {
  const navigate = useNavigate(); // 2. Inisialisasi navigate

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  // STATE BARU UNTUK TOGGLE PASSWORD VISIBILITY
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (!email || !password) {
        setError("Email dan password harus diisi.");
        return;
    }
    
    const storedUsers = JSON.parse(localStorage.getItem("appUsers")) || [];
    
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      const userProfile = {
          id: user.id,
          username: user.username,
          email: user.email,
          joinDate: user.joinDate
      };
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
      
      console.log("Login berhasil, navigasi ke /home");
      navigate("/home"); 

    } else {
      setError("Email atau password tidak ditemukan.");
    }
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

<<<<<<< HEAD
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
=======
          {error && <p style={{ color: 'red', margin: '10px 0', textAlign: 'center' }}>{error}</p>}

          <input
            type="text"
            name="email"
            placeholder="Email / Phone"
            value={form.email}
            onChange={handleChange}
          />

          {/* INPUT PASSWORD */}
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"} // TOGGLE TYPE
>>>>>>> 6805f18946cda19a1dbad666da431d092434df1a
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
<<<<<<< HEAD
              required
            />

            {/* Tambahkan onClick atau type submit */}
            <button className="btn-signup" type="submit">Login</button>
          </form>
=======
            />
            <span 
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>


          <button className="btn-signup" onClick={handleLogin}>
            Login
          </button>
>>>>>>> 6805f18946cda19a1dbad666da431d092434df1a

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