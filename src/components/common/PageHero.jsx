import "./PageHero.css";

function PageHero({ title, description }) {
  return (
    <section className="page-hero">
      <div className="page-hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default PageHero;