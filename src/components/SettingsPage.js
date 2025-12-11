import React, { useState } from 'react';
import './style/PlaylistPage.css'; // Menggunakan layout utama
import './style/AccountPage.css';  // Menggunakan style form & toggle
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';

const SettingsPage = () => {
  const navigate = useNavigate();
  
  // State untuk toggle "Menampilkan visual perulangan"
  const [showLoopVisual, setShowLoopVisual] = useState(false);

  // Handler untuk kembali (Batal/Simpan/Back)
  const goBack = () => {
    navigate('/account'); // Kembali ke Account Page (bukan Profile) sesuai request
  };

  return (
    // Gunakan container 'account' agar layoutnya centered & rapi seperti halaman sebelumnya
    <div className="app-container-account">
      
      {/* Main Content Box */}
      <main className="main-content glass-panel">
        <div className="account-content">
          
          {/* Header */}
          <div className="account-header">
            <FaArrowLeft className="back-btn-icon" onClick={goBack} />
          </div>

          {/* Title & Search (Opsional, tapi ada di desain) */}
          <div className="title-section" style={{textAlign:'left', marginBottom:'30px'}}>
            <h2 style={{fontSize:'32px', marginBottom:'20px'}}>Settings</h2>
            <div className="account-search-bar" style={{margin:'0'}}>
              <FaSearch style={{color:'gray'}} />
              <input type="text" placeholder="Cari di akun atau artikel bantuan" />
            </div>
          </div>

          {/* --- CONTENT SETTINGS --- */}
          
          {/* 1. Menampilkan */}
          <div className="toggle-row">
            <div className="toggle-info">
              <h4 style={{fontSize:'14px', marginBottom:'4px'}}>Menampilkan</h4>
              <p style={{fontSize:'12px', color:'#d1d1d1'}}>Tampilkan visual perulangan pada trek</p>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={showLoopVisual} 
                onChange={() => setShowLoopVisual(!showLoopVisual)} 
              />
              <span className="slider"></span>
            </label>
          </div>

          {/* 2. Penyimpanan - Download */}
          <div className="toggle-row" style={{alignItems: 'flex-start'}}>
            <div className="toggle-info">
              <h4 style={{fontSize:'14px', marginBottom:'4px'}}>Penyimpanan</h4>
              
              <div style={{marginBottom:'15px'}}>
                <strong style={{fontSize:'13px', display:'block'}}>Download: 0 MB</strong>
                <p style={{fontSize:'11px', color:'#d1d1d1'}}>Konten yang pernah di-download untuk digunakan secara offline</p>
              </div>
            </div>
            
            {/* Tombol Hapus Semua Download */}
            <button className="btn-small-outline">Hapus semua download</button>
          </div>

          {/* 3. Penyimpanan - Cache */}
          <div className="toggle-row" style={{alignItems: 'center'}}>
            <div className="toggle-info">
              <div style={{marginBottom:'0'}}>
                <strong style={{fontSize:'13px', display:'block'}}>Cache: 1422 MB</strong>
                <p style={{fontSize:'11px', color:'#d1d1d1', width:'90%'}}>
                  File sementara yang disimpan untuk pengalaman yang lebih cepat saat jaringan lambat
                </p>
              </div>
            </div>
            
            {/* Tombol Hapus Cache */}
            <button className="btn-small-outline">Hapus cache</button>
          </div>

          {/* 4. Offline Storage Location */}
          <div className="toggle-row" style={{borderBottom:'none', paddingTop:'20px'}}>
            <div className="toggle-info">
              <strong style={{fontSize:'13px', display:'block'}}>Offline storage location</strong>
              <p style={{fontSize:'11px', color:'#d1d1d1'}}>
                /Users/myname/Library/Application Support/NeoMusic/Cache/Storage
              </p>
            </div>
            
            {/* Tombol Ubah Lokasi */}
            <button className="btn-small-outline">Ubah Lokasi</button>
          </div>

          {/* TOMBOL AKSI (Batal / Simpan) */}
          <div className="form-actions">
            <button className="btn-cancel" onClick={goBack}>Batal</button>
            <button className="btn-save" onClick={goBack}>Simpan</button>
          </div>

          {/* Spacer agar tidak tertutup Player Bar */}
          <div style={{ height: '150px' }}></div>

        </div>
      </main>
    </div>
  );
};

export default SettingsPage;