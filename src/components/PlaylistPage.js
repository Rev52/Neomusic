import React, { useState, useEffect, useRef } from 'react';
import './style/PlaylistPage.css'; 
import { useNavigate } from 'react-router-dom'; 

// Import Icons
import { 
  FaHome, FaSearch, FaThLarge, FaHeart, FaRegHeart, FaEllipsisH, 
  FaPause, FaStepBackward, FaStepForward, FaVolumeUp, FaPlayCircle,
  FaRandom, FaArrowDown, FaUserPlus, FaRegClock, FaTimesCircle
} from 'react-icons/fa';
import { BiLibrary } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';

import imgFirstPlaylist from '../assets/images/img_first_playlist.png';
import imgProfile from '../assets/images/img_profile.png';
import imgShapeofyou from '../assets/images/img_shapeofyou.png';
import imgSomeonelikeyou from '../assets/images/img_someonelikeyou.png';
import imgHappierthanever from '../assets/images/img_happierthanever.png';
import imgPerfect from '../assets/images/img_perfect.png';
import imgHavana from '../assets/images/img_havana.png';
import imgTopSongs from '../assets/images/img_top_song.png';
import imgLikedSongs from '../assets/images/img_liked_songs.png';
import imgIYah from '../assets/images/img_iyah.png';

const LikeButton = ({ active }) => {
  const [liked, setLiked] = useState(active || false);
  return (
    <div className="heart-btn-wrapper" onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}>
      {liked ? <FaHeart style={{ color: '#ff4d4d', fontSize: '16px' }} /> : <FaRegHeart style={{ color: '#d1d1d1', fontSize: '16px' }} />}
    </div>
  );
};

const PlaylistPage = ({ onPlay }) => {
  const navigate = useNavigate();
  // --- STATE & REFS ---
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- DATA DUMMY ---
  const recentSearches = [
    { id: 1, 
        title: "APT.", 
        artist: "Bruno Mars", 
        img: "https://i.scdn.co/image/ab67616d0000b27359998651c62180572b8d0023" 
    },
    { id: 2, 
        title: "Die With A Smile", 
        artist: "Bruno Mars", 
        img: "https://i.scdn.co/image/ab67616d0000b273c52e1858348b61cb81c3b174" 
    },
    { id: 3, 
        title: "Havana", 
        artist: "Camila Cabello", 
        img: "https://i.scdn.co/image/ab67616d0000b273d40a233306859341492d5394" 
    },
    { id: 4, 
        title: "About You", 
        artist: "The 1975", 
        img: "https://i.scdn.co/image/ab67616d0000b2738676c8c4995c8c50409a89b7" 
    },
    { id: 5, 
        title: "Love Yourself", 
        artist: "Justin Bieber", 
        img: "https://i.scdn.co/image/ab67616d0000b27321831846c4f34608c0282b82" 
    },
    { id: 6, 
        title: "Starboy", 
        artist: "The Weeknd", 
        img: "https://i.scdn.co/image/ab67616d0000b2734718e28d24527d9774635515" 
    },
    { id: 7, 
        title: "Anti-Hero", 
        artist: "Taylor Swift", 
        img: "https://i.scdn.co/image/ab67616d0000b273bb5455336db01991f2f68157" 
    },
  ];

  const playlistData = {
    title: "The First Playlist",
    type: "Public Playlist",
    owner: "Jane Doe",
    totalSongs: "12 songs",
    cover: imgFirstPlaylist, 
    ownerImg: imgProfile
  };

  const playlistTracks = [
    { id: 1, 
        title: "Shape of You", 
        artist: "Ed Sheeran", 
        album: "Divide", 
        date: "Mar, 18 2025", 
        duration: "3:53", 
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: imgShapeofyou 
    },
    { id: 2, 
        title: "Someone Like You", 
        artist: "Adele", 
        album: "21", 
        date: "Mar, 18 2025", 
        duration: "4:45", 
        img: imgSomeonelikeyou
    },
    { id: 3, 
        title: "Happier than ever", 
        artist: "Billie Eilish", 
        album: "Happier Than Ever", 
        date: "Mar, 18 2025", 
        duration: "4:58", 
        img: imgHappierthanever
    },
    { id: 4, 
        title: "Perfect", 
        artist: "Ed Sheeran", 
        album: "Divide", 
        date: "Mar, 18 2025", 
        duration: "4:23", 
        img: imgPerfect
    },
    { id: 5, 
        title: "Havana", 
        artist: "Camila Cabello", 
        album: "Camila", 
        date: "Mar, 18 2025", 
        duration: "3:36", 
        img: imgHavana 
    },
  ];

  // Tambahkan properti 'path' untuk menentukan tujuan halaman
const libraryItems = [
  { 
    id: 1, 
    title: "Liked Songs", 
    type: "Playlist · 2 songs", 
    img: imgLikedSongs, // Pastikan variabel import gambarnya sesuai di file masing-masing
    special: true,
    path: "/liked"  // <--- Ke LikedSongsPage
  },
  { 
    id: 2, 
    title: "Top Songs - Global", 
    type: "Playlist · 2 songs", 
    img: imgTopSongs,
    path: "/top"    // <--- Ke TopSongsPage
  },
  { 
    id: 3, 
    title: "The First Playlist", 
    type: "Album · H.O.T", 
    img: imgFirstPlaylist,
    path: "/playlist" // <--- Ke PlaylistPage
  },
  { 
    id: 4, 
    title: "Iyah! - The 4th Album", 
    type: "Playlist · 24 songs", 
    img: imgIYah,
    path: "/iyah"     // <--- Ke IyahPage
  }
];

  return (
    <div className="app-container-playlist">
      
      {/* --- SIDEBAR KIRI --- */}
      <aside className="sidebar-left">
        <div className="nav-menu">
           <div 
              className="nav-item" 
              onClick={() => navigate('/home')}  /* <--- TAMBAHKAN INI */
              style={{ cursor: "pointer" }}      /* <--- TAMBAHKAN INI */
            >
              <FaHome /> Home
            </div>
          <div className="nav-item"><FaSearch /> Search</div>
          <div className="nav-item"><FaThLarge /> Explore</div>
        </div>
        <div className="library-menu">
          <div className="library-header">
            <span className="lib-title"><BiLibrary /> Your Library</span>
            <FaSearch className="lib-search-icon" />
          </div>
          <div className="tags">
            <span className="tag active">Playlist</span>
            <span className="tag">Albums</span>
            <span className="tag">Artist</span>
          </div>
          <div className="playlist-list">
  {libraryItems.map((item) => (
    <div 
      className="playlist-item" 
      key={item.id}
      // TAMBAHKAN ONCLICK INI:
      onClick={() => navigate(item.path)}
    >
      <img src={item.img} alt={item.title} className="playlist-cover" />
      <div className="playlist-info">
        {/* Logic warna ungu (sesuaikan jika di file Top/Liked/Iyah sudah ada logic ini) */}
        <h4 style={{ color: item.special ? '#a78bfa' : 'white' }}>{item.title}</h4>
        <p>{item.type}</p>
      </div>
    </div>
  ))}
</div>
          <button className="new-playlist-btn">+ New Playlist</button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="main-content playlist-content">
        <div className="playlist-top-bar">
          <div className="search-pill" ref={searchRef}>
            <FaSearch className="search-icon-input" />
            <input 
              type="text" 
              placeholder="Search by artist, songs or albums"
              onFocus={() => setIsSearchOpen(true)}
            />
            {isSearchOpen && (
              <div className="search-popup">
                <div className="search-popup-header">
                  <h3>Recent Searches</h3>
                  <button className="clear-search-btn">Clear All</button>
                </div>
                <div className="search-results-list">
                  {recentSearches.map((item) => (
                    <div className="search-item" key={item.id}>
                      <img src={item.img} alt={item.title} className="search-item-img" />
                      <div className="search-item-info">
                        <span className="search-item-title">{item.title}</span>
                        <span className="search-item-artist">{item.artist}</span>
                      </div>
                      <FaTimesCircle className="remove-history-icon" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
           <div className="top-icons">
              <div className="icon-circle"><FaVolumeUp/></div>
              <div className="icon-circle user-circle" 
              onClick={() => navigate('/profile')}
              style={{ cursor: 'pointer' }} /* Pastikan kursor berubah jadi jari */
              title="Back to Profile">
              <img src={imgProfile} alt="Profile" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
              </div>
            </div>
        </div>

        <div className="playlist-header">
          <img src={playlistData.cover} alt="Cover" className="main-cover-img" />
          <div className="header-text">
             <span className="label-public">{playlistData.type}</span>
             <h1 className="title-large">{playlistData.title}</h1>
             <div className="meta-row">
                <img src={playlistData.ownerImg} alt="User" className="user-avatar-mini" />
                <span className="owner-name">{playlistData.owner}</span>
                <span className="dot">•</span>
                <span className="songs-count">{playlistData.totalSongs}</span>
             </div>
          </div>
        </div>

        <div className="action-buttons-row">
          <div className="play-btn-large">
             <FaPlayCircle />
          </div>
          <div className="action-icons">
            <FaRandom />
            <FaArrowDown />
            <FaUserPlus />
            <FaEllipsisH />
          </div>
        </div>

        <div className="tracks-table">
          <div className="table-head">
            <div className="th-hash">#</div>
            <div className="th-title">Title</div>
            <div className="th-artist">Artist</div>
            <div className="th-date">Date added</div>
            <div className="th-time"><FaRegClock /></div>
          </div>
          <div className="divider-line"></div>
          {playlistTracks.map((track, index) => (
            <div 
              className="track-item" 
              key={track.id}
              // SAAT DIKLIK, PANGGIL FUNGSI DARI APP.JS
              onClick={() => onPlay(track)} 
            >
              <div className="td-hash">
                  <span className="num">{index + 1}</span>
                  {/* Ikon Play kecil saat hover */}
                  <FaPlayCircle className="hover-play" /> 
              </div>
              
              {/* Klik gambar juga bisa trigger play */}
              <div className="td-title">
                <img src={track.img} alt="art" className="track-art" />
                <div className="track-meta-text">
                   <span className="track-name-bold">{track.title}</span>
                </div>
              </div>
              {/* ... sisa kolom ... */}
            </div>
          ))}
        </div>
      </main>

      <footer className="footer-player">
      </footer>
    </div>
  );
};

export default PlaylistPage;