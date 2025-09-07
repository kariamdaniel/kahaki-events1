import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Luxury Tent Rentals',
    'Gourmet Catering',
    'Audio & Lighting',
    'Event Décor',
    'Full Event Planning',
    'Corporate Events'
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/epicureevents', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/kahaki_bakers_and_events', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/epicureevents', label: 'Twitter' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img 
                    src="/images/kahaki-logo.jpeg.jpg" 
                    alt="Kahaki Events Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold">Kahaki Events</h3>
                  <p className="text-sm text-secondary-foreground/80">Turning Moments into Memories</p>
                </div>
              </div>
              
              <p className="text-secondary-foreground/90 leading-relaxed mb-6">
                For over 4 years, we've been creating extraordinary events that leave lasting impressions. 
                From intimate gatherings to grand celebrations, we bring your vision to life.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">0728758344</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">kahakibakery@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-sm">Naivasha Market Plaza<br />Kenyatta Avenue, Naivasha</span>
                </div>
                <div className="flex items-start space-x-3 mt-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-sm">Mon–Sat: 6:30 AM – 8:00 PM<br />Sun: 7:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-serif font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-serif font-semibold mb-6">Connect With Us</h4>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div>
                <h5 className="font-semibold mb-3">Stay Updated</h5>
                <p className="text-sm text-secondary-foreground/80 mb-4">
                  Subscribe to our newsletter for event planning tips and exclusive offers.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="bg-primary hover:bg-primary-dark text-primary-foreground px-4 py-2 rounded-lg transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-foreground/70">
              © {currentYear} Kahaki Events. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#accessibility"
                className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300"
              >
                Accessibility
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;