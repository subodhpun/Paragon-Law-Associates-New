import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Gavel, Users, Landmark, Shield, FileText, BookOpen, ChevronRight 
} from 'lucide-react';
import Footer from './Footer';

const PracticeAreas = () => {
  const areas = [
    {
      icon: <Gavel className="w-8 h-8 text-[#FBBF24]" />, // Gold
      title: "Corporate Law",
      description: "Comprehensive legal solutions for businesses of all sizes, including mergers, acquisitions, and compliance.",
      services: ["Business Formation", "Contract Negotiation", "Corporate Governance"]
    },
    {
      icon: <Users className="w-8 h-8 text-[#FBBF24]" />, // Gold
      title: "Family Law",
      description: "Compassionate representation in family matters and disputes, ensuring your interests are protected.",
      services: ["Divorce", "Child Custody", "Estate Planning"]
    },
    {
      icon: <Landmark className="w-8 h-8 text-[#FBBF24]" />, // Gold
      title: "Civil Litigation",
      description: "Strategic advocacy in complex civil disputes and litigation, with a track record of success.",
      services: ["Commercial Disputes", "Property Litigation", "Contract Disputes"]
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FBBF24]" />, // Gold
      title: "Criminal Defense",
      description: "Expert defense in criminal cases, protecting your rights and freedom.",
      services: ["White Collar Crime", "Federal Defense", "Appeals"]
    },
    {
      icon: <FileText className="w-8 h-8 text-[#FBBF24]" />, // Gold
      title: "Real Estate Law",
      description: "Comprehensive real estate legal services for commercial and residential properties.",
      services: ["Property Transactions", "Lease Agreements", "Zoning Laws"]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#FBBF24]" />, // Gold
      title: "Intellectual Property",
      description: "Protection and enforcement of intellectual property rights in the digital age.",
      services: ["Patents", "Trademarks", "Copyright Law"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Practice Areas | Paragon Law Associates - Legal Services in Nepal</title>
        <meta
          name="description"
          content="Explore our comprehensive legal services including corporate law, family law, litigation, and more. Expert legal solutions tailored to your needs."
        />
        <meta
          name="keywords"
          content="legal services Nepal, corporate law, family law, litigation, cyber law, employment law, tax law, real estate law"
        />
        <link rel="canonical" href="https://lawparagon.com/practice-areas" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Our Practice Areas - Paragon Law Associates" />
        <meta
          property="og:description"
          content="Comprehensive legal services across multiple practice areas. Expert solutions for all your legal needs."
        />
        <meta property="og:url" content="https://lawparagon.com/practice-areas" />
        <meta property="og:type" content="website" />
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Paragon Law Associates - Practice Areas",
            "description": "Comprehensive legal services across multiple practice areas",
            "provider": {
              "@type": "Organization",
              "name": "Paragon Law Associates",
              "url": "https://lawparagon.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Nepal"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Legal Services",
              "itemListElement": areas.map((area) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": area.title,
                  "description": area.description
                }
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300"> {/* Dark Navy Blue background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#FBBF24] mb-4">Our Practice Areas</h2> {/* Gold */}
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive legal expertise across multiple disciplines to serve your needs
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-[#1E293B] border-2 border-gold rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300"> {/* Slightly lighter navy */}
                <div className="bg-[#0F172A] w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto mt-6 group-hover:bg-[#FBBF24] transition"> {/* Dark navy, Gold on hover */}
                  {area.icon}
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#FBBF24] text-center">{area.title}</h3> {/* Gold */}
                  <p className="text-gray-300 mb-6 text-center">{area.description}</p>
                  <ul className="space-y-2">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-[#FBBF24] mr-2" /> {/* Gold */}
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PracticeAreas;