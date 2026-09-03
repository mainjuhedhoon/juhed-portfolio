import "./../styles/experience.css";
function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">

        <div className="section-heading">
          <p>MY JOURNEY</p>
          <h2>Experience & <span>learning.</span></h2>
        </div>

       <div className="timeline-item">
  <div className="timeline-dot"></div>

  <div className="timeline-card">
    <span className="timeline-date">
      2026 — Present
    </span>

    <h3>Web Development Intern</h3>
    <h4>Search Engine Monks</h4>

    <p>
      Working on web development tasks and real-world projects while
      gaining practical experience in modern frontend and backend
      development technologies.
    </p>

    <div className="project-tech">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>React.js</span>
      <span>Node.js</span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

export default Experience;