import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Portfolio";
import Skills from "../components/Skills";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About/>
    </>
  );
}
