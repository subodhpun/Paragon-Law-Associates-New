import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Gavel, Users, Landmark, Shield, FileText, BookOpen, ChevronRight, Briefcase, HelpCircle, Award
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
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
          <div className="-mx-4 sm:-mx-6 lg:-mx-8"> {/* Negative margin container */}
            <div className="px-4 sm:px-6 lg:px-8"> {/* Padding container */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-1 w-12 bg-[#FBBF24]"></div>
                <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">Areas of Expertise</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-serif text-[#FBBF24] text-center">Our Practice Areas</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
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

        {/* Case Studies Section */}
        <section className="bg-[#1E293B] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
              Success Stories
            </h2>
            <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
              Explore how we've helped clients achieve their goals across various practice areas.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
              {[
                {
                  title: "Corporate Merger Success",
                  description: "Facilitated a seamless merger between two leading tech companies, ensuring regulatory compliance and stakeholder satisfaction."
                },
                {
                  title: "High-Profile Criminal Defense",
                  description: "Secured an acquittal for a client facing federal charges, leveraging strategic legal arguments and evidence analysis."
                },
                {
                  title: "Complex Real Estate Deal",
                  description: "Navigated zoning laws and property disputes to close a multimillion-dollar real estate transaction."
                }
              ].map((caseStudy, index) => (
                <div key={index} className="bg-[#0F172A] p-6 rounded-lg shadow-lg">
                  <Briefcase className="w-8 h-8 text-[#FBBF24] mb-4" />
                  <h3 className="text-lg font-semibold text-[#FBBF24]">{caseStudy.title}</h3>
                  <p className="text-gray-300 mt-2">{caseStudy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Resources Section */}
        <section className="bg-[#0F172A] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
              Legal Resources
            </h2>
            <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
              Access valuable insights and guides to help you navigate legal challenges.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
              {[
                {
                  title: "Understanding Corporate Compliance",
                  excerpt: "Learn about the latest regulations and best practices for corporate governance."
                },
                {
                  title: "Family Law FAQs",
                  excerpt: "Answers to common questions about divorce, custody, and estate planning."
                },
                {
                  title: "Intellectual Property Protection",
                  excerpt: "A guide to safeguarding your patents, trademarks, and copyrights."
                }
              ].map((resource, index) => (
                <div key={index} className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
                  <BookOpen className="w-8 h-8 text-[#FBBF24] mb-4" />
                  <h3 className="text-lg font-semibold text-[#FBBF24]">{resource.title}</h3>
                  <p className="text-gray-300 mt-2">{resource.excerpt}</p>
                  <a href="#" className="text-[#FBBF24] hover:text-[#D4AF37] transition mt-4 inline-block">
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Area-Specific Testimonials */}
        <section className="bg-[#1E293B] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
              What Clients Say About Our Practice Areas
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8">
              {[
                { quote: "Their corporate law team made our merger process smooth and stress-free.", name: "John Doe", role: "CEO, TechCorp" },
                { quote: "The family law attorneys were compassionate and truly understood my situation.", name: "Jane Smith", role: "Client" },
                { quote: "I couldn't have won my case without their criminal defense expertise.", name: "Mike Johnson", role: "Defendant" }
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

        {/* FAQs About Practice Areas */}
        <section className="bg-[#0F172A] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
              FAQs About Our Practice Areas
            </h2>
            <div className="mt-10 space-y-6">
              {[
                { question: "What qualifications do your attorneys have?", answer: "Our attorneys hold advanced degrees and are admitted to prestigious bar associations." },
                { question: "Do you offer consultations?", answer: "Yes, we offer personalized consultations to discuss your legal needs." },
                { question: "What areas of law do you specialize in?", answer: "We specialize in corporate law, family law, criminal defense, and more." }
              ].map((faq, index) => (
                <div key={index} className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
                  <HelpCircle className="w-8 h-8 text-[#FBBF24] mb-4" />
                  <h3 className="text-lg font-semibold text-[#FBBF24]">{faq.question}</h3>
                  <p className="text-gray-300 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default PracticeAreas;