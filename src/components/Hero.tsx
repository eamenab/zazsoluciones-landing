
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const phrases = [
  "Software a tu medida, en semanas.",
  "Automatiza tu operación sin fricciones.",
  "Soluciones que se adaptan a tu negocio.",
  "Desde Excel hacia el control total.",  
  "SaaS personalizado con inteligencia artificial."
];

const Hero = () => {

  const { isDarkMode } = useTheme()
  const videoSrc = isDarkMode
    // ? `${import.meta.env.BASE_URL}12716-241674181_tiny.mp4`
    ? `${import.meta.env.BASE_URL}12716-241674181_tiny.mp4`
    : `${import.meta.env.BASE_URL}26011-353916142_tiny.mp4`
    //: `${import.meta.env.BASE_URL}26011-353916142_tiny.mp4`

  const brightnessContrastClass = isDarkMode
    ? 'brightness-[1.1] contrast-[0.85]'
    : 'brightness-[1.1] contrast-[0.85]'

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Del Excel al orden.{" "}
              <span className="highlight-text inline-block relative h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phrases[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {phrases[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className="text-lg text-zaz-dark-gray dark:text-gray-300 mb-8 max-w-lg">
              Transforma tu operación con un sistema hecho a medida, impulsado por IA, que automatiza tareas repetitivas y conecta todas tus áreas en un solo lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-gradient text-white px-6 py-6 shadow-button font-medium text-base hover:shadow-lg transition-all hover:scale-105 flex items-center">
                <a href="#reunion">Agenda una Reunión</a>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-zaz-blue text-zaz-blue dark:border-zaz-blue/70 dark:text-zaz-light-blue hover:bg-zaz-blue/5 dark:hover:bg-zaz-blue/10 px-6 py-6 font-medium text-base transition-all"
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
                className={`h-full w-auto object-cover ${brightnessContrastClass}`}
                src={videoSrc}
              />
              {/* Edge blending overlays */}
              <div className="absolute top-0 left-0 h-full w-80 bg-gradient-to-r from-white dark:from-zaz-black to-transparent z-10" />
              <div className="absolute top-0 right-0 h-full w-80 bg-gradient-to-l from-white dark:from-zaz-black to-transparent z-10" />
              <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-white dark:from-zaz-black to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-white dark:from-zaz-black to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-zaz-blue/5 dark:bg-zaz-blue/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-zaz-indigo/5 dark:bg-zaz-indigo/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-500"></div>
    </section>
  );
};

export default Hero;
