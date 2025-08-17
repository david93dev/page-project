import About from "@/components/about/About";
import Header from "@/components/header/Header";
import Hero from "@/components/header/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
    </div>
  );
};

export default Home;
