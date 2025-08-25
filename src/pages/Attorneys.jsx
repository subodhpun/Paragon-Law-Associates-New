import React from 'react';
import { Award, BookOpen, Users, HelpCircle, ChevronRight } from 'lucide-react';
import Footer from './Footer';
import Team from './Team';

const Attorneys = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex items-center space-x-2 mb-6 mt-8">
          <div className="h-1 w-12 bg-[#FBBF24]"></div>
          <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">MEET OUR TEAM</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-[#FBBF24] mb-6 text-center">Our Expert Attorneys</h1>
        <p className="text-gray-400 max-w-3xl text-lg leading-relaxed mx-auto text-center">
  Meet our team of experienced legal professionals dedicated to protecting your rights and achieving your legal goals.
</p>

      {/* Attorney Team Section */}
      <div className="mt-8">
        <Team />
      </div>
      </div>

      {/* Attorney Achievements Section */}
      <section className="bg-[#1E293B] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#FBBF24] mb-16">
            Attorney Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Top Legal Awards", 
                description: "Recognized for excellence in corporate law and client advocacy.",
                icon: <Award className="w-10 h-10 text-[#B8860B]" />
              },
              { 
                title: "Published Articles", 
                description: "Contributions to leading legal journals and industry publications.",
                icon: <BookOpen className="w-10 h-10 text-[#B8860B]" />
              },
              { 
                title: "High-Profile Cases", 
                description: "Successfully represented clients in landmark cases and complex litigation.",
                icon: <Users className="w-10 h-10 text-[#B8860B]" />
              }
            ].map((achievement, index) => (
              <div 
                key={index} 
                className="bg-[#0F172A] p-8 rounded-xl shadow-lg border border-[#1E293B] hover:border-[#B8860B] transition-all duration-300"
              >
                <div className="mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-[#B8860B] mb-3">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Insights Section */}
      <section className="bg-[#0F172A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#FBBF24] mb-16">
            Legal Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "The Future of Corporate Law", 
                excerpt: "Explore emerging trends shaping modern corporate practices and compliance requirements.",
                date: "May 15, 2023"
              },
              { 
                title: "Understanding Family Law Reforms", 
                excerpt: "Key changes in Nepal's family law affecting divorce, custody, and inheritance rights.",
                date: "April 3, 2023"
              },
              { 
                title: "AI in Legal Practice", 
                excerpt: "How artificial intelligence is transforming legal research, document review, and client services.",
                date: "March 22, 2023"
              }
            ].map((insight, index) => (
              <div 
                key={index} 
                className="bg-[#1E293B] p-8 rounded-xl shadow-lg border border-[#1E293B] hover:border-[#B8860B] transition-all duration-300"
              >
                <BookOpen className="w-8 h-8 text-[#B8860B] mb-4" />
                <h3 className="text-xl font-semibold text-[#B8860B] mb-3">{insight.title}</h3>
                <p className="text-gray-300 mb-4">{insight.excerpt}</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-sm text-gray-400">{insight.date}</span>
                  <a 
                    href="#" 
                    className="text-[#B8860B] hover:text-[#D4AF37] transition flex items-center text-sm font-medium"
                  >
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="bg-[#1E293B] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#FBBF24] mb-16">
            Community Involvement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Pro Bono Work", 
                description: "Providing free legal aid to underprivileged communities and marginalized groups.",
                count: "500+ cases"
              },
              { 
                title: "Legal Workshops", 
                description: "Conducting workshops to educate the public on legal rights and responsibilities.",
                count: "25+ events annually"
              },
              { 
                title: "Charitable Contributions", 
                description: "Supporting local charities, educational programs, and social justice initiatives.",
                count: "NPR 2M+ donated"
              }
            ].map((involvement, index) => (
              <div 
                key={index} 
                className="bg-[#0F172A] p-8 rounded-xl shadow-lg border border-[#1E293B] hover:border-[#B8860B] transition-all duration-300 text-center"
              >
                <Users className="w-12 h-12 text-[#B8860B] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#B8860B] mb-3">{involvement.title}</h3>
                <p className="text-gray-300 mb-4">{involvement.description}</p>
                <div className="text-[#FBBF24] font-semibold">{involvement.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs About Our Attorneys */}
      <section className="bg-[#0F172A] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#FBBF24] mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              { 
                question: "What qualifications do your attorneys have?", 
                answer: "Our attorneys hold advanced degrees from prestigious institutions and are admitted to multiple bar associations. They regularly participate in continuing legal education to stay current with legal developments." 
              },
              { 
                question: "Do you offer consultations?", 
                answer: "Yes, we offer both in-person and virtual consultations. Initial consultations are free for certain practice areas, and we provide transparent fee structures during our first meeting." 
              },
              { 
                question: "What areas of law do you specialize in?", 
                answer: "We specialize in corporate law, family law, criminal defense, civil litigation, estate planning, and international business law. Our team includes specialists in various fields to handle complex cases." 
              },
              { 
                question: "How do I contact your attorneys?", 
                answer: "You can reach us by phone at +977-1-4444444, email at info@paragonlaw.com.np, or through our online contact form. We typically respond within 24 hours during business days." 
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#1E293B] p-8 rounded-xl shadow-lg border border-[#1E293B] hover:border-[#B8860B] transition-all duration-300"
              >
                <HelpCircle className="w-8 h-8 text-[#B8860B] mb-4" />
                <h3 className="text-xl font-semibold text-[#B8860B] mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] py-20 border-t border-[#B8860B]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#FBBF24] mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
            Contact our legal team today for a confidential consultation tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-[#B8860B] hover:bg-[#D4AF37] text-[#0F172A] font-semibold py-3 px-8 rounded-lg transition duration-300 text-lg"
            >
              Schedule Consultation
            </a>
            <a 
              href="tel:+977-1-4444444" 
              className="border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-[#0F172A] font-semibold py-3 px-8 rounded-lg transition duration-300 text-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Attorneys;
// import React, { useState, useEffect } from 'react';
// import { Star, ChevronLeft, ChevronRight, Phone, Mail, Award, BookOpen, Users, HelpCircle } from 'lucide-react';
// import { Card, CardContent } from '../components/ui/Card.jsx';
// import Footer from './Footer';
// import Gaurab from '../images/gaurab.jpg';
// import Gaurab2 from '../images/gaurab2.jpg';
// import Kiran from '../images/kiran.png';
// import Sunil from '../images/sunil.png';

// // Custom Carousel Component
// const SimpleCarousel = ({ children, autoPlay = false, interval = 5000 }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = React.Children.count(children);
  
//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   // Auto-play functionality
//   useEffect(() => {
//     if (!autoPlay) return;
    
//     const timer = setInterval(() => {
//       nextSlide();
//     }, interval);
    
//     return () => clearInterval(timer);
//   }, [autoPlay, interval, currentSlide]);

//   return (
//     <div className="relative group">
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#B8860B] text-[#0F172A] p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-5 h-5" />
//       </button>
      
//       <div className="overflow-hidden rounded-lg">
//         {React.Children.map(children, (child, index) => (
//           <div 
//             key={index} 
//             className={`transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'}`}
//             style={{ width: '100%' }}
//           >
//             {child}
//           </div>
//         ))}
//       </div>
      
//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#B8860B] text-[#0F172A] p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-5 h-5" />
//       </button>
      
//       {/* Slide indicators */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               index === currentSlide ? 'bg-[#B8860B] w-4' : 'bg-gray-500'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Photo Gallery Component
// const PhotoGallery = ({ photos }) => {
//   const [selectedPhoto, setSelectedPhoto] = useState(0);
  
//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-full h-64 overflow-hidden rounded-lg">
//         <SimpleCarousel autoPlay interval={4000}>
//           {photos.map((photo, index) => (
//             <img
//               key={index}
//               src={photo}
//               alt={`Gallery ${index + 1}`}
//               className="w-full h-64 object-cover transition-transform duration-700"
//             />
//           ))}
//         </SimpleCarousel>
//       </div>
      
//       <div className="flex space-x-2 mt-3">
//         {photos.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedPhoto(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               index === selectedPhoto ? 'bg-[#B8860B]' : 'bg-gray-500'
//             }`}
//             aria-label={`View photo ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Attorneys = () => {
//   const attorneys = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "Managing Partner",
//       photos: [
//         Gaurab, Gaurab2,
//       ],
//       specialties: ["Corporate Law", "Mergers & Acquisitions", "International Business"],
//       education: 'LLM in Corporate Law, Harvard Law School',
//       barAdmissions: ['Nepal Bar Council', 'Supreme Court of Nepal'],
//       languages: ['Nepali', 'English', 'Hindi'],
//       experience: '15+ years',
//       contact: {
//         email: 'sarah@paragonlaw.com.np',
//         phone: '+977-1-4444444'
//       },
//       bio: "Sarah leads our corporate practice with expertise in complex transactions and international business law."
//     },
//     {
//       id: 2,
//       name: "Kiran",
//       role: "Senior Partner",
//       photos: [
//         Kiran,
//         Kiran,
//       ],
//       specialties: ["Criminal Defense", "Civil Litigation", "White-Collar Crime"],
//       education: 'LLB, Tribhuvan University',
//       barAdmissions: ['Nepal Bar Council'],
//       languages: ['Nepali', 'English'],
//       experience: '12+ years',
//       contact: {
//         email: 'michael@paragonlaw.com.np',
//         phone: '+977-1-4444445'
//       },
//       bio: "Michael is renowned for his strategic defense approach and successful outcomes in high-stakes litigation."
//     },
//     {
//       id: 3,
//       name: "Sunil",
//       role: "Partner",
//       photos: [
//         Sunil,
        
//       ],
//       specialties: ["Family Law", "Estate Planning", "Child Custody"],
//       education: 'LLB, Tribhuvan University',
//       barAdmissions: ['Nepal Bar Council'],
//       languages: ['Nepali', 'English'],
//       experience: '10+ years',
//       contact: {
//         email: 'emily@paragonlaw.com.np',
//         phone: '+977-1-4444446'
//       },
//       bio: "Emily provides compassionate yet effective legal counsel in sensitive family matters."
//     }
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
//         <div className="flex items-center space-x-2 mb-6">
//           <div className="h-1 w-12 bg-[#FBBF24]"></div>
//           <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">Meet Our Team</span>
//         </div>
//         <h1 className="text-4xl md:text-5xl font-serif text-[#FBBF24] mb-6">Our Expert Attorneys</h1>
//         <p className="text-gray-400 max-w-3xl text-lg">
//           Meet our team of experienced legal professionals dedicated to protecting your rights and achieving your legal goals.
//         </p>
//       </div>

//       {/* Attorney Cards */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {attorneys.map((attorney) => (
//             <Card
//               key={attorney.id}
//               className="bg-[#1E293B] border-2 border-transparent hover:border-[#B8860B] rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
//             >
//               <CardContent className="p-0">
//                 {/* Photo Gallery */}
//                 <div className="h-64">
//                   <PhotoGallery photos={attorney.photos} />
//                 </div>

//                 <div className="p-6">
//                   {/* Attorney Details */}
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-xl font-semibold text-[#B8860B]">{attorney.name}</h3>
//                       <p className="text-gray-400 mb-2 italic">{attorney.role}</p>
//                     </div>
//                     <span className="bg-[#B8860B] text-[#0F172A] text-xs font-semibold px-2 py-1 rounded">
//                       {attorney.experience}
//                     </span>
//                   </div>

//                   <p className="text-gray-300 text-sm mb-4">{attorney.bio}</p>

//                   {/* Specializations */}
//                   <div className="mb-4">
//                     <h4 className="text-sm font-semibold text-[#B8860B] mb-2 flex items-center">
//                       <Star className="w-4 h-4 mr-2" />
//                       Specializations
//                     </h4>
//                     <div className="flex flex-wrap gap-2">
//                       {attorney.specialties.map((spec, idx) => (
//                         <span 
//                           key={idx} 
//                           className="bg-[#0F172A] text-gray-300 text-xs px-2 py-1 rounded"
//                         >
//                           {spec}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Contact Information */}
//                   <div className="flex flex-wrap gap-3 mt-6">
//                     <a 
//                       href={`tel:${attorney.contact.phone}`} 
//                       className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition text-sm"
//                     >
//                       <Phone className="w-4 h-4 mr-1" />
//                       Call
//                     </a>
//                     <a 
//                       href={`mailto:${attorney.contact.email}`} 
//                       className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition text-sm"
//                     >
//                       <Mail className="w-4 h-4 mr-1" />
//                       Email
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Attorney Achievements Section */}
//       <section className="bg-[#1E293B] py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-[#FBBF24] mb-16">
//             Attorney Achievements
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { 
//                 title: "Top Legal Awards", 
//                 description: "Recognized for excellence in corporate law and client advocacy.",
//                 icon: <Award className="w-10 h-10 text-[#B8860B]" />
//               },
//               { 
//                 title: "Published Articles", 
//                 description: "Contributions to leading legal journals and industry publications.",
//                 icon: <BookOpen className="w-10 h-10 text-[#B8860B]" />
//               },
//               { 
//                 title: "High-Profile Cases", 
//                 description: "Successfully represented clients in landmark cases and complex litigation.",
//                 icon: <Users className="w-10 h-10 text-[#B8860B]" />
//               }
//             ].map((achievement, index) => (
//               <div 
//                 key={index} 
//                 className="bg-[#0F172A] p-8 rounded-xl shadow-lg border border-[#1E293B] hover:border-[#B8860B] transition-all duration-300"
//               >
//                 <div className="mb-4">{achievement.icon}</div>
//                 <h3 className="text-xl font-semibold text-[#B8860B] mb-3">{achievement.title}</h3>
//                 <p className="text-gray-300">{achievement.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Legal Insights Section */}
//       <section className="bg-[#0F172A] py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-[#FBBF24] mb-16">
//             Legal Insights
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { 
//                 title: "The Future of Corporate Law", 
//                 excerpt: "Explore emerging trends shaping modern corporate practices and compliance requirements.",
//                 date: "May 15, 2023"
//               },
//               { 
//                 title: "Understanding Family Law Reforms", 
//                 excerpt: "Key changes in Nepal's family law affecting divorce, custody, and inheritance rights.",
//                 date: "April 3, 2023"
//               },
//               { 
//                 title: "AI in Legal Practice", 
//                 excerpt: "How artificial intelligence is transforming legal research, document review, and client services.",
//                 date: "March 22, 2023"
//               }
//             ].map((insight, index) => (
//               <div 
//                 key={index} 
//                 className="bg-[#1E293B] p-8 rounded-xl shadow-lg border border-[#1E293B] hover:border-[#B8860B] transition-all duration-300"
//               >
//                 <BookOpen className="w-8 h-8 text-[#B8860B] mb-4" />
//                 <h3 className="text-xl font-semibold text-[#B8860B] mb-3">{insight.title}</h3>
//                 <p className="text-gray-300 mb-4">{insight.excerpt}</p>
//                 <div className="flex justify-between items-center mt-6">
//                   <span className="text-sm text-gray-400">{insight.date}</span>
//                   <a 
//                     href="#" 
//                     className="text-[#B8860B] hover:text-[#D4AF37] transition flex items-center text-sm font-medium"
//                   >
//                     Read More <ChevronRight className="w-4 h-4 ml-1" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Community Involvement Section */}
//       <section className="bg-[#1E293B] py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-[#FBBF24] mb-16">
//             Community Involvement
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { 
//                 title: "Pro Bono Work", 
//                 description: "Providing free legal aid to underprivileged communities and marginalized groups.",
//                 count: "500+ cases"
//               },
//               { 
//                 title: "Legal Workshops", 
//                 description: "Conducting workshops to educate the public on legal rights and responsibilities.",
//                 count: "25+ events annually"
//               },
//               { 
//                 title: "Charitable Contributions", 
//                 description: "Supporting local charities, educational programs, and social justice initiatives.",
//                 count: "NPR 2M+ donated"
//               }
//             ].map((involvement, index) => (
//               <div 
//                 key={index} 
//                 className="bg-[#0F172A] p-8 rounded-xl shadow-lg border border-[#1E293B] hover:border-[#B8860B] transition-all duration-300 text-center"
//               >
//                 <Users className="w-12 h-12 text-[#B8860B] mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold text-[#B8860B] mb-3">{involvement.title}</h3>
//                 <p className="text-gray-300 mb-4">{involvement.description}</p>
//                 <div className="text-[#FBBF24] font-semibold">{involvement.count}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQs About Our Attorneys */}
//       <section className="bg-[#0F172A] py-20">
//         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-[#FBBF24] mb-16">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-6">
//             {[
//               { 
//                 question: "What qualifications do your attorneys have?", 
//                 answer: "Our attorneys hold advanced degrees from prestigious institutions and are admitted to multiple bar associations. They regularly participate in continuing legal education to stay current with legal developments." 
//               },
//               { 
//                 question: "Do you offer consultations?", 
//                 answer: "Yes, we offer both in-person and virtual consultations. Initial consultations are free for certain practice areas, and we provide transparent fee structures during our first meeting." 
//               },
//               { 
//                 question: "What areas of law do you specialize in?", 
//                 answer: "We specialize in corporate law, family law, criminal defense, civil litigation, estate planning, and international business law. Our team includes specialists in various fields to handle complex cases." 
//               },
//               { 
//                 question: "How do I contact your attorneys?", 
//                 answer: "You can reach us by phone at +977-1-4444444, email at info@paragonlaw.com.np, or through our online contact form. We typically respond within 24 hours during business days." 
//               }
//             ].map((faq, index) => (
//               <div 
//                 key={index} 
//                 className="bg-[#1E293B] p-8 rounded-xl shadow-lg border border-[#1E293B] hover:border-[#B8860B] transition-all duration-300"
//               >
//                 <HelpCircle className="w-8 h-8 text-[#B8860B] mb-4" />
//                 <h3 className="text-xl font-semibold text-[#B8860B] mb-3">{faq.question}</h3>
//                 <p className="text-gray-300">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] py-20 border-t border-[#B8860B]">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-[#FBBF24] mb-6">Ready to Get Started?</h2>
//           <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
//             Contact our legal team today for a confidential consultation tailored to your specific needs.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a 
//               href="/contact" 
//               className="bg-[#B8860B] hover:bg-[#D4AF37] text-[#0F172A] font-semibold py-3 px-8 rounded-lg transition duration-300 text-lg"
//             >
//               Schedule Consultation
//             </a>
//             <a 
//               href="tel:+977-1-4444444" 
//               className="border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-[#0F172A] font-semibold py-3 px-8 rounded-lg transition duration-300 text-lg"
//             >
//               Call Now
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Attorneys;

// import React, { useState, useEffect } from 'react';
// import { Star, ChevronRight, Phone, Mail, Award, BookOpen, Users, HelpCircle } from 'lucide-react';
// import { Card, CardContent } from '../components/ui/Card.jsx';
// import Footer from './Footer';
// import Gaurab from '../images/gaurab.jpg';
// import { BASE_URL } from '@/lib/api.js';

// // Photo Gallery Component
// const PhotoGallery = ({ photos }) => {
//   const [selectedPhoto, setSelectedPhoto] = useState(0);
//   return (
//     <div className="flex flex-col items-center">
//       <img
//         src={photos[selectedPhoto]}
//         alt={`Gallery ${selectedPhoto}`}
//         className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
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

// // Carousel Component
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

// const Attorneys = () => {
//   const [attorneys, setAttorneys] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAttorneys = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/api/attorneys?populate=image`);
//         if (!response.ok) throw new Error('Failed to fetch attorneys');

//         const data = await response.json();

//         // Map Strapi API response correctly
//         const formattedData = data.data
//         .filter(attorney => attorney)
//         .map(attorney => {
//           const attrs = attorney; // ✅ No `attributes` key here
      
//           return {
//             id: attorney.id,
//             name: attrs.Name || 'Unknown',
//             role: attrs.Post || '',
//             photos: attrs.image?.url
//               ? [`http://localhost:1337${attrs.image.url}`]
//               : [Gaurab],
//             specialties: attrs.specialties || [],
//             education: attrs.Education || '',
//             barAdmissions: attrs.BarAdmission?.split(',') || [],
//             languages: attrs.languages?.split(',') || [],
//             contact: {
//               email: attrs.Email || '',
//               phone: attrs.Phone || ''
//             }
//           };
//         });
      

//         setAttorneys(formattedData);
//       } catch (err) {
//         console.error('Error fetching attorneys:', err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAttorneys();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-[#0F172A]">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B8860B]"></div>
//       </div>
//     );
//   }

//   if (error || attorneys.length === 0) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-[#0F172A] text-gray-300">
//         <p>No attorneys found. Please check your backend connection.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
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
//               key={attorney.id || index}
//               className="bg-[#1E293B] border-2 border-transparent hover:border-[#B8860B] rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
//             >
//               <CardContent className="p-6">
//                 <PhotoGallery photos={attorney.photos} />
//                 <h3 className="text-xl font-semibold mt-4 text-[#B8860B]">{attorney.name}</h3>
//                 <p className="text-gray-400 mb-6 italic">{attorney.role}</p>

//                 {/* Specializations */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Specializations</h4>
//                   <ul className="space-y-1">
//                     {attorney.specialties.map((spec, idx) => (
//                       <li key={idx} className="flex items-center text-gray-300">
//                         <Star className="w-4 h-4 text-[#B8860B] mr-2" />
//                         {spec}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Education */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Education</h4>
//                   <p className="text-gray-300">{attorney.education}</p>
//                 </div>

//                 {/* Bar Admissions */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Bar Admissions</h4>
//                   <ul className="space-y-1">
//                     {attorney.barAdmissions.map((admission, idx) => (
//                       <li key={idx} className="text-gray-300">{admission.trim()}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Languages */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-[#B8860B] mb-2">Languages</h4>
//                   <p className="text-gray-300">{attorney.languages.join(', ')}</p>
//                 </div>

//                 {/* Contact Info */}
//                 <div className="flex items-center space-x-4">
//                   <a href={`tel:${attorney.contact.phone}`} className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition">
//                     <Phone className="w-4 h-4 mr-2" />
//                     {attorney.contact.phone}
//                   </a>
//                   <a href={`mailto:${attorney.contact.email}`} className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition">
//                     <Mail className="w-4 h-4 mr-2" />
//                     {attorney.contact.email}
//                   </a>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Achievements, Insights, Community, FAQs sections remain unchanged */}
//       {/* Add similar logic if you want these also coming from backend */}

//       <Footer />
//     </div>
//   );
// };

// export default Attorneys;