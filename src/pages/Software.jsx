import TiltCard from '../components/TiltCard'
import './Software.css'

function Software() {
  const categories = [
    {
      name: 'My Software',
      description: 'My applications and tools.',
      items: [
        { id: 1, title: 'Floppy Painter', description: 'Floppy Painter is 2D and 3D Painting tool for general drawing and 3D painting.', bgImage: '/FloppyDiskEvenWider.png', fgImage: '/software-1-icon.png', url: 'https://example.com/tool1' },
      ],
    },
    {
      name: 'Utilities',
      description: 'Smaller helper scripts and utilities.',
      items: [],
    },
  ]

  return (
    <div className="software">
      <div className="banner">
        <img src="/SoftwareBanner.png" alt="Software Banner" />
      </div>

      <div className="container">
      <h1>Software</h1>
      <p className="page-subtitle">Browse through my software projects and utilities.</p>

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

export default Software
