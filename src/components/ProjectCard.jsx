import './ProjectCard.css'

function ProjectCard({ title, description, category }) {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <h3>{title}</h3>
        {category && <span className="project-category">{category}</span>}
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
