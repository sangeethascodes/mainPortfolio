import React from 'react';
import { Layout, Database, Wrench, Layers } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      label: "Frontend Development",
      desc: "React.js, JavaScript (ES6+), Bootstrap 5, React-Bootstrap, HTML5, CSS3, Responsive Design."
    },
    {
      label: "Backend & APIs",
      desc: "Node.js, Express.js, Django, RESTful API Engineering, JSON Web Tokens (JWT), Middleware."
    },
    {
      label: "Databases & Storage",
      desc: "SQL / MySQL, PostgreSQL, MongoDB & Mongoose, Relational Database Modeling, Schema Design."
    },
    {
      label: "Tools",
      desc: "Git & GitHub, Vite, Thunder Client API Testing, VS Code, npm."
    }
  ];

  return (
    <div>
      {/* Main About Section */}
      <section id="about" className="py-5 position-relative border-top border-secondary border-opacity-25">
        <div className="container py-4">
          {/* Header */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <span className="font-display fw-bold" style={{ color: 'var(--accent-purple-light)', fontSize: '0.85rem' }}>02</span>
            <span className="w-12 h-px" style={{ width: '40px', height: '1px', background: 'var(--border-color)' }}></span>
            <span className="text-white-50 text-uppercase tracking-wider font-heading fw-bold" style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>ABOUT & COMPETENCIES</span>
          </div>

          {/* Image & Intro */}
          <div className="row gy-5 align-items-center mb-5">
            <div className="col-lg-5">
              <div className="rounded-4 overflow-hidden shadow-lg border border-purple position-relative" style={{ height: '380px', background: '#0a0516' }}>
                <img src="/be-your-full-stack-developer.jpeg" alt="Software Engineering Workspace" className="w-100 h-100 object-fit-cover opacity-85" />
              </div>
            </div>
            <div className="col-lg-7 ps-lg-4">
              <h2 className="display-6 font-display-title text-white mb-4 leading-tight">
                A recent graduate in <span className="font-serif-italic">B.Sc.IT</span>, I build full‑stack applications and am actively seeking a software engineering role.
              </h2>
              <p className="lead text-white-50 mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                I enjoy turning complex ideas into functional, responsive software — from crafting intuitive frontend user interfaces in <strong className="text-white">ReactJS & Bootstrap</strong> to architecting reliable backend API endpoints and relational databases.
              </p>
              {/* Skill Cards */}
              <div className="row g-3">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="p-3 rounded-3 h-100" style={{ background: 'rgba(13, 7, 26, 0.6)', borderTop: '2px solid var(--accent-purple)' }}>
                      <h3 className="h6 font-heading text-white fw-bold mb-2">{cat.label}</h3>
                      <p className="text-white-50 small mb-0" style={{ lineHeight: '1.5', fontSize: '0.82rem' }}>{cat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section with Table */}
      <section id="education" className="py-5">
        <div className="container py-4">
          <h2 className="text-white mb-4">Education</h2>
          <table className="table table-borderless text-white">
            <thead>
              <tr className="text-white-50">
                <th>Degree</th>
                <th>College</th>
                <th>Location</th>
                <th>CGPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B.Sc. IT</td>
                <td>NMSSVN College</td>
                <td>Nagamalaiputhukootai, Madurai, Tamilnadu</td>
                <td>7.6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Certificates Section with Image */}
      <section id="certificates" className="py-5">
        <div className="container py-4">
          <h2 className="text-white mb-4">Certificates</h2>
          {/* Certificate Image */}
          <img src="/guvi_fsd_certificate.png" alt="Full Stack Web Development Certificate" className="img-fluid rounded-3 mb-4" />
          <ul className="list-unstyled">
            <li className="text-white-50 mb-2">Full Stack Web Development – HCL GUVI (Online, 6 months)</li>
          </ul>
        </div>
      </section>

      {/* Soft Skills Section – improved readability */}
      <section id="soft-skills" className="py-5">
        <div className="container py-4">
          <h2 className="text-white mb-4">Soft Skills</h2>
          <ul className="list-unstyled" style={{ fontSize: '1.15rem', color: '#d8b4ff' }}>
            <li className="mb-2">Communication Skills</li>
            <li className="mb-2">Teamwork</li>
            <li className="mb-2">Problem Solving</li>
            <li className="mb-2">Adaptability</li>
            <li className="mb-2">Persistence</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
