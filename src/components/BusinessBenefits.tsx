
import React from "react";
import { Check, Clock, Layers, CreditCard } from "lucide-react";
import BlurredCard from "./ui/BlurredCard";

const BusinessBenefits = () => {
  const benefits = [
    {
      title: "Soluciones Software que se Adapta a Ti, No al Revés",
      description: "Cada negocio es único, y tu software debería reflejarlo. Diseñamos soluciones 100% personalizadas para adaptarnos a tus procesos específicos. ¿El resultado? Mayor eficiencia, reducción de errores y un software que realmente impulsa tu crecimiento.",
      icon: <Check className="w-6 h-6 text-zaz-blue" />,
    },
    {
      title: "Implementación Rápida, Resultados Aún Más Rápidos",
      description: "Olvídate de largos procesos de implementación. Nuestras soluciones se despliegan rápidamente, para que puedas empezar a disfrutar de sus beneficios en cuestión de días, no meses.",
      icon: <Clock className="w-6 h-6 text-zaz-blue" />,
    },
    {
      title: "Escala Sin Límites: Software Flexible para un Crecimiento Sostenible",
      description: "No importa si eres una startup o una gran empresa, nuestras soluciones flexibles se adaptan a tu escala. Optimiza tus recursos, reduce costos y maximiza tu eficiencia con herramientas que crecen contigo",
      icon: <Layers className="w-6 h-6 text-zaz-blue" />,
    },
    {
      title: "Optimiza Tu Inversión: Software que Genera Valor, Accesible a Cualquier Empresa",
      description: "Controla tus costos sin sacrificar la calidad. Ofrecemos soluciones con costos de implementación eficientes y un mantenimiento accesible, diseñadas para optimizar tu presupuesto y maximizar tu rentabilidad.",
      icon: <CreditCard className="w-6 h-6 text-zaz-blue" />,
    },
  ];

  return (
    <section id="pensada" className="py-20 bg-gradient-to-b from-background to-zaz-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-zaz-blue/10 text-zaz-blue text-sm font-medium mb-4">
            Pensada para tu Negocio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Software pensado en tí y diseñado para Impulsar Tu Éxito
          </h2>
          <p className="text-zaz-dark-gray">
            Creamos soluciones que se adaptan perfectamente a tus procesos y necesidades específicas, brindándote la flexibilidad, rapidez y eficiencia que necesitas para alcanzar tus objetivos.          </p>
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
