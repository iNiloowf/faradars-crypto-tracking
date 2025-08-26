import React, {useRef} from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FaBitcoin } from "react-icons/fa";
const NavbarComponent = () => {
  const btnToggleRef = useRef();
  const toggleMenu = () =>{
    btnToggleRef.current.click();
  }
  return (
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
     <Link class="navbar-brand" href="#">
     <FaBitcoin className="navbar-logo"/>
     Crypto Tracking
     </Link>
    <button class="navbar-toggler" 
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarNav"
     aria-controls="navbarNav"
     aria-expanded="false" 
     aria-label="Toggle navigation"
     ref={btnToggleRef} >
      
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
           <li class="nav-item" onClick={toggleMenu}>
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item" onClick={toggleMenu}>
          <Link class="nav-link" to="/faq">FAQ</Link>
        </li>
        <li class="nav-item" onClick={toggleMenu}>
          <Link class="nav-link" to="/aboutus">About Us</Link>
        </li>
      <li class="nav-item" onClick={toggleMenu}>
          <Link class="nav-link" to="/contactus">Contact Us</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  );
};

export default NavbarComponent