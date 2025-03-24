
import React, { useState } from "react";
import BlurredCard from "./ui/BlurredCard";
import { Database, Users, Bot, DollarSign, FileCheck, MessageSquare, Layers } from "lucide-react";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("customers");

  const solutions = [
    {
      id: "customers",
      title: "Fideliza Clientes: Herramientas para una Gestión Eficaz",
      description: "Construye relaciones duraderas con tus clientes a través de comunicación continua, seguimiento personalizado y experiencias que impulsen la recurrencia.",
      icon: <Users className="w-6 h-6 text-zaz-blue" />,
      image: "https://frkhjiuttlxjipkykjti.supabase.co/storage/v1/object/public/eaconsulting//CRM.webp?auto=format&fit=crop&q=80"
    },
    {
      id: "ai",
      title: "Automatización Inteligente: Agentes de IA para Optimizar tu Operación",
      description: "Elimina tareas repetitivas y libera tu equipo para enfocarse en el crecimiento estratégico de tu negocio.",
      icon: <Bot className="w-6 h-6 text-zaz-blue" />,
      image: "https://frkhjiuttlxjipkykjti.supabase.co/storage/v1/object/public/eaconsulting//ade769f3-ai.webp?auto=format&fit=crop&q=80"
    },
    {
      id: "incentives",
      title: "Pagos Eficaces: Automatiza tus Incentivos y Reconoce el Desempeño",
      description: "Impulsa el rendimiento de tu equipo con un sistema de incentivos personalizado a tu negocio, transparente, y sin errores.",
      icon: <DollarSign className="w-6 h-6 text-zaz-blue" />,
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&q=80"
    },
    {
      id: "reconciliation",
      title: "Conciliación Automatizada: Ahorra Tiempo y Reduce Errores",
      description: "Libérate de horas de conciliación manual y minimiza el riesgo de errores costosos en tus finanzas.",
      icon: <FileCheck className="w-6 h-6 text-zaz-blue" />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
    },
    {
      id: "integrations",
      title: "Integraciones Inteligentes: Conecta Todas tus Herramientas en un Solo Lugar",
      description: "Rompe los silos de información y crea un flujo de trabajo eficiente con una integración perfecta de tus sistemas.",
      icon: <Layers className="w-6 h-6 text-zaz-blue" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const ActiveSolution = solutions.find((solution) => solution.id === activeTab);

  return (
    <section id="soluciones" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-zaz-purple/10 text-zaz-purple text-sm font-medium mb-4">
            Soluciones
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tecnología Inteligente para tu Negocio
          </h2>
          <p className="text-zaz-dark-gray">
            Impulsa tu crecimiento con tecnología de vanguardia que se integra a la perfección con tu empresa, brindándote una ventaja competitiva en el mercado.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side menu */}
          <div className="w-full lg:w-1/3">
            <BlurredCard className="h-full p-0 overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-gray-200/20">
                <h3 className="text-xl font-semibold text-zaz-blue">Soluciones</h3>
              </div>
              <ul className="divide-y divide-gray-200/20">
                {solutions.map((solution) => (
                  <li 
                    key={solution.id}
                    className={`cursor-pointer transition-all ${activeTab === solution.id ? 'bg-zaz-blue/10' : 'hover:bg-gray-100/10'}`}
                    onClick={() => setActiveTab(solution.id)}
                  >
                    <div className="p-4 flex items-center space-x-3">
                      {solution.icon}
                      <div>
                        <h4 className="font-medium">{solution.title}</h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </BlurredCard>
          </div>

          {/* Right side content */}
          <div className="w-full lg:w-2/3">
            <BlurredCard className="h-full">
              {ActiveSolution && (
                <div className="flex flex-col space-y-6">
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                    <img 
                      src={ActiveSolution.image} 
                      alt={ActiveSolution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{ActiveSolution.title}</h3>
                    <p className="text-zaz-dark-gray text-lg">{ActiveSolution.description}</p>
                  </div>
                </div>
              )}
            </BlurredCard>
          </div>
        </div>
      </div>
      
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-full h-full tech-pattern opacity-30 -z-10"></div>
    </section>
  );
};

export default Solutions;
