import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Techy</h2>

          <p>
            We build modern digital solutions that help businesses
            grow, innovate, and succeed.
          </p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <Link to="/services">Web Development</Link>
          <Link to="/services">Mobile Apps</Link>
          <Link to="/services">Cloud Solutions</Link>
          <Link to="/services">AI Solutions</Link>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="#" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Techy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;