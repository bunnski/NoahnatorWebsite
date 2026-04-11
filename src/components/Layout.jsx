import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

function Layout({ children }) {
  const { pathname } = useLocation()

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-brand">
          <img src="/NoahnatorLogoColor.png" alt="" className="nav-icon" />
          <Link to="/">Noahnator</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/games" className={pathname === '/games' ? 'active' : ''}>Games</Link></li>
          <li><Link to="/software" className={pathname === '/software' ? 'active' : ''}>Software</Link></li>
          <li><Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/links" className={pathname === '/links' ? 'active' : ''}>Links</Link></li>
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Noahnator. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
