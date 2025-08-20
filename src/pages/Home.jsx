import About from "@/components/about/About";
import Brands from "@/components/brands/Brands";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import Galery from "@/components/galery/galery";
import Header from "@/components/header/Header";
import Hero from "@/components/header/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import { Contact } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Galery />
      <Services />
      <About />
      <Portfolio />
      <Brands />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
