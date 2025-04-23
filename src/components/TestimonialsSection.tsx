
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Client",
    image: null, // We'll use initials instead
    quote: "The anti-aging facial completely transformed my skin. I've tried many treatments before, but the personalized approach at Glow Oasis gave me results I could actually see.",
    rating: 5
  },
  {
    name: "Michael Torres",
    role: "First-time Client",
    image: null,
    quote: "I was nervous about my first facial, but the team made me feel so comfortable. My skin has never looked better, and the atmosphere was incredibly relaxing.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    role: "Monthly Member",
    image: null,
    quote: "The hydrating treatment is my absolute favorite. As someone with dry, sensitive skin, I've finally found products and treatments that work without irritation.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-oasis-blue/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about their experiences at Glow Oasis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-oasis-gold text-oasis-gold" />
                ))}
              </div>
              
              <blockquote className="mb-6">
                <p className="italic text-foreground/90">"{testimonial.quote}"</p>
              </blockquote>
              
              <div className="flex items-center">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-oasis-sage/50 flex items-center justify-center mr-4">
                    <span className="font-medium text-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
