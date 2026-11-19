import React from 'react';
import { Layout, Database, Wrench, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout size={24} style={{ color: 'var(--accent-purple-light)' }} />,
      skills: ["React.js", "JavaScript (ES6+)", "Bootstrap 5", "HTML5 & CSS3", "React-Bootstrap", "Responsive Layouts", "State Management", "Lucide Icons"]
    },
    {
      title: "Backend & Databases",
      icon: <Database size={24} style={{ color: 'var(--accent-purple-light)' }} />,
      skills: ["Node.js", "Express.js", "Django", "RESTful APIs", "SQL / MySQL", "MongoDB & Mongoose","PostgreSQL", "JSON & JWT Auth", "Relational Database Design"]
    },
    {
      title: "Tools & Software Practice",
      icon: <Wrench size={24} style={{ color: 'var(--accent-purple-light)' }} />,
      skills: ["Git & GitHub","VS Code", "Thunder Client API Testing", "npm Package Manager", "Object-Oriented Programming (OOP)", "Agile Workflow"]
    }
  ];

  return (
    <section id="skills" className="py-5 position-relative">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-uppercase tracking-wider font-heading fw-bold" style={{ color: 'var(--accent-purple-light)', fontSize: '0.85rem' }}>
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="display-6 fw-bold text-white mt-1">Skills & <span className="gradient-text">Technologies</span></h2>
          <div className="mx-auto mt-2" style={{ width: '60px', height: '3px', background: 'var(--gradient-main)', borderRadius: '2px' }}></div>
        </div>

        <div className="row g-4">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="glass-card p-4 h-100 d-flex flex-column">
                <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                    {cat.icon}
                  </div>
                  <h3 className="h5 text-white mb-0 font-heading fw-bold">{cat.title}</h3>
                </div>

                <div className="d-flex flex-wrap gap-2 mt-auto">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-badge">
                      <Layers size={14} /> {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
