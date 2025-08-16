import hero from "../../assets/img/hero.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen  w-full bg-black">
      {/* Imagem de fundo */}
      <img
        src={hero}
        alt="Imagem principal do site"
        className="h-full w-full object-cover"
        loading="eager" // eager se for a primeira imagem que aparece
      />

      {/* Overlay (degradê preto transparente) */}
      <div className="absolute inset-0 bg-gray-950/80" />

      {/* Conteúdo sobre a imagem */}
      <div className="mt-35 absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-4xl md:text-2xl lg:text-6xl 2xl:text-7xl font-bold drop-shadow-lg">
          LMR Tech Solutions
        </h1>
        <p className="mt-6 text-white text-lg md:text-xl 2xl:text-2xl max-w-2xl drop-shadow">
          Soluções inovadoras para o mercado de apostas no Brasil
        </p>
          <p className="mt-6 text-white text-lg md:text-lg 2xl:text-2xl max-w-xl drop-shadow">
          Operadora brasileira com licenças federais e experiência consolidada no setor de apostas esportivas e cassino online. Posicionados estrategicamente para a regulamentação do mercado brasileiro.
        </p>

        <div className="flex justify-center items-center gap-5">

          <Button className="flex justify-center items-center hover:scale-105 gap-2 mt-6 w-42 py-5 bg-blue-500 hover:bg-green-500 border-2 border-green-500 hover:border-blue-500 rounded-lg text-white font-semibold shadow-lg hover:from-blue-600 hover:to-green-600 transition">
          Saiba mais <FaArrowRight />
        </Button>
         <Button className="flex justify-center items-center hover:scale-105 gap-2 mt-6 w-42 py-5 bg-transparent hover:bg-blue-500 border-2 border-blue-500 hover:border-blue-500 rounded-lg text-blue-500 hover:text-white font-semibold shadow-lg hover:from-blue-600 hover:to-green-600 transition">
          Entre em contato
        </Button>

        </div>

        <div className="flex justify-center items-center gap-32 mt-12 2xl:mt-18">
          <div>
            <h3 className="text-green-500 font-extrabold text-3xl">24/7</h3>
            <p className="text-xl text-gray-300">Operação Contínua</p>
          </div>
          <div>
            <h3 className="text-blue-500 font-extrabold text-3xl">7+</h3>
            <p className="text-xl text-gray-300" >Sites em Operação</p>
          </div>
          <div>
            <h3 className="text-amber-500 font-extrabold text-3xl" >5+</h3>
            <p className="text-xl text-gray-300" >Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
