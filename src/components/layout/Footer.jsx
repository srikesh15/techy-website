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

          <a href="#about">About Us</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <a href="#services">Web Development</a>
          <a href="#services">Mobile Apps</a>
          <a href="#services">Cloud Solutions</a>
          <a href="#services">AI Solutions</a>
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