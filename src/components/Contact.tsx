import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '../hooks/use-toast';
import { StarRating } from './ui/star-rating';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
    rating: 0
  });
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '0728758344',
      action: 'tel:+254728758344'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'kahakibakery@gmail.com',
      action: 'mailto:kahakibakery@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Naivasha Market Plaza\nKenyatta Avenue, Naivasha',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon–Sat: 6:30 AM – 8:00 PM\nSun: 7:00 AM – 6:00 PM',
      action: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-elegant">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start planning your unforgettable event? Get in touch with our team 
            for a free consultation and let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`card-luxury p-6 group ${info.action ? 'cursor-pointer hover:scale-105' : ''} transition-all duration-300`}
                  onClick={info.action ? () => window.open(info.action, '_blank') : undefined}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {info.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/254728758344"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-luxury"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp for Quick Response</span>
              </a>
              
              <a
                href="tel:+254728758344"
                className="w-full btn-secondary flex items-center justify-center space-x-3"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now for Immediate Assistance</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="card-luxury p-8">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-8">
                Free Consultation Request
              </h3>
              
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                
                try {
                  await emailjs.send(
                    'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                    'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                    formData,
                    'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
                  );
                  
                  toast({
                    title: "Success!",
                    description: "Your consultation request has been sent. We'll get back to you soon!",
                  });
                  
                  // Reset form
                  setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    eventType: '',
                    message: '',
                    rating: 0
                  });
                } catch (error) {
                  toast({
                    title: "Error",
                    description: "There was an error sending your request. Please try again.",
                    variant: "destructive",
                  });
                } finally {
                  setIsSubmitting(false);
                }
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private">Private Party</option>
                    <option value="outdoor">Outdoor Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your event *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Please describe your event vision, date, guest count, and any specific requirements..."
                  ></textarea>
                </div>

                <div className="col-span-full">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Rate our services (optional)
                  </label>
                  <StarRating
                    value={formData.rating}
                    onChange={(rating) => setFormData({...formData, rating})}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-3 py-4"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send My Request</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 p-4 bg-accent rounded-lg border border-border">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Free Consultation:</strong> We'll respond within 24 hours with a detailed 
                  proposal and schedule your complimentary consultation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="mt-16">
          <div className="card-luxury overflow-hidden">
            <div className="h-64 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">Visit Our Showroom</h4>
                <p className="text-muted-foreground">
                  See our décor samples, tent displays, and planning materials in person
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;