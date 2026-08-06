import { useEffect, useRef } from 'react';

export default function ResearchParticles() {
  const canvasRef = useRef(null);

  // دالة لتحويل لون HEX إلى RGB لكي نتحكم بالشفافية بسهولة
  const hexToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 28, g: 224, b: 198 }; // لون السيان الافتراضي كاحتياطي
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId;

    // 1. ضبط الحجم بناءً على دقة الشاشة الحقيقية (Viewport) لمنع التشوه
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); 
    };

    // 2. تتبع إحداثيات الماوس بدقة (مباشرة من الشاشة)
    const mouse = { x: null, y: null, radius: 120 };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    // 3. بناء فئة الجسيمات
    class Particle {
      constructor(x, y, directionX, directionY, size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
      }
      
      // رسم الجسيم
      draw(rgb) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`;
        ctx.fill();
      }

      // تحديث الحركة والتفاعل
      update(rgb) {
        // الارتداد من حواف الشاشة
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // التفاعل مع الماوس (ابتعاد الجسيمات)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 3;
            this.y -= (dy / distance) * force * 3;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw(rgb);
      }
    }

    // 4. إنشاء وتوزيع الجسيمات
    const init = () => {
      particlesArray = [];
      // التحكم بعدد الجسيمات بناءً على مساحة الشاشة
      let numberOfParticles = (canvas.width * canvas.height) / 10000; 
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1; // جسيمات صغيرة وأنيقة
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let directionX = (Math.random() * 1) - 0.5;
        let directionY = (Math.random() * 1) - 0.5;
        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    };

    // 5. رسم الخطوط بين الجسيمات المتقاربة
    const connect = (rgb) => {
      let maxDistance = 130;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            let opacityValue = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacityValue * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // 6. حلقة التحديث المستمرة (الأنيميشن)
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // قراءة اللون المختار من الثيم باستمرار
      const hexColor = getComputedStyle(document.documentElement).getPropertyValue('--c-cyan').trim() || '#1CE0C6';
      const currentRgb = hexToRgb(hexColor);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(currentRgb);
      }
      connect(currentRgb);
    };

    // التشغيل
    setCanvasSize();
    animate();

    // تنظيف الأحداث عند إغلاق الصفحة أو الانتقال لصفحة أخرى
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed', // العنصر الأهم لمنع التمدد وجعله ثابتاً في الخلفية
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0, 
        pointerEvents: 'none' // يمنع حجب النقرات عن الأزرار
      }}
    />
  );
}