import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card.jsx';
import Gaurab from '../images/gaurab.jpg';
import Gaurab2 from '../images/gaurab2.jpg';
import Kiran from '../images/kiran.png';
import Sunil from '../images/sunil.png';

// Custom Carousel Component
const SimpleCarousel = ({ children, autoPlay = false, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval, currentSlide]);

  return (
    <div className="relative group">
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#B8860B] text-[#0F172A] p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <div className="overflow-hidden rounded-lg">
        {React.Children.map(children, (child, index) => (
          <div 
            key={index} 
            className={`transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'}`}
            style={{ width: '100%' }}
          >
            {child}
          </div>
        ))}
      </div>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#B8860B] text-[#0F172A] p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#B8860B] w-4' : 'bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Photo Gallery Component
const PhotoGallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <SimpleCarousel autoPlay interval={4000}>
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-700"
            />
          ))}
        </SimpleCarousel>
      </div>
      
      <div className="flex space-x-2 mt-3">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedPhoto(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedPhoto ? 'bg-[#B8860B]' : 'bg-gray-500'
            }`}
            aria-label={`View photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  const attorneys = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Managing Partner",
      photos: [
        Gaurab, Gaurab2,
      ],
      specialties: ["Corporate Law", "Mergers & Acquisitions", "International Business"],
      education: 'LLM in Corporate Law, Harvard Law School',
      barAdmissions: ['Nepal Bar Council', 'Supreme Court of Nepal'],
      languages: ['Nepali', 'English', 'Hindi'],
      experience: '7+ years',
      contact: {
        email: 'sarah@paragonlaw.com.np',
        phone: '+977-1-4444444'
      },
      bio: "Sarah leads our corporate practice with expertise in complex transactions and international business law."
    },
    {
      id: 2,
      name: "Kiran",
      role: "Senior Partner",
      photos: [
        Kiran,
        Kiran,
      ],
      specialties: ["Criminal Defense", "Civil Litigation", "White-Collar Crime"],
      education: 'LLB, Tribhuvan University',
      barAdmissions: ['Nepal Bar Council'],
      languages: ['Nepali', 'English'],
      experience: '5+ years',
      contact: {
        email: 'michael@paragonlaw.com.np',
        phone: '+977-1-4444445'
      },
      bio: "Michael is renowned for his strategic defense approach and successful outcomes in high-stakes litigation."
    },
    {
      id: 3,
      name: "Sunil",
      role: "Partner",
      photos: [
        Sunil,
      ],
      specialties: ["Family Law", "Estate Planning", "Child Custody"],
      education: 'LLB, Tribhuvan University',
      barAdmissions: ['Nepal Bar Council'],
      languages: ['Nepali', 'English'],
      experience: '5+ years',
      contact: {
        email: 'emily@paragonlaw.com.np',
        phone: '+977-1-4444446'
      },
      bio: "Emily provides compassionate yet effective legal counsel in sensitive family matters."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
      {/* Header Section
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-1 w-12 bg-[#FBBF24]"></div>
          <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">Meet Our Team</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-[#FBBF24] mb-6">Our Expert Attorneys</h1>
        <p className="text-gray-400 max-w-3xl text-lg">
          Meet our team of experienced legal professionals dedicated to protecting your rights and achieving your legal goals.
        </p>
      </div> */}

      {/* Attorney Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney) => (
            <Card
              key={attorney.id}
              className="bg-[#1E293B] border-2 border-transparent hover:border-[#B8860B] rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Photo Gallery */}
                <div className="h-64">
                  <PhotoGallery photos={attorney.photos} />
                </div>

                <div className="p-6">
                  {/* Attorney Details */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-[#B8860B]">{attorney.name}</h3>
                      <p className="text-gray-400 mb-2 italic">{attorney.role}</p>
                    </div>
                    <span className="bg-[#B8860B] text-[#0F172A] text-xs font-semibold px-2 py-1 rounded">
                      {attorney.experience}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{attorney.bio}</p>

                  {/* Specializations */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#B8860B] mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {attorney.specialties.map((spec, idx) => (
                        <span 
                          key={idx} 
                          className="bg-[#0F172A] text-gray-300 text-xs px-2 py-1 rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <a 
                      href={`tel:${attorney.contact.phone}`} 
                      className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition text-sm"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </a>
                    <a 
                      href={`mailto:${attorney.contact.email}`} 
                      className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition text-sm"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;