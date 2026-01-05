import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Projetos from "./Projetos/Projetos";
import SobreMim from "./SobreMim/SobreMim";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Projetos />
      <SobreMim />
      <Footer />
    </div>
  );
}


export default App;