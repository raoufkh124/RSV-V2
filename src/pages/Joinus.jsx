export default function JoinUs() {
  return (
    <div id="join" className="page active">
      
      {/* قسم الهيرو */}
      <section className="hero " style={{paddingBottom: "20px"}}>
        <div className="container">
          <div className="section-tag">&mdash; JOIN THE TEAM</div>
          <h1 className="hero-title">Become an <span className="highlight-text">Innovator</span></h1>
          <p className="hero-desc">
            Ready to turn theoretical physics into physical reality? Fill out the application below to join the RSP Club. We are looking for passionate students ready to master research, simulation, and production.
          </p>
        </div>
      </section>

      {/* قسم النموذج */}
      <section className="join-form-section">
        <div className="container">
          <div className="form-wrapper">
            
            <form className="rsp-form">
              
              {/* الصف الأول: الاسم والإيميل */}
              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input type="text" id="fullName" placeholder="Enter your full name" required />
                </div>
                
                <div className="input-group">
                  <label htmlFor="email">University Email *</label>
                  <input type="email" id="email" placeholder="name@nsnn.dz" required />
                </div>
              </div>

              {/* الصف الثاني: المستوى الدراسي ومجال الاهتمام */}
              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="year">Academic Level *</label>
                  <select id="year" defaultValue="" required>
                    <option value="" disabled hidden>Select your level...</option>
                    <option value="prep1">Preparatory - 1st Year</option>
                    <option value="prep2">Preparatory - 2nd Year</option>
                    <option value="spec">Engineering Specialty</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="department">Area of Interest *</label>
                  <select id="department" defaultValue="" required>
                    <option value="" disabled hidden>Select an area...</option>
                    <option value="research">Literature & Research</option>
                    <option value="simulation">3D Simulation (VESTA/LAMMPS)</option>
                    <option value="production">Production & 3D Printing</option>
                  </select>
                </div>
              </div>

              {/* الحقل الجديد 1: الخبرة السابقة (غير إجباري) */}
              <div className="input-group">
                <label htmlFor="experience">Prior experience (tech, coding, research, hardware — anything relevant)</label>
                <textarea id="experience" rows="2" placeholder="Your answer"></textarea>
              </div>

              {/* الحقل الجديد 2: دور المسؤول (إجباري) */}
              <div className="input-group">
                <label htmlFor="officer">Interested in an officer role? *</label>
                <select id="officer" defaultValue="" required>
                  <option value="" disabled hidden>Choose</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="maybe">Maybe / Not sure yet</option>
                </select>
              </div>

              {/* حقل الدافع */}
              <div className="input-group">
                <label htmlFor="motivation">Why do you want to join RSP? *</label>
                <textarea id="motivation" rows="4" placeholder="Tell us about your passion for nanoscience..." required></textarea>
              </div>

              <button type="button" className="btn btn-gradient-large submit-btn">Submit Application</button>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
}