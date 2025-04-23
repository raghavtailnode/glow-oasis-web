
import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')",
          backgroundPosition: "center 25%",
          filter: "brightness(0.9)"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent z-1"></div>
      
      {/* Hero content */}
      <div className="container-custom relative z-2 h-full flex flex-col justify-center">
        <div className="max-w-xl space-y-6 fade-in">
          <h1 className="heading-xl text-foreground">Reveal Your Natural Radiance</h1>
          <p className="text-lg md:text-xl text-foreground/80 font-light">
            Experience transformative skincare treatments designed to nurture, 
            rejuvenate, and enhance your skin's natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="btn-primary bg-oasis-gold">Book a Consultation</Button>
            <Button variant="outline" className="border-oasis-gold text-foreground">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
