import { Link, NavLink } from 'react-router-dom';
import backgroundVideo from '../assets/background.mp4';
export default function Home() {
  return (
    <div id="home" className="page">
      
      {/* 1. Hero Section */}
      <section className="hero">
        <video 
          className="bg background-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container">
          <div className="subtitle">
            <span className="highlight">NANO</span> &bull; INNOVATE &bull; IMPACT
          </div>
          <h1 className="hero-title">
            RSP CLUB: RESEARCH,<br />
            SIMULATION &<br />
            <span className="highlight-text">PRODUCTION</span>
          </h1>
          <p className="hero-desc">
            Turn nanoscale materials into physical reality. We train students to master
            research methodology, digital simulation and real world production.
          </p>
          <div className="hero-actions">
            <NavLink className="btn btn-gradient-large" to="/joinus">Become a Member</NavLink>
            <Link to="/simulate">
              <button className="btn btn-outline nav-link-btn">Our Simulations</button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Pipeline Section */}
      <section className="pipeline">
        <div className="container">
          <div className="section-tag">&mdash; HOW WE WORK</div>
          <h2 className="section-heading">The RSP Pipeline</h2>
          <p className="section-subheading">Every project moves through the same three phases...</p>
          
          <div className="timeline">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-node">R-01</div>
              <div className="timeline-content">
                <div className="phase-tag">PHASE ONE</div>
                <h3>Research</h3>
                <p>Deep analysis of scientific literature to build a strong theoretical foundation and define clear research...</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-node node-s">S-02</div>
              <div className="timeline-content">
                <div className="phase-tag">PHASE TWO</div>
                <h3>Simulate</h3>
                <p>Design and execute advanced digital simulations to model nanoscale phenomena and validate theoretical hypotheses.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-node node-p">P-03</div>
              <div className="timeline-content">
                <div className="phase-tag">PHASE THREE</div>
                <h3>Produce</h3>
                <p>Bring simulated models into physical realizations...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <div className="section-tag">&mdash; TECHNOLOGIES & TOOLS</div>
          <h2 className="section-heading">What we teach members to use</h2>
          
          <div className="cards-grid">
            <div className="tech-card">
              <div className="hex-bullet"></div>
              <h3>VESTA</h3>
              <p>Crystal structure construction.</p>
            </div>
            <div className="tech-card">
              <div className="hex-bullet"></div>
              <h3>LAMMPS</h3>
              <p>Molecular dynamics simulation.</p>
            </div>
            <div className="tech-card">
              <div className="hex-bullet"></div>
              <h3>OVITO</h3>
              <p>Trajectory visualization.</p>
            </div>
            <div className="tech-card">
              <div className="hex-bullet"></div>
              <h3>CAD & Drafting</h3>
              <p>Print-ready geometry preparation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Project Section */}
      <section className="featured-project">
        <div className="container">
          <div className="section-tag">&mdash; FEATURED PROJECT</div>
          <h2 className="section-heading">What members actually build</h2>
          
          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://images.unsplash.com/photo-1614935151651-0bea6508abb6?auto=format&fit=crop&q=80&w=800"
                alt="Graphite"
              />
            </div>
            <div className="project-info">
              <div className="section-tag">&mdash; SIMULATION LOG</div>
              <h3>Graphite Supercell Simulation</h3>
              <p>Modeling a 3-layer graphite supercell starting from a 2x2 graphene monolayer...</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}