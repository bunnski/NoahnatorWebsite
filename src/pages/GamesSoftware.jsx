import { useState } from 'react'
import './GamesSoftware.css'

function GamesSoftware() {
  const [activeTab, setActiveTab] = useState('games')

  const games = [
    { id: 1, title: 'Game Project 1', description: 'Description of your first game project.', status: 'In Development' },
    { id: 2, title: 'Game Project 2', description: 'Description of your second game project.', status: 'Completed' },
  ]

  const software = [
    { id: 1, title: 'Software Tool 1', description: 'Description of your first software tool.', status: 'In Development' },
    { id: 2, title: 'Software Tool 2', description: 'Description of your second software tool.', status: 'Completed' },
  ]

  const items = activeTab === 'games' ? games : software

  return (
    <div className="games-software">
      <h1>Games & Software</h1>
      <p className="page-subtitle">Browse through my game and software projects.</p>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'games' ? 'active' : ''}`}
          onClick={() => setActiveTab('games')}
        >
          Games
        </button>
        <button
          className={`tab ${activeTab === 'software' ? 'active' : ''}`}
          onClick={() => setActiveTab('software')}
        >
          Software
        </button>
      </div>

      <div className="projects-grid">
        {items.map((item) => (
          <div key={item.id} className="project-card">
            <div className="project-header">
              <h3>{item.title}</h3>
              <span className={`status status-${item.status.toLowerCase().replace(' ', '-')}`}>
                {item.status}
              </span>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GamesSoftware
