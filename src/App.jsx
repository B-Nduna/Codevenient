import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './assets/css/style.css';
import './components/Drawer.css';

import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import PrivacyTerms from './pages/PrivacyTerms';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router basename="/Codevenient">
      <div className="app-container">
        {loading && <Loader onDone={() => setLoading(false)} />}
        {!loading && (
          <>
            <Drawer />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy-terms" element={<PrivacyTerms />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
