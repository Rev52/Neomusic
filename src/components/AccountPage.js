import React, { useState } from 'react';
import './style/PlaylistPage.css'; // Layout Utama
import './style/AccountPage.css';  // Style Form
import { useNavigate } from 'react-router-dom';

// Import Icons
import { 
  FaSearch, FaChevronRight, FaArrowLeft, 
  FaUser, FaShieldAlt, FaBell, FaSignOutAlt, FaQuestionCircle, FaMobileAlt 
} from 'react-icons/fa';

const AccountPage = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('menu'); 
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // --- MENU UTAMA ---
  const MainMenu = () => (
    <div className="account-content">
      <div className="account-header">
        <FaArrowLeft className="back-btn-icon" onClick={() => navigate('/profile')} />
        {/* Tidak perlu judul di sini karena sudah ada di tengah */}
      </div>

      <div className="title-section" style={{textAlign:'center', marginBottom:'40px'}}>
        <h2 style={{fontSize:'32px', marginBottom:'20px'}}>Apa yang bisa kami bantu?</h2>
        <div className="account-search-bar" style={{maxWidth:'600px', margin:'0 auto'}}>
          <FaSearch style={{color:'gray'}} />
          <input type="text" placeholder="Cari" />
        </div>
      </div>

      <div className="account-menu-list">
        <div className="account-menu-item" onClick={() => setCurrentView('editInfo')}>
          <div className="menu-label"><FaUser /> Edit Informasi Pribadi</div>
          <FaChevronRight />
        </div>
        <div className="account-menu-item" onClick={() => setCurrentView('privacy')}>
          <div className="menu-label"><FaShieldAlt /> Keamanan & Privasi</div>
          <FaChevronRight />
        </div>
        <div className="account-menu-item" onClick={() => setCurrentView('notif')}>
          <div className="menu-label"><FaBell /> Notifikasi</div>
          <FaChevronRight />
        </div>
        <div className="account-menu-item" onClick={() => setCurrentView('verification')}>
          <div className="menu-label"><FaMobileAlt /> Edit Metode Masuk</div>
          <FaChevronRight />
        </div>
        <div className="account-menu-item" onClick={() => setCurrentView('help')}>
          <div className="menu-label"><FaQuestionCircle /> Bantuan</div>
          <FaChevronRight />
        </div>
        <div className="account-menu-item" onClick={() => navigate('/')}> 
          <div className="menu-label"><FaSignOutAlt /> Keluar Semua Perangkat</div>
          <FaChevronRight />
        </div>
      </div>
      <div style={{ height: '30px', width: '100%' }}></div>
    </div>
  );

  // --- EDIT INFO PRIBADI ---
  const EditInfo = () => {
    const [form, setForm] = useState({ name: '', email: '', gender: 'Laki-laki' });
    return (
      <div className="account-content">
        <div className="account-header">
          <FaArrowLeft className="back-btn-icon" onClick={() => setCurrentView('menu')} />
        </div>
        <div className="account-search-bar">
          <FaSearch style={{color:'gray'}} />
          <input type="text" placeholder="Cari di akun atau artikel bantuan" />
        </div>

        <h2 style={{marginTop:'30px', marginBottom:'20px'}}>Edit Informasi Pribadi</h2>
        <div className="form-section">
          <div className="form-group">
            <label>Nama Pengguna</label>
            <input className="form-input" placeholder="Nama Pengguna" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-input" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
          </div>
          <div className="form-group">
            <label>Jenis Kelamin</label>
            <select className="form-select" value={form.gender} onChange={(e)=>setForm({...form, gender:e.target.value})}>
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tanggal Lahir</label>
            <div className="date-row">
              <input className="form-input" placeholder="Tanggal" />
              <select className="form-select"><option>Bulan Lahir</option></select>
              <input className="form-input" placeholder="Tahun" />
            </div>
          </div>
        </div>
        <div className="form-actions">
          <button className="btn-cancel" onClick={() => setCurrentView('menu')}>Batal</button>
          <button className="btn-save" onClick={() => setCurrentView('menu')}>Simpan</button>
        </div>
        <div style={{ height: '30px', width: '100%' }}></div>
      </div>
    );
  };

  // --- NOTIFIKASI ---
  const NotificationSettings = () => (
    <div className="account-content">
      <div className="account-header"><FaArrowLeft className="back-btn-icon" onClick={() => setCurrentView('menu')} /></div>
      
      <h2 style={{marginTop:'20px'}}>Pengaturan Notifikasi</h2>
      <p style={{fontSize:'12px', color:'#d1d1d1', marginBottom:'30px'}}>Pilih notifikasi yang ingin kamu terima melalui push atau email.</p>

      <div style={{display:'flex', justifyContent:'flex-end', gap:'25px', marginBottom:'10px', fontSize:'12px', fontWeight:'bold'}}>
        <span>Email</span><span>Push</span>
      </div>

      {[
        { title: "Rilisan lagu baru dari artis favorit", desc: "Dapatkan kabar langsung tiap kali musisi favoritmu merilis lagu." },
        { title: "Playlist rekomendasi mingguan", desc: "Setiap minggu, kami kurasi playlist spesial sesuai selera musikmu." },
        { title: "Update konser & event musik", desc: "Info terkini tentang acara langsung yang menurut kami kamu akan suka." },
        { title: "Aktivitas akun", desc: "Notifikasi penting soal keamanan akunmu." },
      ].map((item, idx) => (
        <div className="toggle-row" key={idx}>
          <div className="toggle-info">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" className="custom-checkbox" />
            <input type="checkbox" className="custom-checkbox" />
          </div>
          <div style={{ height: '30px', width: '100%' }}></div>
        </div>
      ))}

      <div className="form-actions">
        <button className="btn-cancel" onClick={() => setCurrentView('menu')}>Batal</button>
        <button className="btn-save" onClick={() => setCurrentView('menu')}>Simpan</button>
      </div>
    </div>
  );

  // --- PRIVASI ---
  const PrivacySettings = () => (
    <div className="account-content">
      <div className="account-header"><FaArrowLeft className="back-btn-icon" onClick={() => setCurrentView('menu')} /></div>

      <h2 style={{marginTop:'20px'}}>Privasi Akun</h2>
      <p style={{fontSize:'12px', color:'#d1d1d1', marginBottom:'30px'}}>Kami jaga privasimu seperti kami jaga playlist favoritmu.</p>

      {[
        { title: "Izinkan rekomendasi berdasarkan aktivitas", desc: "Kami pakai data lagu yang kamu dengar buat kasih rekomendasi." },
        { title: "Kelola data personal & histori akun", desc: "Lihat, unduh, atau hapus data yang pernah kamu simpan." },
        { title: "Notifikasi privasi & keamanan akun", desc: "Dapatkan info penting soal login, perubahan data, dll." },
        { title: "Tampilkan aktivitas mendengarkan ke publik", desc: "Kalau aktif, orang lain bisa lihat lagu yang lagi kamu putar." },
      ].map((item, idx) => (
        <div className="toggle-row" key={idx}>
          <div className="toggle-info">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      ))}

      <div className="form-actions">
        <button className="btn-cancel" onClick={() => setCurrentView('menu')}>Batal</button>
        <button className="btn-save" onClick={() => setCurrentView('menu')}>Simpan</button>
      </div>
      <div style={{ height: '30px', width: '100%' }}></div>
    </div>
  );

  // --- VERIFIKASI ---
  const Verification = () => (
    <div className="account-content">
      <div className="account-header"><FaArrowLeft className="back-btn-icon" onClick={() => setCurrentView('menu')} /></div>

      <h2 style={{marginTop:'20px'}}>Verifikasi Akun</h2>
      <p style={{fontSize:'12px', color:'#d1d1d1', marginBottom:'30px'}}>Verifikasi akun anda untuk memastikan akun ini milik anda.</p>

      <div className="form-section">
        <div className="form-group">
          <label>No Telp Saat Ini</label>
          <input className="form-input" value="+62 881-1234-5678" disabled style={{opacity:0.5}} />
        </div>
        <div className="form-group">
          <label>No Telp Baru</label>
          <input className="form-input" placeholder="+62" />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn-cancel" onClick={() => setCurrentView('menu')}>Batal</button>
        <button className="btn-save" onClick={() => setShowSuccessModal(true)}>Simpan</button>
      </div>
      <div style={{ height: '30px', width: '100%' }}></div>
    </div>
  );

  // --- FITUR 6: BANTUAN (SESUAI FIGMA) ---
  const Help = () => {
    // State untuk Accordion (Menu buka-tutup)
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    const helpItems = [
      { 
        icon: <FaUser />, 
        title: "Kelola Akunmu", 
        content: "Panduan untuk mengubah profil, email, password, dan data diri lainnya." 
      },
      { 
        icon: <FaShieldAlt />, 
        title: "Keamanan & Privasi", 
        content: "Informasi mengenai perlindungan akun, verifikasi data, dan kebijakan privasi kami." 
      },
      { 
        icon: <FaBell />, 
        title: "Notifikasi", 
        content: "Cara mengatur notifikasi push dan email agar Anda tidak ketinggalan info terbaru." 
      },
      { 
        icon: <FaSignOutAlt />, 
        title: "Logout", 
        content: "Bantuan jika Anda mengalami masalah saat ingin keluar dari perangkat." 
      },
    ];

    return (
      <div className="account-content">
        <div className="account-header">
          <FaArrowLeft className="back-btn-icon" onClick={() => setCurrentView('menu')} />
        </div>

        {/* Judul & Search Bar Tengah */}
        <div className="title-section" style={{textAlign:'center', marginBottom:'40px'}}>
          <h2 style={{fontSize:'32px', marginBottom:'20px'}}>Apa yang bisa kami bantu?</h2>
          <div className="account-search-bar" style={{maxWidth:'600px', margin:'0 auto'}}>
            <FaSearch style={{color:'gray'}} />
            <input type="text" placeholder="Cari" />
          </div>
        </div>

        {/* List Menu Accordion */}
        <div className="account-menu-list">
          {helpItems.map((item, idx) => (
            <div key={idx} className="accordion-item">
              {/* Header Accordion */}
              <div 
                className={`account-menu-item ${openIndex === idx ? 'active' : ''}`} 
                onClick={() => toggleAccordion(idx)}
              >
                <div className="menu-label">
                  {item.icon} {item.title}
                </div>
                {/* Rotasi Icon Panah jika aktif */}
                <FaChevronRight 
                  style={{ 
                    transition: '0.3s', 
                    transform: openIndex === idx ? 'rotate(90deg)' : 'rotate(0deg)' 
                  }} 
                />
              </div>

              {/* Isi Konten Accordion */}
              {openIndex === idx && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tombol Batal & Simpan (Sesuai Gambar) */}
        <div className="form-actions">
          <button className="btn-cancel" onClick={() => setCurrentView('menu')}>Batal</button>
          <button className="btn-save" onClick={() => setCurrentView('menu')}>Simpan</button>
        </div>

        {/* Spacer agar tidak tertutup Player Bar */}
        <div style={{ height: '150px' }}></div>
      </div>
    );
  };

  return (
    // CLASS BARU: app-container-account (1 Kolom Centered)
    <div className="app-container-account">
      
      {/* TIDAK ADA SIDEBAR KIRI/KANAN */}

      {/* MAIN CONTENT (Centered) */}
      <main className="main-content glass-panel" style={{height:'90%'}}>
        
        {currentView === 'menu' && <MainMenu />}
        {currentView === 'editInfo' && <EditInfo />}
        {currentView === 'notif' && <NotificationSettings />}
        {currentView === 'privacy' && <PrivacySettings />}
        {currentView === 'verification' && <Verification />}
        {currentView === 'help' && <Help />}

      </main>

      {/* POPUP SUKSES */}
      {showSuccessModal && (
        <div className="success-modal-overlay">
          <div className="success-modal">
            <h2>Verifikasi Akun Berhasil</h2>
            <p>Nomor telepon Anda telah berhasil diverifikasi. Proses ini dilakukan untuk memastikan bahwa akun benar-benar milik Anda.</p>
            <button className="btn-close-popup" onClick={() => { setShowSuccessModal(false); setCurrentView('menu'); }}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPage;