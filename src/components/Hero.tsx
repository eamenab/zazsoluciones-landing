import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Del Excel al orden.{" "}
              <span className="highlight-text">Software a tu medida, en semanas, no meses.</span>
            </h1>
            <p className="text-lg text-zaz-dark-gray mb-8 max-w-lg">
              Automatiza tareas repetitivas y conecta todas las partes de tu operación en un solo sistema, hecho a medida e impulsado por AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-gradient text-white px-6 py-6 shadow-button font-medium text-base hover:shadow-lg transition-all hover:scale-105 flex items-center">
              <a href="#reunion">Agenda una Reunión</a>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-zaz-blue text-zaz-blue hover:bg-zaz-blue/5 px-6 py-6 font-medium text-base transition-all"
              >
                <a href="#soluciones">Conoce Nuestras Soluciones</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex md:justify-center md:items-center md:h-full md:relative">
            <div className="relative w-full h-[73vh]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-auto object-cover brightness-[1.1] contrast-[0.85]"
                src={`${import.meta.env.BASE_URL}26011-353916142_tiny.mp4`}
              />
              {/* Edge blending overlays */}
              <div className="absolute top-0 left-0 h-full w-80 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute top-0 right-0 h-full w-80 bg-gradient-to-l from-white to-transparent z-10" />
              <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-white to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-white to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-zaz-blue/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-zaz-indigo/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-500"></div>
    </section>
  );
};

export default Hero;
