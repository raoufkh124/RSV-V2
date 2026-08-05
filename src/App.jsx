import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Simulate from './pages/Simulate';
import './style.css'; // استدعاء ملف التنسيقات
import Joinus from './pages/Joinus';
import ThemeSettings from './components/ThemeSettings';

function App() {
  return (
    <Router>
      <div className="stars-bg"></div>
      <Navbar />
      <ThemeSettings />
      <main className="pages-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/simulate" element={<Simulate />} />
          <Route path="/joinus" element={<Joinus />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;