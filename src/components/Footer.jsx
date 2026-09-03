import "./../styles/footer.css";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home" className="logo">
            JUHED<span>.</span>
          </a>

          <p>
            Full Stack Web Developer building modern web experiences.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Juhed Multani. All rights reserved.
        </p>

        <a
          href="https://github.com/mainjuhedhoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>

    </footer>
  );
}

export default Footer;