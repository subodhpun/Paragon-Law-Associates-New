// import React, { useState } from 'react';
// import { Star, ChevronRight, Phone, Mail, Award, BookOpen, Users, HelpCircle } from 'lucide-react';
// import { Card, CardContent } from '../components/ui/Card.jsx';
// import Footer from './Footer';
// import Gaurab from '../images/gaurab.jpg'
// import SlideOnScroll from '@/components/ui/Slideonscroll';


// // Custom Carousel Component
// const SimpleCarousel = ({ children }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = React.Children.count(children);
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };
//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };
//   return (
//     <div className="relative">
//       <button
//         onClick={prevSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#B8860B] text-[#0F172A] p-2 rounded-full z-10"
//       >
//         <ChevronRight className="w-5 h-5 rotate-180" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#B8860B] text-[#0F172A] p-2 rounded-full z-10"
//       >
//         <ChevronRight className="w-5 h-5" />
//       </button>
//       {React.Children.map(children, (child, index) =>
//         index === currentSlide ? child : null
//       )}
//     </div>
//   );
// };

// // Photo Gallery Component
// const PhotoGallery = ({ photos }) => {
//   const [selectedPhoto, setSelectedPhoto] = useState(0);
//   return (
//     <div className="flex flex-col items-center">
//       <img
//         src={photos[selectedPhoto]}
//         alt={`Gallery ${selectedPhoto}`}
//         className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105" // Smooth zoom effect on hover
//       />
//       <div className="flex space-x-2">
//         {photos.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedPhoto(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               index === selectedPhoto ? 'bg-[#B8860B]' : 'bg-gray-500'
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Attorneys = () => {
//   const attorneys = [
//     {
//       name: "Sarah Johnson",
//       role: "Managing Partner",
//       photos: [
//         Gaurab,
//         "/api/placeholder/500/600",
//         "/api/placeholder/500/600"
//       ],
//       specialties: ["Corporate Law", "Mergers & Acquisitions"],
//       education: 'LLM in Corporate Law, Harvard Law School',
//       barAdmissions: ['Nepal Bar Council', 'Supreme Court of Nepal'],
//       languages: ['Nepali', 'English', 'Hindi'],
//       contact: {
//         email: 'sarah@paragonlaw.com.np',
//         phone: '+977-1-4444444'
//       }
//     },
//     {
//       name: "Michael Chen",
//       role: "Senior Partner",
//       photos: [
//         "/api/placeholder/500/600",
//         "/api/placeholder/500/600",
//         "/api/placeholder/500/600"
//       ],
//       specialties: ["Criminal Defense", "Civil Litigation"],
//       education: 'LLB, Tribhuvan University',
//       barAdmissions: ['Nepal Bar Council'],
//       languages: ['Nepali', 'English'],
//       contact: {
//         email: 'michael@paragonlaw.com.np',
//         phone: '+977-1-4444445'
//       }
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Partner",
//       photos: [
//         "/api/placeholder/500/600",
//         "/api/placeholder/500/600",
//         "/api/placeholder/500/600"
//       ],
//       specialties: ["Family Law", "Estate Planning"],
//       education: 'LLB, Tribhuvan University',
//       barAdmissions: ['Nepal Bar Council'],
//       languages: ['Nepali', 'English'],
//       contact: {
//         email: 'emily@paragonlaw.com.np',
//         phone: '+977-1-4444446'
//       }
//     }
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300"> {/* Dark Navy Blue background */}
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
//         <div className="flex items-center space-x-2 mb-6">
//           <div className="h-1 w-12 bg-[#FBBF24]"></div>
//           <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">Meet Our Team</span>
//         </div>
//         <h1 className="text-4xl font-serif text-[#FBBF24]">Our Expert Attorneys</h1>
//         <p className="text-gray-400 max-w-2xl mt-4">
//           Meet our team of experienced legal professionals dedicated to your success
//         </p>
//       </div>

//       {/* Attorney Cards */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {attorneys.map((attorney, index) => (
//             <Card
//               key={index}
//               className="bg-[#1E293B] border-2 border-transparent hover:border-[#B8860B] rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300" // Hover effect
//             >
//               <CardContent className="p-6">
//                 {/* Photo Gallery */}
//                 <PhotoGallery photos={attorney.photos} />

//                 {/* Attorney Details */}
//                 <h3 className="text-xl font-semibold mt-4 text-[#B8860B]">{attorney.name}</h3> {/* Premium Gold */}
//                 <p className="text-gray-400 mb-6 italic">{attorney.role}</p>

//                 {/* Specializations */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Specializations</h4> {/* Premium Gold */}
//                   <ul className="space-y-1">
//                     {attorney.specialties.map((spec, idx) => (
//                       <li key={idx} className="flex items-center text-gray-300">
//                         <Star className="w-4 h-4 text-[#B8860B] mr-2" /> {/* Premium Gold */}
//                         {spec}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Education */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Education</h4> {/* Premium Gold */}
//                   <p className="text-gray-300">{attorney.education}</p>
//                 </div>

//                 {/* Bar Admissions */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Bar Admissions</h4> {/* Premium Gold */}
//                   <ul className="space-y-1">
//                     {attorney.barAdmissions.map((admission, idx) => (
//                       <li key={idx} className="text-gray-300">{admission}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Languages */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Languages</h4> {/* Premium Gold */}
//                   <p className="text-gray-300">{attorney.languages.join(', ')}</p>
//                 </div>

//                 {/* Contact Information */}
//                 <div className="flex items-center space-x-4">
//                   <a href={`tel:${attorney.contact.phone}`} className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition"> {/* Premium Gold */}
//                     <Phone className="w-4 h-4 mr-2" />
//                     {attorney.contact.phone}
//                   </a>
//                   <a href={`mailto:${attorney.contact.email}`} className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition"> {/* Premium Gold */}
//                     <Mail className="w-4 h-4 mr-2" />
//                     {attorney.contact.email}
//                   </a>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Attorney Achievements Section */}
//       <section className="bg-[#1E293B] py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <h2 className="text-2xl font-bold text-center text-[#B8860B]">
//             Attorney Achievements
//           </h2>
//           <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
//             {[
//               { title: "Top Legal Awards", description: "Recognized for excellence in corporate law." },
//               { title: "Published Articles", description: "Contributions to leading legal journals." },
//               { title: "High-Profile Cases", description: "Successfully represented clients in landmark cases." }
//             ].map((achievement, index) => (
//               <div key={index} className="bg-[#0F172A] p-6 rounded-lg shadow-lg">
//                 <Award className="w-8 h-8 text-[#B8860B] mb-4" />
//                 <h3 className="text-lg font-semibold text-[#B8860B]">{achievement.title}</h3>
//                 <p className="text-gray-300 mt-2">{achievement.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Legal Insights Section */}
//       <section className="bg-[#0F172A] py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <h2 className="text-2xl font-bold text-center text-[#B8860B]">
//             Legal Insights
//           </h2>
//           <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
//             {[
//               { title: "The Future of Corporate Law", excerpt: "Explore trends shaping modern corporate practices." },
//               { title: "Understanding Family Law Reforms", excerpt: "Key changes impacting family law in Nepal." },
//               { title: "AI in Legal Practice", excerpt: "How artificial intelligence is transforming the legal field." }
//             ].map((insight, index) => (
//               <div key={index} className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
//                 <BookOpen className="w-8 h-8 text-[#B8860B] mb-4" />
//                 <h3 className="text-lg font-semibold text-[#B8860B]">{insight.title}</h3>
//                 <p className="text-gray-300 mt-2">{insight.excerpt}</p>
//                 <a href="#" className="text-[#B8860B] hover:text-[#D4AF37] transition mt-4 inline-block">
//                   Read More →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Community Involvement Section */}
//       <section className="bg-[#1E293B] py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <h2 className="text-2xl font-bold text-center text-[#B8860B]">
//             Community Involvement
//           </h2>
//           <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
//             {[
//               { title: "Pro Bono Work", description: "Providing free legal aid to underprivileged communities." },
//               { title: "Legal Workshops", description: "Conducting workshops to educate the public on legal rights." },
//               { title: "Charitable Contributions", description: "Supporting local charities and NGOs." }
//             ].map((involvement, index) => (
//               <div key={index} className="bg-[#0F172A] p-6 rounded-lg shadow-lg">
//                 <Users className="w-8 h-8 text-[#B8860B] mb-4" />
//                 <h3 className="text-lg font-semibold text-[#B8860B]">{involvement.title}</h3>
//                 <p className="text-gray-300 mt-2">{involvement.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQs About Our Attorneys */}
//       <section className="bg-[#0F172A] py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <h2 className="text-2xl font-bold text-center text-[#B8860B]">
//             FAQs About Our Attorneys
//           </h2>
//           <div className="mt-10 space-y-6">
//             {[
//               { question: "What qualifications do your attorneys have?", answer: "Our attorneys hold advanced degrees and are admitted to prestigious bar associations." },
//               { question: "Do you offer consultations?", answer: "Yes, we offer personalized consultations to discuss your legal needs." },
//               { question: "What areas of law do you specialize in?", answer: "We specialize in corporate law, family law, criminal defense, and more." }
//             ].map((faq, index) => (
//               <div key={index} className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
//                 <HelpCircle className="w-8 h-8 text-[#B8860B] mb-4" />
//                 <h3 className="text-lg font-semibold text-[#B8860B]">{faq.question}</h3>
//                 <p className="text-gray-300 mt-2">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Attorneys;

import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Phone, Mail, Award, BookOpen, Users, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card.jsx';
import Footer from './Footer';
import Gaurab from '../images/gaurab.jpg';
import { BASE_URL } from '@/lib/api.js';

// Photo Gallery Component
const PhotoGallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <img
        src={photos[selectedPhoto]}
        alt={`Gallery ${selectedPhoto}`}
        className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
      />
      <div className="flex space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedPhoto(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedPhoto ? 'bg-[#B8860B]' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

// Carousel Component
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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#B8860B] text-[#0F172A] p-2 rounded-full z-10"
      >
        <ChevronRight className="w-5 h-5 rotate-180" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#B8860B] text-[#0F172A] p-2 rounded-full z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      {React.Children.map(children, (child, index) =>
        index === currentSlide ? child : null
      )}
    </div>
  );
};

const Attorneys = () => {
  const [attorneys, setAttorneys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttorneys = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/attorneys?populate=image`);
        if (!response.ok) throw new Error('Failed to fetch attorneys');

        const data = await response.json();

        // Map Strapi API response correctly
        const formattedData = data.data
        .filter(attorney => attorney)
        .map(attorney => {
          const attrs = attorney; // ✅ No `attributes` key here
      
          return {
            id: attorney.id,
            name: attrs.Name || 'Unknown',
            role: attrs.Post || '',
            photos: attrs.image?.url
              ? [`http://localhost:1337${attrs.image.url}`]
              : [Gaurab],
            specialties: attrs.specialties || [],
            education: attrs.Education || '',
            barAdmissions: attrs.BarAdmission?.split(',') || [],
            languages: attrs.languages?.split(',') || [],
            contact: {
              email: attrs.Email || '',
              phone: attrs.Phone || ''
            }
          };
        });
      

        setAttorneys(formattedData);
      } catch (err) {
        console.error('Error fetching attorneys:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAttorneys();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0F172A]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B8860B]"></div>
      </div>
    );
  }

  if (error || attorneys.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0F172A] text-gray-300">
        <p>No attorneys found. Please check your backend connection.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-1 w-12 bg-[#FBBF24]"></div>
          <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">Meet Our Team</span>
        </div>
        <h1 className="text-4xl font-serif text-[#FBBF24]">Our Expert Attorneys</h1>
        <p className="text-gray-400 max-w-2xl mt-4">
          Meet our team of experienced legal professionals dedicated to your success
        </p>
      </div>

      {/* Attorney Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <Card
              key={attorney.id || index}
              className="bg-[#1E293B] border-2 border-transparent hover:border-[#B8860B] rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <CardContent className="p-6">
                <PhotoGallery photos={attorney.photos} />
                <h3 className="text-xl font-semibold mt-4 text-[#B8860B]">{attorney.name}</h3>
                <p className="text-gray-400 mb-6 italic">{attorney.role}</p>

                {/* Specializations */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Specializations</h4>
                  <ul className="space-y-1">
                    {attorney.specialties.map((spec, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-[#B8860B] mr-2" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Education</h4>
                  <p className="text-gray-300">{attorney.education}</p>
                </div>

                {/* Bar Admissions */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Bar Admissions</h4>
                  <ul className="space-y-1">
                    {attorney.barAdmissions.map((admission, idx) => (
                      <li key={idx} className="text-gray-300">{admission.trim()}</li>
                    ))}
                  </ul>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Languages</h4>
                  <p className="text-gray-300">{attorney.languages.join(', ')}</p>
                </div>

                {/* Contact Info */}
                <div className="flex items-center space-x-4">
                  <a href={`tel:${attorney.contact.phone}`} className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition">
                    <Phone className="w-4 h-4 mr-2" />
                    {attorney.contact.phone}
                  </a>
                  <a href={`mailto:${attorney.contact.email}`} className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition">
                    <Mail className="w-4 h-4 mr-2" />
                    {attorney.contact.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements, Insights, Community, FAQs sections remain unchanged */}
      {/* Add similar logic if you want these also coming from backend */}

      <Footer />
    </div>
  );
};

export default Attorneys;