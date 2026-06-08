import React, { useState } from 'react'
import './Experience.css'

const experience = {
  company: 'Softradix Pvt. Ltd.',
  role: 'Frontend Developer',
  period: 'August 2023 – Present',
  location: 'Mohali, Punjab',
  description: 'Working as a core frontend developer on multiple production-grade web applications. Collaborate closely with backend teams, designers, and product owners to ship features used by real end-users.',
  achievements: [
    'Built and maintained responsive web applications using React.js, JavaScript (ES6+), TypeScript, and CSS frameworks.',
    'Implemented scalable state management using Redux and Context API across multiple applications.',
    'Integrated REST APIs for dynamic data rendering, improving performance and user engagement.',
    'Contributed to team-based projects and individual modules, ensuring clean, reusable code.',
    'Awarded Employee of the Month for outstanding performance on the FlippBidd project.',
  ],
}

const certs = [
  { title: 'MERN Stack Certification', issuer: 'Hoping Minds', period: 'Jan 2023 – Jun 2023' },
  { title: 'Cyber Shiksha', issuer: 'Quick Heal Academy', period: 'Jan 2022 – Feb 2022' },
  { title: 'Advance Diploma — Web Development', issuer: 'Self-Paced', period: 'Jul 2018 – May 2019' },
]

export default function Experience() {
  return (
    <section className="experience section-pad" id="experience">
      <div className="container">
        <p className="section-tag">Career</p>
        <h2 className="section-heading">Experience & Certifications</h2>

        <div className="exp-layout">
          <div className="exp-main">
            <div className="timeline-dot"></div>
            <div className="exp-card">
              <div className="exp-card-top">
                <div>
                  <h3 className="exp-company">{experience.company}</h3>
                  <p className="exp-role">{experience.role}</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{experience.period}</span>
                  <span className="exp-location">{experience.location}</span>
                </div>
              </div>
              <p className="exp-desc">{experience.description}</p>
              <ul className="exp-list">
                {experience.achievements.map((a, i) => (
                  <li key={i}>
                    <span className="exp-bullet">→</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="exp-sidebar">
            <h4 className="sidebar-title">Certifications</h4>
            <div className="cert-list">
              {certs.map((c, i) => (
                <div className="cert-item" key={i}>
                  <div className="cert-badge">✓</div>
                  <div>
                    <p className="cert-name">{c.title}</p>
                    <p className="cert-issuer">{c.issuer}</p>
                    <p className="cert-period">{c.period}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="edu-block">
              <h4 className="sidebar-title" style={{ marginTop: '2rem' }}>Education</h4>
              <div className="edu-item">
                <p className="edu-degree">Masters of Computer Applications</p>
                <p className="edu-school">Chitkara University, Punjab</p>
                <p className="edu-period">2021 – 2023 · <strong>9.44 CGPA</strong></p>
              </div>
              <div className="edu-item">
                <p className="edu-degree">Bachelor's in Computer Application</p>
                <p className="edu-school">Kurukshetra University</p>
                <p className="edu-period">2018 – 2021 · <strong>80%</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
