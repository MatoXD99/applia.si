import Hero from "../components/Hero.js"
import Footer from "../components/Footer.js"
import Feature from "../components/Feature.js"
import Heading from "../components/Heading.js"
import Header from "../components/Header.js"
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Applia.si</title>
        <meta name="keywords" content="programming, web, mobile, application, android, ios, mysql, reactjs, javascript" />
      </Head>

      <Header />
      <Hero title="What we can offer you?" subtitle="Among other things, we mainly develop mobile and web applications, let's take a look" />
      <Feature />
      <Footer />
    </>
  );
}