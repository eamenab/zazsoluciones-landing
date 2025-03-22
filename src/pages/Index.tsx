
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusinessBenefits from "@/components/BusinessBenefits";
import Solutions from "@/components/Solutions";
import AboutUs from "@/components/AboutUs";
import MeetingCTA from "@/components/MeetingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          const id = href.slice(1);
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground relative">
      <Header />
      <Hero />
      <BusinessBenefits />
      <Solutions />
      <AboutUs />
      <MeetingCTA />
      <Footer />
    </div>
  );
};

export default Index;
