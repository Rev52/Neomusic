import React from "react";
import "./style/TopArtist.css";

import artist1 from "../assets/images/Baskara.jpg";
import artist2 from "../assets/images/camilla cabello.jpg";
import artist3 from "../assets/images/howie day.jpg";
import artist4 from "../assets/images/Keyshia.jpg";
import bruno from "../assets/images/bruno mars.png";

const TopArtist = () => {
  return (
    <section className="topartist-section">
      <div className="topartist-container">

        {/* LEFT CONTENT */}
        <div className="topartist-left">
          <h1>Top <span>Artists</span></h1>
          <p>
            Explore today’s most talked-about artists and keep your music
            collection fresh with our handpicked lineup of rising talents,
            hit-makers, and iconic performers. From newcomers to industry
            favorites, everything you need is right here.
          </p>

          <div className="artist-row">
            <img src={artist1} alt="artist" />
            <img src={artist2} alt="artist" />
            <img src={artist3} alt="artist" />
            <img src={artist4} alt="artist" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="topartist-right">
          <img src={bruno} alt="main artist" />
        </div>

      </div>
    </section>
  );
};

export default TopArtist;
