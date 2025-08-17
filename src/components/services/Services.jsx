import React from "react";
import { MdOutlineShield } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import { TbHours24 } from "react-icons/tb";

import ServicesCard from "./ServicesCard";

const SERVICES = [
  {
    icon: <TbHours24 />,
    title: "Atendimento 24h",
    description:
      "Suporte contínuo aos usuários com equipe especializada disponível 24 horas por dia, 7 dias por semana.",
    items: ["Suporte especializado contínuo", "Atendimento 24/7", "Resolução rápida de questões"],
  },
  {
    icon: <MdOutlineShield />,
    title: "Segurança 24h",
    description:
      "Monitoramento constante e proteção avançada para garantir a segurança das operações e dados dos clientes.",
    items: ["Monitoramento constante", "Proteção avançada de dados", "Segurança máxima das operações"],
    className: "!text-green-500 marker:!text-green-500",
  },
  {
    icon: <AiOutlineThunderbolt />,
    title: "Marketing",
    description:
      "Estratégias inovadoras de marketing digital e posicionamento de marca no mercado brasileiro.",
    items: ["Marketing digital inovador", "Posicionamento estratégico", "Foco no mercado brasileiro"],
    className: "!text-amber-500 marker:!text-amber-500",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Financeiro",
    description:
      "Gestão financeira robusta com processos otimizados para transações seguras e eficientes.",
    items: ["Gestão financeira robusta", "Transações seguras", "Processos otimizados"],
    className: "!text-purple-500 marker:!text-purple-500",
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 max-w-4xl mx-auto">
          <h2 className="text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent
                         text-2xl md:text-3xl lg:text-5xl font-bold drop-shadow-lg
                         leading-tight tracking-tight [text-wrap:balance]">
            Nossa Estrutura Organizacional
          </h2>

          <p className="text-center mt-6 text-white text-base md:text-lg lg:text-xl max-w-prose mx-auto leading-relaxed text-pretty">
            Departamentos especializados trabalhando em sinergia para garantir
            excelência em todos os aspectos da operação.
          </p>
        </div>

        {/* Cards em Flex responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((svc, idx) => (
            <div
              key={svc.title + idx}
              className="flex justify-center items-center"
            >
              <ServicesCard
                icon={svc.icon}
                title={svc.title}
                description={svc.description}
                items={svc.items}
                className={svc.className}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
