import TiltCard from '../components/TiltCard'
import './Games.css'

const isVideo = (src) => /\.(mp4|webm|ogg)$/i.test(src)

function Games({ wipImage, wipImageWidth, wipImageHeight, bannerSrc }) {
  const categories = [
    {
      name: 'My Games',
      description: 'My full game projects.',
      items: [
        //{ id: 1, title: 'Game Project 1', description: 'Description of your first game project.', bgImage: '/FloppyDiskEvenWider.png', fgImage: '/BunnyImage.jpg', url: 'https://example.com/game1' },
      ],
    },
    {
      name: 'Game Demos',
      description: 'Smaller playable demos and prototypes.',
      items: [],
    },
  ]

  return (
    <div className="games">
      <div className="container">
        <div className="wip-banner">
          <div className="wip-banner-image">
            {isVideo(wipImage) ? (
              <video src={wipImage} autoPlay muted loop playsInline style={{ width: wipImageWidth, height: wipImageHeight }} />
            ) : (
              <img src={wipImage || '/wip-placeholder.png'} alt="Work in Progress" style={{ width: wipImageWidth, height: wipImageHeight }} />
            )}
          </div>
          <div className="wip-banner-content">
            <h2>This page is a work in progress.</h2>
            <p>Check back later for updates and new content.</p>
          </div>
        </div>
      </div>

      <div className="banner">
        {isVideo(bannerSrc) ? (
          <video src={bannerSrc} autoPlay muted loop playsInline />
        ) : (
          <img src={bannerSrc || '/banner-games.jpg'} alt="Games Banner" />
        )}
      </div>

      <div className="container">
      <h1>Games</h1>
      <p className="page-subtitle">Browse through my game projects and demos.</p>

      {categories.map((category) => (
        <section key={category.name} className="category-section">
          <h2>{category.name}</h2>
          <p className="category-description">{category.description}</p>
          <div className="projects-grid">
            {category.items.length > 0 ? (
              category.items.map((item) => (
                <TiltCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  bgImage={item.bgImage}
                  fgImage={item.fgImage}
                  url={item.url}
                />
              ))
            ) : (
              <p className="coming-soon">Coming soon.</p>
            )}
          </div>
        </section>
      ))}
      </div>
    </div>
  )
}

export default Games
