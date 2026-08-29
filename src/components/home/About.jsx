import { Link } from "react-router-dom";
import "./About.css";
import about from "../../assets/about.avif";

const highlights = [
  "Modern and responsive solutions",
  "Business-focused digital products",
  "Reliable and scalable technology",
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <p className="about-tag">ABOUT US</p>

        <h2>
          We Build Digital Solutions That Help Businesses Grow
        </h2>

        <p className="about-description">
          At <strong>Techy</strong>, we create modern digital experiences
          that help businesses establish their online presence, improve
          customer engagement, and grow.
        </p>

        <ul className="about-list">
          {highlights.map((item) => (
            <li key={item}>✔ {item}</li>
          ))}
        </ul>

        <Link to="/about" className="about-btn">
          Learn More
        </Link>
      </div>

      <div className="about-image">
        <img src={about} alt="About Techy" />
      </div>
    </section>
  );
}

export default About;