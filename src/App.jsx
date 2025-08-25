import NavbarComponent from './components/ui/Navbar.component.jsx';
import FooterComponent from './components/ui/Footer.component.jsx';
import HomePage from './pages/Home.page.jsx';
import FAQPage from './pages/FAQ.page.jsx';
import {Routes, Route } from 'react-router-dom';
import AboutusPage from './pages/Aboutus.page.jsx';
import ContactusPage from './pages/Contactus.page.jsx';
function App() {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent></NavbarComponent>
    
      {/* Wapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/aboutus" element={<AboutusPage />} />
          <Route path="/contactus" element={<ContactusPage />} />
        </Routes>
      </div>

      {/* Footer */}
     <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
