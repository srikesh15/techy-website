import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import About from "./components/home/About";
import WhyChoose from "./components/home/WhyChoose";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <About/>
      <WhyChoose/>
    </>
  );
}

export default App;