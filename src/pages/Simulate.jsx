import { useState } from 'react';
import SimulationModal from '../components/SimulationModal'; // استيراد النافذة

const nanoModelsList = [
  { id: 'macro-transistor', title: 'Transistor', desc: 'Standard TO-220 Package', type: 'transistor', color: '#1CE0C6' },
  { id: 'nano-transistor', title: 'Nano Transistor', desc: 'Gate-All-Around (GAA) Architecture', type: 'nano_transistor', color: '#EC4899' }, // لون وردي مقارب للصورة
  { id: 'sensor', title: 'Nano Sensor', desc: 'Molecular detection model', type: 'sensor', color: '#3B82F6' },
  { id: 'graphene', title: 'Graphene Lattice', desc: 'Hexagonal carbon structure', type: 'graphene', color: '#10B981' }
];

export default function Simulate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModel, setActiveModel] = useState(null);

  const handleOpenModal = (model) => {
    setActiveModel(model);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveModel(null), 300); // تأخير بسيط لتفريغ المودل بعد انتهاء حركة الإغلاق
  };

  return (
    <div className="page active">
      <section className="hero" style={{ paddingTop: '150px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="section-tag">&mdash; INTERACTIVE MODELS</div>
          <h1 className="hero-title" style={{ marginBottom: '10px' }}>Our <span className="highlight-text">Simulations</span></h1>
          <h3 className="research-hero-subtitle">Experience the Nanoscale</h3>
          <p className="hero-desc">Select a nanostructure below to initialize our WebGL rendering engine.</p>
        </div>
      </section>

      <section style={{ padding: '20px 0 100px' }}>
        <div className="container">
          <div className="workflow-grid">
            {nanoModelsList.map((model) => (
              <div 
                key={model.id} 
                className="workflow-card" 
                style={{ cursor: 'pointer', borderTop: `2px solid ${model.color}` }}
                onClick={() => handleOpenModal(model)}
              >
                <div className="hex-bullet" style={{ background: model.color, marginBottom: '15px' }}></div>
                <h3 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}>{model.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{model.desc}</p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: model.color, fontWeight: 700, letterSpacing: '1px' }}>
                  INITIALIZE RENDER &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* استدعاء مكون الـ 3D هنا */}
      <SimulationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        model={activeModel} 
      />

    </div>
  );
}