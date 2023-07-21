import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import CTA from "../components/CTA";

const Home = (props) => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CTA titleText="Ready to work together?" buttonLabel="Let's connect" />
    </div>
  );
};

export default Home;
