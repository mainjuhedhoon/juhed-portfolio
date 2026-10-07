import "./../styles/education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-container">

        <div className="section-heading">
          <p>EDUCATION</p>

          <h2>
            My academic <span>background.</span>
          </h2>
        </div>

        <div className="education-layout">

          {/* Main Education */}
          <div className="education-card education-primary">

            <div className="education-top">
              <span className="education-label">
                PROFESSIONAL COURSE
              </span>

              <span className="education-number">
                01
              </span>
            </div>

            <div className="education-content">

              <h3>Full Stack Web Development</h3>

              <p className="education-institute">
                Red & White Multimedia Education
              </p>

              <div className="education-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>JavaScript</span>
              </div>

            </div>

            <div className="education-status">
              <span></span>
              Professional Training
            </div>

          </div>

          {/* B.Com */}
          <div className="education-card education-secondary">

            <div className="education-top">
              <span className="education-label">
                BACHELOR'S DEGREE
              </span>

              <span className="education-number">
                02
              </span>
            </div>

            <div className="education-content">

              <h3>B.Com</h3>

              <p className="education-institute">
                DCM Arts and Commerce College
              </p>

            </div>

            <div className="education-status">
              Academic Background
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;