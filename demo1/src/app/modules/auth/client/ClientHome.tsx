import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Navbar from "./Navbar";
import './flip.css'; // Import your CSS file for styling
import { About } from "./About";
import Map from "./Map";

export function ClientHome() {
  const [showScrollButton, setShowScrollButton] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowScrollButton(scrolled < 100 && location.pathname !== "/About");
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <>
      <div className="home-page">
        <Navbar />

        <div className="video-background position-relative">
          <video autoPlay loop muted className="w-100 h-100 video-dark-mode">
            <source src={require('./pexels-cottonbro-studio-4489931-4096x2160-50fps.mp4')} type="video/mp4" />
          </video>
          <div className="content position-absolute top-50 start-50 translate-middle text-center text-white">
           
          </div>
        </div>
        {showScrollButton && (
          <div className="scroll-button">
            <ScrollLink
              to="about-01"
              spy={true}
              smooth={true}
              offset={-64}
              duration={1250}
              className="scroll-button-link"
            >
              <svg className="scroll-button-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 16.59L6.71 11.29a1.003 1.003 0 1 1 1.42-1.42L12 13.76l3.88-3.89a1.003 1.003 0 1 1 1.42 1.42L12 16.59z"
                />
              </svg>
            </ScrollLink>
          </div>
        )}
      </div>
      <div>
        <About />
      </div>
      <div>
        <Map/>
      </div>
    </>
  );
}
