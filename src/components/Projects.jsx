import "./../styles/projects.css";

const projects = [
  {
    title: "Juhed Store",
    description:
      "A full-stack e-commerce application with product browsing, categories, authentication, cart and order management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/mainjuhedhoon/juhed-store-frontend",
    live: "https://juhed-store-frontend.vercel.app/",
    image: "/images/projects/juhed-store.png",
  },
  {
    title: "ShopSphere",
    description:
      "A modern e-commerce frontend with product browsing, product details, cart and responsive UI.",
    tech: ["React", "JavaScript", "API", "CSS"],
    github: "#",
    image: "/images/projects/shopsphere.png",
  },
  {
    title: "Student Management System",
    description:
      "A student management application with CRUD operations and state management.",
    tech: ["React", "Redux", "JSON Server"],
    github:
      "https://github.com/mainjuhedhoon/student-management-system",
    image: "/images/projects/student-management.png",
  },
  {
    title: "AudioVault",
    description:
      "A full-stack application with authentication, products, cart and order management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mainjuhedhoon/audiovault",
    live: "https://audiovault-delta.vercel.app/",
    image: "/images/projects/audiovault.png",
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

              {/* Project Image */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                />
              </div>

              <div className="project-info">

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

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;