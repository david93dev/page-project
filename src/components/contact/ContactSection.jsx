import React from "react";
import { Card, CardDescription, CardHeader } from "../ui/card";
import { Car } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import CardContact from "./CardContact";
import ContactFormCard from "./ContactFormCard";

const ContactSection = () => {

  const handleSubmit = (data) => {
    console.log("Formulário enviado com os dados:", data);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };
  return (
    <div className="bg-gray-950 px-4 py-18">
      <div
        id="contato"
        data-aos="fade-down"
        data-aos-offset="120"
        data-aos-delay="100"
        data-aos-anchor-placement="top-bottom"
      >
        <div>
          <h2
            className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg
                         leading-tight tracking-tight [text-wrap:balance]"
          >
            Entre em{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-center mt-6 text-gray-200 text-base md:text-lg lg:text-xl max-w-prose mx-auto leading-relaxed text-pretty">
            Estamos prontos para responder suas dúvidas e discutir oportunidades
            de parceria. Nossa equipe está disponível para atender suas
            necessidades.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 mt-18">
          <div>
            <div>
              <h2 className="text-gray-200 text-2xl font-bold">Fale Conosco</h2>
              <p className="text-gray-400 text-sm max-w-lg">
                Nossa equipe está disponível para atender suas necessidades e
                esclarecer qualquer dúvida sobre nossos serviços e soluções.
              </p>
              <div className="mt-4 space-y-2">
                <CardContact
                  icon={<HiOutlineMail />}
                  title="Email"
                  text="contato@lmrtechsolutions.com.br"
                />

                <CardContact
                  icon={<BsTelephone />}
                  title="Telefone"
                  text="+55 (11) 99999-9999"
                />

                <CardContact
                  icon={<LuMapPin />}
                  title="Localização"
                  text="São Paulo, Brasil"
                />
              </div>
            </div>
          </div>

          <div>
            <ContactFormCard onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
