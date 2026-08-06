import HexGrid from "../components/HexGrid";
import {motion} from 'framer-motion'
export default function About() {
  return (
    <>
     
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      
      // تأكد من وجود zIndex لكي يبقى المحتوى فوق الخلفية
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }} 
    >
      {/* قسم الهيرو (البداية) */}
      <section className="hero" style={{ paddingTop: '150px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-tag">&mdash; WHO WE ARE</div>
          <h1 className="hero-title" style={{ marginBottom: '10px' }}>
            About <span className="highlight-text">RSP</span>
          </h1>
          <h3 className="research-hero-subtitle">Bridging Theory and Reality</h3>
          <p className="hero-desc">
            We are a dedicated community of innovators, researchers, and tech enthusiasts from the National School of Nanoscience and Nanotechnology, united by a passion for atomic-scale engineering.
          </p>
        </div>
      </section>

      {/* قسم رؤية النادي */}
      <section className="mission-section">
        <div className="container mission-container">
          <div className="mission-statement">
            <h4>Our mission is to bridge the gap between  <span>theoretical science and applied technology.</span></h4>
          </div>
          <div className="mission-details">
            <div className="mission-box">
              <p>
We believe that scientific advancement requires more than passive learning. Our club was founded to demystify the research process, giving students hands-on experience in translating complex nanoscience literature into digital simulations and physical world.              </p>
            </div>
            <p>
Through our Research-First pipeline, members don't just study material science—they actively contribute to it. We equip students with the analytical and technical skills necessary to drive technological development and achieve high-level scientific publication            </p>
          </div>
        </div>
      </section>

      {/* قسم قيم النادي (Core Values) */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-tag">&mdash; OUR CORE VALUES</div>
          <h2 className="section-heading">What Drives Us</h2>
          
          <div className="workflow-grid">
            <div className="workflow-card">
              <div className="section-tag" style={{ marginBottom: '20px', color: 'var(--c-cyan)' }}>
                01 &bull; CURIOSITY
              </div>
              <h3>Relentless Exploration</h3>
              <p>
                We encourage our members to ask the hard questions, dive deep into the latest publications, and never settle for surface-level understanding of any physical phenomenon.
              </p>
            </div>
            
            <div className="workflow-card">
              <div className="section-tag" style={{ marginBottom: '20px', color: 'var(--c-blue)' }}>
                02 &bull; PRECISION
              </div>
              <h3>Scientific Rigor</h3>
              <p>
                In the nanoscale, a single angstrom makes a difference. We uphold strict standards in our simulations, ensuring our digital models accurately reflect real-world physics and chemistry.
              </p>
            </div>
            
            <div className="workflow-card">
              <div className="section-tag" style={{ marginBottom: '20px', color: 'var(--c-green)' }}>
                03 &bull; COMMUNITY
              </div>
              <h3>Collaborative Growth</h3>
              <p>
                Knowledge grows when shared. We foster a mentorship environment where senior nano-specialty students guide preparatory-cycle members, building a strong, united academic family.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </motion.div>
    </>

  );
}