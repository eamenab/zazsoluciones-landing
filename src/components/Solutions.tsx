
import React, { useState } from "react";
import BlurredCard from "./ui/BlurredCard";
import { Database, Users, Bot, DollarSign, FileCheck, MessageSquare, Layers } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Sidebar, 
  SidebarProvider,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("centralization");

  const solutions = [
    {
      id: "centralization",
      title: "Centraliza tu operación",
      description: "Maneja toda la información en un solo lugar, conectada y ordenada.",
      icon: <Database className="w-6 h-6 text-zaz-blue" />,
      image: "/solution1.jpg"
    },
    {
      id: "customers",
      title: "Maneja tus clientes de manera efectiva",
      description: "Gestiona el ciclo completo de tus clientes con herramientas inteligentes.",
      icon: <Users className="w-6 h-6 text-zaz-blue" />,
      image: "/solution2.jpg"
    },
    {
      id: "ai",
      title: "Automatiza tu operación apoyado en Agentes de AI",
      description: "Implementa asistentes virtuales entrenados para tu negocio.",
      icon: <Bot className="w-6 h-6 text-zaz-blue" />,
      image: "/solution3.jpg"
    },
    {
      id: "incentives",
      title: "Sistema de pago de incentivos variables",
      description: "Gestiona comisiones y bonos de forma automatizada y transparente.",
      icon: <DollarSign className="w-6 h-6 text-zaz-blue" />,
      image: "/solution4.jpg"
    },
    {
      id: "reconciliation",
      title: "Conciliación 100% automática",
      description: "Olvídate de conciliar manualmente datos entre sistemas.",
      icon: <FileCheck className="w-6 h-6 text-zaz-blue" />,
      image: "/solution5.jpg"
    },
    {
      id: "communication",
      title: "Eficienta tu coordinación y comunicación",
      description: "Mejora la colaboración interna con herramientas integradas.",
      icon: <MessageSquare className="w-6 h-6 text-zaz-blue" />,
      image: "/solution6.jpg"
    },
    {
      id: "integrations",
      title: "Integraciones",
      description: "Conexión sencilla con WhatsApp, correo, Google Calendar, ERPs, CRMs y otras herramientas clave, sin desarrollos complejos.",
      icon: <Layers className="w-6 h-6 text-zaz-blue" />,
      image: "/solution7.jpg"
    }
  ];

  const ActiveSolution = solutions.find((solution) => solution.id === activeTab);

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
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                    {/* Fallback if no image is available */}
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-zaz-blue/10 flex items-center justify-center">
                        {ActiveSolution.icon}
                      </div>
                    </div>
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
