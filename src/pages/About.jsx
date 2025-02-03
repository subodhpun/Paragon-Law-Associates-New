import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ChevronRight, Users, Award, BookOpen, Calendar } from 'lucide-react';
import Footer from './Footer.jsx';

const About = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Paragon Law Associates - About Us | Leading Legal Experts in Nepal</title>
        <meta 
          name="description" 
          content="Discover Paragon Law Associates, a distinguished law firm with over 20 years of legal excellence. We provide exceptional legal services with integrity, innovation, and commitment." 
        />
        <meta 
          name="keywords" 
          content="Paragon Law Associates, legal services, law firm Nepal, experienced attorneys, legal excellence, corporate law, legal integrity, legal innovation" 
        />
        <link rel="canonical" href="https://lawparagon.com/about" />
        {/* Open Graph / Social Media Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Paragon Law Associates - Legal Experts with 20+ Years of Experience" />
        <meta 
          property="og:description" 
          content="Learn about our mission, values, and commitment to providing exceptional legal services in Nepal." 
        />
        <meta property="og:url" content="https://lawparagon.com/about" />
        <meta property="og:site_name" content="Paragon Law Associates" />
        <meta 
          property="og:image" 
          content="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1200&h=630" 
        />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paragon Law Associates - About Our Firm" />
        <meta 
          name="twitter:description" 
          content="10+ years of legal excellence. Committed to integrity, innovation, and exceptional client service." 
        />
        <meta 
          name="twitter:image" 
          content="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1200&h=630" 
        />
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LawFirm",
            "name": "Paragon Law Associates",
            "description": "Leading law firm in Nepal with over 20 years of experience providing exceptional legal services.",
            "url": "https://lawparagon.com",
            "logo": "https://lawparagon.com/images/logo.png",
            "foundingDate": "2003",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Legal Street",
              "addressLocality": "Kathmandu",
              "addressRegion": "Bagmati",
              "postalCode": "44600",
              "addressCountry": "NP"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+977-1-4444444",
              "contactType": "customer service",
              "areaServed": "NP",
              "availableLanguage": ["en", "ne"]
            },
            "sameAs": [
              "https://www.facebook.com/paragonlaw",
              "https://www.linkedin.com/company/paragonlaw",
              "https://twitter.com/paragonlaw"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="py-24 bg-[#0F172A] text-gray-300"> {/* Dark Navy Blue background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-1 w-12 bg-[#FBBF24]"></div> {/* Gold accent */}
                <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">About Our Firm</span>
              </div>
              <h2 className="text-4xl font-serif mb-6 text-[#FBBF24]">A Legacy of Legal Excellence</h2> {/* Gold heading */}
              <p className="text-gray-400 mb-6">
                Founded on principles of excellence and integrity, Paragon Law Associates
                has been serving clients with distinction for over two decades. Our team
                of experienced attorneys brings deep expertise and a commitment to
                achieving the best possible outcomes for our clients.
              </p>
              <p className="text-gray-400 mb-8">
                We understand that each case is unique and requires personalized
                attention. Our approach combines thorough legal analysis with strategic
                thinking to deliver solutions that meet our clients' needs.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#FBBF24]">Our Mission</h3> {/* Gold heading */}
                  <p className="text-gray-400">
                    To provide exceptional legal services while maintaining the highest standards
                    of professional integrity and client satisfaction.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#FBBF24]">Our Values</h3> {/* Gold heading */}
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-400">
                      <ChevronRight className="w-4 h-4 text-[#FBBF24] mr-2" /> {/* Gold icon */}
                      Excellence
                    </li>
                    <li className="flex items-center text-gray-400">
                      <ChevronRight className="w-4 h-4 text-[#FBBF24] mr-2" /> {/* Gold icon */}
                      Integrity
                    </li>
                    <li className="flex items-center text-gray-400">
                      <ChevronRight className="w-4 h-4 text-[#FBBF24] mr-2" /> {/* Gold icon */}
                      Innovation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1000"
                  alt="Law office meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-8 right-8 bg-[#1E293B] p-8 rounded-lg shadow-xl max-w-sm"> {/* Slightly lighter navy */}
                <div className="text-4xl font-bold text-[#FBBF24] mb-2">20+</div> {/* Gold number */}
                <div className="text-xl font-semibold mb-2 text-[#FBBF24]">Years of Excellence</div> {/* Gold heading */}
                <p className="text-gray-400">
                  Providing outstanding legal services and building lasting client relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team's Culture Section */}
      <section className="bg-[#1E293B] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
            Our Team's Culture
          </h2>
          <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            At Paragon Law Associates, we foster a collaborative, inclusive, and innovative work environment.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
            {[
              {
                title: "Collaboration",
                description: "We believe in teamwork and open communication to achieve the best results."
              },
              {
                title: "Innovation",
                description: "Our team embraces cutting-edge tools and methodologies to stay ahead."
              },
              {
                title: "Diversity",
                description: "We celebrate diverse perspectives and backgrounds to enrich our practice."
              }
            ].map((culture, index) => (
              <div key={index} className="bg-[#0F172A] p-6 rounded-lg shadow-lg">
                <Users className="w-8 h-8 text-[#FBBF24] mb-4" />
                <h3 className="text-lg font-semibold text-[#FBBF24]">{culture.title}</h3>
                <p className="text-gray-300 mt-2">{culture.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="bg-[#0F172A] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
            Community Engagement
          </h2>
          <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            We are committed to giving back to the community and making a positive impact.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
            {[
              {
                title: "Pro Bono Work",
                description: "Providing free legal aid to underprivileged communities."
              },
              {
                title: "Legal Awareness Programs",
                description: "Educating the public about their legal rights and responsibilities."
              },
              {
                title: "Charitable Partnerships",
                description: "Supporting local charities and NGOs to drive social change."
              }
            ].map((engagement, index) => (
              <div key={index} className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
                <Award className="w-8 h-8 text-[#FBBF24] mb-4" />
                <h3 className="text-lg font-semibold text-[#FBBF24]">{engagement.title}</h3>
                <p className="text-gray-300 mt-2">{engagement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-[#1E293B] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
            What Clients Say About Us
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8">
            {[
              {
                quote: "Their dedication and professionalism exceeded my expectations.",
                name: "John Doe",
                role: "CEO, TechCorp"
              },
              {
                quote: "I couldn’t have resolved my case without their expert guidance.",
                name: "Jane Smith",
                role: "Client"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#0F172A] p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-[#FBBF24]">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of Milestones Section */}
      <section className="bg-[#0F172A] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
            Our Journey: Key Milestones
          </h2>
          <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            A timeline showcasing our growth and achievements over the years.
          </p>
          <div className="mt-10 relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#FBBF24] transform -translate-x-1/2"></div>
            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "2003",
                  title: "Established",
                  description: "Founded as a boutique law firm in Kathmandu, Nepal."
                },
                {
                  year: "2008",
                  title: "Expansion",
                  description: "Expanded services to include corporate and international law."
                },
                {
                  year: "2015",
                  title: "Recognition",
                  description: "Received the National Excellence in Legal Services Award."
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  description: "Adopted AI-driven legal research tools to enhance efficiency."
                }
              ].map((milestone, index) => (
                <div key={index} className="relative pl-10 sm:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FBBF24] rounded-full z-10 mt-2"></div>
                  {/* Content */}
                  <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
                    <Calendar className="w-8 h-8 text-[#FBBF24] mb-4" />
                    <h3 className="text-lg font-semibold text-[#FBBF24]">{milestone.year}</h3>
                    <h4 className="text-md font-medium text-[#FBBF24] mb-2">{milestone.title}</h4>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

// Wrap the component with HelmetProvider
const AboutWithHelmet = () => (
  <HelmetProvider>
    <About />
  </HelmetProvider>
);

export default AboutWithHelmet; // Export the wrapped component