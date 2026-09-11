import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Cpu, Code2, Sparkles, Mail } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-vh-100 d-flex flex-column bg-dark text-white">
        <Navbar />
        <div className="container my-auto text-center py-5">
          <h2 className="display-5 font-heading fw-bold mb-3">Project Not Found</h2>
          <p className="text-white-50 mb-4">The project pitch you are looking for does not exist.</p>
          <button onClick={() => navigate('/')} className="btn btn-purple-primary">
            ← Back to Home Portfolio
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const { pitch } = project;

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />

      <main className="flex-grow-1 pt-5 mt-4 pb-5">
        <div className="container py-4">
          {/* Breadcrumb / Back button */}
          <div className="mb-4">
            <Link to="/" className="btn btn-purple-outline btn-sm d-inline-flex align-items-center gap-2">
              <ArrowLeft size={16} /> Back to Main Portfolio
            </Link>
          </div>

          {/* Hero Header */}
          <div className="glass-card p-4 p-md-5 mb-5">
            <div className="row align-items-center gy-4">
              <div className="col-lg-7">
                <span className="px-3 py-1 rounded-pill d-inline-block mb-3" style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid var(--accent-purple)', color: 'var(--accent-purple-light)', fontSize: '0.82rem', fontWeight: '600' }}>
                  {project.category}
                </span>

                <h1 className="display-5 fw-bold text-white font-heading mb-3">
                  {project.title}
                </h1>

                <p className="lead text-white-50 mb-4">
                  {project.subtitle}
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="skill-badge py-1 px-3" style={{ fontSize: '0.8rem' }}>
                      <Layers size={13} /> {tag}
                    </span>
                  ))}
                </div>

                <div className="d-flex flex-wrap align-items-center gap-3">
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn btn-purple-primary d-inline-flex align-items-center gap-2">
                    <ExternalLink size={18} /> Launch Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-purple-outline d-inline-flex align-items-center gap-2">
                    <GithubIcon size={18} /> View GitHub Source
                  </a>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="rounded-4 overflow-hidden shadow-lg border border-purple p-2" style={{ background: 'rgba(13, 7, 26, 0.8)' }}>
                  <img src={project.image} alt={project.title} className="img-fluid rounded-3 w-100" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Elevator Pitch Card */}
          <div className="glass-card p-4 p-md-5 mb-4" style={{ background: 'linear-gradient(135deg, rgba(22, 12, 42, 0.9) 0%, rgba(35, 18, 66, 0.95) 100%)', border: '1px solid var(--accent-purple-light)' }}>
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="p-3 rounded-circle" style={{ background: 'rgba(168, 85, 247, 0.25)', border: '1px solid var(--accent-purple)' }}>
                <Sparkles size={24} className="text-warning" />
              </div>
              <div>
                <h2 className="h4 text-white font-heading mb-0">Project Elevator Pitch</h2>
                <span className="text-white-50 small">Executive Summary & Value Proposition</span>
              </div>
            </div>
            <p className="lead text-white mb-0" style={{ lineHeight: '1.8', fontSize: '1.15rem' }}>
              "{pitch.elevatorPitch}"
            </p>
          </div>

          <div className="row g-4 mb-4">
            {/* Problem Statement */}
            <div className="col-md-6">
              <div className="glass-card p-4 h-100">
                <h3 className="h5 text-white font-heading fw-bold mb-3 d-flex align-items-center gap-2">
                  <span className="p-2 rounded-2" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#f87171' }}>⚠️</span> Problem Statement
                </h3>
                <p className="text-white-50 leading-relaxed mb-0">
                  {pitch.problemStatement}
                </p>
              </div>
            </div>

            {/* Solution Architecture */}
            <div className="col-md-6">
              <div className="glass-card p-4 h-100">
                <h3 className="h5 text-white font-heading fw-bold mb-3 d-flex align-items-center gap-2">
                  <span className="p-2 rounded-2" style={{ background: 'rgba(168, 85, 247, 0.15)', color: 'var(--accent-purple-light)' }}>💡</span> Engineered Solution
                </h3>
                <p className="text-white-50 leading-relaxed mb-0">
                  {pitch.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features & Tech Architecture Grid */}
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <div className="glass-card p-4 h-100">
                <h3 className="h5 text-white font-heading fw-bold mb-4 d-flex align-items-center gap-2">
                  <CheckCircle2 size={22} style={{ color: 'var(--accent-purple-light)' }} /> Key System Features
                </h3>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  {pitch.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ background: 'rgba(13, 7, 26, 0.6)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                      <span className="badge rounded-circle p-1" style={{ background: 'var(--accent-purple)', color: '#fff', fontSize: '0.7rem' }}>{idx + 1}</span>
                      <span className="text-white-50 fw-medium" style={{ fontSize: '0.92rem' }}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="glass-card p-4 h-100">
                <h3 className="h5 text-white font-heading fw-bold mb-4 d-flex align-items-center gap-2">
                  <Cpu size={22} style={{ color: 'var(--accent-purple-light)' }} /> Technical Stack & Architecture
                </h3>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  {pitch.technicalArchitecture.map((arch, idx) => (
                    <li key={idx} className="p-3 rounded-3" style={{ background: 'rgba(13, 7, 26, 0.6)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                      <span className="text-white-50 small d-block" style={{ lineHeight: '1.6' }}>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sangeetha Ramesh's Role Card */}
          <div className="glass-card p-4 p-md-5 mb-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="p-2 rounded-circle" style={{ background: 'rgba(168, 85, 247, 0.2)', border: '1px solid var(--accent-purple)' }}>
                <Code2 size={24} className="text-white" />
              </div>
              <div>
                <h3 className="h5 text-white font-heading mb-0">Developer Contribution</h3>
                <span className="text-white-50 small">Sangeetha Ramesh's Role</span>
              </div>
            </div>
            <p className="text-white-50 mb-0 leading-relaxed">
              {pitch.myRole}
            </p>
          </div>

          {/* Bottom Action bar */}
          <div className="text-center py-4">
            <h3 className="h5 text-white font-heading mb-3">Interested in this architecture or hiring Sangeetha?</h3>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/#contact" className="btn btn-purple-primary d-inline-flex align-items-center gap-2">
                <Mail size={18} /> Contact Sangeetha
              </Link>
              <Link to="/" className="btn btn-purple-outline d-inline-flex align-items-center gap-2">
                View Other Projects
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
