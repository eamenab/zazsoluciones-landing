
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-zaz-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold bg-blue-gradient highlight-text">Zaz</span>
            <span className="ml-1 text-lg font-medium">Soluciones</span>
          </div>
          <p className="text-zaz-dark-gray mb-6 max-w-md text-center">
            Soluciones SaaS a la medida con inteligencia artificial para optimizar 
            procesos y aumentar la productividad de tu empresa.
          </p>
        </div>

        <div className="border-t border-zaz-gray pt-8 text-center text-sm text-zaz-dark-gray">
          <p>© {currentYear} Zaz Soluciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
