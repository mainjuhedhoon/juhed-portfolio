import "./../styles/about.css";

const skills = ["React", "Node.js", "MongoDB", "JavaScript"];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p>ABOUT ME</p>

          <h2>
            Building digital
            <span> experiences.</span>
          </h2>
        </div>

        <div className="about-content">

          {/* LEFT */}
          <div className="about-intro">
            <span className="about-number">01</span>

            <h3>
              I'm Juhed, a Full Stack Web Developer.
            </h3>

            <p>
              I create modern web applications with
              clean UI and reliable backend systems.
            </p>

            <a href="#contact" className="about-btn">
              Let's Talk <span>↗</span>
            </a>
          </div>

          {/* RIGHT */}
          <div className="about-info">

            <div className="info-card">
              <span>01</span>
              <div>
                <small>FRONTEND</small>
                <strong>React & UI</strong>
              </div>
              <b>↗</b>
            </div>

            <div className="info-card">
              <span>02</span>
              <div>
                <small>BACKEND</small>
                <strong>Node & Express</strong>
              </div>
              <b>↗</b>
            </div>

            <div className="info-card">
              <span>03</span>
              <div>
                <small>DATABASE</small>
                <strong>MongoDB</strong>
              </div>
              <b>↗</b>
            </div>

          </div>

        </div>

        {/* SKILLS */}
        <div className="about-skills">

          <span className="skills-title">
            TECH STACK
          </span>

          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;