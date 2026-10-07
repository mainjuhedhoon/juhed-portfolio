import "./../styles/experience.css";

const journey = [
  {
    number: "01",
    date: "2025 — 2026",
    title: "Full Stack Web Development",
    company: "Red & White Multimedia Education",
    description:
      "Built a strong foundation in modern web development through practical projects and hands-on learning.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    number: "02",
    date: "2026 — Present",
    title: "Web Development Intern",
    company: "Search Engine Monks",
    description:
      "Working on real-world web development projects using React, Node.js and WordPress while gaining professional development experience.",
    tech: ["React.js", "Node.js", "WordPress", "JavaScript", "HTML", "CSS"],
  },
  {
    number: "03",
    date: "Ongoing",
    title: "Personal Projects",
    company: "Independent Development",
    description:
      "Building and deploying full-stack applications to strengthen development skills and explore new technologies.",
    tech: ["Juhed Store", "AudioVault", "Git", "GitHub"],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">

        <div className="section-heading">
          <p>MY JOURNEY</p>

          <h2>
            Experience & <span>learning.</span>
          </h2>
        </div>

        <div className="journey-list">

          {journey.map((item) => (
            <div className="journey-item" key={item.number}>

              <div className="journey-marker">
                <span>{item.number}</span>
              </div>

              <div className="journey-card">

                <div className="journey-top">
                  <span className="journey-date">
                    {item.date}
                  </span>

                  <span className="journey-index">
                    {item.number}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>

                <div className="journey-tech">
                  {item.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;