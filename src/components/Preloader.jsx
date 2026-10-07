import { useEffect, useState } from "react";
import "./../styles/preloader.css";

function Preloader({ onComplete }) {
  const [showRole, setShowRole] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const roleTimer = setTimeout(() => {
      setShowRole(true);
    }, 1100);

    const exitTimer = setTimeout(() => {
      setExit(true);

      setTimeout(() => {
        onComplete();
      }, 800);
    }, 3800);

    return () => {
      clearTimeout(roleTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className={`preloader ${exit ? "preloader-exit" : ""}`}>

      <div className="preloader-bg"></div>
      <div className="preloader-grid"></div>
      <div className="preloader-glow"></div>

      <div className="light-sweep"></div>

      <div className="intro-content">

        <div className="hello-text">
          HELLO <span>👋</span>
        </div>

        <div className="name-box">

          <div className="name-back">
            JUHED
          </div>

          <h1>
            JUHED <span>MULTANI</span>
          </h1>

        </div>

        <div className={`role-box ${showRole ? "active" : ""}`}>

          <span className="role-line"></span>

          <h2>
            FULL STACK WEB DEVELOPER
          </h2>

          <span className="role-line"></span>

        </div>

        <div className="intro-caption">
          <span></span>
          BUILD • CREATE • DEVELOP
        </div>

      </div>

      <div className="intro-corner intro-corner-left"></div>
      <div className="intro-corner intro-corner-right"></div>

      <div className="intro-footer">
        <span>JUHED MULTANI</span>
        <span>PORTFOLIO 2026</span>
      </div>

    </div>
  );
}

export default Preloader;