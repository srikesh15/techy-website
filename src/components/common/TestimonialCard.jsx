import "./TestimonialCard.css";

function TestimonialCard({ name, role, rating, message }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-rating">
        {Array.from({ length: rating }, (_, index) => (
          <span key={index}>★</span>
        ))}
      </div>

      <p className="testimonial-message">
        "{message}"
      </p>

      <div className="testimonial-author">
        <div className="author-avatar">
          {name.charAt(0)}
        </div>

        <div>
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;