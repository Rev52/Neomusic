import React from "react";
import "./style/MusicLibrary.css";

import popImg from "../assets/images/Pop song background.png";
import sadImg from "../assets/images/Sadd background.png";
import happyImg from "../assets/images/Happy vibes background.jpg";

const MusicLibrary = () => {
  const playlists = [
    {
      title: "Pop Song",
      songs: "102 songs",
      image: popImg,
    },
    {
      title: "SADD",
      songs: "234 songs",
      image: sadImg,
    },
    {
      title: "Happy Vibes",
      songs: "234 songs",
      image: happyImg,
    },
  ];

  return (
    <section className="music-library">
      <div className="library-container">
        
        <div className="library-text">
          <h1>
            Dive Into Your Own <br />
            <span>Music Library</span>
          </h1>
          <p>
            Enjoy a smooth, ad-free listening experience where your music never
            gets interrupted — explore millions of tracks anytime you want on
            NeoMusic.
          </p>
        </div>

        <div className="library-cards">
          {playlists.map((item, index) => (
            <div className="library-card" key={index}>
              <div className="card-image">
                <img src={item.image} alt={item.title} />
                <button className="play-btn">
                  ▶
                </button>
              </div>

              <h3>{item.title}</h3>
              <p className="songs-count">🎵 {item.songs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicLibrary;
