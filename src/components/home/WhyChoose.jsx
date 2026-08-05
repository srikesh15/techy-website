import "./WhyChoose.css";
import FeatureCard from "../common/FeatureCard";
import whyChooseData from "../../data/whyChooseData";

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-header">
        <p>WHY CHOOSE US</p>

        <h2>Why Businesses Choose Techy</h2>

        <span>
          We combine innovation, quality, and reliability to deliver software
          solutions that help businesses grow and succeed.
        </span>
      </div>

      <div className="feature-grid">
        {whyChooseData.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;