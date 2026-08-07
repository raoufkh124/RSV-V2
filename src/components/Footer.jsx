import logoSmall from '../assets/logo-white.webp'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon small">
              <div className="hex">
                <img
                  style={{
                    width: '100%',
                    filter: 'var(--logo-filter, hue-rotate(0deg))', /* السحر هنا */
                    transition: 'filter 0.3s ease' /* حركة سلسة عند تغيير اللون */
                  }}
                  src={logoSmall}
                  alt="RSP Logo"
                />
              </div>
            </div>
            <span>
              RS
              <span style={{
                color: 'var(--c-cyan)', /* تغيير اللون برمجياً */
                transition: 'color 0.3s ease'
              }}>P</span> Club
            </span>
          </div>
          <p>
            Research, Simulation, Production — training the next generation of nanoscience students, one lattice
            at a time.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#">About</a>
          <a href="#">Pipeline</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>rsp.club@nsnn.dz</p>
          <p className="school-name">National School of Nanoscience and Nanotechnology</p>
          <div className="social-icon">
            <a
              className="social-icon-a"
              href="https://www.instagram.com/rsp.nano/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit RSP Club on Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}