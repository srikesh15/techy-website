import PageHero from "../components/common/PageHero";
import ServicesCard from "../components/common/ServicesCard";
import services from "../data/services";
import "./ServicesPage.css";

function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Explore the digital solutions we provide to help businesses move forward."
      />

      <section className="services-page-section">
        <div className="services-page-grid">
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
    </>
  );
}

export default ServicesPage;