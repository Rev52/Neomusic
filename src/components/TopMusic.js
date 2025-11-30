import React from "react";
import "./style/TopMusic.css";

import apt from "../assets/images/APT.png";
import dieWithASmile from "../assets/images/die with a smile.png";
import havana from "../assets/images/Havana.png";
import collide from "../assets/images/Collide.jpg";
import aboutYou from "../assets/images/about you.jpg";
import love from "../assets/images/Love.jpg";
import iLoveYou from "../assets/images/i love you.jpg";
import lose from "../assets/images/lose.jpg";
import JustTheWay from "../assets/images/Just the way you are.jpg";

const TopMusic = () => {
  return (
    <div className="topmusic-root">
      <div className="container">

        {/* SIDEBAR */}
        <div className="sidebar">
          <h3 className="sidebar-title">Recently Played</h3>
          <ul className="recent-list">
            {[
              { img: apt, title: "APT.", artist: "Bruno Mars" },
              { img: dieWithASmile, title: "Die With a Smile", artist: "Bruno Mars" },
              { img: havana, title: "Havana", artist: "Camila Cabello" },
              { img: collide, title: "Collide", artist: "Howie Day" },
              { img: aboutYou, title: "About You", artist: "The 1975" },
              { img: love, title: "Love", artist: "Keyshia Cole" },
              { img: iLoveYou, title: "i <3 u", artist: "Boy Pablo" },
              { img: lose, title: "Lose", artist: "NIKI" },
            ].map((song, i) => (
              <li key={i} className="recent-item">
                <div className="thumb">
                  <img src={song.img} alt={song.title} />
                </div>
                <div className="meta">
                  <p className="song-title">{song.title}</p>
                  <p className="song-artist">{song.artist}</p>
                </div>
                <span className="heart">♡</span>
              </li>
            ))}
          </ul>
        </div>

        {/* MAIN CONTENT */}
        <div className="main-content">
          <h1 className="title">Top Music</h1>
          <p className="subtitle">
            Discover the biggest hits and top-charting artists dominating the music
            scene. Keep your playlist fresh with our curated selection of trending
            songs, breakthrough performers, and world-class musicians — all in one place.
          </p>

          {/* ALBUMS */}
          <div className="albums">
            {[apt, dieWithASmile, JustTheWay].map((img, i) => (
              <div className="album-card" key={i}>
                <div className="album-art">
                  <img src={img} alt="" />
                </div>
                <p className="album-title">
                  {i === 0 ? "APT." : i === 1 ? "Die With a Smile" : "Just the Way You Are"}
                </p>
                <p className="album-artist">Bruno Mars</p>
              </div>
            ))}
          </div>

          {/* PLAYER BAR */}
          <div className="player-bar">
            <div className="player-left">
              <div className="player-thumb">
                <img src={dieWithASmile} alt="playing" />
              </div>
              <div className="player-meta">
                <p className="player-title">Die With a Smile</p>
                <p className="player-artist">Bruno Mars</p>
              </div>
            </div>

            <div className="controls">
              <button className="ctrl">⏮</button>
              <button className="ctrl play">▶</button>
              <button className="ctrl">⏭</button>
            </div>

            <div className="progress">
              <span className="time">0:10</span>
              <div className="bar"><div className="bar-fill"></div></div>
              <span className="time">3:24</span>
            </div>

            <button className="menu">☰</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopMusic;