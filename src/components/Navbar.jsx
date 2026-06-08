import React, { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          SG<span className="logo-dot">.</span>
        </a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={e => handleNav(e, l)}>{l}</a>
            </li>
          ))}
          <li>
            <a href="mailto:suhanikansal2000@gmail.com" className="nav-cta">Hire Me</a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </nav>
  )
}
