import { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './assets/css/style.css';
import { StoreProvider } from './context/StoreContext';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CookieConsent from './components/CookieConsent';
import Analytics from './components/Analytics';
import OrganizationSchema from './components/OrganizationSchema';
import Home from './pages/Home';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import CustomBuild from './pages/CustomBuild';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

function CommerceDrawers() {
  const location = useLocation();
  const commerceRoute = location.pathname.startsWith('/store') || location.pathname === '/checkout';
  if (!commerceRoute) return null;
  return <><CartDrawer/><WishlistDrawer/></>;
}

function AppShell() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="app-container">
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Analytics />
      <OrganizationSchema />
      <Drawer />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/store/:id" element={<ProductDetail/>}/>
          <Route path="/custom-build" element={<CustomBuild/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/terms" element={<TermsConditions/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer />
      <CommerceDrawers />
      <CookieConsent />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <StoreProvider>
        <AppShell />
      </StoreProvider>
    </BrowserRouter>
  );
}
