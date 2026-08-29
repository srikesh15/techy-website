import "./ServicesCard.css";

function ServicesCard({
  id,
  icon,
  title,
  description,
}) {
  const serviceId = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <article
      id={serviceId}
      className="service-card"
    >
      <div className="service-icon">
        {icon}
      </div>

      <div className="service-content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}

export default ServicesCard;