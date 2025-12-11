import React, { useEffect, useRef, useState } from 'react';
import './style/PlaylistPage.css'; 
import { FaPause, FaStepBackward, FaStepForward, FaVolumeUp, FaPlay } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

// Menerima prop onNext dan onPrev dari App.js
const PlayerBar = ({ currentSong, isPlaying, onTogglePlay, onNext, onPrev }) => {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const volumeBarRef = useRef(null); // Ref untuk volume bar

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5); // Default volume 50%

  // Helper format waktu
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // --- EFEK SAAT LAGU BERGANTI ---
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setCurrentTime(0);
      
      // Set volume awal saat load
      audioRef.current.volume = volume;

      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => console.log("Auto-play prevented:", error));
        }
      }
    }
  }, [currentSong]);

  // --- EFEK PLAY/PAUSE ---
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => console.log("Play error:", error));
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // --- EFEK VOLUME ---
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handler update waktu
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Handler Scrubbing (Lagu)
  const handleProgressClick = (e) => {
    if (progressBarRef.current && audioRef.current) {
      const width = progressBarRef.current.clientWidth;
      const clickX = e.nativeEvent.offsetX;
      const newTime = (clickX / width) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Handler Volume (Klik bar volume)
  const handleVolumeClick = (e) => {
    if (volumeBarRef.current) {
      const width = volumeBarRef.current.clientWidth;
      const clickX = e.nativeEvent.offsetX;
      // Hitung persentase (0.0 sampai 1.0)
      const newVolume = Math.max(0, Math.min(1, clickX / width));
      setVolume(newVolume);
    }
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;
  const volumePercent = volume * 100;

  if (!currentSong) return null;

  return (
    <footer className="footer-player">
      <audio 
        ref={audioRef}
        src={currentSong.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        // Jika lagu habis, otomatis ke lagu selanjutnya (jika ada onNext)
        onEnded={() => onNext ? onNext() : onTogglePlay(false)}
      />

      <div className="p-left">
        <div className="p-info">
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
        </div>
      </div>

      <div className="p-center">
        <div className="p-controls">
          {/* TOMBOL PREV */}
          <FaStepBackward 
            className="control-icon" 
            onClick={onPrev} 
            style={{cursor: 'pointer'}} 
          />
          
          <div className="p-play-circle" onClick={() => onTogglePlay(!isPlaying)}>
            {isPlaying ? (
              <FaPause size={14} color="black" />
            ) : (
              <FaPlay size={14} color="black" style={{ marginLeft: '2px' }} />
            )}
          </div>
          
          {/* TOMBOL NEXT */}
          <FaStepForward 
            className="control-icon" 
            onClick={onNext} 
            style={{cursor: 'pointer'}} 
          />
        </div>

        <div className="p-progress">
          <span className="time-text">{formatTime(currentTime)}</span>
          <div 
            className="bar-bg" 
            ref={progressBarRef} 
            onClick={handleProgressClick}
          >
            <div className="bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <span className="time-text">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="p-right">
        <FaVolumeUp />
        <div 
          className="vol-bg" 
          ref={volumeBarRef} 
          onClick={handleVolumeClick} 
          style={{ cursor: 'pointer' }}
        >
          {/* Gunakan width dari state volume */}
          <div className="vol-fill" style={{ width: `${volumePercent}%` }}></div>
        </div>
        <FiExternalLink />
      </div>
    </footer>
  );
};

export default PlayerBar;