import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import WhyChoose from "../components/home/WhyChoose";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;