import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TermsAndConditions from './pages/legal/TermsAndConditions';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import CookiePolicy from './pages/legal/CookiePolicy';
import Licenses from './pages/legal/Licenses';

function App() {
  useEffect(() => {
    // Update the page title to Spanish
    document.title = 'Relaxm Life - Tu Aplicación de Salud';
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal/terms" element={<TermsAndConditions />} />
        <Route path="/legal/privacy" element={<PrivacyPolicy />} />
        <Route path="/legal/cookies" element={<CookiePolicy />} />
        <Route path="/legal/licenses" element={<Licenses />} />
      </Routes>
    </Router>
  );
}

export default App;