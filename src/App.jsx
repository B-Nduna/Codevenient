import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/style.css';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CookieConsent from './components/CookieConsent';
import Analytics from './components/Analytics';
import Home from './pages/Home';
import CustomBuild from './pages/CustomBuild';
import About from './pages/About';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

const basename = import.meta.env.BASE_URL !== '/' ? import.meta.env.BASE_URL.replace(/\/$/, '') : '';

function AppShell() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="app-container">
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Analytics />
      <Drawer />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/custom-build" element={<CustomBuild/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/terms" element={<TermsConditions/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <AppShell />
    </BrowserRouter>
  );
}
