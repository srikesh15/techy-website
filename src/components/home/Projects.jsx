import { Link } from "react-router-dom";
import "./Projects.css";
import ProjectCard from "../common/ProjectCard";
import projects from "../../data/projects";

function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <p>OUR WORK</p>

        <h2>Featured Projects</h2>

        <span>
          Explore some of the digital solutions we've built for businesses
          across different industries.
        </span>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            category={project.category}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      <div className="projects-cta">
        <Link to="/projects" className="projects-btn">
          View All Projects
        </Link>
      </div>
    </section>
  );
}

export default Projects;