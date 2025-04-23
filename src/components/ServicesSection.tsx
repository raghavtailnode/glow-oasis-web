
import React from 'react';
import { Bath, Thermometer, Hand, Droplet, Eye } from 'lucide-react';

const serviceItems = [
  {
    title: "Signature Facial",
    description: "Our customized facial addresses your unique skin concerns using premium products and advanced techniques.",
    icon: Bath,
    duration: "60 min",
    price: "$95"
  },
  {
    title: "Hydrating Treatment",
    description: "Deeply moisturizing treatment that replenishes dry, dehydrated skin and restores natural balance.",
    icon: Droplet,
    duration: "45 min",
    price: "$85"
  },
  {
    title: "Anti-Aging Therapy",
    description: "Advanced treatment targeting fine lines and wrinkles using peptides and powerful antioxidants.",
    icon: Thermometer,
    duration: "75 min",
    price: "$120"
  },
  {
    title: "Gentle Exfoliation",
    description: "Revitalize dull skin with our gentle exfoliation process that removes dead skin cells and promotes renewal.",
    icon: Hand,
    duration: "30 min",
    price: "$65"
  },
  {
    title: "Revitalizing Eye Treatment",
    description: "Specialized treatment for the delicate eye area targeting dark circles, puffiness and fine lines.",
    icon: Eye,
    duration: "25 min",
    price: "$55"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-oasis-cream/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Premium Services</h2>
          <p className="text-muted-foreground">
            Indulge in our carefully curated treatments designed to address your specific skincare needs and elevate your natural beauty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div key={index} className="service-card hover-grow">
              <div className="bg-oasis-sage/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex justify-between items-center pt-4 border-t border-oasis-sand">
                <span className="text-sm text-muted-foreground">{service.duration}</span>
                <span className="font-medium">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-4 text-muted-foreground">
            Looking for a personalized experience?
          </p>
          <a href="#contact" className="inline-block btn-primary">
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
