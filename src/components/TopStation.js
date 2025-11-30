import React from "react";
import "./style/TopStation.css";

import aptImg from "../assets/images/APT.png";
import collideImg from "../assets/images/Collide.jpg";
import havanaImg from "../assets/images/Havana.png";
import justImg from "../assets/images/Just the way you are.jpg";
import loveImg from "../assets/images/Love.jpg";

const TopStation = () => {
  const stations = [
    {
      image: aptImg,
      title: "APT.",
      artist: "Bruno Mars",
    },
    {
      image: collideImg,
      title: "Collide",
      artist: "Howie Day",
    },
    {
      image: havanaImg,
      title: "Havana",
      artist: "Camila Cabello",
    },
    {
      image: justImg,
      title: "Just the Way You Are",
      artist: "Bruno Mars",
    },
    {
      image: loveImg,
      title: "Love",
      artist: "Keyshia Cole",
    },
  ];

  return (
    <section className="topstation">
      <div className="topstation-container">
        
        <h1 className="topstation-title">
          This Week’s Top Stations,
          <br />
          <span>Just For You On NeoMusic</span>
        </h1>

        <p className="topstation-desc">
          Experience seamless, ad-free streaming and explore millions of tracks on NeoMusic,
          where you can listen anytime, enjoy your favorite artists, and discover new music
          without any interruptions.
        </p>

        <div className="topstation-grid">
          {stations.map((item, index) => (
            <div className="station-card" key={index}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.artist}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopStation;
