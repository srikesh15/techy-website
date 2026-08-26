import PageHero from "../components/common/PageHero";
import Contact from "../components/home/Contact";

function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Techy"
        description="Have an idea or project in mind? We'd love to hear from you."
      />

      <Contact />
    </>
  );
}

export default ContactPage;