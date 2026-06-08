import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('suhanikansal2000@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left">
            <p className="section-tag">Let's Talk</p>
            <h2 className="contact-heading">
              Open to new <em>opportunities</em>
            </h2>
            <p className="contact-body">
              I'm always interested in hearing about exciting frontend roles,
              freelance projects, or just connecting with fellow developers. Feel
              free to reach out — I try to respond within 24 hours.
            </p>

            <div className="contact-links">
              <a href="mailto:suhanikansal2000@gmail.com" className="contact-link-primary">
                <span className="link-icon">✉</span>
                <div>
                  <span className="link-label">Email</span>
                  <span className="link-value">suhanikansal2000@gmail.com</span>
                </div>
              </a>
              <button className="copy-btn" onClick={copyEmail}>
                {copied ? '✓ Copied!' : 'Copy Email'}
              </button>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/suhani-kansal/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="tel:7404360009"
                className="social-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                +91 74043 60009
              </a>
            </div>
          </div>

          <div className="contact-right">
            <div className="availability-card">
              <div className="avail-dot"></div>
              <p className="avail-status">Available for opportunities</p>
              <p className="avail-note">Open to full-time roles, contract work, and collaborations</p>
              <div className="avail-tags">
                <span>React.js</span>
                <span>Frontend Dev</span>
                <span>Remote / Hybrid</span>
              </div>
            </div>

            <div className="quick-facts">
              <div className="qf-item">
                <span className="qf-label">Response time</span>
                <span className="qf-value">Within 24 hrs</span>
              </div>
              <div className="qf-item">
                <span className="qf-label">Location</span>
                <span className="qf-value">Mohali, Punjab 🇮🇳</span>
              </div>
              <div className="qf-item">
                <span className="qf-label">Notice period</span>
                <span className="qf-value">As required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
