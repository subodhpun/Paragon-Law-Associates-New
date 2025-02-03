import React, { useState } from 'react';
import { Star, ChevronRight, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card.jsx';
import Footer from './Footer';

// Custom Carousel Component
const SimpleCarousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#FBBF24] text-[#0F172A] p-2 rounded-full z-10"
      >
        <ChevronRight className="w-5 h-5 rotate-180" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FBBF24] text-[#0F172A] p-2 rounded-full z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      {React.Children.map(children, (child, index) =>
        index === currentSlide ? child : null
      )}
    </div>
  );
};

// Photo Gallery Component
const PhotoGallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <img
        src={photos[selectedPhoto]}
        alt={`Gallery ${selectedPhoto}`}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div className="flex space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedPhoto(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedPhoto ? 'bg-[#FBBF24]' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Attorneys = () => {
  const attorneys = [
    {
      name: "Sarah Johnson",
      role: "Managing Partner",
      photos: [
        "/api/placeholder/500/600",
        "/api/placeholder/500/600",
        "/api/placeholder/500/600"
      ],
      specialties: ["Corporate Law", "Mergers & Acquisitions"],
      education: 'LLM in Corporate Law, Harvard Law School',
      barAdmissions: ['Nepal Bar Council', 'Supreme Court of Nepal'],
      languages: ['Nepali', 'English', 'Hindi'],
      contact: {
        email: 'sarah@paragonlaw.com.np',
        phone: '+977-1-4444444'
      }
    },
    {
      name: "Michael Chen",
      role: "Senior Partner",
      photos: [
        "/api/placeholder/500/600",
        "/api/placeholder/500/600",
        "/api/placeholder/500/600"
      ],
      specialties: ["Criminal Defense", "Civil Litigation"],
      education: 'LLB, Tribhuvan University',
      barAdmissions: ['Nepal Bar Council'],
      languages: ['Nepali', 'English'],
      contact: {
        email: 'michael@paragonlaw.com.np',
        phone: '+977-1-4444445'
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Partner",
      photos: [
        "/api/placeholder/500/600",
        "/api/placeholder/500/600",
        "/api/placeholder/500/600"
      ],
      specialties: ["Family Law", "Estate Planning"],
      education: 'LLB, Tribhuvan University',
      barAdmissions: ['Nepal Bar Council'],
      languages: ['Nepali', 'English'],
      contact: {
        email: 'emily@paragonlaw.com.np',
        phone: '+977-1-4444446'
      }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300"> {/* Dark Navy Blue background */}
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl font-serif text-[#B8860B] mb-4">Our Expert Attorneys</h2> {/* Premium Gold */}
        <p className="text-gray-300 max-w-2xl mx-auto">
          Meet our team of experienced legal professionals dedicated to your success
        </p>
      </div>

      {/* Attorney Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <Card
              key={index}
              className="bg-[#1E293B] border-2 border-[#B8860B] rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300" // Hover effect
            >
              <CardContent className="p-6">
                {/* Photo Gallery */}
                <PhotoGallery photos={attorney.photos} />

                {/* Attorney Details */}
                <h3 className="text-xl font-semibold mt-4 text-[#B8860B]">{attorney.name}</h3> {/* Premium Gold */}
                <p className="text-gray-400 mb-6 italic">{attorney.role}</p>

                {/* Specializations */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Specializations</h4> {/* Premium Gold */}
                  <ul className="space-y-1">
                    {attorney.specialties.map((spec, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-[#B8860B] mr-2" /> {/* Premium Gold */}
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Education</h4> {/* Premium Gold */}
                  <p className="text-gray-300">{attorney.education}</p>
                </div>

                {/* Bar Admissions */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Bar Admissions</h4> {/* Premium Gold */}
                  <ul className="space-y-1">
                    {attorney.barAdmissions.map((admission, idx) => (
                      <li key={idx} className="text-gray-300">{admission}</li>
                    ))}
                  </ul>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Languages</h4> {/* Premium Gold */}
                  <p className="text-gray-300">{attorney.languages.join(', ')}</p>
                </div>

                {/* Contact Information */}
                <div className="flex items-center space-x-4">
                  <a href={`tel:${attorney.contact.phone}`} className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition"> {/* Premium Gold */}
                    <Phone className="w-4 h-4 mr-2" />
                    {attorney.contact.phone}
                  </a>
                  <a href={`mailto:${attorney.contact.email}`} className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition"> {/* Premium Gold */}
                    <Mail className="w-4 h-4 mr-2" />
                    {attorney.contact.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Attorneys;