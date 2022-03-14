import Hero from "../components/Hero.js"
import Footer from "../components/Footer.js"
import Feature from "../components/Feature.js"
import Header from "../components/Header.js"

export default function Home() {
  return (
    <>
      <Header />
      <Hero title="What we can offer you?" subtitle="Among other things, we mainly develop mobile and web applications, let's take a look" />
      <Feature />
      <Footer />
    </>
  );
}