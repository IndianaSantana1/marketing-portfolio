import React from "react";
import "./styles/Home.css";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CTA titleText="Ready to work together?" buttonLabel="Let's connect" />
      <Footer />
    </div>
  );
};

export default Home;
