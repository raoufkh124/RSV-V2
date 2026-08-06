import { useEffect, useRef } from 'react';

export default function HexGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let hexSize = 35; // حجم الشكل السداسي (يمكنك تكبيره أو تصغيره)
    let hexes = [];
    let clickPos = { x: -1000, y: -1000, time: 0 };

    // 1. إصلاح التمدد: أخذ أبعاد الشاشة الحقيقية
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initGrid();
    };

    // دالة رسم الشكل السداسي
    const drawHex = (x, y, radius, opacity) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle_deg = 60 * i - 30;
        const angle_rad = (Math.PI / 180) * angle_deg;
        const px = x + radius * Math.cos(angle_rad);
        const py = y + radius * Math.sin(angle_rad);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      
      const color = getComputedStyle(document.documentElement).getPropertyValue('--c-cyan').trim() || '#1CE0C6';
      
      // الإطار الخارجي الخافت جداً
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(255, 255, 255, 0.03)`; 
      ctx.stroke();
      
      // التعبئة اللونية (النبض والموجة)
      if (opacity > 0) {
        ctx.fillStyle = color;
        ctx.globalAlpha = Math.min(opacity, 1); // التأكد أن الشفافية لا تتجاوز 1
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    };

    const initGrid = () => {
      hexes = [];
      const hexWidth = Math.sqrt(3) * hexSize;
      const hexHeight = 2 * hexSize;
      const cols = Math.ceil(canvas.width / hexWidth) + 2;
      const rows = Math.ceil(canvas.height / (hexHeight * 0.75)) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let x = c * hexWidth;
          let y = r * hexHeight * 0.75;
          if (r % 2 !== 0) x += hexWidth / 2;
          
          hexes.push({ 
            x, 
            y, 
            // 2. النبض العشوائي: إعطاء كل شكل طور وسرعة عشوائية
            phase: Math.random() * Math.PI * 2, 
            speed: (Math.random() * 0.002) + 0.0005,
            isActive: Math.random() > 0.75 // فقط 25% من الأشكال تنبض لكي لا يكون مزعجاً للعين
          });
        }
      }
    };

    // 3. التقاط النقرات من أي مكان في الشاشة
    const handleClick = (e) => {
      clickPos = { 
        x: e.clientX, 
        y: e.clientY, 
        time: Date.now() 
      };
    };

    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const currentTime = Date.now();
      
      // حسابات موجة النقر
      const timeElapsed = (currentTime - clickPos.time) / 1000;
      const waveRadius = timeElapsed * 600; 
      const waveThickness = 150; 

      hexes.forEach(hex => {
        // --- التأثير الأول: النبض التلقائي (Breathing) ---
        let baseOpacity = 0;
        if (hex.isActive) {
          // دالة جيبية (Sine Wave) لعمل تأثير التنفس الناعم
          baseOpacity = (Math.sin(currentTime * hex.speed + hex.phase) * 0.5 + 0.5) * 0.15;
        }

        // --- التأثير الثاني: موجة النقر (Ripple) ---
        let dx = hex.x - clickPos.x;
        let dy = hex.y - clickPos.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let rippleOpacity = 0;
        
        if (timeElapsed < 2.5 && Math.abs(distance - waveRadius) < waveThickness) {
          rippleOpacity = 0.5 * (1 - Math.abs(distance - waveRadius) / waveThickness);
          rippleOpacity *= Math.max(0, 1 - (timeElapsed / 2.5));
        }

        // دمج التأثيرين (نأخذ القيمة الأعلى بين النبض والموجة)
        let finalOpacity = Math.max(baseOpacity, rippleOpacity);

        drawHex(hex.x, hex.y, hexSize - 2, finalOpacity);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', // إصلاح التمدد
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 0,
        pointerEvents: 'none' // يسمح بمرور النقرات للعناصر التي تحته
      }}
    />
  );
}