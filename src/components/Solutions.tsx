
import React from "react";
import BlurredCard from "./ui/BlurredCard";
import { Check, ArrowRight, Database, Users, Bot, DollarSign, FileCheck, MessageSquare, Layers } from "lucide-react";

const Solutions = () => {
  const solutionItems = [
    {
      id: "centralization",
      title: "Centraliza tu operación",
      description: "Maneja toda la información en un solo lugar, conectada y ordenada.",
      icon: <Database className="w-6 h-6 text-zaz-blue" />,
    },
    {
      id: "customers",
      title: "Maneja tus clientes de manera efectiva",
      description: "Gestiona el ciclo completo de tus clientes con herramientas inteligentes.",
      icon: <Users className="w-6 h-6 text-zaz-blue" />,
    },
    {
      id: "ai",
      title: "Automatiza tu operación apoyado en Agentes de AI",
      description: "Implementa asistentes virtuales entrenados para tu negocio.",
      icon: <Bot className="w-6 h-6 text-zaz-blue" />,
    },
    {
      id: "incentives",
      title: "Sistema de pago de incentivos variables",
      description: "Gestiona comisiones y bonos de forma automatizada y transparente.",
      icon: <DollarSign className="w-6 h-6 text-zaz-blue" />,
    },
    {
      id: "reconciliation",
      title: "Conciliación 100% automática",
      description: "Olvídate de conciliar manualmente datos entre sistemas.",
      icon: <FileCheck className="w-6 h-6 text-zaz-blue" />,
    },
    {
      id: "communication",
      title: "Eficienta tu coordinación y comunicación",
      description: "Mejora la colaboración interna con herramientas integradas.",
      icon: <MessageSquare className="w-6 h-6 text-zaz-blue" />,
    },
  ];

  return (
    <section id="soluciones" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-zaz-purple/10 text-zaz-purple text-sm font-medium mb-4">
            Nuestras Soluciones
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tecnología Avanzada para tu Empresa
          </h2>
          <p className="text-zaz-dark-gray">
            Diseñamos soluciones que se adaptan perfectamente a tus procesos y necesidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutionItems.map((solution, index) => (
            <BlurredCard 
              key={index} 
              className={`p-8 h-full animate-fade-in animation-delay-${index * 100}`}
              hoverEffect={true}
            >
              <div className="w-14 h-14 rounded-full bg-zaz-blue/10 flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-zaz-dark-gray">{solution.description}</p>
            </BlurredCard>
          ))}
        </div>

        {/* Integrations section */}
        <div className="mt-16 animate-fade-in animation-delay-500">
          <BlurredCard className="p-8 border-2 border-zaz-blue">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-blue-gradient flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Integraciones</h3>
                <p className="text-zaz-dark-gray">
                  Conexión sencilla con WhatsApp, correo, Google Calendar, ERPs, CRMs y otras herramientas clave, sin desarrollos complejos.
                </p>
              </div>
              <button className="mt-4 md:mt-0 flex items-center text-zaz-blue font-medium hover:underline transition-all">
                Conoce más <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </BlurredCard>
        </div>
      </div>
      
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-full h-full tech-pattern opacity-30 -z-10"></div>
    </section>
  );
};

export default Solutions;
