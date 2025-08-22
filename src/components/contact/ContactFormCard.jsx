import React from "react";
import ContactForm from "./ContactForm";
import { Card, CardHeader } from "@/components/ui/card";

export default function ContactFormCard({
  title = "Envie sua Mensagem",
  subtitle = "Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas",
  className = "",
  onSubmit,
}) {
  return (
    <Card className={`rounded-2xl bg-gray-900 max-w-2xl mx-auto border border-gray-800 ${className}`}>
      <CardHeader className="flex flex-col">
        <h2 className="text-gray-200 text-2xl font-bold">{title}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </CardHeader>

      <ContactForm onSubmit={onSubmit} />
    </Card>
  );
}
