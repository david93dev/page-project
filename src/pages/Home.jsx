import About from "@/components/about/About";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/header/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import { Contact } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
