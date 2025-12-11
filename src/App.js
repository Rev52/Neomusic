import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- IMPORTS DARI REKAN (LANDING, AUTH, & DASHBOARD) ---
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopStation from "./components/TopStation";
import MusicLibrary from "./components/MusicLibrary";
import TopArtist from "./components/TopArtist";
import TopMusic from "./components/TopMusic";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import LoginAdmin from "./components/LoginAdmin";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home"; // Dashboard Utama (Self-contained)

// --- IMPORTS DARI ANDA (SUB-PAGES) ---
import ProfilePage from './components/ProfilePage';
import PlaylistPage from './components/PlaylistPage';
import LikedSongsPage from './components/LikedSongsPage';
import TopSongsPage from './components/TopSongsPage';
import IyahPage from './components/IyahPage';
import AccountPage from './components/AccountPage';
import SettingsPage from './components/SettingsPage';
import PlayerBar from './components/PlayerBar'; // Player Global

// --- CSS IMPORTS ---
import './components/style/PlaylistPage.css';
import './components/style/AccountPage.css';
import './components/style/ProfilePage.css';

// ==========================================
// 1. KOMPONEN LANDING PAGE (WRAPPER)
// ==========================================
function LandingPage() {
  return (
    <>
      <section id="home"><HeroSection /></section>
      <section id="features">
        <TopStation />
        <MusicLibrary />
        <TopArtist />
        <TopMusic />
      </section>
      <section id="about"><AboutSection /></section>
      <section id="contact"><ContactSection /></section>
    </>
  );
}

// ==========================================
// 2. KOMPONEN UTAMA APP
// ==========================================
function App() {
  const location = useLocation();

  // --- STATE MUSIK GLOBAL (DIPERBARUI DENGAN QUEUE) ---
  
  // 1. Definisikan Lagu Default
  const defaultSong = {
    id: 'default-1',
    title: "Die With A Smile",
    artist: "Lady Gaga, Bruno Mars",
    img: "https://i.scdn.co/image/ab67616d0000b273c52e1858348b61cb81c3b174",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  };

  // 2. State Queue & Index
  const [songQueue, setSongQueue] = useState([defaultSong]); 
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Ambil lagu yang sedang aktif berdasarkan index
  const currentSong = songQueue[currentSongIndex];

  // 3. Handler Play (Menerima Lagu & List Lengkap)
  const playSongHandler = (song, fullList = []) => {
    if (fullList.length > 0) {
      // Jika ada list playlist, masukkan ke antrian
      setSongQueue(fullList);
      // Cari posisi lagu yang diklik dalam list tersebut
      const index = fullList.findIndex(s => s.id === song.id);
      setCurrentSongIndex(index !== -1 ? index : 0);
    } else {
      // Jika cuma play 1 lagu (misal dari search result tunggal)
      setSongQueue([song]);
      setCurrentSongIndex(0);
    }
    setIsPlaying(true);
  };

  // 4. Logic Next Song
  const handleNextSong = () => {
    if (currentSongIndex < songQueue.length - 1) {
      setCurrentSongIndex(prev => prev + 1);
    } else {
      // Opsional: Balik ke awal jika sudah habis (Loop Playlist)
      setCurrentSongIndex(0); 
    }
  };

  // 5. Logic Prev Song
  const handlePrevSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(prev => prev - 1);
    } else {
      // Jika di awal lagu pertama, replay dari 0
      const audioEl = document.querySelector('audio');
      if(audioEl) audioEl.currentTime = 0;
    }
  };

  // --- LOGIKA ROUTING & TAMPILAN ---

  // Daftar halaman "Music App" buatan ANDA
  const myMusicPages = [
    '/profile', '/playlist', '/liked', '/top', '/top-songs', '/iyah', '/account', '/settings'
  ];

  const isMyPage = myMusicPages.includes(location.pathname.toLowerCase());

  // Sembunyikan Navbar jika di Auth, Home Dashboard, atau halaman Music App Anda
  const hideNavbarRoutes = ["/login", "/signup", "/loginadmin", "/home", ...myMusicPages];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname.toLowerCase());

  // Logika Class CSS Layout
  let layoutClass = "";
  if (isMyPage) {
    if (location.pathname === '/account' || location.pathname === '/settings') {
      layoutClass = "layout-mode-account";
    } else {
      layoutClass = "layout-mode-profile"; 
    }
  }

  return (
    <div className={isMyPage ? layoutClass : "landing-page-wrapper"}>
      
      {shouldShowNavbar && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          {/* --- RUTE UMUM (REKAN) --- */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/home" element={<Home />} />

          {/* --- RUTE MUSIK APP (ANDA) --- */}
          {/* Mengirimkan playSongHandler ke semua halaman */}
          <Route path="/profile" element={<ProfilePage onPlay={playSongHandler} />} />
          <Route path="/playlist" element={<PlaylistPage onPlay={playSongHandler} />} />
          <Route path="/liked" element={<LikedSongsPage onPlay={playSongHandler} />} />
          <Route path="/top" element={<TopSongsPage onPlay={playSongHandler} />} />
          <Route path="/top-songs" element={<TopSongsPage onPlay={playSongHandler} />} />
          <Route path="/iyah" element={<IyahPage onPlay={playSongHandler} />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/settings" element={<SettingsPage />} />

        </Routes>
      </AnimatePresence>

      {/* --- GLOBAL PLAYER BAR --- */}
      {/* Hanya muncul di halaman Anda & jika ada lagu */}
      {isMyPage && currentSong && (
        <PlayerBar 
          currentSong={currentSong} 
          isPlaying={isPlaying} 
          onTogglePlay={setIsPlaying}
          onNext={handleNextSong} // Props Baru
          onPrev={handlePrevSong} // Props Baru
        />
      )}

    </div>
  );
}

export default App;