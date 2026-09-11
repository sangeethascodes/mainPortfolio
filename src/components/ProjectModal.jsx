import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Code2, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { pitch } = project;

  return (
    <div className="kinetic-modal-backdrop" onClick={onClose}>
      <div 
        className="kinetic-modal-content p-4 p-md-5 position-relative" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="btn-close btn-close-white position-absolute top-0 end-0 m-4 p-2 rounded-circle"
          style={{ background: 'rgba(168, 85, 247, 0.2)', border: '1px solid var(--accent-purple)' }}
          aria-label="Close project modal view"
        ></button>

        {/* Modal Header */}
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="font-display fw-bold" style={{ color: 'var(--accent-purple-light)', fontSize: '0.85rem' }}>
            {project.id.toUpperCase()}
          </span>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <span className="text-white-50 small">{project.category}</span>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <span className="text-white-50 small">{project.year || '2025'}</span>
        </div>

        <h2 className="display-6 font-display-title text-white mb-2 fw-bold">
          {project.title}
        </h2>
        
        <p className="text-white-50 mb-4 lead" style={{ fontSize: '1.05rem' }}>
          {project.subtitle}
        </p>

        {/* Project Thumbnail Image Banner */}
        <div className="rounded-4 overflow-hidden mb-4 border border-purple" style={{ height: '260px', background: '#0a0516' }}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-100 h-100 object-fit-cover" 
          />
        </div>

        {/* Executive Elevator Pitch */}
        <div className="p-4 rounded-3 mb-4" style={{ background: 'rgba(13, 7, 26, 0.75)', border: '1px solid var(--accent-purple)' }}>
          <div className="d-flex align-items-center gap-2 mb-2">
            <Sparkles size={18} className="text-warning" />
            <h3 className="h6 font-heading text-white fw-bold mb-0">Executive Elevator Pitch</h3>
          </div>
          <p className="text-white mb-0" style={{ lineHeight: '1.7', fontSize: '1.02rem' }}>
            "{pitch.elevatorPitch}"
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="p-4 rounded-3 h-100" style={{ background: 'rgba(13, 7, 26, 0.5)', border: '1px solid rgba(168, 85, 247, 0.15)' }}>
              <h4 className="h6 font-heading text-white fw-bold mb-2 d-flex align-items-center gap-2">
                <span className="badge bg-danger bg-opacity-25 text-danger px-2 py-1">Problem</span>
              </h4>
              <p className="text-white-50 small mb-0" style={{ lineHeight: '1.6' }}>
                {pitch.problemStatement}
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 rounded-3 h-100" style={{ background: 'rgba(13, 7, 26, 0.5)', border: '1px solid rgba(168, 85, 247, 0.15)' }}>
              <h4 className="h6 font-heading text-white fw-bold mb-2 d-flex align-items-center gap-2">
                <span className="badge bg-purple bg-opacity-25 text-purple-light px-2 py-1" style={{ color: 'var(--accent-purple-light)' }}>Solution</span>
              </h4>
              <p className="text-white-50 small mb-0" style={{ lineHeight: '1.6' }}>
                {pitch.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="h6 font-heading text-white fw-bold mb-3 d-flex align-items-center gap-2">
            <CheckCircle2 size={18} style={{ color: 'var(--accent-purple-light)' }} /> Key Features & Capabilities
          </h4>
          <div className="row g-2">
            {pitch.keyFeatures.map((feat, idx) => (
              <div key={idx} className="col-12">
                <div className="p-3 rounded-3 d-flex align-items-start gap-2" style={{ background: 'rgba(13, 7, 26, 0.6)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                  <span className="badge rounded-circle px-2 py-1 mt-1" style={{ background: 'var(--accent-purple)', color: '#ffffff', fontSize: '0.7rem' }}>{idx + 1}</span>
                  <span className="text-white-50 small">{feat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture & Role */}
        <div className="p-4 rounded-3 mb-4" style={{ background: 'rgba(13, 7, 26, 0.6)', border: '1px solid rgba(168, 85, 247, 0.15)' }}>
          <div className="d-flex align-items-center gap-2 mb-2">
            <Code2 size={18} style={{ color: 'var(--accent-purple-light)' }} />
            <h4 className="h6 font-heading text-white fw-bold mb-0">Sangeetha Ramesh's Role & Engineering</h4>
          </div>
          <p className="text-white-50 small mb-0" style={{ lineHeight: '1.6' }}>
            {pitch.myRole}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-top border-secondary border-opacity-25 d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-kinetic-primary btn-sm d-inline-flex align-items-center gap-2"
            >
              Launch Live Demo <ExternalLink size={16} />
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-kinetic-outline btn-sm d-inline-flex align-items-center gap-2"
            >
              <GithubIcon size={16} /> Source Code
            </a>
          </div>

          <button onClick={onClose} className="btn btn-purple-outline btn-sm px-4">
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
