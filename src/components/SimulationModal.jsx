import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

export default function SimulationModal({ isOpen, onClose, model }) {
  const mountRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowAnimation(true), 10);
    } else {
      setShowAnimation(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !model || !mountRef.current) return;

    setIsLoading(true);
    let animationId;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5); // تم تقريب الكاميرا لكي لا يبدو المجسم صغيراً

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(10, 20, 10);
    scene.add(light);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0;

    let currentModelGroup = new THREE.Group();
    scene.add(currentModelGroup);

    // ==========================================
    // 1. الماكرو ترانزيستور القديم
    // ==========================================
    const buildTransistor = (color) => {
        const group = new THREE.Group();
        const body = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2, 0.5), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8 }));
        body.position.y = 1;
        const metalMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.9, roughness: 0.2 });
        const tab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.5, 0.1), metalMat);
        tab.position.set(0, 1.25, -0.25);
        const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.12, 16), new THREE.MeshBasicMaterial({ color: 0x000000 }));
        hole.rotation.x = Math.PI / 2;
        hole.position.set(0, 2.1, -0.25);
        const legGeom = new THREE.BoxGeometry(0.2, 2, 0.1);
        for(let i = -1; i <= 1; i++) {
            const leg = new THREE.Mesh(legGeom, metalMat);
            leg.position.set(i * 0.5, -0.5, 0);
            group.add(leg);
        }
        const glow = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.51), new THREE.MeshStandardMaterial({ color: new THREE.Color(color), emissive: new THREE.Color(color), emissiveIntensity: 0.4 }));
        glow.position.set(0, 1, 0);
        group.add(body, tab, hole, glow);
        group.scale.set(0.8, 0.8, 0.8);
        group.position.y = -0.5;
        return group;
    };

    // ==========================================
    // 2. النانو ترانزيستور الجديد (GAAFET)
    // ==========================================
    const buildNanoTransistor = (color) => {
        const group = new THREE.Group();
        const baseMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: 0.9 });
        const sdMat = new THREE.MeshStandardMaterial({ color: 0x7b96d4, roughness: 0.6, metalness: 0.1 });
        const gateMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(color), roughness: 0.4, metalness: 0.2 });
        const channelMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.2, metalness: 0.8 });

        const base = new THREE.Mesh(new THREE.BoxGeometry(4, 0.8, 2.5), baseMat);
        base.position.y = -0.4;
        const source = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 2.5), sdMat);
        source.position.set(-1.4, 0.6, 0);
        const drain = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 2.5), sdMat);
        drain.position.set(1.4, 0.6, 0);
        const gate = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2, 2.6), gateMat);
        gate.position.set(0, 1, 0);
        
        const channelGeom = new THREE.BoxGeometry(4, 0.2, 0.4);
        const channel1 = new THREE.Mesh(channelGeom, channelMat);
        channel1.position.set(0, 0.4, 0);
        const channel2 = new THREE.Mesh(channelGeom, channelMat);
        channel2.position.set(0, 0.9, 0);
        const channel3 = new THREE.Mesh(channelGeom, channelMat);
        channel3.position.set(0, 1.4, 0);

        group.add(base, source, drain, gate, channel1, channel2, channel3);
        group.scale.set(0.6, 0.6, 0.6);
        group.position.y = -0.2;
        return group;
    };

    // ==========================================
    // 3. السينسور
    // ==========================================
    const buildSensor = (color) => {
        const group = new THREE.Group();
        const base = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.2, 2.5), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 }));
        const chip = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.3, 1.5), new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7 }));
        chip.position.y = 0.15;
        const sensorCore = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.35, 32), new THREE.MeshStandardMaterial({ color: new THREE.Color(color), emissive: new THREE.Color(color), emissiveIntensity: 0.6 }));
        sensorCore.position.y = 0.2;
        const pinMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 1, roughness: 0.3 });
        const pinGeom = new THREE.BoxGeometry(0.2, 0.2, 0.6);
        for(let i = -1; i <= 1; i += 2) {
            for(let j = -0.8; j <= 0.8; j += 0.8) {
                const pinX = new THREE.Mesh(pinGeom, pinMat);
                pinX.position.set(i * 1.3, 0, j);
                const pinZ = new THREE.Mesh(pinGeom, pinMat);
                pinZ.rotation.y = Math.PI / 2;
                pinZ.position.set(j, 0, i * 1.3);
                group.add(pinX, pinZ);
            }
        }
        group.add(base, chip, sensorCore);
        return group;
    };

    // ==========================================
    // تحديد النوع
    // ==========================================
    if (model.type === 'transistor') {
        currentModelGroup.add(buildTransistor(model.color));
        setIsLoading(false);
    } else if (model.type === 'nano_transistor') {
        currentModelGroup.add(buildNanoTransistor(model.color));
        setIsLoading(false);
    } else if (model.type === 'sensor') {
        currentModelGroup.add(buildSensor(model.color));
        setIsLoading(false);
    } else if (model.type === 'graphene') {
        // استدعاء محمل ملفات STL
        const loader = new STLLoader();
        
        // جلب الملف من مجلد public
        loader.load('/graphene.stl', 
            (geometry) => {
                // إعطاء المجسم لون الجرافين (الأخضر) بناءً على ما حددته في القائمة
                const material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color(model.color),
                    metalness: 0.6, 
                    roughness: 0.2, 
                    side: THREE.DoubleSide
                });
                
                // 1. توسيط المجسم في منتصف الشاشة تماماً
                geometry.center();
                
                // 2. حساب أبعاد المجسم الحقيقية
                geometry.computeBoundingBox();
                const size = new THREE.Vector3();
                geometry.boundingBox.getSize(size);
                
                // 3. تعديل الحجم تلقائياً (Scaling) 
                // لأن برامج المحاكاة أحياناً تصدر الملفات بأحجام عملاقة أو مجهرية
                const scaleFactor = 5 / Math.max(size.x, size.y, size.z);
                
                const mesh = new THREE.Mesh(geometry, material);
                mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
                
                // إضافة المجسم للمشهد
                currentModelGroup.add(mesh);
                setIsLoading(false);
            },
            undefined, // مسار التقدم (Loading Progress)
            (error) => {
                console.error("لم يتم العثور على ملف STL، يرجى التأكد من المسار", error);
            }
        );
    }

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // ==========================================
    // Resize Observer (لحل مشكلة المجسم الصغير)
    // ==========================================
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) return; 
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });

    if (mountRef.current) {
      resizeObserver.observe(mountRef.current);
    }

    // التنظيف
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      if (controls) controls.dispose();
      
      currentModelGroup.traverse((child) => {
          if (child.isMesh) {
              if (child.geometry) child.geometry.dispose();
              if (child.material) {
                  if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
                  else child.material.dispose();
              }
          }
      });
      scene.remove(currentModelGroup);
      
      if (renderer) {
          renderer.dispose();
          if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
              mountRef.current.removeChild(renderer.domElement);
          }
      }
    };
  }, [isOpen, model]);

  if (!isOpen) return null;

  // ==========================================
  // هذا هو الـ Portal المكتوب بشكل سليم 100%
  // ==========================================
  return createPortal(
    <div className={`modal-overlay ${showAnimation ? 'active' : ''}`}>
      <div className="modal-box">
        <div className="modal-header">
          <div className="sys-status">
            <span className="dot-indicator" style={{ backgroundColor: model?.color, boxShadow: `0 0 10px ${model?.color}` }}></span>
            <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
              RENDERING: <span style={{ color: model?.color }}>{model?.title?.toUpperCase()}</span>
            </span>
          </div>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div id="canvas-wrapper" style={{ flexGrow: 1, position: 'relative', overflow: 'hidden' }}>
          <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
          {isLoading && (
            <div className="loader" style={{ display: 'block', borderTopColor: model?.color }}></div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}