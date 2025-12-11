import React, { useRef, useState, useEffect } from "react";
import "./style/Home.css";
import { FiHome, FiSearch, FiGrid } from "react-icons/fi";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import navigasi
import { FaVolumeUp } from "react-icons/fa"; // Import ikon volume

/* ---- IMAGES ---- */
import aptImg from "../assets/images/APT.png";
import dieImg from "../assets/images/die with a smile.png";
import havanaImg from "../assets/images/Havana.png";
import collideImg from "../assets/images/Collide.jpg";
import aboutYouImg from "../assets/images/about you.jpg";
import loveImg from "../assets/images/Love.jpg";
import iHeartImg from "../assets/images/i heart you.jpg";
import loseImg from "../assets/images/lose.jpg";
import likedsongimg from "../assets/images/liked_songs.png";
import topsongimg from "../assets/images/top_songs.png";
import firstplaylistImg from "../assets/images/the_first_playlist.jpg";
import iyahImg from "../assets/images/iyah.jpg";
import BrunoImg from "../assets/images/bruno_mars.jpg";
import CamillaImg from "../assets/images/camilla cabello.jpg";
import HowieImg from "../assets/images/howie day.jpg";
import KeyshiaImg from "../assets/images/Keyshia.jpg";
import TopArtist5Img from "../assets/images/top artist 5.jpg";
import Ariana2Img from "../assets/images/ariana_grande2.jpg";
import PassengerImg from "../assets/images/passenger.jpg";
import BaskaraImg from "../assets/images/Baskara.jpg";
import ElihawsonImg from "../assets/images/eli_hawson.jpg";
import MattyImg from "../assets/images/matty.jpg";
import NikiImg from "../assets/images/niki.jpg";
import TaylorImg from "../assets/images/taylor swift.jpg";
import EdSheeranImg from "../assets/images/ed sheeran.jpg";
import CharlieImg from "../assets/images/charlie puth.jpg";
import BillieImg from "../assets/images/billie eilish.jpg";
import JustImg from "../assets/images/Just the way you are.jpg";
import LockedtImg from "../assets/images/Locked out.jpg";
import OrdinaryImg from "../assets/images/ordinary.jpg";
import ShapeofyouImg from "../assets/images/shape of you.jpg";
import BlindingImg from "../assets/images/blinding light.jpg";
import SomeonelikeyouImg from "../assets/images/someone like you.jpg";
import PerfectImg from "../assets/images/perfect.jpg";
import HappierImg from "../assets/images/happier than ever.jpg";
import UndressedImg from "../assets/images/undressed.jpeg"; 
import ProfileImg from "../assets/images/img_profile.png";

import undressedAudio from "../assets/audio/undressed.mp3";
import ordinaryAudio from "../assets/audio/ordinary.mp3";

/* ---- AUDIO ---- */
import aptAudio from "../assets/audio/apt.mp3";
import dieAudio from "../assets/audio/die_with_a_smile.mp3";
import havanaAudio from "../assets/audio/havana.mp3";
import collideAudio from "../assets/audio/collide.mp3";
import aboutYouAudio from "../assets/audio/about.mp3";
import loveAudio from "../assets/audio/love.mp3";
import iHeartAudio from "../assets/audio/i3.mp3";
import loseAudio from "../assets/audio/lose.mp3";
import justAudio from "../assets/audio/just_the_way.mp3";
import lockedAudio from "../assets/audio/locked_out.mp3";
import someonelikeyouAudio from "../assets/audio/someone like you.mp3";
import perfectAudio from "../assets/audio/perfect.mp3";
import shapeofyouAudio from "../assets/audio/shape of you.mp3";
import blindingAudio from "../assets/audio/blinding lights.mp3";
import happierAudio from "../assets/audio/happier than ever.mp3"; 

export default function Home() {
  const navigate = useNavigate();
  /* --- PLAYLIST / DATA --- */
  const playlist = [
    { id: 0, title: "APT.", artist: "Bruno Mars", img: aptImg, src: aptAudio },
    { id: 1, title: "Die With a Smile", artist: "Bruno Mars", img: dieImg, src: dieAudio },
    { id: 2, title: "Havana", artist: "Camila Cabello", img: havanaImg, src: havanaAudio },
    { id: 3, title: "Collide", artist: "Howie Day", img: collideImg, src: collideAudio },
    { id: 4, title: "Just The Way You Are", artist: "Bruno Mars", img: JustImg, src: justAudio },
    { id: 5, title: "Locked Out Of Heaven", artist: "Bruno Mars", img: LockedtImg, src: lockedAudio },
    { id: 6, title: "Ordinary", artist: "Alex Warren", img: OrdinaryImg, src: ordinaryAudio },
    { id: 7, title: "Shape of You", artist: "Ed Sheeran", img: ShapeofyouImg, src: shapeofyouAudio },
    { id: 8, title: "Blinding Lights", artist: "The Weekend", img: BlindingImg, src: blindingAudio },
    { id: 9, title: "Someone Like You", artist: "Adele", img: SomeonelikeyouImg, src: someonelikeyouAudio },
    { id: 10, title: "Perfect", artist: "Ed Sheeran", img: PerfectImg, src: perfectAudio },
    { id: 11, title: "Happier Than Ever", artist: "Billie Eilish", img: HappierImg, src: happierAudio },
    { id: 12, title: "Undressed", artist: "Sombr", img: UndressedImg, src: undressedAudio },
    { id: 13, title: "Lose", artist: "NIKI", img: loseImg, src: loseAudio },
    { id: 14, title: "About You", artist: "The 1975", img: aboutYouImg, src: aboutYouAudio },
    { id: 15, title: "Love", artist: "Keyshia Cole", img: loveImg, src: loveAudio },
    { id: 16, title: "i <3 u", artist: "Boy Pablo", img: iHeartImg, src: iHeartAudio },
  ];

  const topmusicList = [
    { id: 0, title: "APT.", artist: "Bruno Mars", img: aptImg, src: aptAudio },
    { id: 1, title: "Die With a Smile", artist: "Bruno Mars", img: dieImg, src: dieAudio },
    { id: 2, title: "Havana", artist: "Camila Cabello", img: havanaImg, src: havanaAudio },
    { id: 3, title: "Collide", artist: "Howie Day", img: collideImg, src: collideAudio },
  ];

  const recommendList = [
    { id: 14, title: "About You", artist: "The 1975", img: aboutYouImg, src: aboutYouAudio },
    { id: 15, title: "Love", artist: "Keyshia Cole", img: loveImg, src: loveAudio },
    { id: 16, title: "i <3 u", artist: "Boy Pablo", img: iHeartImg, src: iHeartAudio },
    { id: 13, title: "Lose", artist: "NIKI", img: loseImg, src: loseAudio },
    { id: 12, title: "Undressed", artist: "Sombr", img: UndressedImg, src: undressedAudio },
    { id: 10, title: "Perfect", artist: "Ed Sheeran", img: PerfectImg, src: perfectAudio },
    { id: 7, title: "Shape Of You", artist: "Ed Sheeran", img: ShapeofyouImg, src: shapeofyouAudio },
    { id: 8, title: "Blinding Light", artist: "The Weekend", img: BlindingImg, src: blindingAudio },
  ];

  const allSongs = [
    ...playlist,
    ...recommendList.map((r, i) => ({
      ...r,
      id: playlist.length + i, 
    })),
  ];

  const recentList = [
    { title: "APT.", artist: "Bruno Mars", img: aptImg },
    { title: "Die With a Smile", artist: "Bruno Mars", img: dieImg },
    { title: "Lose", artist: "NIKI", img: loseImg },
    { title: "About You", artist: "The 1975", img: aboutYouImg },
  ];

  const libraryList = [
    { img: likedsongimg, title: "Liked Songs", sub: "Playlist · 2 songs", gradient: "gradient-1", path : "/Liked" },
    { img: topsongimg, title: "Top Songs - Global", sub: "Playlist · 2 songs", gradient: "gradient-2", path : "/top-songs" },
    { img: firstplaylistImg, title: "The First Playlist", sub: "Album · H.O.T", gradient: "gradient-3", path : "/playlist" },
    { img: iyahImg, title: "IYah! - The 4th Album", sub: "Playlist · 2 songs", gradient: "gradient-4", path : "/iyah" },
  ];

  const sidebarList = [
    { title: "APT.", artist: "Bruno Mars", img: aptImg, src: aptAudio },
    { title: "Die With a Smile", artist: "Bruno Mars", img: dieImg, src: dieAudio },
    { title: "Havana", artist: "Camila Cabello", img: havanaImg, src: havanaAudio },
    { title: "Collide", artist: "Howie Day", img: collideImg, src: collideAudio },
    { title: "About You", artist: "The 1975", img: aboutYouImg, src: aboutYouAudio },
    { title: "Love", artist: "Keyshia Cole", img: loveImg, src: loveAudio },
    { title: "i <3 u", artist: "Boy Pablo", img: iHeartImg, src: iHeartAudio },
    { title: "Lose", artist: "NIKI", img: loseImg, src: loseAudio },
  ];

  const searchBanners = [
    { img: OrdinaryImg, label: "12.345" },
    { img: dieImg, label: "12.345" }
  ];

  const allArtists = [
    { img: BrunoImg, name: "Bruno Mars" },
    { img: CamillaImg, name: "Camilla cabello" },
    { img: HowieImg, name: "Howie Day" },
    { img: KeyshiaImg, name: "Keyshia Cole" },
    { img: TopArtist5Img, name: "Lana Del Rey" },
    { img: MattyImg, name: "Matty Healy" },
    { img: Ariana2Img, name: "Ariana Grande" },
    { img: NikiImg, name: "NIKI" },
    { img: TaylorImg, name: "Taylor Swift" },
    { img: EdSheeranImg, name: "Ed Sheeran" },
    { img: CharlieImg, name: "Charlie Puth" },
    { img: BillieImg, name: "Billie Eilish" },
  ];

  /* --- STATE --- */
  const audioRef = useRef(new Audio(allSongs[0].src));
  const [index, setIndex] = useState(0);
  const currentSong = allSongs[index] || playlist[index] || {};
  const [isPlaying, setIsPlaying] = useState(false);
  const [curTime, setCurTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const [lovedList, setLovedList] = useState(() => {
    const max = Math.max(sidebarList.length, playlist.length);
    return new Array(max).fill(false);
  });

  const [view, setView] = useState("home");
  const [recentlyPlayed, setRecentlyPlayed] = useState(sidebarList);
  const [showRecentlyPopup, setShowRecentlyPopup] = useState(false);

  // Search State
  const [searchQuery, setSearchQuery] = useState("");
  const isSearching = searchQuery.trim().length > 0;
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  
  const [showFullPlayer, setShowFullPlayer] = useState(false);
  const openFullPlayer = () => setShowFullPlayer(true);
  const closeFullPlayer = () => setShowFullPlayer(false);

  const [pageMode, setPageMode] = useState("home"); 
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    const closePopup = (e) => {
      if (
        !e.target.closest(".recent-search-popup") &&
        !e.target.closest(".search-input")
      ) {
        setShowRecentSearches(false);
      }
    };
    document.addEventListener("click", closePopup);
    return () => document.removeEventListener("click", closePopup);
  }, []);

  const openArtistPage = (artist) => {
    setSelectedArtist(artist);
    setView("artistDetail");
  }; 

  const showAllArtists = () => { setPageMode("home"); setView("artists"); };
  const showAllTopMusic = () => { setPageMode("home"); setView("topmusic"); };
  const showAllReco = () => setView("reco");
  const handleOpenRecentlyPopup = () => setShowRecentlyPopup(true);

  const [durationsMap, setDurationsMap] = useState({});
  useEffect(() => {
    const sources = new Set();
    playlist.forEach((p) => sources.add(p.src));
    recommendList.forEach((r) => r.src && sources.add(r.src));
    sidebarList.forEach((s) => s.src && sources.add(s.src));

    const audioObjs = [];
    sources.forEach((src) => {
      try {
        const a = new Audio(src);
        audioObjs.push(a);
        const onLoaded = () => {
          setDurationsMap((prev) => ({ ...prev, [src]: a.duration || 0 }));
          a.removeEventListener("loadedmetadata", onLoaded);
        };
        a.addEventListener("loadedmetadata", onLoaded);
        a.load();
      } catch (e) {}
    });
    return () => {
      audioObjs.forEach((a) => { try { a.pause(); a.src = ""; } catch (e) {} });
    };
  }, []);

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (currentSong && currentSong.src) {
      audio.src = currentSong.src;
      try { audio.load(); } catch (e) {}
    } else {
      try { audio.pause(); } catch (e) {}
      audio.src = "";
    }

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => {
      setCurTime(audio.currentTime);
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onEnd = () => handleNext();

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);

    if (isPlaying && currentSong && currentSong.src) audio.play().catch(() => {});

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, [index, isPlaying]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      await audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % allSongs.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + allSongs.length) % allSongs.length);
    setIsPlaying(true);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const audio = audioRef.current;
    if (audio.duration) audio.currentTime = ratio * audio.duration;
    setProgress(ratio * 100);
  };

  const changeVolume = (v) => {
    const val = Number(v);
    const audio = audioRef.current;
    audio.volume = val;
    setVolume(val);
  };

  const onAlbumClick = (i) => {
    const song = playlist[i];
    setIndex(i);
    setIsPlaying(true);
    setRecentlyPlayed((prev) => {
      const exists = prev.find((p) => p.title === song.title);
      if (exists) return [song, ...prev.filter((p) => p.title !== song.title)];
      return [song, ...prev].slice(0, 10);
    });
  };

  const onSidebarClick = (i) => {
    const s = sidebarList[i];
    const found = playlist.findIndex((p) => p.title === s.title);
    if (found !== -1) {
      onAlbumClick(found);
    }
  };

  const onRecommendClick = (song) => {
    const idx = allSongs.findIndex(
      (s) => s.title === song.title && s.artist === song.artist
    );
    if (idx !== -1) {
      setIndex(idx);
      setIsPlaying(true);
    }
  };

  const filteredResults = playlist.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="unique-home-page">

      {/* ===== POPUP RECENTLY PLAYED (OVERLAY) ===== */}
      {showRecentlyPopup && (
        <div 
          className="recently-popup-overlay"
          onClick={() => setShowRecentlyPopup(false)}
        >
          <div 
            className="recently-popup-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="recently-popup-header">
              <h3>Recently Played</h3>
              <span 
                className="close-popup-text" 
                onClick={() => setShowRecentlyPopup(false)}
                style={{ cursor: 'pointer', fontSize: '12px', color: '#ccc' }}
              >
                Close
              </span>
            </div>

            {/* SEARCH BAR DI DALAM POPUP */}
            <div className="popup-search-bar">
               <FiSearch className="popup-search-icon" />
               <input type="text" placeholder="Search" className="popup-search-input" />
            </div>

            <div className="recently-popup-scroll">
              {recentlyPlayed.map((song, i) => (
                <div
                  key={i}
                  className="popup-row" /* <<-- INI KUNCINYA, BUKAN recent-row */
                  onClick={() => {
                    const idx = playlist.findIndex((p) => p.title === song.title);
                    if (idx !== -1) {
                      onAlbumClick(idx);
                      setShowRecentlyPopup(false);
                    }
                  }}
                >
                  {/* Class 'popup-cover' ini yang akan membuat gambar kecil (50px) */}
                  <img 
                    className="popup-cover" 
                    src={song.img} 
                    alt={song.title} 
                  />

                  <div className="popup-meta">
                    <h4>{song.title}</h4>
                    <p>{song.artist}</p>
                  </div>

                  <span
                    className={`heart-icon ${lovedList[i] ? "loved" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLovedList((prev) => {
                        const next = [...prev];
                        next[i] = !next[i];
                        return next;
                      });
                    }}
                    style={{ marginLeft: 'auto', cursor: 'pointer' }}
                  >
                    {lovedList[i] ? "♥" : "♡"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- Main Content --- */}
      <div className="home-container">

        {/* LEFT */}
        <aside className="left-col">
          <div className="menu-card">
            <ul className="menu-list">
              <li className={`menu-item ${pageMode === "home" ? "active" : ""}`}
                  onClick={() => {
                    setView("home");
                    setPageMode("home");
                  }}
                  >
                <FiHome size={20} /> Home
              </li>

               <li
                className={`menu-item ${pageMode === "search" ? "active" : ""}`}
                onClick={() => {
                  setPageMode("search");
                  setView("home"); 
                }}
              >
                <FiSearch size={20} /> Search
              </li>

              <li className="menu-item">
                <FiGrid size={20} /> Explore
              </li>
            </ul>
          </div>

          <div className="library-card new-library">
            <div className="lib-top">
              <div className="lib-header">Your Library</div>
              <button className="lib-search">🔍</button>
            </div>

            <div className="lib-tabs">
              <button className="lib-tab active">Playlist</button>
              <button className="lib-tab">Albums</button>
              <button className="lib-tab" onClick={showAllArtists} >Artist</button>
            </div>

           <ul className="lib-list">
              {libraryList.map((l, idx) => (
                <li 
                  className="lib-item" 
                  key={idx}
                  onClick={() => navigate(l.path)}  /* <--- TAMBAHKAN BARIS INI */
                  style={{ cursor: "pointer" }}     /* <--- TAMBAHKAN BARIS INI */
                >
                  <div className={`lib-thumb ${l.gradient}`}>
                    <img src={l.img} alt={l.title} />
                  </div>
                  <div className="lib-meta">
                    <div className="lib-title">{l.title}</div>
                    <div className="lib-sub">{l.sub}</div>
                  </div>
                </li>
              ))}
            </ul>

            <button className="new-playlist-btn">+ New Playlist</button>
          </div>
        </aside>

        {/* CENTER */}
        <main className="center-col">
          <div className="center-card">

            {/* --- 1. SEARCH BAR & HEADER (Ditaruh Paling Atas) --- */}
            {/* Tambahkan position: relative agar popup mengambang terhadap kotak ini */}
            <div className="search-row" style={{ marginBottom: '20px', position: 'relative' }}>
              
              {/* Input Search */}
              <input
                className="search-input"
                placeholder="Search by artist, songs or albums"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowRecentSearches(true)}
              />

              {/* Bagian Kanan (Volume & Avatar) */}
              <div className="search-right">
                
                {/* Tombol Volume (Ikon Speaker) */}
                <button className="header-icon-btn">
                  <FaVolumeUp />
                </button>

                {/* Foto Profil (Klik untuk ke Profile) */}
                <div 
                  className="user-avatar" 
                  onClick={() => navigate('/Profile')} 
                  style={{ cursor: 'pointer' }}
                >
                  <img src={ProfileImg} alt="pf" />
                </div>

              </div>

              {/* === PINDAHKAN KODINGAN POPUP KE SINI (DI DALAM search-row) === */}
              {showRecentSearches && searchQuery === "" && (
                <div className="recent-search-popup">
                  <h4>Recent Searches</h4>
                  {recentSearches.length === 0 ? (
                    <p className="empty-search">No recent searches</p>
                  ) : (
                    recentSearches.map((song, i) => (
                      <div
                        key={i}
                        className="recent-search-item"
                        onClick={() => {
                          setSearchQuery(song.title);
                          setShowRecentSearches(false);
                        }}
                      >
                        <img src={song.img} alt={song.title} />
                        <div>
                          <h5>{song.title}</h5>
                          <p>{song.artist}</p>
                        </div>
                      </div>
                    ))
                  )}
                  <button className="clear-recent-btn" onClick={() => setRecentSearches([])}>
                    Clear Recent
                  </button>
                </div>
              )}
              {/* === AKHIR KODINGAN POPUP === */}

            </div>
            {/* --- 3. HASIL PENCARIAN (Ditaruh DI BAWAH Search Bar) --- */}
            {isSearching && (
              <div className="search-results-global">
                <h3 className="search-title">Search Results</h3>
                <div className="music-cards grid-4">
                  {filteredResults.map((song, i) => (
                    <div
                      key={i}
                      className="music-card"
                      onClick={() => {
                        onAlbumClick(song.id);
                        setRecentSearches((prev) => {
                          const exists = prev.find((p) => p.id === song.id);
                          if (exists) return prev;
                          return [song, ...prev.slice(0, 4)];
                        });
                        setShowRecentSearches(false);
                        setSearchQuery("");
                      }}
                    >
                      <img src={song.img} alt={song.title} />
                      <div className="music-meta">
                        <h4>{song.title}</h4>
                        <p>{song.artist}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- 4. FULL PLAYER (Jika aktif) --- */}
            {showFullPlayer && (
              <div className="full-player-page">
                <div className="full-player-banner">
                  <img src={currentSong.img} alt={currentSong.title} />
                </div>
                <div className="full-player-controls">
                  <h3>{currentSong.title}</h3>
                  <p>{currentSong.artist}</p>
                  <div className="controls-row">
                    <button onClick={handlePrev}>⏮</button>
                    <button onClick={togglePlay}>
                      {isPlaying ? "⏸" : "▶"}
                    </button>
                    <button onClick={handleNext}>⏭</button>
                  </div>
                  <div className="progress-row" onClick={handleSeek}>
                    <span>{fmt(curTime)}</span>
                    <div className="bar">
                      <div className="fill" style={{ width: `${progress}%` }} />
                    </div>
                    <span>{fmt(duration)}</span>
                  </div>
                  <button className="close-player" onClick={closeFullPlayer}>
                    ✕ Close
                  </button>
                </div>
              </div>
            )}

            {/* --- 5. SEARCH PAGE MODE (Kategori Besar) --- */}
            {pageMode === "search" && !isSearching && (
              <>
                <div className="search-big-cards">
                  {searchBanners.map((b, i) => (
                    <div key={i} className="search-big-card">
                      <img src={b.img} alt="" />
                      <div className="search-badge">🎧 {b.label}</div>
                    </div>
                  ))}
                </div>
                <section className="top-artist">
                  <div className="section-head">
                    <h2 className="section-title">Top Artist</h2>
                    <span className="show-all" onClick={showAllArtists}>Show All</span>
                  </div>
                  <div className="artist-list">
                    {allArtists.map((a, i) => (
                      <div key={i} className="artist-avatar">
                        <img src={a.img} alt={a.name} />
                      </div>
                    ))}
                  </div>
                </section>
                <section className="top-music">
                  <div className="section-head">
                    <h2 className="section-title">Top Music</h2>
                    <span className="show-all" onClick={showAllTopMusic}>Show All</span>
                  </div>
                  <div className="music-cards grid-4">
                    {playlist.slice(0, 4).map((p, i) => (
                      <div key={i} className="music-card">
                        <img src={p.img} alt={p.title} />
                        <div className="music-meta">
                          <h4>{p.title}</h4>
                          <p>{p.artist}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* --- 6. NORMAL CONTENT (Jika tidak sedang search) --- */}
            {!isSearching && (
              <>
                {view === "artists" && (
                  <section className="artists-all">
                    <div className="section-head">
                      <h2 className="section-title">All Artists</h2>
                    </div>
                    <div className="music-cards grid-4">
                      {allArtists.map((artist, i) => (
                        <div
                          key={i}
                          className="music-card circle"
                          onClick={() => openArtistPage(artist)}
                        >
                          <img src={artist.img} alt={artist.name} />
                          <div className="music-meta">
                            <h4>{artist.name}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* ARTIST DETAIL */}
                {view === "artistDetail" && selectedArtist && (
                  <section className="artist-detail-page">
                    <div className="artist-detail-top">
                      <img
                        src={selectedArtist.img}
                        alt={selectedArtist.name}
                        className="artist-detail-avatar"
                      />
                      <div className="artist-detail-info">
                        <small className="about-label">About the Artist</small>
                        <h2 className="artist-name">✅ {selectedArtist.name}</h2>
                        <div className="artist-stats">
                          <span>4 Public Album</span>
                          <span>150M Followers</span>
                          <button className="follow-btn">Follow</button>
                        </div>
                        <p className="artist-bio">
                          Bruno Mars is a 15 time GRAMMY winning, best-selling global artist.
                        </p>
                      </div>
                    </div>
                    <hr className="artist-divider" />
                    <div className="artist-music-section">
                      <h3>Music</h3>
                      {playlist
                        .filter(song => song.artist === selectedArtist.name)
                        .map((song, i) => (
                          <div
                            key={i}
                            className="artist-song-row"
                            onClick={() => onAlbumClick(song.id)}
                          >
                            <span className="song-index">{i + 1}</span>
                            <img src={song.img} alt={song.title} />
                            <div className="song-info">
                              <h4>{song.title}</h4>
                              <p>{fmt(durationsMap[song.src])}</p>
                            </div>
                            <div className="song-right">
                              <span className="song-plays">3.1B</span>
                              <span className="menu-icon">⋮</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </section>
                )}

                {view === "topmusic" && (
                  <section className="topmusic-all">
                    <div className="section-head">
                      <h2 className="section-title">All Top Music</h2>
                    </div>
                    <div className="music-cards grid-4">
                      {playlist.map((m, i) => (
                        <div
                          key={i}
                          className="music-card"
                          onClick={() => onAlbumClick(i)}
                        >
                          <img src={m.img} alt={i} />
                          <div className="music-meta">
                            <h4>{m.title}</h4>
                            <p>{m.artist}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {view === "reco" && (
                  <section className="reco-all">
                    <div className="section-head">
                      <h2 className="section-title">All Recommendation</h2>
                    </div>
                    <div className="music-cards grid-4">
                      {recommendList.map((r, i) => (
                        <div
                          key={i}
                          className="music-card"
                          onClick={() => onRecommendClick(r)}
                        >
                          <img src={r.img} alt={i} />
                          <div className="music-meta">
                            <h4>{r.title}</h4>
                            <p>{r.artist}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* HOME DEFAULT */}
                {view === "home" && pageMode === "home" && !showFullPlayer && (
                  <>
                    <div className="top-tabs">
                      <button className="top-tab active">Playlist</button>
                      <button className="top-tab">Albums</button>
                      <button className="top-tab" onClick={showAllArtists} >Artist</button>
                    </div>

                    <section className="top-artist">
                      <div className="section-head">
                        <h2 className="section-title">Top Artist</h2>
                        <span className="show-all" onClick={showAllArtists}>Show All</span>
                      </div>
                      <div className="artist-list">
                        {allArtists.map((a, i) => (
                          <div
                            key={i}
                            className="artist-avatar"
                            onClick={() => openArtistPage(a)}
                          >
                            <img src={a.img} alt={a.name} />
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="top-music">
                      <div className="section-head">
                        <h2 className="section-title">Top Music</h2>
                        <span className="show-all" onClick={showAllTopMusic}>Show All</span>
                      </div>
                      <div className="music-cards grid-4">
                        {topmusicList.map((p, i) => (
                          <div
                            key={i}
                            className="music-card"
                            onClick={() => onAlbumClick(i)}
                          >
                            <img src={p.img} alt={p.title} />
                            <div className="music-meta">
                              <h4>{p.title}</h4>
                              <p>{p.artist}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="recommended">
                      <div className="section-head">
                        <h2 className="section-title">Recommended Station</h2>
                        <span className="show-all" onClick={showAllReco}>Show All</span>
                      </div>
                      <div className="music-cards grid-4">
                        {recommendList.slice(0,4).map((r, i) => (
                          <div
                            key={i}
                            className="music-card"
                            onClick={() => onRecommendClick(r)}
                          >
                            <img src={r.img} alt={r.title} />
                            <div className="music-meta">
                              <h4>{r.title}</h4>
                              <p>{r.artist}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="recently">
                      <div className="section-head">
                        <h2 className="section-title">Recently Played</h2>
                        <span className="show-all" onClick={handleOpenRecentlyPopup}>Show All</span>
                      </div>
                      <div className="music-cards grid-4">
                        {recentList.map((r, i) => (
                          <div key={i} className="music-card">
                            <img src={r.img} alt={r.title} />
                            <div className="music-meta">
                              <h4>{r.title}</h4>
                              <p>{r.artist}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </>
                )}
              </>
            )}
          </div>
        </main>

        {/* RIGHT */}
        <aside className="right-col">
          <div className="right-card">
            <div className="right-header">
              <h3>Recently Played</h3>
              <span className="see-all" onClick={handleOpenRecentlyPopup}>See All</span>
            </div>
            <ul className="right-list">
              {recentlyPlayed.slice(0, 6).map((s, i) => (
                <li
                  key={i}
                  className="right-item"
                  onClick={() => onSidebarClick(i)}
                >
                  <img src={s.img} alt={s.title} />
                  <div>
                    <p>{s.title}</p>
                    <small>{s.artist}</small>
                  </div>
                  <span
                    className={`heart ${lovedList[i] ? "loved" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLovedList((prev) => {
                        const next = [...prev];
                        next[i] = !next[i];
                        return next;
                      });
                    }}
                  >
                    {lovedList[i] ? "♥" : "♡"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>

      {/* BOTTOM PLAYER */}
      {view !== "recently" && !showFullPlayer && (
        <div className="home-player-wrap">
          <div className="home-player">
            <div className="hp-left">
              <img
                src={allSongs[index].img}
                alt=""
                onClick={openFullPlayer}
                style={{ cursor: "pointer" }}
              />
              <div className="hp-meta">
                <h4>{allSongs[index].title}</h4>
                <p>{allSongs[index].artist}</p>
              </div>
            </div>
            <div className="hp-controls">
              <button onClick={handlePrev}>⏮</button>
              <button onClick={togglePlay}>
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button onClick={handleNext}>⏭</button>
            </div>
            <div className="hp-progress" onClick={handleSeek}>
              <span>{fmt(curTime)}</span>
              <div className="bar">
                <div className="fill" style={{ width: `${progress}%` }} />
              </div>
              <span>{fmt(duration)}</span>
            </div>
            <div className="hp-right">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => changeVolume(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}