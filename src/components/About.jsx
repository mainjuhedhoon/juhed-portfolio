import "./../styles/about.css";
function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Turning ideas into <span>web experiences.</span></h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Juhed Multani, a passionate Full Stack Web Developer
              focused on building modern, responsive and user-friendly
              web applications.
            </p>

            <p>
              I work with technologies like React, JavaScript, Node.js,
              Express.js and MongoDB. I enjoy learning new technologies
              and turning ideas into real-world projects.
            </p>

            <a href="#contact" className="primary-btn">
              Let's Connect
            </a>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h3>5+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>1+</h3>
              <p>Internship</p>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <p>Learning Mindset</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;