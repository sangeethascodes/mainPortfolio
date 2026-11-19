import React from 'react';
import { ArrowDown, Sparkles, Code2, Award, Terminal } from 'lucide-react';

const Hero = () => {
  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-5 mt-5 pb-5 min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      {/* Background Vertical Grid Lines */}
      <div className="kinetic-grid-lines">
        <div className="kinetic-grid-line"></div>
        <div className="kinetic-grid-line"></div>
        <div className="kinetic-grid-line"></div>
        <div className="kinetic-grid-line"></div>
      </div>

      <div className="container position-relative z-1 py-5">
        <div className="row align-items-center gy-5">
          {/* Profile Circular Image Column */}
          <div className="col-lg-5 text-center order-1 order-lg-2">
            <div className="kinetic-profile-circle-container mb-4">
              <img 
                src="/profile.jpg" 
                alt="Sangeetha Ramesh - B.Sc. IT Graduate & Software Engineer" 
                className="kinetic-profile-img"
              />
            </div>
            <div className="badge px-3 py-2 rounded-pill" style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid var(--accent-purple)', color: 'var(--accent-purple-light)', fontSize: '0.78rem' }}>
              🎓 B.Sc. IT Graduate · Available for Roles
            </div>
          </div>

          {/* Main Headline & Intro Column */}
          <div className="col-lg-7 order-2 order-lg-1 text-center text-lg-start">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(168, 85, 247, 0.12)', border: '1px solid rgba(168, 85, 247, 0.25)' }}>
              <span className="w-2 h-2 rounded-circle bg-warning d-inline-block"></span>
              <span className="text-white-50 small font-display tracking-wide uppercase" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>
                FULL-STACK DEVELOPER · FRESHER
              </span>
            </div>

            <h1 className="kinetic-hero-title font-display-title text-white mb-3">
              Building{' '}
              <span className="font-serif-italic">dependable</span>
              <br />
              software.
            </h1>

            <p className="lead text-white-50 mb-4 pe-lg-4" style={{ fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '560px' }}>
              I'm <strong className="text-white">Sangeetha Ramesh</strong> — a full-stack developer and B.Sc. IT graduate passionate about building clean, scalable web applications with ReactJS & Bootstrap, eager to contribute and deliver value.
            </p>

            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3 mb-5">
              <button onClick={scrollToWork} className="btn btn-kinetic-primary d-inline-flex align-items-center gap-2">
                View Projects <ArrowDown size={18} />
              </button>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sangeetharamesh21104@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-kinetic-outline d-inline-flex align-items-center gap-2"
              >
                Get in Touch
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="row g-3 pt-3 border-top border-secondary border-opacity-25">
              <div className="col-4">
                <div className="d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
                  <Award size={22} style={{ color: 'var(--accent-purple-light)' }} />
                  <div>
                    <div className="fw-bold text-white font-heading">B.Sc. IT</div>
                    <div className="text-white-50" style={{ fontSize: '0.72rem' }}>Graduate</div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
                  <Terminal size={22} style={{ color: 'var(--accent-purple-light)' }} />
                  <div>
                    <div className="fw-bold text-white font-heading">React, Django, SQL & NoSQL</div>
                    <div className="text-white-50" style={{ fontSize: '0.72rem' }}>Core Stack</div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
                  <Sparkles size={22} style={{ color: 'var(--accent-purple-light)' }} />
                  <div>
                    <div className="fw-bold text-white font-heading">4 Projects</div>
                    <div className="text-white-50" style={{ fontSize: '0.72rem' }}>Portfolio Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
