
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-white/80 dark:bg-zaz-black/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={`${import.meta.env.BASE_URL}logo.png`} className="h-8 w-auto" alt="Zaz Logo" />
          <span className="text-2xl font-bold bg-blue-gradient highlight-text">Zaz</span>
          <span className="ml-1 text-lg font-medium dark:text-white">Soluciones</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#pensada" className="nav-link text-sm font-medium text-zaz-dark-gray hover:text-zaz-black dark:text-gray-300 dark:hover:text-white transition-colors">
            Pensada para tu Negocio
          </a>
          <a href="#soluciones" className="nav-link text-sm font-medium text-zaz-dark-gray hover:text-zaz-black dark:text-gray-300 dark:hover:text-white transition-colors">
            Soluciones
          </a>
          <a href="#nosotros" className="nav-link text-sm font-medium text-zaz-dark-gray hover:text-zaz-black dark:text-gray-300 dark:hover:text-white transition-colors">
            Nosotros
          </a>
          <ThemeToggle />
          <Button className="bg-blue-gradient shadow-button font-medium transition-all hover:shadow-lg hover:scale-105">
            <a href="#reunion">Agenda una Reunión</a>
          </Button>
        </nav>

        {/* Mobile menu and toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button className="text-zaz-dark-gray dark:text-gray-300" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-white/95 dark:bg-zaz-black/95 backdrop-blur-md shadow-sm transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[300px] py-4" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-4 pb-4">
          <a
            href="#pensada"
            className="text-sm font-medium text-zaz-dark-gray hover:text-zaz-black dark:text-gray-300 dark:hover:text-white transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pensada para tu Negocio
          </a>
          <a
            href="#soluciones"
            className="text-sm font-medium text-zaz-dark-gray hover:text-zaz-black dark:text-gray-300 dark:hover:text-white transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Soluciones
          </a>
          <a
            href="#nosotros"
            className="text-sm font-medium text-zaz-dark-gray hover:text-zaz-black dark:text-gray-300 dark:hover:text-white transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nosotros
          </a>
          <Button className="bg-blue-gradient shadow-button font-medium transition-all hover:shadow-lg w-full">
            <a href="#reunion">Agenda una Reunión</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
