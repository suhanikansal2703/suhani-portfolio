import React, { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const chars = titleRef.current?.querySelectorAll('.char')
    chars?.forEach((c, i) => {
      c.style.animationDelay = `${i * 0.04}s`
    })
  }, [])

  const splitChars = (text) =>
    text.split('').map((ch, i) => (
      <span key={i} className="char" style={{ display: ch === ' ' ? 'inline' : 'inline-block' }}>
        {ch === ' ' ? '\u00A0' : ch}
      </span>
    ))

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-blob blob1"></div>
        <div className="hero-blob blob2"></div>
      </div>

      <div className="hero-inner container">
        <div className="hero-content">
          <p className="hero-eyebrow animate-fadeIn">Frontend Developer · Mohali, India</p>
          <h1 className="hero-title" ref={titleRef}>
            <span className="title-line">{splitChars('Suhani')}</span>
            <span className="title-line italic">{splitChars('Gupta')}</span>
          </h1>
          <p className="hero-sub animate-fadeUp" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
            Building modern, scalable web applications with <strong>React.js</strong>,{' '}
            <strong>TypeScript</strong>, and a sharp eye for clean UI.
          </p>
          <div className="hero-actions animate-fadeUp" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
            <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View My Work
            </a>
            <a href="#contact" className="btn-ghost" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get In Touch
            </a>
          </div>
          <div className="hero-stats animate-fadeUp" style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">4+</span>
              <span className="stat-label">Production Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">1×</span>
              <span className="stat-label">Employee of Month</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-fadeIn" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="hero-card">
            <div className="card-dot"></div>
            <span className="card-tag">Currently at</span>
            <p className="card-company">Softradix Pvt. Ltd.</p>
            <p className="card-role">Frontend Developer</p>
            <div className="card-stack">
              {['React', 'TypeScript', 'Redux', 'REST APIs', 'SCSS'].map(t => (
                <span key={t} className="stack-pill">{t}</span>
              ))}
            </div>
          </div>
          <div className="hero-deco deco1">React.js</div>
          <div className="hero-deco deco2">TypeScript</div>
          <div className="hero-deco deco3">Redux</div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>
        <span>Scroll</span>
        <span className="scroll-line"></span>
      </a>
    </section>
  )
}
