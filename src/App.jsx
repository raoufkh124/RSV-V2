import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Simulate from './pages/Simulate';
import './style.css'; // استدعاء ملف التنسيقات
import Joinus from './pages/Joinus';
import ThemeSettings from './components/ThemeSettings';
import HexGrid from './components/HexGrid';
import Pipelines from './pages/Pipelines';
import {Analytics} from '@vercel/analytics/react'
function App() {
  const location = useLocation();
  return (
    <>
      <Analytics/>
      <div className="stars-bg"></div>
      <AnimatePresence>
        {location.pathname === '/about' && (
          <motion.div
            key="hex-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // تظهر وتختفي بنعومة
          >
            <HexGrid />
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar />
      <main className="pages-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/simulate" element={<Simulate />} />
          <Route path="/joinus" element={<Joinus />} />
          <Route path="/pipelines" element={<Pipelines />} />
          
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;