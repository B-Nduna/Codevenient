import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drawer from './components/Drawer'; // New import
import Footer from './components/Footer';
import './assets/css/style.css';
import './components/Drawer.css'; // Add this for the tray styles

import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import PrivacyTerms from './pages/PrivacyTerms';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Drawer /> {/* Replaced Navbar */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-terms" element={<PrivacyTerms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;