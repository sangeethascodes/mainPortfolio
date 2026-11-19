import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  return (
    <section id="projects" className="py-5 position-relative border-top border-secondary border-opacity-25">
      <div className="container py-4">
        {/* Section Header */}
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="font-display fw-bold" style={{ color: 'var(--accent-purple-light)', fontSize: '0.85rem' }}>
            01
          </span>
          <span className="w-12 h-px" style={{ width: '40px', height: '1px', background: 'var(--border-color)' }}></span>
          <span className="text-white-50 text-uppercase tracking-wider font-heading fw-bold" style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>
            SELECTED PROJECTS
          </span>
        </div>

        <h2 className="display-6 font-display-title text-white mb-5 max-w-3xl">
          A selection of <span className="font-serif-italic">projects</span> I've built.
        </h2>

        <div className="row g-5">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 === 1;
            const projectPath = `/project/${project.id}`;
            return (
              <div key={project.id} className="col-12">
                <div className="kinetic-card p-4 p-md-5">
                  <div className={`row align-items-center gy-4 ${isReversed ? 'flex-md-row-reverse' : ''}`}>
                    {/* Image Column */}
                    <div className="col-md-7">
                      <Link
                        to={projectPath}
                        aria-label={`View details for ${project.title}`}
                        className="rounded-4 overflow-hidden shadow-lg border border-purple position-relative cursor-pointer text-decoration-none d-block"
                        style={{ height: '320px', background: '#0a0516' }}
                      >
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-100 h-100 object-fit-cover transition-transform" 
                        />
                        <div className="position-absolute bottom-0 start-0 m-3 px-3 py-1 rounded-pill" style={{ background: 'rgba(9, 5, 20, 0.85)', backdropFilter: 'blur(8px)', border: '1px solid var(--accent-purple)', fontSize: '0.75rem', color: 'var(--accent-purple-light)' }}>
                          Click to View Project Details
                        </div>
                      </Link>
                    </div>

                    {/* Details Column */}
                    <div className="col-md-5">
                      <div className="d-flex align-items-center gap-3 mb-2">
                        <span className="font-display fw-bold fs-5" style={{ color: 'var(--accent-purple-light)' }}>
                          0{index + 1}
                        </span>
                        <span style={{ color: 'var(--border-color)' }}>—</span>
                        <span className="text-white-50 small">{project.category}</span>
                      </div>

                      <h3 className="h3 font-display-title text-white fw-bold mb-2">
                        {project.title}
                      </h3>

                      <p className="text-white-50 small mb-3" style={{ lineHeight: '1.6' }}>
                        {project.subtitle}
                      </p>

                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-2 py-1 rounded-2" style={{ background: 'rgba(168, 85, 247, 0.1)', color: 'var(--text-muted)', fontSize: '0.75rem', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="d-flex align-items-center gap-3">
                        <Link
                          to={projectPath}
                          className="btn btn-kinetic-primary btn-sm px-4 d-inline-flex align-items-center gap-2"
                        >
                          View Details <ArrowUpRight size={16} />
                        </Link>

                        <a href={project.github} target="_blank" rel="noreferrer" className="text-white-50 hover-text-white p-2 d-inline-flex" title="GitHub Code">
                          <GithubIcon size={18} />
                        </a>
                        <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-white-50 hover-text-white p-2 d-inline-flex" title="Live Demo">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
