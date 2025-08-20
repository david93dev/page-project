import hero from "../../assets/img/hero5.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import logo from "../../assets/img/Logo-Head.webp";

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-black">
      {/* Imagem de fundo */}
      <img
        src={hero}
        alt="Imagem principal do site"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager" // eager se for a primeira imagem que aparece
      />

      {/* Overlay (degradê preto transparente) */}
      <div className="absolute inset-0 bg-gray-950/85" />

      {/* Conteúdo sobre a imagem */}
      <div className="mt-18 md:mt-26 absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-6 w-auto sm:w-64 lg:w-80 2xl:w-96">
          <img src={logo} alt="bg-logo" className="" />
        </div> 
        <h1 className=" text-4xl text-gray-200
         md:text-5xl lg:text-6xl 2xl:text-7xl font-bold drop-shadow-lg">
          LMR <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Tech Solutions</span>
        </h1>
        <p className="mt-6 text-white text-lg md:text-xl 2xl:text-2xl max-w-2xl drop-shadow">
          Soluções inovadoras para o mercado de apostas no Brasil
        </p>
          <p className="mt-6 text-white text-sm md:text-lg 2xl:text-2xl max-w-xl drop-shadow">
          Operadora brasileira com licenças federais e experiência consolidada no setor de apostas esportivas e cassino online. Posicionados estrategicamente para a regulamentação do mercado brasileiro.
        </p>

        <div className="flex flex-col sm:flex-row mt-6 justify-center items-center gap-2">

          <Button className="flex justify-center items-center 
          hover:scale-105 text-xs gap-2 w-28 md:w-42 py-5 bg-blue-500 hover:bg-blue-400
            hover:border-blue-500 rounded-lg text-white font-semibold shadow-lg
             transition">
          Saiba mais <FaArrowRight />
        </Button>
         <Button className="flex justify-center items-center 
         hover:scale-105 text-xs gap-2  w-28 md:w-42 py-5 bg-transparent hover:bg-blue-400 border
          border-blue-500 hover:border-blue-500 rounded-lg text-blue-500 hover:text-white 
          font-semibold shadow-lg transition">
          Entre em contato
        </Button>

        </div>

        
           <div className="grid grid-cols-3 gap-4 mt-8">
          <div>
            <h3 className="text-blue-500 font-extrabold text-2xl 2xl:text-4xl">24/7</h3>
            <p className="text-sm 2xl:text-lg text-gray-300">Operação Contínua</p>
          </div>
          <div>
            <h3 className="text-blue-500 font-extrabold text-2xl 2xl:text-4xl">7+</h3>
            <p className="text-sm 2xl:text-lg text-gray-300" >Sites em Operação</p>
          </div>
          <div>
            <h3 className="text-blue-500 font-extrabold text-2xl 2xl:text-4xl" >5+</h3>
            <p className="text-sm 2xl:text-lg text-gray-300" >Anos de Experiência</p>
          </div>
        </div>
        

       
      </div>
    </section>
  );
};

export default Hero;
