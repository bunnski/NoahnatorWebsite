import { useState } from 'react'
import Toast from '../components/Toast'
import './Links.css'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const BlueSkyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.65 6.383 3.364.136-.014.276-.03.419-.047-.13.02-.26.04-.39.062-2.68.51-5.064 1.58-5.776 3.15-.457 1.008-.236 2.392.618 3.346.853.954 2.142 1.418 3.886 1.418 2.516 0 4.392-1.56 5.236-5.168.844 3.608 2.72 5.168 5.236 5.168 1.744 0 3.033-.464 3.886-1.418.854-.954 1.075-2.338.618-3.346-.712-1.57-3.096-2.64-5.776-3.15-.13-.022-.26-.042-.39-.062.143.017.283.033.419.047 2.67.286 5.568-.628 6.383-3.364.246-.828.624-5.788.624-6.479 0-.688-.139-1.86-.902-2.204-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z"/>
  </svg>
)

const ItchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <rect x="2" y="6" width="20" height="12" rx="3"/>
    <path d="M6 12h4"/>
    <path d="M8 9v6"/>
    <circle cx="17" cy="10.5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="17" cy="13.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M22 4L12 13 2 4"/>
  </svg>
)

function Links() {
  const [toastMsg, setToastMsg] = useState('')

  const linkGroups = [
    {
      name: 'Social',
      links: [
        { label: 'GitHub', url: 'https://github.com/bunnski', icon: <GitHubIcon /> },
        { label: 'BlueSky', url: 'https://bsky.app/profile/noahnatorgame.bsky.social', icon: <BlueSkyIcon /> },
        //{ label: 'Twitter / X', url: 'https://twitter.com', icon: '🔗' },
        //{ label: 'Discord', url: 'https://discord.gg', icon: '🔗' },
      ],
    },
    {
      name: 'Profiles',
      links: [
        { label: 'Itch.io', url: 'https://noahnator.itch.io/', icon: <ItchIcon /> },
        //{ label: 'Steam', url: 'https://store.steampowered.com', icon: '🔗' },
      ],
    },
    {
      name: 'Contact',
      links: [
        { label: 'Noahnator@proton.me', action: () => { navigator.clipboard.writeText('Noahnator@proton.me'); setToastMsg('Copied to clipboard!') }, icon: <EmailIcon /> },
      ],
    },
  ]

  return (
    <div className="links container">
      <h1>Links</h1>
      <p className="page-subtitle">Find me across the web.</p>

      {linkGroups.map((group) => (
        <section key={group.name} className="link-group">
          <h2>{group.name}</h2>
          <div className="link-list">
            {group.links.map((link) => (
              link.action ? (
                <button
                  key={link.label}
                  className="link-item"
                  onClick={link.action}
                >
                  <span className="link-item-inner">
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-label">{link.label}</span>
                    <span className="link-arrow">&rarr;</span>
                  </span>
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.url}
                  className="link-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="link-item-inner">
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-label">{link.label}</span>
                    <span className="link-arrow">&rarr;</span>
                  </span>
                </a>
              )
            ))}
          </div>
        </section>
      ))}
      <Toast message={toastMsg} />
    </div>
  )
}

export default Links
