import { useState } from 'react';
import { Eye, X } from 'lucide-react';
const heroImage = '/images/Elegant-Wedding-Reception.jpeg';
const tentImage = '/images/luxury-event-tents.jpeg';
const cateringImage = '/images/Gourmet-Catering.jpeg';
const soundImage = '/images/Audio-&-Lighting.jpeg';
const outdoorImage = '/images/outdooor.jpeg';
const corporateImage = '/images/corporate-awards-ceremony.jpeg';
const weddingImage = '/images/Intimate-Wedding-Ceremony.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Weddings', 'Corporate', 'Private Parties', 'Outdoor Events'];

  const galleryItems = [
    {
      id: 1,
      image: weddingImage,
      title: 'Intimate Wedding Ceremony',
      category: 'Weddings',
      description: 'A beautiful and intimate wedding ceremony setup with elegant decor and personal touches.'
    },
    {
      id: 2,
      image: corporateImage,
      title: 'Corporate Awards Ceremony',
      category: 'Corporate',
      description: 'Professional setup for an elegant corporate awards ceremony.'
    },
    {
      id: 3,
      image: cateringImage,
      title: 'Gourmet Catering Display',
      category: 'Private Parties',
      description: 'Exquisite catering presentation for an exclusive private event.'
    },
    {
      id: 4,
      image: soundImage,
      title: 'Professional AV Setup',
      category: 'Corporate',
      description: 'State-of-the-art sound and lighting for a product launch event.'
    },
    {
      id: 5,
      image: outdoorImage,
      title: 'Garden Party Celebration',
      category: 'Outdoor Events',
      description: 'Beautiful outdoor celebration with ambient lighting and elegant décor.'
    },
    {
      id: 6,
      image: heroImage,
      title: 'Elegant Wedding Reception',
      category: 'Weddings',
      description: 'A luxurious wedding reception setup with stunning decor and elegant ambiance.'
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-gradient-elegant">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Event Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our portfolio of beautifully executed events. Each image tells a story 
            of creativity, elegance, and unforgettable moments.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-card-hover'
                    : 'bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative card-luxury overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
                  <div className="mt-3 inline-flex items-center space-x-1 text-primary-light font-medium">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">View Image</span>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-12 shadow-luxury">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us bring your vision to life with the same attention to detail and creativity 
              shown in our gallery.
            </p>
            <a href="#contact" className="btn-primary text-lg">
              Start Planning Your Event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;