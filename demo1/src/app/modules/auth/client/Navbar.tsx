import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { toAbsoluteUrl } from '../../../../_metronic/helpers';

function Navbar() {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled >= 100) {
        setNavbarColor('navbar-white');
      } else {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <nav className={`navbar ${navbarColor}`}>
        <div className="container-fluid">
          <div className="navbar-header">
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/axialogos.png')}
              className='h-65px w-150px app-sidebar-logo-default'
            />
            <a className="navbar-brand smooth-scroll" href="#home" onClick={scrollToTop}></a>
          </div>
          <div id="content">
            <ul className="nav">
              <li><ScrollLink className="smooth-scroll" to="home-page" smooth={true} duration={500}>Home</ScrollLink></li>
              <li><ScrollLink className="smooth-scroll" to="about" smooth={true} duration={500}>About</ScrollLink></li>
              <li><ScrollLink className="smooth-scroll" to="services" smooth={true} duration={500}>Services</ScrollLink></li>
              <li><Link className="smooth-scroll" to="/auth/loginAdmin"  >Get started</Link></li>
              <li><Link className="smooth-scroll" to="/auth/login">Sign In</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
