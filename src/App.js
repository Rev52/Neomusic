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


// =========================
// HOMEPAGE (SCROLLABLE SECTIONS)
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
// WRAPPER UNTUK MENGATUR NAVBAR
// =========================
function AppLayout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/signup"];

  const shouldHideNavbar = hideNavbarRoutes.includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
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
