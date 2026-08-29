import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
const [submitted, setSubmitted] = useState(false);

 const handleChange = (event) => {
  const { name, value } = event.target;

  setFormData((previousData) => ({
    ...previousData,
    [name]: value,
  }));

  setSubmitted(false);
};

  const handleSubmit = (event) => {
  event.preventDefault();

  // console.log("Form submitted:", formData);

  setSubmitted(true);

  setFormData({
    name: "",
    email: "",
    message: "",
  });
};

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-info">
          <p className="contact-tag">CONTACT US</p>

          <h2>Let's Build Something Amazing Together</h2>

          <p className="contact-description">
            Have an idea for your next digital product? Tell us about it and
            let's turn your idea into a powerful solution.
          </p>



          <div className="contact-details">
            <div>
              <strong>Email</strong>
              <span>hello@techy.com</span>
            </div>

            <div>
              <strong>Phone</strong>
              <span>+91 98765 43210</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>
      <div>
      {submitted && (
            <p className="form-success">
              Thank you! Your message has been sent successfully.
            </p>
          )}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

        </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;