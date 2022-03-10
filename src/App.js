import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feature from "./components/Feature.js";
import Hero from "./components/Hero.js";
import Footer from "./components/Footer.js";
import Error404 from "./components/Error404.js";
import Team from "./components/Team.js";
import Contact from "./components/Contact.js";
import Header from "./components/Header.js";
import Heading from "./components/Heading.js";
import Programms from "./components/Programms.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Team />
                <Footer />
              </>
            }
          />
          <Route
            path="/whoarewe"
            element={
              <>
                <Hero />
                <Team />
                <Footer />
              </>
            }
          />
          <Route
            path="/whatweoffer"
            element={
              <>
                <Header />
                <Heading text="What do we offer?" />
                <Feature />
                <Footer />
              </>
            }
          />
          <Route
            path="/whatweuse"
            element={
              <>
                <Header />
                <Heading text="What software do we use?" />
                <Programms />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Heading text="Contact" />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <Error404 />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
