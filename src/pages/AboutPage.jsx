import "./AboutPage.css";

function AboutPage() {
  return (
    <main className="about-page">

      <section className="about-page-intro">
        <p className="about-page-tag">ABOUT TECHY</p>

        <h1>
          Turning Ideas Into Digital Experiences
        </h1>

        <p>
          We help businesses transform their ideas into modern,
          reliable, and user-friendly digital solutions.
        </p>
      </section>

      <section className="about-story">
        <div>
          <p className="about-page-tag">OUR STORY</p>

          <h2>Building Technology With Purpose</h2>

          <p>
            Techy is a digital solutions company focused on creating
            websites, mobile applications, and technology solutions
            that solve real business problems.
          </p>

          <p>
            We combine modern technologies with thoughtful design to
            create digital products that are simple to use, scalable,
            and built around business goals.
          </p>
        </div>

        <div className="about-story-card">
          <h3>Our Approach</h3>

          <p>
            Understand the problem, design the right solution, build
            with modern technology, and continuously improve.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-header">
          <p className="about-page-tag">WHAT DRIVES US</p>

          <h2>Our Mission & Values</h2>

          <p>
            The principles behind the way we design and build digital
            solutions.
          </p>
        </div>

        <div className="about-values-grid">

          <article className="value-card">
            <h3>Innovation</h3>

            <p>
              We explore modern technologies and creative approaches
              to build better digital experiences.
            </p>
          </article>

          <article className="value-card">
            <h3>Quality</h3>

            <p>
              We focus on clean design, reliable functionality, and
              solutions that provide lasting value.
            </p>
          </article>

          <article className="value-card">
            <h3>Customer Focus</h3>

            <p>
              We build solutions around the needs, goals, and
              experiences of the people who use them.
            </p>
          </article>

          <article className="value-card">
            <h3>Growth</h3>

            <p>
              We create scalable digital products that can evolve
              alongside the businesses we work with.
            </p>
          </article>

        </div>
      </section>

    </main>
  );
}

export default AboutPage;