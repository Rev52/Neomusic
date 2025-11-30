import React, { useEffect, useState } from "react";
import "./style/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo Neomusic.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const halfPage = document.body.scrollHeight / 2;
      if (window.scrollY > halfPage) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${isSticky ? "sticky" : "normal"}`}>
      <div className="navbar">

        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo NeoMusic" className="logo-img" />
        </div>

        {/* Menu */}
        <nav className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>


        {/* Buttons */}
        <div className="navbar-auth">
          <Link to="/login">
            <button className="nav-login">Log in</button>
          </Link>

          <Link to="/signup">
            <button className="nav-signup">Sign Up</button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
