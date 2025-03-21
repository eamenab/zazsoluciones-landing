
import React from "react";
import { Check, X, Sparkles, Code, CreditCard } from "lucide-react";
import BlurredCard from "./ui/BlurredCard";

const ComparisonTable = () => {
  const features = [
    {
      name: "Personalización",
      traditional: "Media",
      customSaas: "Alta",
      standardSaas: "Baja",
      description: "Nivel de adaptación al flujo de trabajo específico",
    },
    {
      name: "Tiempo de Implementación",
      traditional: "Alto",
      customSaas: "Medio",
      standardSaas: "Bajo",
      description: "Tiempo necesario para poner en marcha",
    },
    {
      name: "Costo Inicial",
      traditional: "Alto",
      customSaas: "Medio",
      standardSaas: "Bajo",
      description: "Inversión inicial requerida",
    },
    {
      name: "Costo de Mantenimiento",
      traditional: "Alto",
      customSaas: "Bajo",
      standardSaas: "Medio",
      description: "Costos recurrentes a largo plazo",
    },
    {
      name: "Escalabilidad",
      traditional: "Baja",
      customSaas: "Alta",
      standardSaas: "Media",
      description: "Facilidad para crecer con tu negocio",
    },
    {
      name: "Propiedad del Código",
      traditional: "Cliente",
      customSaas: "Compartida",
      standardSaas: "Proveedor",
      description: "Quién es dueño de la solución",
    },
  ];

  const renderValue = (value: string) => {
    if (value === "Alta" || value === "Cliente" || value === "Compartida") {
      return <Check className="w-6 h-6 text-green-500" />;
    } else if (value === "Baja" || value === "Proveedor") {
      return <X className="w-6 h-6 text-red-500" />;
    } else if (value === "Media") {
      return <div className="w-6 h-6 flex items-center justify-center text-yellow-500">•</div>;
    } else {
      return <span className="text-sm">{value}</span>;
    }
  };

  return (
    <section id="diferencias" className="py-20 bg-gradient-to-b from-background to-zaz-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-zaz-blue/10 text-zaz-blue text-sm font-medium mb-4">
            Qué nos Diferencia
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            La Solución Perfecta para tu Negocio
          </h2>
          <p className="text-zaz-dark-gray">
            Comparamos los enfoques tradicionales con nuestro modelo innovador para que veas por qué somos diferentes.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-12">
          <BlurredCard className="animate-fade-in flex flex-col items-center text-center p-8">
            <div className="w-16 h-16 flex items-center justify-center bg-zaz-blue/10 rounded-xl mb-6">
              <Code className="w-8 h-8 text-zaz-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Desarrollo Tradicional</h3>
            <p className="text-zaz-dark-gray text-sm mb-6">
              Soluciones construidas desde cero, con tiempos de desarrollo prolongados y costos elevados.
            </p>
          </BlurredCard>

          <BlurredCard className="animate-fade-in animation-delay-200 flex flex-col items-center text-center p-8 border-2 border-zaz-blue scale-105 relative z-10 shadow-lg">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <div className="px-4 py-1 bg-blue-gradient text-white text-sm font-medium rounded-full shadow-sm">
                Recomendado
              </div>
            </div>
            <div className="w-16 h-16 flex items-center justify-center bg-blue-gradient rounded-xl mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">SaaS a la Medida</h3>
            <p className="text-zaz-dark-gray text-sm mb-6">
              Nuestra propuesta: El balance perfecto entre personalización y velocidad, potenciado por IA.
            </p>
          </BlurredCard>

          <BlurredCard className="animate-fade-in animation-delay-300 flex flex-col items-center text-center p-8">
            <div className="w-16 h-16 flex items-center justify-center bg-zaz-purple/10 rounded-xl mb-6">
              <CreditCard className="w-8 h-8 text-zaz-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">SaaS Tradicional</h3>
            <p className="text-zaz-dark-gray text-sm mb-6">
              Soluciones estándar de suscripción, con poca flexibilidad para adaptarse a flujos específicos.
            </p>
          </BlurredCard>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto animate-fade-in animation-delay-500">
          <div className="min-w-[768px]">
            <div className="grid grid-cols-4 gap-4 mb-4 py-4 border-b">
              <div className="font-semibold">Característica</div>
              <div className="text-center font-semibold">Desarrollo Tradicional</div>
              <div className="text-center font-semibold text-zaz-blue">SaaS a la Medida</div>
              <div className="text-center font-semibold">SaaS Tradicional</div>
            </div>

            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-4 gap-4 py-4 ${
                  index !== features.length - 1 ? "border-b" : ""
                }`}
              >
                <div>
                  <div className="font-medium">{feature.name}</div>
                  <div className="text-xs text-zaz-dark-gray">{feature.description}</div>
                </div>
                <div className="flex justify-center items-center">
                  {renderValue(feature.traditional)}
                </div>
                <div className="flex justify-center items-center bg-zaz-blue/5 rounded-lg py-2">
                  {renderValue(feature.customSaas)}
                </div>
                <div className="flex justify-center items-center">
                  {renderValue(feature.standardSaas)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
