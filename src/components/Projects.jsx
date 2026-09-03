import "./../styles/projects.css";

const projects = [
  {
    title: "E-Commerce Backend",
    description:
      "A RESTful e-commerce backend with authentication, products, categories, cart and order management.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/mainjuhedhoon/backend-crud",
  },
  {
    title: "ShopSphere",
    description:
      "A modern e-commerce frontend with product browsing, product details, cart and responsive UI.",
    tech: ["React", "JavaScript", "API", "CSS"],
    github: "#",
  },
  {
    title: "Student Management System",
    description:
      "A student management application with CRUD operations and state management.",
    tech: ["React", "Redux", "JSON Server"],
    github: "https://github.com/mainjuhedhoon/student-management-system",
  },
  {
    title: "AudioVault",
    description:
      "A full-stack application with authentication, products, cart and order management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mainjuhedhoon/audiovault",
    live: "https://audiovault-delta.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">

        <div className="section-heading">
          <p>MY PROJECTS</p>

          <h2>
            Things I've <span>built.</span>
          </h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>

              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      Live Demo ↗
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;