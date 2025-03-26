
import React from "react";
import BlurredCard from "./ui/BlurredCard";
import { Mail } from "lucide-react";

const AboutUs = () => {
  const founders = [
    {
      image: "cz.jpg",
      name: "Cristián Zarhi",
      email: "czarhi@zazsoluciones.cl",
      linkedin: "",
      description:
        "Con un MBA de la Universidad de Chicago e Ingeniería Civil Industrial de la PUC, mi pasión es transformar empresas resolviendo sus desafíos más complejos y desbloqueando su potencial de crecimiento. Apalanco mi experiencia liderando proyectos de tecnología e innovación, estrategia y desarrollo de negocios para ayudar a empresas a escalar sus negocio y alcanzar sus metas."
    },
    {
      image: "ea.jpg",
      name: "Ernesto Amenábar",
      email: "eamenabar@zazsoluciones.cl",
      linkedin: "",
      description:
        "Ingeniero Civil Industrial PUC. He trabajado en Corredoras de Bolsa y empresas financieras en el área de operaciones y liderando implementaciones de mejoras a través de soluciones tecnológicas a medida, también he realizado consultoría en optimización de procesos. Mi enfoque está en crear y acompañar a las empresas en la implementación de herramientas tecnológicas innovadoras que permitan mejorar su eficiencia y servicio al cliente."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-zaz-light-gray to-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-zaz-blue/10 text-zaz-blue text-sm font-medium mb-4">
            Nosotros
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Un poco de Nosotros</h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in animation-delay-200">
          <BlurredCard className="text-center p-10 border border-zaz-gray">
            <p className="text-xl leading-relaxed text-zaz-dark-gray">
              Somos un equipo de profesionales apasionados por la tecnología y la innovación, comprometidos con el éxito de nuestros clientes. 
              En Zaz, creemos que es posible transformar la manera en que las empresas resuelven sus problemas. 
              Creamos software que se adapta perfectamente a tus necesidades, ayudándote a ordenar, automatizar y crecer, sin los costos y tiempos del desarrollo tradicional.
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
              <img
                src={`${import.meta.env.BASE_URL}${founder.image}`}
                className="w-24 h-24 rounded-full object-cover mb-6 shadow-md"
              />
              <h4 className="text-xl font-bold mb-4">{founder.name}</h4>
              <a
                href={`mailto:${founder.email}`}
                className="flex items-center gap-2 text-zaz-dark-gray hover:text-zinc-800 mb-2"
              >
                <Mail className="w-5 h-5" />
                <span className="break-all">{founder.email}</span>
              </a>
              <hr className="w-full border-t border-zinc-200 my-4" />
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
