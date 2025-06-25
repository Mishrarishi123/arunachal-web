import Navbar from "../components/Header/Header";
import Hero from "../components/hero/Hero"
import Map from "../components/map/Map"
import Scheme from "../components/scheme/Scheme"
import Data from "../components/data/Data"
import Footer from "../components/footer/Footer"
import About from "../components/about/About"


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Map />
      <Scheme />
      <About />
      <Data />
      <Footer />
    </main>
  );
}
