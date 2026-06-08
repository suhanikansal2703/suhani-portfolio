import React, { useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'FlippBidd',
    subtitle: 'Real Estate Investment Platform',
    period: 'Feb 2025 – Present',
    tag: 'Production · Softradix',
    tagColor: 'green',
    description: 'A full-featured web application for real estate investors — allowing them to search, analyse, and transact properties. Built the entire frontend from scratch, including interactive map-based property discovery and real-time communication features.',
    highlights: [
      'Built the frontend using React, TypeScript, Vite, and SCSS from ground up.',
      'Integrated Google Maps API for interactive property search with advanced filters, marker clustering, and polygon-based area selection.',
      'Implemented real-time chat using Firebase and voice calling via Twilio Voice SDK for investor-to-investor communication.',
      'Recognised with Employee of the Month award for outstanding delivery on this project.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'SCSS', 'Google Maps API', 'Firebase', 'Twilio Voice SDK'],
    color: '#C8553D',
  },
  {
    id: 2,
    title: 'TopTipper',
    subtitle: 'SaaS Tipping Platform',
    period: 'Dec 2023 – Present',
    tag: 'Production · Softradix',
    tagColor: 'blue',
    description: 'A multi-tenant SaaS platform enabling businesses to offer QR-based digital tipping to service staff. Involved in building the entire role-based frontend system and dynamic tipping flows used by real businesses.',
    highlights: [
      'Implemented Role-Based Access Control (RBAC) using React Router with dynamic, permission-aware routes.',
      'Created QR-based tipping flows with scan-to-tip conversion tracking and analytics.',
      'Integrated Bugsnag for production error tracking and debugging.',
      'Built responsive, mobile-first UI optimised for QR-scan to tip conversion.',
    ],
    tech: ['React', 'Redux', 'React Router', 'REST APIs', 'Bugsnag', 'QR Integration'],
    color: '#3B82F6',
  },
  {
    id: 3,
    title: 'AI Web Summarizer',
    subtitle: 'Chrome Extension',
    period: 'May 2025 – Jun 2025',
    tag: 'Production · Softradix',
    tagColor: 'purple',
    description: 'A browser extension that scrapes web page content and passes it through an AI API to generate concise, readable summaries — saving users time when researching or reading long-form articles.',
    highlights: [
      'Designed and developed a full Chrome Extension from scratch using Manifest V3.',
      'Built a content script to accurately extract and clean page content across varied HTML structures.',
      'Integrated with an AI API for real-time summarisation of scraped content.',
      'Optimised for fast popup render and minimal permissions footprint.',
    ],
    tech: ['JavaScript', 'Chrome Extension APIs', 'AI API Integration', 'HTML', 'CSS'],
    color: '#7C3AED',
  },
  {
    id: 4,
    title: 'CRM & Internal Dashboards',
    subtitle: 'Business Tooling',
    period: '2023 – Present',
    tag: 'Internal Tools · Softradix',
    tagColor: 'orange',
    description: 'Built and maintained multiple internal CRM dashboards and business-management tools used by company clients. Focus on complex data grids, filtering, form-heavy workflows, and API-driven UIs.',
    highlights: [
      'Developed responsive data-heavy dashboards with advanced filter, search, and pagination.',
      'Implemented state management with Redux for complex multi-step form workflows.',
      'Ensured reusable component architecture enabling rapid feature additions.',
      'Collaborated with backend teams to design and consume REST API contracts.',
    ],
    tech: ['React', 'Redux', 'TypeScript', 'REST APIs', 'Tailwind CSS', 'Bootstrap'],
    color: '#D4A853',
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section className="projects section-pad" id="projects" style={{ background: 'white' }}>
      <div className="container">
        <p className="section-tag">Production Work</p>
        <h2 className="section-heading">Projects I've Shipped</h2>
        <p className="section-sub">Real applications built as part of my work at Softradix — used by real users in production.</p>

        <div className="projects-grid">
          {projects.map((p) => (
            <div
              className={`project-card ${active === p.id ? 'expanded' : ''}`}
              key={p.id}
              style={{ '--accent-local': p.color }}
            >
              <div className="proj-top">
                <div className="proj-number">{String(p.id).padStart(2, '0')}</div>
                <span className={`proj-tag tag-${p.tagColor}`}>{p.tag}</span>
              </div>

              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-subtitle">{p.subtitle}</p>
              <p className="proj-period">{p.period}</p>

              <p className="proj-desc">{p.description}</p>

              {active === p.id && (
                <ul className="proj-highlights">
                  {p.highlights.map((h, i) => (
                    <li key={i}><span className="proj-arrow">→</span>{h}</li>
                  ))}
                </ul>
              )}

              <div className="proj-tech">
                {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>

              <button
                className="proj-toggle"
                onClick={() => setActive(active === p.id ? null : p.id)}
              >
                {active === p.id ? 'Show Less ↑' : 'See Details ↓'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
