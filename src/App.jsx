import { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Projetos from "./Projetos/Projetos";
import SobreMim from "./SobreMim/SobreMim";
import Footer from "./Footer/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <NavBar activeSection={activeSection} />
      <Hero />
      <Projetos />
      <SobreMim />
      <Footer />
    </div>
  );
}

export default App;