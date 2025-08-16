import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "../ui/button";
import AboutCard from "./AboutCard";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";
import { BsPostcard } from "react-icons/bs";
import { TbClockHour4 } from "react-icons/tb";

const About = () => {
  return (
    <div className="bg-gray-950 w-full max-w-screen">
      <div className="flex justify-center items-center gap-18">
        <div className="flex justify-center items-center font-bold py-18">
          <div className="text-left space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-gray-200">
              Sobre a
              <span
                className="text-center bg-gradient-to-r
             from-amber-500 to-indigo-500 bg-clip-text text-transparent 
              drop-shadow-lg"
              >
                {" "}
                LMR Tech Solutions
              </span>
            </h2>

            <p className="text-gray-400 w-2xl">
              A LMR Tech Solutions é uma inovadora operadora de apostas
              brasileira que se destaca pela sua robusta estrutura e experiência
              no setor. Com duas licenças federais, vai operar seis sites de
              apostas e conta ainda com uma licença estadual da LOTERJ, onde
              operará mais um site.
            </p>

            <p className="text-gray-400 w-2xl">
              Nossa equipe é formada por profissionais com mais de cinco anos de
              experiência no mercado de apostas esportivas e cassino online,
              além de sólida atuação no mercado de apostas físicas.
            </p>

            <ul>
              <li className="text-white flex flex-row font-semibold items-center gap-2 py-2">
                <span className="text-green-500">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Duas licenças federais ativas
              </li>
              <li className="text-white flex flex-row font-semibold items-center gap-2 py-2">
                <span className="text-green-500">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Licença estadual LOTERJ
              </li>
              <li className="text-white flex flex-row font-semibold items-center gap-2 py-2">
                <span className="text-green-500">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Mais de 5 anos de experiência
              </li>
              <li className="text-white flex flex-row font-semibold items-center gap-2 py-2">
                <span className="text-green-500">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Preparados para regulamentação
              </li>
            </ul>
            <Button
              className="font-bold bg-gradient-to-r from-amber-500 to-indigo-500 
             rounded-lg px-9 py-5 text-md text-white 
             shadow-[0_0_1px_white]
             hover:bg-gradient-to-r hover:from-amber-600 hover:to-indigo-600 
             transition duration-300 hover:scale-105 text-shadow-2xs"
            >
              Conheça Nossa História
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <AboutCard
            icon={<LiaCertificateSolid />}
            textIcon={"2"}
            description={"Licenças Federais"}
            className={"text-sky-500"}
          />
          <AboutCard
            icon={<GrCertificate />}
            textIcon={"1"}
            description={"Licença LOTERJ"}
            className={"text-amber-500"}
          />
          <AboutCard
            icon={<BsPostcard />}
            textIcon={"7"}
            description={"Sites Operados"}
            className={"text-green-500"}
          />
          <AboutCard
            icon={<TbClockHour4 />}
            textIcon={"5+"}
            description={"Anos Experiência"}
            className={"text-purple-500"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
