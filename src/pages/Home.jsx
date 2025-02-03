import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Slideonscroll from '../components/ui/Slideonscroll'
import CustomLoader from '../components/ui/CustomLoader';

// Hero Section Component with Image Crop and Text Overlay
const HeroSection = () => {
  return (
    <section className="relative h-[700px] bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000"
            alt="Law office"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center mt-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="h-1 w-12 bg-[#FBBF24]"></div> {/* Gold Accent */}
              <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">Trusted Legal Partners</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif text-[#FBBF24] leading-tight">
              Excellence in Legal<br />Representation
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Dedicated to providing exceptional legal services with integrity,
              professionalism, and a commitment to achieving the best possible outcomes for our clients.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-[#FBBF24] text-[#0F172A] px-8 py-4 rounded-md font-semibold hover:bg-[#D4AF37] transition duration-300"
              >
                Schedule Consultation
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/practice-areas"
                className="inline-flex items-center bg-gray-700 text-gray-200 px-8 py-4 rounded-md font-semibold hover:bg-gray-600 transition duration-300"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

  );
};

// Main Home Component
const Home = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Home | Paragon Law Associates</title>
        <meta
          name="description"
          content="Paragon Law Associates - Your trusted legal partner for all legal needs."
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <Slideonscroll direction="up" duration={1}>
        <div className="bg-[#1E293B] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '20+', label: 'Years Experience' },
                { number: '1000+', label: 'Cases Won' },
                { number: '50+', label: 'Expert Attorneys' },
                { number: '98%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <h2 className="text-3xl font-bold text-[#FBBF24]">{stat.number}</h2>
                  <p className="mt-2 text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slideonscroll>

      {/* Practice Areas Section */}
      <Slideonscroll direction="up" duration={1}>
        <div className="bg-[#0F172A] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#FBBF24]">
              Comprehensive Legal Solutions
            </h2>
            <p className="mt-4 text-lg text-center text-gray-300">
              We offer a wide range of legal services to meet your needs, whether you're an individual,
              business, or organization.
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Corporate Law',
                  description:
                    'Expert guidance for businesses of all sizes, from startups to established corporations.',
                  link: '/practice-areas/corporate-law',
                },
                {
                  name: 'Family Law',
                  description:
                    'Compassionate legal support for family matters, including divorce, custody, and adoption.',
                  link: '/practice-areas/family-law',
                },
                {
                  name: 'Cyber Law',
                  description:
                    'Protection and guidance in the digital age, handling cybercrime and online legal issues.',
                  link: '/practice-areas/cyber-law',
                },
              ].map((practice, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-[#FBBF24]">{practice.name}</h3>
                  <p className="mt-2 text-gray-300">{practice.description}</p>
                  <Link
                    to={practice.link}
                    className="mt-4 inline-block text-[#FBBF24] hover:text-[#D4AF37] transition duration-300"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slideonscroll>

      {/* Testimonials Section */}
      <Slideonscroll direction="up" duration={1}>
        <div className="bg-[#1E293B] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#FBBF24]">What Our Clients Say</h2>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  quote: 'Exceptional service and professionalism!',
                  name: 'John Doe',
                  position: 'CEO, Company A',
                },
                {
                  quote: 'They handled my case with great care and expertise.',
                  name: 'Jane Smith',
                  position: 'Client',
                },
                {
                  quote: 'Highly recommend for any legal needs!',
                  name: 'Mike Johnson',
                  position: 'Entrepreneur',
                },
                {
                  quote: 'A team of dedicated professionals who truly care.',
                  name: 'Emily Davis',
                  position: 'Non-Profit Director',
                },
              ].map((testimonial, index) => (
                <div key={index} className="text-center">
                  <p className="text-gray-300">"{testimonial.quote}"</p>
                  <h3 className="mt-4 text-lg font-semibold text-[#FBBF24]">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slideonscroll>

      {/* Why Choose Us Section */}
      <Slideonscroll direction="up" duration={1}>
        <div className="bg-[#0F172A] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#FBBF24]">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-center text-gray-300">
              Your Trusted Legal Partner. At Paragon Law Associates, we prioritize your success with tailored solutions and unwavering dedication.
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Experienced Team',
                  description: 'Our attorneys bring decades of combined experience across diverse legal fields.',
                },
                {
                  title: 'Personalized Approach',
                  description: 'We tailor our strategies to meet your unique needs and goals.',
                },
                {
                  title: 'Proven Track Record',
                  description: 'With over 1000+ successful cases, we deliver results you can trust.',
                },
              ].map((reason, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-[#FBBF24]">{reason.title}</h3>
                  <p className="mt-2 text-gray-300">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slideonscroll>

      {/* Call to Action Section */}
      <Slideonscroll direction="up" duration={1}>
        <div className="bg-[#1E293B] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#FBBF24]">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-gray-300">
              Contact us today to schedule a consultation with our expert legal team.
            </p>
            <button className="mt-6 bg-[#FBBF24] text-[#0F172A] px-6 py-3 rounded-lg hover:bg-[#D4AF37] transition duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </Slideonscroll>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;