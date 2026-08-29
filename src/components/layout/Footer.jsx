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

          <Link to="/services#web-development">Web Development</Link>
          <Link to="/services#mobile-app-development">Mobile App Development</Link>
          <Link to="/services#cloud-solutions">Cloud Solutions</Link>
          <Link to="/services#ai-solutions">AI Solutions</Link>
          <Link to="/services#ui-ux-design">UI UX Design</Link>
          <Link to="/services#cyber-security">Cyber Security</Link>

        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="footer-socials">
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              aria-label="Instagram"
            >
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