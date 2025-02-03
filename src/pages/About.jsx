import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
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