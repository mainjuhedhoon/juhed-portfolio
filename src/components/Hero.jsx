import "./../styles/hero.css";

const heroTech = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
];

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Elements */}
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-status">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Juhed <span>Multani</span>
          </h1>

          <h2>
            Full Stack <span>Web Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-focused web applications
            using React, Node.js and MongoDB.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Talk
              <span>→</span>
            </a>

          </div>

          {/* Technologies */}
          <div className="hero-tech">

            {heroTech.map((tech) => (
              <div key={tech.name} className="hero-tech-item">

                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="hero-tech-logo"
                />

                <span>{tech.name}</span>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">

          <div className="hero-card">

            <div className="card-top">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="card-label">
                DEVELOPER
              </div>

            </div>

            <div className="code-area">

              <div className="code-line">
                <span className="code-number">01</span>
                <span>
                  <b className="code-purple">const</b>{" "}
                  <b className="code-blue">developer</b> = {"{"}
                </span>
              </div>

              <div className="code-line indent">
                <span className="code-number">02</span>
                <span>
                  name: <b className="code-green">"Juhed"</b>,
                </span>
              </div>

              <div className="code-line indent">
                <span className="code-number">03</span>
                <span>
                  role: <b className="code-green">"Full Stack"</b>,
                </span>
              </div>

              <div className="code-line indent">
                <span className="code-number">04</span>
                <span>
                  passion: <b className="code-green">"Building"</b>,
                </span>
              </div>

              <div className="code-line indent">
                <span className="code-number">05</span>
                <span>
                  stack: <b className="code-green">"MERN"</b>
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">06</span>
                <span>{"};"}</span>
              </div>

              <div className="code-line">
                <span className="code-number">07</span>
                <span>
                  <b className="code-purple">return</b>{" "}
                  <b className="code-blue">success</b>;
                </span>
              </div>

            </div>

            <div className="card-bottom">

              <div>
                <span className="mini-label">STACK</span>
                <strong>MERN</strong>
              </div>

              <div>
                <span className="mini-label">PROJECTS</span>
                <strong>04+</strong>
              </div>

              <div>
                <span className="mini-label">STATUS</span>
                <strong className="online">
                  <i></i> Active
                </strong>
              </div>

            </div>

          </div>

          {/* Floating Cards */}

          <div className="floating-card floating-card-one">
            <span>⚡</span>
            <div>
              <small>FOCUS</small>
              <strong>Clean Code</strong>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span>⌘</span>
            <div>
              <small>STACK</small>
              <strong>MERN</strong>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="hero-scroll">
        <span>SCROLL</span>
        <i></i>
      </a>

    </section>
  );
}

export default Hero;