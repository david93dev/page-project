import { BiSupport } from "react-icons/bi";
import ServicesCard from "./ServicesCard";
import { MdOutlineShield } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaMoneyBillWave } from 'react-icons/fa';

const Services = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-900
         to-gray-800 "
    >
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
        <ServicesCard
          icon={<BiSupport />}
          title="Atendimento 24h"
          description="Suporte contínuo aos usuários com equipe especializada disponível 24 horas por dia, 7 dias por semana."
          items={[
            "Suporte especializado contínuo",
            "Atendimento 24/7",
            "Resolução rápida de questões",
          ]}
        />

        <ServicesCard
          icon={<MdOutlineShield />}
          title={"Segurança 24h"}
          description={
            "Monitoramento constante e proteção avançada para garantir a segurança das operações e dados dos clientes."
          }
          items={[
            "Monitoramento constante",
            "Proteção avançada de dados",
            "Segurança máxima das operações",
          ]}
          className={"!text-green-500 marker:!text-green-500"}
        />

        <ServicesCard
          icon={<AiOutlineThunderbolt />}
          title={"Marketing"}
          description={
            "Estratégias inovadoras de marketing digital e posicionamento de marca no mercado brasileiro."
          }
          items={[
            "Marketing digital inovador",
            "Posicionamento estratégico",
            "Foco no mercado brasileiro",
          ]}
          className={"!text-amber-500 marker:!text-amber-500"}
        />
        <ServicesCard
          icon={<FaMoneyBillWave />}
          title="Financeiro"
          description="Gestão financeira robusta com processos otimizados para transações seguras e eficientes."
          items={[
            "Gestão financeira robusta",
            "Transações seguras",
            "Processos otimizados",
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
