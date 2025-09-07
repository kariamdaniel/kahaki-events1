import { ArrowRight, Star } from 'lucide-react';

const heroImage = '/images/Elegant-Wedding-Reception.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Star className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="text-sm font-medium">Premium Event Planning Services</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Turning <span className="text-gradient bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Moments</span>
            <br />
            into Memories
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we craft unforgettable experiences 
            with our premium event planning, luxury tent rentals, gourmet catering, and professional audio-visual services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="group bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#gallery"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary-light mb-2">100+</div>
              <div className="text-white/80 font-medium">Events Created</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary-light mb-2">4</div>
              <div className="text-white/80 font-medium">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary-light mb-2">98%</div>
              <div className="text-white/80 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;