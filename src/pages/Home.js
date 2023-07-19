import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
