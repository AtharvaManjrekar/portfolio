import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="bg-white">
          <Hero />
        </section>

        <section id="about" className="bg-gray-50">
          <About />
        </section>

        <section id="skills" className="bg-white">
          <Technologies />
        </section>

        <section id="experience" className="bg-gray-50">
          <Experience />
        </section>

        <section id="projects" className="bg-white">
          <Projects />
        </section>

        <section id="education" className="bg-gray-50">
          <Education />
        </section>

        <section id="contact" className="bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
