import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed-top transition-all duration-500 py-3 ${scrolled ? 'kinetic-glass-nav' : 'bg-transparent'}`}>
        <nav className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="btn p-0 border-0 bg-transparent text-start text-decoration-none"
          >
            <span className="font-display-title text-white fs-4 fw-bold tracking-tight">
              Sangeetha<span style={{ color: 'var(--accent-purple-light)' }}>.</span>Ramesh
            </span>
            <span className="d-block text-white-50" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
              Full-Stack Developer
            </span>
          </button>

          {/* Desktop Links */}
          <div className="d-none d-md-flex align-items-center gap-4">
            <button onClick={() => handleNavClick('projects')} className="btn text-white-50 hover-text-white fw-medium small">
              Projects
            </button>
            <button onClick={() => handleNavClick('about')} className="btn text-white-50 hover-text-white fw-medium small">
              About
            </button>


            <a 
              href="https://github.com/sangeethascodes" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white-50 hover-text-white p-2"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a 
              href="https://www.linkedin.com/in/sangeetha-ramesh-13a2b72b7/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white-50 hover-text-white p-2"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sangeetharamesh21104@gmail.com" 
                className="btn btn-kinetic-outline btn-sm px-4"
                title="Email Me"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email Me
              </a>

            <a 
              href="/resume.pdf" 
              className="btn btn-kinetic-outline btn-sm px-4"
              download
              title="Download Resume"
            >
              My Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="d-md-none btn text-white p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed-top min-vh-100 d-md-none d-flex flex-column justify-content-center align-items-center p-4" 
          style={{ background: 'rgba(9, 5, 20, 0.98)', backdropFilter: 'blur(20px)', zIndex: 1040 }}
        >
          <div className="d-flex flex-column gap-4 text-center">
            <button onClick={() => handleNavClick('hero')} className="btn text-white font-display-title fs-2 fw-bold">
              Home
            </button>
            <button onClick={() => handleNavClick('projects')} className="btn text-white font-display-title fs-2 fw-bold">
              Projects
            </button>
            <button onClick={() => handleNavClick('about')} className="btn text-white font-display-title fs-2 fw-bold">
              About
            </button>
            {/* <button onClick={() => handleNavClick('contact')} className="btn text-white font-display-title fs-2 fw-bold">
              Contact
            </button> */}
            
            <div className="pt-4 border-top border-secondary border-opacity-25 d-flex justify-content-center gap-4">
              <a href="https://github.com/sangeethascodes" target="_blank" rel="noreferrer" className="btn btn-kinetic-outline p-2 rounded-circle">
                <GithubIcon size={22} />
              </a>
              <a href="https://www.linkedin.com/in/sangeetha-ramesh-13a2b72b7/" target="_blank" rel="noreferrer" className="btn btn-kinetic-outline p-2 rounded-circle">
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
