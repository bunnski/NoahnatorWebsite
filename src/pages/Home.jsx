import { Link } from 'react-router-dom'
import BannerCarousel from '../components/BannerCarousel'
import './Home.css'

function Home() {
  const banners = [
    { image: '/PanterBannerVideo.mp4', alt: 'Floppy Painter', width: 800, height: 400 },
    //{ image: '/banner-home-2.jpg', alt: 'Home Banner 2' },
    //{ image: '/banner-home-3.jpg', alt: 'Home Banner 3' },
  ]

  return (
    <div className="home">
      <BannerCarousel banners={banners} />

      <div className="container">
      <section className="hero-section">
        <h1>Welcome to The Noahnator Website</h1>
        <p>Explore my projects, games, and software creations.</p>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>Games</h2>
          <p>Check out my game development projects and playable demos.</p>
          <Link to="/games" className="link">Explore Games &rarr;</Link>
        </div>
        <div className="feature-card">
          <h2>Software</h2>
          <p>Browse my software applications and tools.</p>
          <Link to="/software" className="link">Explore Software &rarr;</Link>
        </div>
        <div className="feature-card">
          <h2>My Links</h2>
          <p>Find all my social profiles, contact info, and online presence.</p>
          <Link to="/links" className="link">View All Links &rarr;</Link>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Home
