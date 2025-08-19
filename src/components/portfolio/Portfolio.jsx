import React from "react";
import PortfolioCard from "./PortfolioCard";
import x2bet from "../../assets/img/logox2bet.png";
import x2betLogo from "../../assets/img/Logo-X2bet.webp";
import pix from "../../assets/img/pix.png";
import pixLogo from "../../assets/img/Logo-pix-da-alegria.svg";
import { Button } from "../ui/button";

const Portfolio = () => {
  return (
    <div id="portifolio" className="bg-gray-950 px-4 py-18">
      <div
        data-aos="fade-up"
        data-aos-offset="120"
        data-aos-delay="100"
        data-aos-anchor-placement="top-bottom"
      >
        <div>
          <h2
            className="text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent
                         text-2xl md:text-3xl lg:text-5xl font-bold drop-shadow-lg
                         leading-tight tracking-tight [text-wrap:balance]"
          >
            Nossos Sites em Operação
          </h2>
          <p className="text-center mt-6 text-white text-base md:text-lg lg:text-xl max-w-prose mx-auto leading-relaxed text-pretty">
            Plataformas já consolidadas no mercado brasileiro, demonstrando
            nossa expertise e capacidade operacional.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-8 ">
          <PortfolioCard
            smallLogo={x2bet}
            smallLogoAlt="x2bet logo"
            bigLogo={x2betLogo}
            bigLogoAlt="logo x2bet"
            badgeText="Apostas & Casino"
            description="Plataforma completa de apostas esportivas e cassino 
        online com experiência otimizada para o público brasileiro."
            features={[
              "Apostas esportivas em tempo real",
              "Cassino online completo",
              "Deshboard aperfeiçoado",
            ]}
            btnText="Visitar Site"
            href="https://x2bet.com"
            iconClass="bg-orange-600 text-orange-200"
            listClass="marker:text-orange-600"
            buttonClass="bg-orange-600 hover:bg-orange-700"
          />
          <PortfolioCard
            smallLogo={pix}
            smallLogoAlt="x2bet logo"
            bigLogo={pixLogo}
            bigLogoAlt="logo x2bet"
            badgeText="Sorteios e Premiações"
            description="Sistema ideal para quem quer ter uma plataforma 
          de sorteios de Rifas com uma interface profissional, moderna e intuitiva."
            features={[
              "Integração PIX nativa",
              "Página de Checkout",
              "Suporte especializado",
            ]}
            btnText="Visitar Site"
            href="https://pixdaalegria.com.br"
            iconClass="bg-pink-600 text-pink-200"
            listClass="marker:text-pink-600"
            buttonClass="bg-pink-600 hover:bg-pink-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
