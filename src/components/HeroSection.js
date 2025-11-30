import React from "react";
import "./style/HeroSection.css";
import heroImage from "../assets/images/Hero.png"; 
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* Left image */}
        <div className="hero-left">
          <img src={heroImage} alt="Music People" className="hero-img" />
        </div>

        {/* Right content */}
        <div className="hero-right">
          <h1 className="hero-title">Music Day</h1>
          <p className="hero-subtitle">
            Enjoy music streaming with our platform, you'll have access to millions of songs
          </p>
          <Link to="/signup">
          <button className="hero-btn">Sign Up</button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
