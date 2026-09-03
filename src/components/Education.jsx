import "./../styles/education.css";
function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-container">

        <div className="section-heading">
          <p>EDUCATION</p>
          <h2>My academic <span>background.</span></h2>
        </div>

        <div className="education-grid">

          <div className="education-card">
            <span>Bachelor's Degree</span>
            <h3>B.Com</h3>
            <p>
              DCM Arts and Commerce College
            </p>
          </div>

          <div className="education-card">
            <span>Higher Secondary</span>
            <h3>12th Commerce</h3>
            <p>
              Divya Jyot High School
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;