import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopStation from "./components/TopStation";
import MusicLibrary from "./components/MusicLibrary";
import TopArtist from "./components/TopArtist";
import TopMusic from "./components/TopMusic";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home"; // ✅ HOME BARU SETELAH LOGIN


// =========================
// HOMEPAGE (SEBELUM LOGIN)
// =========================
function HomePage() {
  return (
    <>
      {/* HOME */}
      <section id="home">
        <HeroSection />
      </section>

      {/* FEATURES */}
      <section id="features">
        <TopStation />
        <MusicLibrary />
        <TopArtist />
        <TopMusic />
      </section>

      {/* ABOUT */}
      <section id="about">
        <AboutSection />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}


// =========================
// WRAPPER UNTUK NAVBAR
// =========================
function AppLayout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/signup", "/home"]; 
  // Kalau kamu mau navbar disembunyikan juga di halaman Home setelah login

  const shouldHideNavbar = hideNavbarRoutes.includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>

        {/* LANDING PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* AUTH */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ HOME SETELAH LOGIN */}
        <Route path="/home" element={<Home />} />

      </Routes>
    </>
  );
}


// =========================
// APP
// =========================
export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
