import { useState } from 'react';

export default function ThemeSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState('#20ACBB'); 

  // أضفنا قيمة filter (hue-rotate) لكل لون بدقة
  const colors = [
    { name: 'Cyan', hex: '#20ACBB', filter: 'hue-rotate(0deg)' }, // اللون الأصلي
    { name: 'Pink', hex: '#EC4899', filter: 'hue-rotate(140deg)' },
    { name: 'Blue', hex: '#3B82F6', filter: 'hue-rotate(45deg)' },
    { name: 'Green', hex: '#10B981', filter: 'hue-rotate(-40deg)' },
    { name: 'Amber', hex: '#F59E0B', filter: 'hue-rotate(-140deg)' },
    { name: 'Purple', hex: '#8B5CF6', filter: 'hue-rotate(85deg)' }
  ];

  // دالة تغيير الثيم
  const changeTheme = (colorHex, filterValue) => {
    // 1. تغيير اللون الأساسي (للنصوص والأزرار وحرف الـ P)
    document.documentElement.style.setProperty('--c-cyan', colorHex);
    document.documentElement.style.setProperty('--neon-glow', `0 0 20px ${colorHex}40`);
    
    // 2. إرسال قيمة الفلتر لتغيير لون اللوغو (الصورة)
    document.documentElement.style.setProperty('--logo-filter', filterValue);
    
    setActiveColor(colorHex);
  };

  return (
    <>
      <button 
        className={`theme-toggle-btn ${isOpen ? 'hidden' : ''}`} 
        onClick={() => setIsOpen(true)}
        aria-label="Settings"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" className="gear-icon">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>

      <div className={`theme-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Theme Colors</h3>
          <button className="close-sidebar" onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>
          Personalize your RSP experience
        </p>

        <div className="colors-grid">
          {colors.map((color) => (
            <div
              key={color.name}
              className={`color-swatch ${activeColor === color.hex ? 'active' : ''}`}
              style={{ backgroundColor: color.hex, boxShadow: `0 0 15px ${color.hex}80` }}
              // نمرر هنا الفلتر مع اللون
              onClick={() => changeTheme(color.hex, color.filter)} 
              title={color.name}
            ></div>
          ))}
        </div>
      </div>
      
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}