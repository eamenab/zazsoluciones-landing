
import React from "react";
import { Check, Clock, Layers, CreditCard } from "lucide-react";
import BlurredCard from "./ui/BlurredCard";

const BusinessBenefits = () => {
  const benefits = [
    {
      title: "Soluciones 100% adaptadas a tu operación",
      description: "El software se adapta al flujo del cliente, no al revés.",
      icon: <Check className="w-6 h-6 text-zaz-blue" />,
    },
    {
      title: "Rapidez",
      description: "Soluciones rápidas para validar y ajustar con agilidad.",
      icon: <Clock className="w-6 h-6 text-zaz-blue" />,
    },
    {
      title: "Flexibilidad",
      description: "Herramientas que se adaptan al ritmo del negocio.",
      icon: <Layers className="w-6 h-6 text-zaz-blue" />,
    },
    {
      title: "Costos",
      description: "Menores costos de implementación y mantenimiento.",
      icon: <CreditCard className="w-6 h-6 text-zaz-blue" />,
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-background to-zaz-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-zaz-blue/10 text-zaz-blue text-sm font-medium mb-4">
            Nuestro Enfoque
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pensada para tu Negocio
          </h2>
          <p className="text-zaz-dark-gray">
            Creamos software que se adapta perfectamente a tus procesos y necesidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BlurredCard 
              key={index} 
              className={`animate-fade-in animation-delay-${index * 100} p-8 transition-all duration-300 hover:translate-y-[-8px]`}
              hoverEffect={true}
            >
              <div className="w-14 h-14 rounded-full bg-zaz-blue/10 flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-zaz-dark-gray">{benefit.description}</p>
            </BlurredCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;
