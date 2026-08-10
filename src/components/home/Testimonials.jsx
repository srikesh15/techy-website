import "./Testimonials.css";
import TestimonialCard from "../common/TestimonialCard";
import testimonials from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <p>TESTIMONIALS</p>

        <h2>What Our Clients Say</h2>

        <span>
          We believe our clients' success is the best measure of our work.
        </span>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            rating={testimonial.rating}
            message={testimonial.message}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;