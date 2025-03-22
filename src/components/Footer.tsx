
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
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-zaz-blue text-white flex items-center justify-center hover:bg-zaz-indigo transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-zaz-blue text-white flex items-center justify-center hover:bg-zaz-indigo transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.982 4.982 0 002.163-2.723 10.055 10.055 0 01-3.127 1.195 4.958 4.958 0 00-8.458 4.522 14.028 14.028 0 01-10.2-5.173 5.015 5.015 0 00-.668 2.497c0 1.718.87 3.238 2.19 4.129a4.934 4.934 0 01-2.242-.624v.062a4.954 4.954 0 003.978 4.857 4.978 4.978 0 01-2.235.084 4.96 4.96 0 004.624 3.448 9.94 9.94 0 01-6.17 2.125c-.4 0-.796-.023-1.185-.068a14.034 14.034 0 007.608 2.232c9.13 0 14.12-7.57 14.12-14.122 0-.216-.004-.43-.013-.644a10.086 10.086 0 002.475-2.572l-.047-.02z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-zaz-blue text-white flex items-center justify-center hover:bg-zaz-indigo transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-zaz-gray pt-8 text-center text-sm text-zaz-dark-gray">
          <p>© {currentYear} Zaz Soluciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
