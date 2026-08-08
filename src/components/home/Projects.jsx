import "./Projects.css";
import ProjectCard from "../common/ProjectCard";
import projects from "../../data/projects";

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <p>OUR WORK</p>

        <h2>Featured Projects</h2>

        <span>
          Explore some of the digital solutions we've built for businesses
          across different industries.
        </span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            category={project.category}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;