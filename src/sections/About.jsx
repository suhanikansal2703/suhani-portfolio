import React from 'react'
import './About.css'

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="section-tag">Who I Am</p>
            <h2 className="about-heading">
              Crafting interfaces that
              <em> feel</em> as good as they look
            </h2>
            <div className="about-rule"></div>
          </div>

          <div className="about-right">
            <p className="about-body">
              I'm a Frontend Developer with close to <strong>3 years of professional experience</strong> building production-grade web applications at a software company. My work spans real estate platforms, SaaS dashboards, and business tooling — each project sharpening my ability to write clean, maintainable code under real-world constraints.
            </p>
            <p className="about-body">
              I specialise in <strong>React.js</strong> ecosystems — from architecting state with Redux and Context API to integrating complex third-party APIs like Google Maps and Firebase. I care deeply about the small details: animation timing, responsive breakpoints, and accessibility — because that's what separates good products from great ones.
            </p>
            <p className="about-body">
              I hold a <strong>Master's in Computer Applications (9.44 CGPA)</strong> from Chitkara University and was honoured as <strong>Employee of the Month</strong> at Softradix for my contributions to a major client project.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <span className="hl-icon">🎓</span>
                <div>
                  <strong>MCA — Chitkara University</strong>
                  <span>9.44 CGPA · 2021–2023</span>
                </div>
              </div>
              <div className="highlight">
                <span className="hl-icon">🏆</span>
                <div>
                  <strong>Employee of the Month</strong>
                  <span>Softradix Pvt. Ltd.</span>
                </div>
              </div>
              <div className="highlight">
                <span className="hl-icon">📍</span>
                <div>
                  <strong>Based in Mohali, Punjab</strong>
                  <span>Open to remote / hybrid roles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
