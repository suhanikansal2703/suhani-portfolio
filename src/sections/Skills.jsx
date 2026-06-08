import React from 'react'
import './Skills.css'

const categories = [
  {
    label: 'Languages',
    icon: '{ }',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frameworks & Libraries',
    icon: '⚛',
    skills: ['React.js', 'Redux', 'Context API', 'Tailwind CSS', 'Bootstrap', 'SCSS'],
  },
  {
    label: 'Web & APIs',
    icon: '🔗',
    skills: ['REST APIs', 'JSON', 'Firebase', 'Google Maps API', 'Twilio Voice SDK', 'Responsive Design'],
  },
  {
    label: 'Tools & Platforms',
    icon: '🛠',
    skills: ['Git', 'GitHub', 'VS Code', 'Cursor AI', 'Postman', 'Swagger', 'Chrome DevTools', 'Bugsnag'],
  },
  {
    label: 'Soft Skills',
    icon: '💡',
    skills: ['Problem-Solving', 'Debugging', 'Time Management', 'Task Prioritization', 'Adaptability'],
  },
]

export default function Skills() {
  return (
    <section className="skills section-pad" id="skills" style={{ background: 'white' }}>
      <div className="container">
        <p className="section-tag">Technical Profile</p>
        <h2 className="section-heading">Skills & Expertise</h2>
        <p className="section-sub">A curated set of technologies I use daily in production environments.</p>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-category" key={cat.label}>
              <div className="cat-header">
                <span className="cat-icon">{cat.icon}</span>
                <h3 className="cat-label">{cat.label}</h3>
              </div>
              <div className="skills-list">
                {cat.skills.map(s => (
                  <span className="skill-chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
