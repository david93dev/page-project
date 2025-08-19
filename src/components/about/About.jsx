import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "../ui/button";
import AboutCard from "./AboutCard";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";
import { BsPostcard } from "react-icons/bs";
import { TbClockHour4 } from "react-icons/tb";

const About = () => {
  return (
    <section  className="w-full bg-gray-950">
     <div id="sobre" 
          data-aos="fade-down"
          data-aos-offset="120"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
     className="container mx-auto px-4 py-16">
       <div className="container mx-auto px-4 py-16">
        <div  className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Coluna de texto */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-200 leading-tight [text-wrap:balance]">
              Sobre a{" "}
              <span className="bg-gradient-to-r from-amber-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
                LMR Tech Solutions
              </span>
            </h2>

            <div className="space-y-5 max-w-prose">
              <p className="text-gray-400 leading-relaxed">
                A LMR Tech Solutions é uma inovadora operadora de apostas
                brasileira que se destaca pela sua robusta estrutura e
                experiência no setor. Com duas licenças federais, vai operar
                seis sites de apostas e conta ainda com uma licença estadual da
                LOTERJ, onde operará mais um site.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Nossa equipe é formada por profissionais com mais de cinco anos
                de experiência no mercado de apostas esportivas e cassino
                online, além de sólida atuação no mercado de apostas físicas.
              </p>
            </div>

            <ul className="w-full max-w-prose flex flex-col justify-center items-center lg:items-start">
              {[
                "Duas licenças federais ativas",
                "Licença estadual LOTERJ",
                "Mais de 5 anos de experiência",
                "Preparados para regulamentação",
              ].map((txt) => (
                <li
                  key={txt}
                  className="text-white font-semibold flex items-center gap-2 py-2"
                >
                  <span className="text-green-500 text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  {txt}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-prose flex justify-center lg:justify-start">
              <Button
                className="font-bold bg-gradient-to-r from-amber-500 to-indigo-500 
                           rounded-lg px-6 py-4 text-white shadow-[0_0_1px_white]
                           hover:from-amber-600 hover:to-indigo-600 
                           transition duration-300 hover:scale-105"
              >
                Conheça Nossa História
              </Button>
            </div>
          </div>

          {/* Grid de cards */}
          <div className="w-full lg:w-1/2 lg:mt-18">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {[
                { icon: <LiaCertificateSolid />, textIcon: "2", desc: "Licenças Federais", cls: "text-sky-500" },
                { icon: <GrCertificate />,       textIcon: "1", desc: "Licença LOTERJ",     cls: "text-amber-500" },
                { icon: <BsPostcard />,          textIcon: "7", desc: "Sites Operados",     cls: "text-green-500" },
                { icon: <TbClockHour4 />,        textIcon: "5+",desc: "Anos Experiência",   cls: "text-purple-500" },
              ].map((c, i) => (
                // wrapper flex para o card preencher a célula (altura igual)
                <div key={i} className="flex">
                  <AboutCard
                    icon={c.icon}
                    textIcon={c.textIcon}
                    description={c.desc}
                    className={c.cls}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default About;
