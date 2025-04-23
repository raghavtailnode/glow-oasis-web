
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                  alt="Glow Oasis Spa Interior" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-oasis-blue/30 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-oasis-gold/20 rounded-lg -z-10"></div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="heading-lg mb-6">We Believe in Natural Beauty</h2>
              
              <p className="mb-4 text-muted-foreground">
                Founded in 2015, Glow Oasis was born from a passion for holistic skincare and a belief that everyone deserves to feel confident in their skin.
              </p>
              
              <p className="mb-6 text-muted-foreground">
                Our team of certified estheticians and skincare specialists are dedicated to providing personalized treatments that address your unique needs. We combine time-tested techniques with modern innovation to deliver exceptional results.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-3xl font-serif mb-2 text-primary">5+</h3>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-2 text-primary">1000+</h3>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-2 text-primary">15+</h3>
                  <p className="text-sm text-muted-foreground">Expert Specialists</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-2 text-primary">25+</h3>
                  <p className="text-sm text-muted-foreground">Premium Products</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-oasis-sand">
                <h4 className="font-serif text-lg mb-2">Our Promise</h4>
                <p className="text-muted-foreground">
                  We use only the highest quality, natural ingredients in our treatments. Our services are designed to enhance your skin's natural beauty, not mask it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
