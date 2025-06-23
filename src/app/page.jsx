import Header from "../components/Header/Header";
import Hero from "../components/hero/Hero"
import Map from "../components/map/Map"
import Scheme from "../components/scheme/Scheme"
import Data from "../components/data/Data"
import Footer from "../components/footer/Footer"


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Map />
      <Scheme />
      <Data />
      <Footer />
    </main>
  );
}
