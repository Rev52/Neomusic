import React from "react";
import "./style/AboutSection.css";
import headset from "../assets/images/headset.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>Don’t Miss It!</h2>
          <p>
            Neo Music has been around since 2025, built with a simple and
            accessible design that makes enjoying music fast and hassle-free.
            Explore new releases, listen anytime, and discover tons of hot
            artists in just a few clicks. For an even more complete experience,
            you can unlock our premium features. Neo Music is your easy,
            friendly way to enjoy music—anywhere, anytime.
          </p>
        </div>

        <div className="about-image">
          <img src={headset} alt="Headset NeoMusic" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
