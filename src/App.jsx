import NavbarComponent from './components/ui/Navbar.component.jsx';
import FooterComponent from './components/ui/Footer.component.jsx';
function App() {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent></NavbarComponent>
    
      {/* Wapper */}
      <div className="wrapper">
        Wrapper
      </div>

      {/* Footer */}
     <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
