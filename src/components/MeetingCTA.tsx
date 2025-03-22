
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const MeetingCTA = () => {
  return (
    <section id="reunion" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-zaz-purple/10 text-zaz-purple text-sm font-medium mb-4">
            Hagamos una Reunión
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comienza Tu Transformación Digital Hoy
          </h2>
          <div className="bg-white shadow-lg rounded-xl p-8 border border-zaz-gray animate-fade-in animation-delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zaz-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-zaz-blue" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold mb-1">30 Minutos</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zaz-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-zaz-blue" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold mb-1">Selecciona el horario que mejor te convenga</h3>
                </div>
              </div>
            </div>
              {/* Calendly Embed */}
              <div className="mt-8 w-full">
                <iframe 
                  src="https://calendly.com/ernestoamenabar?hide_landing_page_details=1&text_color=003333&primary_color=003333"
                  width="100%" 
                  height="1100" 
                  allowFullScreen
                />
              </div>
          </div>
        </div>
      </div>

      {/* Decorative wave background */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 animate-wave">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#0057FF"
              fillOpacity="1"
              d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,138.7C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="absolute inset-0 -translate-y-1/3 animate-wave" style={{ animationDelay: "-5s" }}>
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#5A4CDB"
              fillOpacity="1"
              d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,149.3C672,117,768,107,864,122.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MeetingCTA;
