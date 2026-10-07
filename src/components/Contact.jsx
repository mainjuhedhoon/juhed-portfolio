import "./../styles/contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">

        <div className="section-heading">
          <p>GET IN TOUCH</p>

          <h2>
            Let's build something <span>great.</span>
          </h2>
        </div>

        <div className="contact-content">

          <div className="contact-intro">

            <span className="contact-number">01</span>

            <h3>
              Have an idea or opportunity?
            </h3>

            <p>
              I'm open to internships, freelance projects and
              web development opportunities.
            </p>

            <a
              href="mailto:juhedmultani85@gmail.com"
              className="contact-email-btn"
            >
              Send Me an Email
              <span>↗</span>
            </a>

          </div>

          <div className="contact-details">

            <a
              href="mailto:juhedmultani85@gmail.com"
              className="contact-item"
            >
              <div>
                <small>EMAIL</small>
                <strong>juhedmultani85@gmail.com</strong>
              </div>

              <span>↗</span>
            </a>

            <a
              href="https://github.com/mainjuhedhoon"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div>
                <small>GITHUB</small>
                <strong>github.com/mainjuhedhoon</strong>
              </div>

              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/juhed-multani-b2057427a/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div>
                <small>LINKEDIN</small>
                <strong>LinkedIn Profile</strong>
              </div>

              <span>↗</span>
            </a>

          </div>

        </div>

        <div className="contact-bottom">
          <span>AVAILABLE FOR OPPORTUNITIES</span>
          <span>JUHED MULTANI © 2026</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;