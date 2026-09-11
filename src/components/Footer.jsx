import React from 'react';
import { Mail, ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-5 pb-4 position-relative border-top border-secondary border-opacity-25" style={{ background: 'rgba(5, 3, 10, 0.95)' }}>
      <div className="container py-3">
        <div className="row gy-4 align-items-center mb-4">
          <div className="col-md-6 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
              <div className="p-2 rounded-circle" style={{ background: 'rgba(168, 85, 247, 0.2)', border: '1px solid var(--accent-purple)' }}>
                <Code2 size={20} className="text-white" />
              </div>
              <span className="fw-bold text-white fs-5 font-heading">Sangeetha Ramesh</span>
            </div>
            <p className="text-white-50 small mb-0" style={{ maxWidth: '420px' }}>
              B.Sc. IT Graduate & Software Engineer. Dedicated to creating high-performance web applications with ReactJS & Bootstrap.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3">
              <a 
                href="https://www.linkedin.com/in/sangeetha-ramesh-13a2b72b7/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-purple-outline p-2 rounded-circle d-inline-flex"
                title="Connect on LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href="https://github.com/sangeethascodes" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-purple-outline p-2 rounded-circle d-inline-flex"
                title="View GitHub Projects"
              >
                <GithubIcon size={20} />
              </a>
              {/* <a 
                href="#contact" 
                className="btn btn-purple-outline p-2 rounded-circle d-inline-flex"
                title="Send Email"
              >
                <Mail size={20} />
              </a> */}
              <button 
                onClick={scrollToTop} 
                className="btn btn-purple-primary p-2 rounded-circle ms-2"
                title="Scroll to Top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4 border-top border-secondary border-opacity-25 d-flex flex-column flex-md-row align-items-center justify-content-between text-white-50 small gap-2">
          <div>
            © {new Date().getFullYear()} Sangeetha Ramesh. All Rights Reserved. Built with ReactJS & Bootstrap.
          </div>
          {/* <div className="d-flex gap-4">
            <a href="https://linkedin.com/in/sangeetharamesh" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none hover-text-white">LinkedIn</a>
            <a href="https://github.com/sangeetharamesh" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none hover-text-white">GitHub</a>
            <a href="#contact" className="text-white-50 text-decoration-none hover-text-white">Contact</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
