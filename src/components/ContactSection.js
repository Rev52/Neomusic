import React from "react";
import "./style/Contact.css";
import logo from "../assets/images/Logo Neomusic.png";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-container">

        {/* LEFT - LOGO */}
        <div className="footer-brand">
          <img src={logo} alt="NeoMusic" />
        </div>

        {/* MIDDLE LINKS */}
        <div className="footer-links">

          <div className="footer-column">
            <h4>NeoMusic</h4>
            <a href="#">Explore</a>
            <a href="#">Features</a>
            <a href="#">Originals</a>
          </div>

          <div className="footer-column">
            <h4>Access</h4>
            <a href="#">Playlist</a>
            <a href="#">Albums</a>
            <a href="#">Artist</a>
            <a href="#">Music</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <a href="#">Social Media</a>
            <a href="#">Website</a>
          </div>

        </div>

        {/* RIGHT - BUTTON + ICON */}
        <div className="footer-right">
          <Link to="/signup" className="signup-btn">
            SignUp
          </Link>
        

          <p>Join us now and elevate your listening experience—no limits, no interruptions.</p>

          <div className="social-icons">
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <span>©2025 NeoMusic</span>
        <span>Cookie settings</span>
        <span>Terms and conditions</span>
        <span>Privacy policy</span>
      </div>
    </footer>
  );
};

export default ContactSection;
