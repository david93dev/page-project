import { BiSupport } from "react-icons/bi";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-900
         to-gray-800 ">
      <div className="my-18 ">
        <h2 className="text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-5xl font-bold drop-shadow-lg">
          Nossa Estrutura Organizacional
        </h2>
        <p className="text-center mt-6 text-white text-lg md:text-lg lg:text-xl max-w-3xl drop-shadow">
          Departamentos especializados trabalhando em sinergia para garantir
          excelência em todos os aspectos da operação.
        </p>
      </div>

      <div className="flex justify-center items-center mb-18 ">


        <div
          className="border-2 rounded-2xl border-gray-600 bg-gradient-to-r from-gray-900
         to-gray-800 w-sm space-y-5 px-6 py-5 hover:shadow-[0_0_9px_white]"
        >
          <BiSupport className="text-blue-500 text-7xl" />
          <h3 className="text-2xl text-white font-bold">Atendimento 24h</h3>
          <p className="text-lg text-gray-400">
            Suporte contínuo aos usuários com equipe especializada disponível 24
            horas por dia, 7 dias por semana.
          </p>
          <ul className="list-disc list-inside space-y-2 marker:text-2xl marker:text-blue-500">
            <li className="text-gray-400">Suporte especializado contínuo</li>
            <li className="text-gray-400">Atendimento 24/7</li>
            <li className="text-gray-400">Resolução rápida de questões</li>
          </ul>
        </div>

        
      </div>
    </div>
  );
};

export default Services;
