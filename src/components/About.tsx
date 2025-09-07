import { Award, Heart, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Perfection',
      description: 'Every event is a canvas for our creativity and attention to detail.'
    },
    {
      icon: Users,
      title: 'Client-Centered Approach',
      description: 'Your vision guides everything we do, from initial planning to final execution.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Award-winning service that consistently exceeds expectations.'
    },
    {
      icon: Clock,
      title: 'Reliable Execution',
      description: 'Punctual, professional, and perfectly orchestrated every time.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
              Creating Extraordinary 
              <span className="text-gradient"> Experiences</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                For over 4 years, Kahaki Events has been the trusted name in luxury event planning 
                and management. We believe that every celebration deserves to be extraordinary, 
                whether it's an intimate dinner party or a grand corporate gala.
              </p>
              
              <p>
                Our comprehensive approach combines creative vision with meticulous planning, 
                ensuring that every element of your event reflects your unique style and exceeds 
                your expectations. From the initial concept to the final toast, we're with you 
                every step of the way.
              </p>
              
              <p>
                What sets us apart is our commitment to personalized service. We don't just plan events; 
                we craft experiences that create lasting memories for you and your guests. 
                Our team of experienced professionals brings creativity, expertise, and passion 
                to every project.
              </p>
            </div>

            <div className="mt-10">
              <a href="#services" className="btn-primary">
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Values Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="card-luxury p-6 text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground font-medium">Successful Events</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-accent border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "To transform your special moments into unforgettable memories through exceptional 
              event planning, impeccable service, and unwavering attention to detail. We believe 
              that every celebration tells a story, and we're here to help you tell yours beautifully."
            </p>
            <div className="mt-8 text-primary font-serif text-lg">
              — The Kahaki Events Team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;