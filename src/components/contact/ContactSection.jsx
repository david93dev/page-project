import React from "react";
import { Card, CardDescription, CardHeader } from "../ui/card";
import { Car } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import CardContact from "./CardContact";

const ContactSection = () => {
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
            <Card className="rounded-2xl bg-gray-900 max-w-2xl mx-auto border border-gray-800">
              <CardHeader className="flex flex-col">
                <h2 className="text-gray-200 text-2xl font-bold">
                  Envie sua Mensagem
                </h2>
                <p className="text-gray-400 text-sm">
                  Preencha o formulário abaixo e nossa equipe entrará em contato
                  em até 24 horas
                </p>
              </CardHeader>

              <form className="space-y-4 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nome"
                      className="text-gray-200 text-sm font-semibold"
                    >
                      Nome
                    </label>
                    <Input
                      type="text"
                      id="nome"
                      name="nome"
                      className="w-full mt-1 p-2 rounded-md
                     bg-gray-950 border border-gray-700 text-white"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-gray-200 text-sm font-semibold"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full mt-1 p-2 rounded-md
                     bg-gray-950 border border-gray-700 text-white"
                      placeholder="Seu email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="text-gray-200 text-sm font-semibold"
                  >
                    Empresa
                  </label>
                  <Input
                    type="text"
                    id="empresa"
                    name="empresa"
                    className="w-full mt-1 p-2 rounded-md
                 bg-gray-950 border border-gray-700 text-white"
                    placeholder="Nome da sua empresa"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="projeto"
                    className="text-gray-200 text-sm font-semibold"
                  >
                    Tipo de Projeto
                  </label>
                  <Input
                    type="text"
                    id="empresa"
                    name="empresa"
                    className="w-full mt-1 p-2 rounded-md
                 bg-gray-950 border border-gray-700 text-white"
                    placeholder="Ex:Plataforma de apostas esportivas"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="text-gray-200 text-sm font-semibold"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="4"
                    className="w-full mt-1 p-2 rounded-md bg-gray-950 border border-gray-700 text-white"
                    required
                    placeholder="Escreva sua mensagem aqui"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500
                 hover:from-green-500 hover:to-blue-500 transition-colors duration-300 hover:scale-101 text-white font-bold py-3 rounded-lg mt-2"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
