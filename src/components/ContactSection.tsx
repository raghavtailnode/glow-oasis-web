
import React from 'react';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-oasis-sage/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="heading-lg mb-6">Book Your Experience</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Ready to start your skincare journey? Schedule a consultation or book a 
              treatment. Our specialists are ready to create a personalized experience for you.
            </p>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-serif text-lg mb-2">Location</h3>
                <p className="text-muted-foreground">123 Serenity Lane, Wellness District<br />New York, NY 10001</p>
              </div>
              
              <div>
                <h3 className="font-serif text-lg mb-2">Hours</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-serif text-lg mb-2">Contact</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@glowoasis.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-3 border border-oasis-sand rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 border border-oasis-sand rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Interested In
                </label>
                <select
                  id="service"
                  className="w-full p-3 border border-oasis-sand rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-white"
                  required
                >
                  <option value="" disabled selected>Select a service</option>
                  <option value="facial">Signature Facial</option>
                  <option value="hydrating">Hydrating Treatment</option>
                  <option value="anti-aging">Anti-Aging Therapy</option>
                  <option value="exfoliation">Gentle Exfoliation</option>
                  <option value="eye">Revitalizing Eye Treatment</option>
                  <option value="consultation">Skin Consultation</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-oasis-sand rounded-md focus:outline-none focus:ring-1 focus:ring-primary min-h-[120px]"
                  placeholder="Tell us more about your skincare needs or questions"
                  required
                ></textarea>
              </div>
              
              <Button className="w-full bg-oasis-gold hover:bg-opacity-90 text-foreground" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
