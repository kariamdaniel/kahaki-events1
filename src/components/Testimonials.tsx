import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Wanjiku & Kamau Mwangi',
      event: 'Traditional Wedding (Ruracio)',
      rating: 5,
      text: 'Kahaki Events made our ruracio so beautiful and stress-free. The décor and tents were perfect, and our family was so impressed. Asante sana for making our day memorable!',
      image: '' // Placeholder for now
    },
    {
      id: 2,
      name: 'Brian Otieno',
      event: 'Corporate Team Building',
      rating: 5,
      text: 'The team at Kahaki Events organized an amazing team building for our company in Naivasha. The activities were fun and the food was delicious. We will definitely book again!',
      image: '' // Placeholder for now
    },
    {
      id: 3,
      name: 'Aisha Mohammed',
      event: 'Birthday Party',
      rating: 5,
      text: 'My daughter’s birthday was a blast thanks to Kahaki Events. The setup was colourful and the kids loved every moment. Thank you for making it special!',
      image: '' // Placeholder for now
    },
    {
      id: 4,
      name: 'John & Mary Njoroge',
      event: 'Garden Wedding',
      rating: 5,
      text: 'We are so grateful to Kahaki Events for making our garden wedding in Karen so elegant. Everything was handled professionally and on time. Highly recommended!',
      image: '' // Placeholder for now
    },
    {
      id: 5,
      name: 'Grace Wambui',
      event: 'Chama Anniversary',
      rating: 5,
      text: 'Our chama anniversary celebration was a huge success. The décor, catering, and service were all top-notch. Thank you Kahaki Events for exceeding our expectations!',
      image: '' // Placeholder for now
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