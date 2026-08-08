import "./ProjectCard.css";

function ProjectCard({ image, category, title, description }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />

        <div className="project-overlay">
          <button>View Project</button>
        </div>
      </div>

      <div className="project-content">
        <p>{category}</p>

        <h3>{title}</h3>

        <span>{description}</span>
      </div>
    </article>
  );
}

export default ProjectCard;