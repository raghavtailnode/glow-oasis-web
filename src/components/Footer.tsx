
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-oasis-sand/30 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="font-serif text-2xl font-medium text-foreground inline-block mb-4">
              Glow Oasis
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Your sanctuary for premium skincare treatments and transformative self-care experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Signature Facial</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Hydrating Treatment</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Anti-Aging Therapy</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Gentle Exfoliation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Eye Treatment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact Us</h4>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>123 Serenity Lane</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">(555) 123-4567</p>
              <p>info@glowoasis.com</p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-oasis-sand/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Glow Oasis. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
