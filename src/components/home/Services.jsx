import "./Services.css";
import ServicesCard from "../common/ServicesCard";
import services from "../../data/services";

function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <p>Our Services</p>
        <h2>Solutions We Provide</h2>
        <span>
          We help businesses grow with modern digital solutions tailored to
          their needs.
        </span>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;