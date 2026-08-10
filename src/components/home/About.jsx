import "./About.css";
import about from '../../assets/about.avif';

const highlights = [
  "5+ Years of Experience",
  "120+ Successful Projects",
  "50+ Happy Clients",
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
          At <strong>Techy</strong>, we specialize in building modern websites,
          mobile applications, cloud-based solutions, and AI-powered software.
          Our mission is to transform innovative ideas into reliable digital
          products that drive business success.
        </p>

        <ul className="about-list">
          {highlights.map((item) => (
            <li key={item}>✔ {item}</li>
          ))}
        </ul>

        <button className="about-btn">Learn More</button>
      </div>

      <div className="about-image">
        <img src={about} alt="About Techy" />
      </div>
    </section>
  );
}

export default About;