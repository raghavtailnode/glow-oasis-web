
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 absolute w-full z-10 bg-transparent">
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-medium text-foreground">
          Glow Oasis
        </a>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-6 font-sans text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="bg-oasis-sage hover:bg-opacity-90 text-foreground">Book Now</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border py-4 px-6 shadow-md">
          <div className="flex flex-col space-y-4">
            <a href="#services" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#testimonials" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="bg-oasis-sage hover:bg-opacity-90 text-foreground w-full">Book Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
