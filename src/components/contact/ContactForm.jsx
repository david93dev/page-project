import React from "react";
import FormField from "./FormField";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const baseInput =
  "w-full mt-1 p-2 rounded-md bg-gray-950 border border-gray-700 text-white";

export default function ContactForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // chame o callback de quem usa este form
    onSubmit?.(data);
  };

  return (
    <form className="space-y-4 px-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField id="nome" label="Nome">
          <Input
            type="text"
            id="nome"
            name="name"
            className={baseInput}
            placeholder="Seu nome completo"
            autoComplete="name"
            required
          />
        </FormField>

        <FormField id="email" label="Email">
          <Input
            type="email"
            id="email"
            name="email"
            className={baseInput}
            placeholder="Seu email"
            autoComplete="email"
            required
          />
        </FormField>
      </div>

      <FormField id="empresa" label="Empresa">
        <Input
          type="text"
          id="empresa"
          name="company"
          className={baseInput}
          placeholder="Nome da sua empresa"
          autoComplete="organization"
          required
        />
      </FormField>

      <FormField id="tipoProjeto" label="Tipo de Projeto">
        <Input
          type="text"
          id="tipoProjeto"
          name="type_project"
          className={baseInput}
          placeholder="Ex: Plataforma de apostas esportivas"
          required
        />
      </FormField>

      <FormField id="mensagem" label="Mensagem">
        <textarea
          id="message"
          name="message"
          rows="4"
          className={`${baseInput} resize-y`}
          placeholder="Escreva sua mensagem aqui"
          required
        />
      </FormField>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-green-500
                   hover:from-green-500 hover:to-blue-500 transition-colors duration-300
                   hover:scale-[1.01] text-white font-bold py-3 rounded-lg mt-2"
      >
        Enviar Mensagem
      </Button>
    </form>
  );
}
