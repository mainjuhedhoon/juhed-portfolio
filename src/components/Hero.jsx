import "./../styles/hero.css";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="hero-intro">
          Hello, I'm
        </p>

        <h1>
          Juhed <span>Multani</span>
        </h1>

        <h2>
          Full Stack Web Developer
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-focused web applications
          using React, Node.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Talk
          </a>
        </div>

        <div className="hero-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>

      </div>

      <div className="hero-glow"></div>
    </section>
  );
}

export default Hero;