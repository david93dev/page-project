import hero from "../../assets/img/hero5.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import logo from "../../assets/img/Logo-Head.webp";

const Hero = () => {
  return (
    <section className="relative isolate min-h-[100svh] w-full bg-black">
      {/* Imagem de fundo */}
      <img
        src={hero}
        alt="Imagem principal do site"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-screen-xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          <div className="mb-6 w-[min(72vw,18rem)] sm:w-[16rem] lg:w-[20rem] 2xl:w-[24rem]">
            <img src={logo} alt="Logo LMR Tech Solutions" className="w-full h-auto" />
          </div>

          <h1 className="text-balance font-bold tracking-tight drop-shadow-lg text-white text-[clamp(1.75rem,5vw,3.5rem)]">
            LMR{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Tech Solutions
            </span>
          </h1>

          <p className="mt-4 text-pretty text-base text-gray-100 drop-shadow sm:text-lg 2xl:text-xl">
            Soluções inovadoras para o mercado de apostas no Brasil
          </p>

          <p className="mt-3 max-w-[60ch] text-pretty text-sm text-gray-200 drop-shadow sm:text-base 2xl:text-lg">
            Operadora brasileira com licenças federais e experiência consolidada no setor de apostas
            esportivas e cassino online. Posicionados estrategicamente para a regulamentação do
            mercado brasileiro.
          </p>

          {/* Botões: empilha no mobile, lado a lado no ≥sm */}
          <div className="mt-6 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              onClick={() => (window.location.href = "#servicos")}
              className="w-full sm:w-auto px-5 py-4 text-sm font-semibold rounded-lg
                         bg-blue-500 hover:bg-blue-400 transition will-change-transform hover:scale-[1.02]
                         shadow-lg inline-flex items-center justify-center gap-2"
            >
              Saiba mais <FaArrowRight />
            </Button>

            <Button
              onClick={() => (window.location.href = "#contato")}
              className="w-full sm:w-auto px-5 py-4 text-sm font-semibold rounded-lg
                         border border-blue-500 text-blue-500 hover:text-white
                         bg-transparent hover:bg-blue-400 transition will-change-transform hover:scale-[1.02]
                         shadow-lg inline-flex items-center justify-center gap-2"
              variant="outline"
            >
              Entre em contato
            </Button>
          </div>

          {/* Métricas: 1 col no mobile, 3 col a partir de sm */}
          <div className="mt-8 flex justify-center w-full max-w-2xl gap-4">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-blue-500 sm:text-4xl 2xl:text-5xl">24/7</h3>
              <p className="text-sm text-gray-300 sm:text-base 2xl:text-lg">Operação Contínua</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-blue-500 sm:text-4xl 2xl:text-5xl">7+</h3>
              <p className="text-sm text-gray-300 sm:text-base 2xl:text-lg">Sites em Operação</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-blue-500 sm:text-4xl 2xl:text-5xl">5+</h3>
              <p className="text-sm text-gray-300 sm:text-base 2xl:text-lg">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
