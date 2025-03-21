
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import BlurredCard from "./ui/BlurredCard";
import { ArrowRight, Users, Bot, Layers } from "lucide-react";

interface Solution {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  image: string;
}

const Solutions = () => {
  const solutions: Solution[] = [
    {
      id: "customers",
      title: "Manejo de Clientes",
      icon: <Users className="w-5 h-5" />,
      description:
        "Gestiona todo el ciclo de vida de tus clientes con herramientas inteligentes que automatizan tareas y mejoran la relación postventa.",
      features: [
        "Seguimiento personalizado de clientes",
        "Automatización de comunicaciones",
        "Análisis predictivo de comportamiento",
        "Segmentación avanzada",
        "Historial de interacciones centralizado"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "ai",
      title: "Agentes de IA",
      icon: <Bot className="w-5 h-5" />,
      description:
        "Implementa asistentes virtuales entrenados específicamente para tu negocio, capaces de resolver consultas y optimizar procesos.",
      features: [
        "Chatbots personalizados por industria",
        "Procesamiento de lenguaje natural avanzado",
        "Resolución automática de consultas frecuentes",
        "Aprendizaje continuo basado en interacciones",
        "Integración con sistemas existentes"
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "integrations",
      title: "Integraciones",
      icon: <Layers className="w-5 h-5" />,
      description:
        "Conecta todas tus herramientas existentes en una plataforma unificada, eliminando silos de información y aumentando la productividad.",
      features: [
        "Conectores para más de 200 plataformas",
        "Sincronización en tiempo real",
        "Automatización de flujos entre sistemas",
        "Paneles unificados de información",
        "APIs personalizadas para desarrolladores"
      ],
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const [activeSolution, setActiveSolution] = useState<string>(solutions[0].id);

  const handleSolutionChange = (id: string) => {
    setActiveSolution(id);
  };

  const currentSolution = solutions.find((s) => s.id === activeSolution) || solutions[0];

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 animate-slide-in">
            <div className="space-y-2 mb-8">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => handleSolutionChange(solution.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3",
                    activeSolution === solution.id
                      ? "bg-blue-gradient text-white shadow-lg"
                      : "hover:bg-zaz-light-gray"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      activeSolution === solution.id
                        ? "bg-white/20"
                        : "bg-zaz-blue/10"
                    )}
                  >
                    {solution.icon}
                  </div>
                  <span className="font-medium">{solution.title}</span>
                </button>
              ))}
            </div>

            <BlurredCard className="border border-zaz-gray">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                {currentSolution.title}
              </h3>
              <p className="text-zaz-dark-gray mb-6">
                {currentSolution.description}
              </p>
              <ul className="space-y-3 mb-6">
                {currentSolution.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-zaz-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-zaz-blue" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="text-zaz-blue font-medium flex items-center hover:underline transition-all">
                Conoce más <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </BlurredCard>
          </div>

          <div className="md:col-span-8 animate-slide-in-right">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] shadow-2xl">
              <img
                src={currentSolution.image}
                alt={currentSolution.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass rounded-xl p-6 max-w-lg mx-auto md:mx-0">
                  <h4 className="text-white text-xl font-bold mb-2">{currentSolution.title}</h4>
                  <p className="text-white/80 text-sm">
                    {currentSolution.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-full h-full tech-pattern opacity-30 -z-10"></div>
    </section>
  );
};

// For the Check icon
const Check = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Solutions;
