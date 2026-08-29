import "./Testimonials.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, GrowthHub",
    message:
      "Techy understood our requirements quickly and delivered a modern website that helped us present our business professionally.",
  },
  {
    name: "Priya Reddy",
    role: "Business Owner",
    message:
      "The team was professional, responsive, and easy to work with. We are very happy with the final digital solution.",
  },
  {
    name: "Arjun Kumar",
    role: "Startup Founder",
    message:
      "Techy transformed our idea into a clean and reliable product. The experience from start to finish was excellent.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <p>TESTIMONIALS</p>

        <h2>What Our Clients Say</h2>

        <span>
          Here's what some of our clients have to say about working with us.
        </span>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="testimonial-stars">★★★★★</div>

            <p className="testimonial-message">
              "{testimonial.message}"
            </p>

            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;