import "./../styles/skills.css";
const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I <span>work with.</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <h3>{skill.title}</h3>

              <div className="skill-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;