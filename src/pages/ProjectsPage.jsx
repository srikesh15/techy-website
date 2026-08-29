import "./ProjectsPage.css";
import ProjectCard from "../components/common/ProjectCard";
import projects from "../data/projects";

function ProjectsPage() {
  return (
    <main className="projects-page">

      <section className="projects-page-intro">
        <p>OUR PROJECTS</p>

        <h1>What We've Built</h1>

        <span>
          Explore our collection of digital solutions created to solve
          business challenges and deliver meaningful user experiences.
        </span>
      </section>

      <section className="projects-page-list">
        <div className="projects-page-grid">
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

    </main>
  );
}

export default ProjectsPage;