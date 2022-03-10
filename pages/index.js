import Hero from "../components/Hero.js";
import Team from "../components/Team.js";
import Footer from "../components/Footer.js";
import Feature from "../components/Feature.js";
import Programms from "../components/Programms.js";
import Contact from "../components/Contact.js";

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Feature />
      <Programms />
      <Contact />
      <Footer />
    </>
  );
}
