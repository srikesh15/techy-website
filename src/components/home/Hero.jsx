import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">DIGITAL SOLUTIONS</p>

        <h1>
          Building Digital
          <span> Experiences That Matter</span>
        </h1>

        <p className="hero-description">
          We create modern websites, applications, and digital
          solutions that help businesses grow.
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="hero-primary-btn">
            Get Started
          </Link>

          <Link to="/projects" className="hero-secondary-btn">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;