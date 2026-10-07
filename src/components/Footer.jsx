import "./../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            JUHED<span>.</span>
          </a>

          <p>
            Full Stack Web Developer
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Journey</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Juhed Multani
        </p>

        <div className="footer-social">
          <a
            href="https://github.com/mainjuhedhoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/juhed-multani-b2057427a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;