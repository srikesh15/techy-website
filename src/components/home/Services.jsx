import { Link } from "react-router-dom";
import "./Services.css";
import ServicesCard from "../common/ServicesCard";
import services from "../../data/services";

function Services() {
  const featuredServices = services.slice(0, 3);

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <p>OUR SERVICES</p>

        <h2>Solutions We Provide</h2>

        <span>
          We help businesses grow with modern digital solutions tailored to
          their needs.
        </span>
      </div>

      <div className="services-grid">
        {featuredServices.map((service) => (
          <ServicesCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      <div className="services-cta">
        <Link to="/services" className="services-btn">
          View All Services
        </Link>
      </div>
    </section>
  );
}

export default Services;