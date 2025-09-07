import { Tent, ChefHat, Volume2, Sparkles, Calendar, Users } from 'lucide-react';

const tentImage = '/images/luxury-event-tents.jpeg';
const cateringImage = '/images/Gourmet-Catering.jpeg';
const soundImage = '/images/Audio-&-Lighting.jpeg';

const Services = () => {
  const services = [
    {
      icon: Tent,
      title: 'Luxury Tent Rentals',
      description: 'Premium quality tents for any outdoor event, from intimate gatherings to grand celebrations. Weather-resistant and elegantly designed.',
      image: tentImage,
      features: ['Weatherproof canopies', 'Various sizes available', 'Professional setup', 'Elegant styling options']
    },
    {
      icon: ChefHat,
      title: 'Gourmet Catering',
      description: 'Exquisite culinary experiences crafted by our professional chefs. From buffet setups to plated dinners.',
      image: cateringImage,
      features: ['Custom menu design', 'Professional service staff', 'Dietary accommodations', 'Beautiful presentation']
    },
    {
      icon: Volume2,
      title: 'Audio & Lighting',
      description: 'State-of-the-art sound systems and atmospheric lighting to create the perfect ambiance for your event.',
      image: soundImage,
      features: ['Professional sound systems', 'Ambient lighting design', 'Technical support', 'Equipment rental']
    },
    {
      icon: Sparkles,
      title: 'Event Décor',
      description: 'Transform your venue with our stunning décor services. From centerpieces to full venue styling.',
      image: null,
      features: ['Custom décor themes', 'Floral arrangements', 'Furniture rental', 'Backdrop design']
    },
    {
      icon: Calendar,
      title: 'Full Event Planning',
      description: 'Complete event management from concept to execution. We handle every detail so you can enjoy your special day.',
      image: null,
      features: ['Timeline coordination', 'Vendor management', 'Day-of coordination', 'Stress-free planning']
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Professional corporate event planning for conferences, team building, product launches, and business celebrations.',
      image: null,
      features: ['Professional setup', 'AV equipment', 'Catering options', 'Branded experiences']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-elegant">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to celebration, we provide comprehensive event solutions tailored to your vision and budget. 
            Every detail is meticulously planned and flawlessly executed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-luxury p-8 group hover:scale-105 transition-all duration-300"
            >
              {/* Service Image */}
              {service.image && (
                <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="#contact"
                  className="text-primary hover:text-primary-dark font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-12 shadow-luxury">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Create Your Perfect Event?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a custom package that brings your dream event to life.
            </p>
            <a href="#contact" className="btn-primary text-lg">
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;