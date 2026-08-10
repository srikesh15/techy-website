import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import About from "./components/home/About";
import WhyChoose from "./components/home/WhyChoose";
import Projects from './components/home/Projects';
import Testimonials from "./components/home/Testimonials";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <About/>
      <WhyChoose/>
      <Projects/>
      <Testimonials/>
    </>
  );
}

export default App;