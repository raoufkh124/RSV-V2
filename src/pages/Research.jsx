import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const nanoModelsList = [
  { id: 'transistor', title: 'Nano Transistor', desc: 'Silicon-based architecture', type: 'transistor', color: '#1CE0C6' },
  { id: 'sensor', title: 'Nano Sensor', desc: 'Molecular detection model', type: 'sensor', color: '#3B82F6' },
  { id: 'graphene', title: 'Graphene Lattice', desc: 'Hexagonal carbon structure', type: 'graphene', color: '#10B981' }
];

export default function ResearchPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModel, setActiveModel] = useState(null);

  const handleOpenModal = (model) => {
    setActiveModel(model);
    setIsModalOpen(true);
  };

  return (
    <div id="research" className="page">
      
      {/* 1. Hero Section */}
      <section className="hero research-hero">
        <div className="container">
          <div className="section-tag">&mdash; NANO &bull; INNOVATE &bull; IMPACT</div>
          <h1 className="hero-title research-hero-title">Our Research & Methodology</h1>
          <h3 className="research-hero-subtitle">From Literature to Simulation</h3>
          <p className="hero-desc">At RSP, we believe in a research-first methodology. Before any physical model is printed, our members dive deep into scientific literature, extract precise material properties, and translate theoretical data into accurate digital simulations.</p>
        </div>
      </section>

      {/* 2. Mission Section */}
      <section className="mission-section">
        <div className="container mission-container">
          <div className="mission-statement-wrapper">
            <h2 className="mission-statement-text">
              This isn't a club about one molecule &mdash; it's a club about <span className="mission-statement-highlight">how to research</span>.
            </h2>
          </div>
          <div className="mission-details-wrapper">
            <div className="mission-box">
              <p className="mission-box-text">RSP is a scientific club built to make research methodology in nanoscience approachable. We combine deep analysis of scientific literature, digital simulation, and physical embodiment to train a generation of students capable of real scientific publication and technological development.</p>
            </div>
            <p className="mission-details-desc">Graphene, crystal lattices, transistor , nano filters &mdash; the material changes from project to project. What doesn't change is the discipline: read the literature critically, simulate rigorously, and defend a result. That process is the actual thing members leave with, and it transfers to any nanoscale system, not just the one they happened to simulate first.</p>
          </div>
        </div>
      </section>

      {/* 3. Workflow Section */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-tag">&mdash; HOW WE RESEARCH</div>
          <h2 className="section-heading">The Research Workflow</h2>
          <p className="section-subheading">Three stages, run in order, every time &mdash; each one validates the next.</p>
          
          <div className="workflow-cards-grid">
            <div className="tech-card research-tech-card">
              <div className="section-tag research-tag">L-01 &bull; LITERATURE</div>
              <h3 className="research-card-title">Literature Analysis</h3>
              <p className="research-card-desc">Sourcing peer-reviewed papers to understand crystal structures, lattice parameters, and atomic behaviors &mdash; using research platforms like Google Scholar and ResearchGate to build a solid knowledge base before moving forward.</p>
            </div>
            <div className="tech-card research-tech-card">
              <div className="section-tag research-tag">E-02 &bull; EXCHANGE</div>
              <h3 className="research-card-title">Exchanging Researches</h3>
              <p className="research-card-desc">Sharing findings across the team &mdash; pairing preparatory-cycle students with nano-specialty students to compare notes and validate interpretations, using collaborative apps like Notion or Discord to keep everyone aligned.</p>
            </div>
            <div className="tech-card research-tech-card">
              <div className="section-tag research-tag">R-03 &bull; Result</div>
              <h3 className="research-card-title">Developing the Result</h3>
              <p className="research-card-desc">Turning validated research into a tangible model &mdash; building the structure in VESTA, running molecular dynamics in LAMMPS, and analyzing it in OVITO before exporting to a 3D-printable format.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Resources Section */}
      <section className="resources-section">
        <div className="container">
          <div className="section-tag">&mdash; ACADEMIC RESOURCES & TOOLING</div>
          <h2 className="section-heading">What you'll need</h2>
          <p className="section-subheading resources-subheading">Every member is trained on this stack. No prior simulation experience required.</p>
          
          <div className="resources-list-container">
            
            <div className="resource-item">
              <div className="resource-info">
                <div className="resource-number">01</div>
                <div>
                  <h3 className="resource-title">VESTA</h3>
                  <p className="resource-desc">Visualization for Electronic and Structural Analysis</p>
                </div>
              </div>
              <button className="resource-btn">+</button>
            </div>

            <div className="resource-item">
              <div className="resource-info">
                <div className="resource-number">02</div>
                <div>
                  <h3 className="resource-title">LAMMPS</h3>
                  <p className="resource-desc">Large-scale Atomic/Molecular Massively Parallel Simulator</p>
                </div>
              </div>
              <button className="resource-btn">+</button>
            </div>

            <div className="resource-item">
              <div className="resource-info">
                <div className="resource-number">03</div>
                <div>
                  <h3 className="resource-title">OVITO</h3>
                  <p className="resource-desc">Open Visualization Tool</p>
                </div>
              </div>
              <button className="resource-btn">+</button>
            </div>

            <div className="resource-item">
              <div className="resource-info">
                <div className="resource-number">04</div>
                <div>
                  <h3 className="resource-title">Crystallography Databases</h3>
                  <p className="resource-desc">Open-access structural references</p>
                </div>
              </div>
              <button className="resource-btn">+</button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Case Study Section */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-tag">&mdash; CASE STUDY</div>
          <h2 className="section-heading">Featured Research</h2>
          <p className="section-subheading">A look at one project moving through the full workflow, from a single monolayer to a stacked supercell.</p>

          <div className="project-card">
            <div className="project-image project-image-centered">
              <img src="https://images.unsplash.com/photo-1614935151651-0bea6508abb6?auto=format&fit=crop&q=80&w=800" alt="Graphene Lattice"/>
            </div>
            <div className="project-info">
              <h3 className="project-title">Graphene to Graphite Supercell Transition</h3>
              
              <div className="section-tag project-tag">OBJECTIVE</div>
              <p className="project-desc">Understanding interlayer bonding and atomic force dynamics in carbon-based nanomaterials.</p>
              
              <ul className="project-list">
                <li className="project-list-item">
                  <span className="project-list-bullet"></span>
                  Building a foundational 2x2 graphene monolayer from the absolute beginning using VESTA.
                </li>
                <li className="project-list-item">
                  <span className="project-list-bullet"></span>
                  Expanding the monolayer vertically to construct a precise ten-layer graphite supercell structure.
                </li>
                <li className="project-list-item">
                  <span className="project-list-bullet"></span>
                  Defining the simulation boundary matrix and establishing a primary axis length of 60 Å.
                </li>
                <li className="project-list-item">
                  <span className="project-list-bullet"></span>
                  Exporting the finalized structural data to run an atomic force simulation in LAMMPS, allowing members to analyze the graphical user interface and simulation outputs.
                </li>
              </ul>

              <div className="project-specs-grid">
                <div>
                  <div className="section-tag spec-tag">BASE STRUCTURE</div>
                  <div className="spec-value">2x2 graphene monolayer</div>
                </div>
                <div>
                  <div className="section-tag spec-tag">SUPERCELL</div>
                  <div className="spec-value">10-layer graphite</div>
                </div>
                <div>
                  <div className="section-tag spec-tag">SIMULATION AXIS</div>
                  <div className="spec-value">60 Å</div>
                </div>
                <div>
                  <div className="section-tag spec-tag">TOOLCHAIN</div>
                  <div className="spec-value">VESTA &rarr; LAMMPS &rarr; OVITO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to start your first simulation?</h2>
          <NavLink  className="btn btn-gradient-large cta-btn" to="/joinus">Join the Research Team</NavLink>
        </div>
      </section>

    </div>
  );
}