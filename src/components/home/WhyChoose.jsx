import "./WhyChoose.css";

const reasons = [
  {
    icon: "🚀",
    title: "Modern Solutions",
    description:
      "We use modern technologies and development practices to build reliable digital products.",
  },
  {
    icon: "⚡",
    title: "Fast & Reliable",
    description:
      "We focus on performance, reliability, and smooth user experiences across devices.",
  },
  {
    icon: "🎯",
    title: "Business Focused",
    description:
      "Our solutions are designed around real business goals, users, and measurable results.",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable",
    description:
      "We build solutions that are secure today and ready to grow with your business.",
  },
  {
    icon: "💡",
    title: "Innovative Approach",
    description:
      "We combine creativity and technology to turn ideas into practical digital solutions.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "We work closely with clients and provide support throughout the project journey.",
  },
];

function WhyChoose() {
  return (
    <section className="why-section">
      <div className="why-header">
        <p>WHY CHOOSE US</p>

        <h2>Why Businesses Choose Techy</h2>

        <span>
          We combine technology, creativity, and business understanding to
          deliver digital solutions that make a difference.
        </span>
      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <article className="why-card" key={reason.title}>
            <div className="why-icon">{reason.icon}</div>

            <h3>{reason.title}</h3>

            <p>{reason.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;