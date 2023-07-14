import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
