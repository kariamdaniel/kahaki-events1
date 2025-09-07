import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Daniel Kipkurui',
      event: 'Wedding Reception',
      rating: 5,
      text: 'Kahaki Events made our wedding day absolutely magical. From the stunning tent setup to the impeccable catering, every detail was perfect. Our guests are still talking about how beautiful everything was!',
      image: 'https://images.unsplash.com/photo-1606963-1' // Placeholder for now
    },
    {
      id: 2,
      name: 'Mathew Omondi',
      event: 'Corporate Product Launch',
      rating: 5,
      text: 'Professional, reliable, and creative. The team at Kahaki Events transformed our vision into reality for our product launch. The AV setup was flawless and the event ran seamlessly.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a' // Placeholder for now
    },
    {
      id: 3,
      name: 'Sarah Kering',
      event: 'Anniversary Celebration',
      rating: 5,
      text: 'We hired Kahaki Events for our 25th anniversary party, and they exceeded all expectations. The décor was elegant, the food was exceptional, and the atmosphere was perfect.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1' // Placeholder for now
    },
    {
      id: 4,
      name: 'Peter & Jane Mbugua',
      event: 'Outdoor Wedding',
      rating: 5,
      text: 'Planning a wedding can be stressful, but Kahaki Events made it effortless. Their attention to detail and professional service allowed us to truly enjoy our special day.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df' // Placeholder for now
    },
    {
      id: 5,
      name: 'Kimani Mbugua',
      event: 'Corporate Gala',
      rating: 5,
      text: 'The annual company gala was a huge success thanks to Kahaki Events. From the elegant venue styling to the seamless event coordination, everything was top-notch.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' // Placeholder for now
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say 
            about their experience with Kahaki Events.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card-luxury p-8 relative group hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary" fill="currentColor" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg">
                    {testimonial.name.split(' ')[0][0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16">
          <div className="bg-accent border border-border rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8">
              Trusted by Hundreds of Satisfied Clients
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Events Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">On-Time Delivery</div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn-primary text-lg">
                Join Our Happy Clients
              </a>
            </div>
          </div>
        </div>

        {/* Review CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Have you worked with us? We'd love to hear about your experience!
          </p>
          <a 
            href="#contact" 
            className="btn-outline"
          >
            Share Your Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;