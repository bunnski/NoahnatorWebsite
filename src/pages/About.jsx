import { useState } from 'react'
import Toast from '../components/Toast'
import './About.css'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

function About() {
  const [toastMsg, setToastMsg] = useState('')

  const copyEmail = () => {
    navigator.clipboard.writeText('Noahnator@proton.me')
    setToastMsg('Copied to clipboard!')
  }

  return (
    <div className="about container">
      <h1>About Me</h1>
      <p className="page-subtitle">A bit about who I am and what I do.</p>

      <section className="about-section">
        <p>
          Hello, my Name is noah an this my my about page! I'm a developer passionate about
          making games and software tools. This site is where I showcase my work and share my artistic endeavors.
        </p>
      </section>

      <section className="about-section">
        <h2>What I'm Working On</h2>
        <p>
          Check out the <a href="/games">Games</a> and <a href="/software">Software</a> pages to see my latest projects.
        </p>
      </section>

      <section className="about-section">
        <h2>Get In Touch</h2>
        <div className="contact-info">
          <button className="contact-link" onClick={copyEmail}>
            <span className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 4L12 13 2 4"/>
              </svg>
            </span>
            <span>Noahnator@proton.me</span>
          </button>
          <a href="https://github.com/bunnski" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon"><GitHubIcon /></span>
            <span>GitHub</span>
          </a>
        </div>
      </section>
      <Toast message={toastMsg} />
    </div>
  )
}

export default About
