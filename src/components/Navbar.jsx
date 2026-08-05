import { NavLink, Link } from 'react-router-dom';
import logoLarge from '../assets/logo-large-white.png'
import logoSmall from '../assets/logo-black.png'
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" className="logo-icon" style={{ display: 'flex', alignItems: 'center', border: 'none', width: '200px', height: '40px', clipPath: 'none' }}>
          <img style={{ width: '30%' }} src={logoSmall} alt="RSP Logo" />
          <img style={{ width: '70%' }} src={logoLarge} alt="RSP Logo Text" />
        </Link>
      </div>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
        <NavLink to="/research" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Research</NavLink>
        <NavLink to="/simulate" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Simulate</NavLink>
      </nav>
      <NavLink to='/joinus' className="btn btn-gradient">Join the Club</NavLink>
    </header>
  );
}