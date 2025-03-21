
import React from "react";
import BlurredCard from "./ui/BlurredCard";

const AboutUs = () => {
  const founders = [
    {
      initials: "EA",
      role: "CEO & Co-Fundador",
      description:
        "Con más de 15 años en desarrollo de software empresarial y una visión clara de cómo la IA puede transformar los negocios."
    },
    {
      initials: "CZ",
      role: "CTO & Co-Fundador",
      description:
        "Especialista en inteligencia artificial y arquitectura de sistemas, dedicado a crear soluciones técnicamente excelentes y fáciles de usar."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-zaz-light-gray to-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-zaz-blue/10 text-zaz-blue text-sm font-medium mb-4">
            Nosotros
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">El Equipo Detrás de Zaz</h2>
          <p className="text-zaz-dark-gray">
            Somos profesionales apasionados por la tecnología y la innovación, comprometidos con el éxito de nuestros clientes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in animation-delay-200">
          <BlurredCard className="text-center p-10 border border-zaz-gray">
            <h3 className="text-2xl font-bold mb-6">Nuestra Visión</h3>
            <p className="text-xl leading-relaxed text-zaz-dark-gray italic">
              "Transformar la manera en que las empresas utilizan el software, 
              creando soluciones que se adapten perfectamente a sus necesidades 
              específicas, sin los costos y tiempos del desarrollo tradicional."
            </p>
          </BlurredCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <BlurredCard 
              key={index} 
              className={`flex flex-col items-center p-8 animate-fade-in ${
                index === 1 ? "animation-delay-300" : "animation-delay-200"
              }`}
              hoverEffect
            >
              <div className="w-24 h-24 rounded-full bg-blue-gradient flex items-center justify-center text-white text-2xl font-bold mb-6">
                {founder.initials}
              </div>
              <h4 className="text-xl font-bold mb-2">{founder.role}</h4>
              <p className="text-zaz-dark-gray text-center">{founder.description}</p>
            </BlurredCard>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-zaz-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-40 -left-20 w-60 h-60 bg-zaz-blue/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default AboutUs;
