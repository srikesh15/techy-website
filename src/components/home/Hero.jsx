import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">🚀 Welcome to Techy</p>

        <h1>
          Building Digital Solutions with
          <span> Techy</span>
        </h1>

        <p className="hero-description">
          We help startups and businesses build modern websites,
          mobile applications, and scalable digital products.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Our Services</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;