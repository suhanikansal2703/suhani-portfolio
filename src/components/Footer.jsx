import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">SG<span>.</span></span>
        <p className="footer-copy">© {new Date().getFullYear()} Suhani Gupta · Frontend Developer</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/suhani-kansal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:suhanikansal2000@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
