import "./../styles/contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">

        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Let's build something <span>great.</span></h2>
        </div>

        <div className="contact-content">

          <div className="contact-text">
            <p>
              I'm currently open to internship opportunities, freelance
              projects and exciting web development collaborations.
            </p>

            <p>
              Have a project or opportunity in mind? Feel free to reach out.
              I'd be happy to connect.
            </p>

            <a
              href="mailto:juhedmultani85@gmail.com"
              className="primary-btn"
            >
              Send Me an Email
            </a>
          </div>

          <div className="contact-details">

            <div className="contact-item">
              <span>Email</span>

              <a href="mailto:juhedmultani85@gmail.com">
                juhedmultani85@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span>GitHub</span>

              <a
                href="https://github.com/mainjuhedhoon"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/mainjuhedhoon
              </a>
            </div>

            <div className="contact-item">
              <span>LinkedIn</span>

              <a
                href="https://www.linkedin.com/in/juhed-multani-b2057427a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;