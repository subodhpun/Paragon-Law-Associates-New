import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="bg-[#0F172A] text-white"> {/* Dark Navy Blue Background */}
      <Helmet>
        <title>Home | Paragon Law Associates</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[700px] bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000"
            alt="Law office"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
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

      {/* Stats Section */}
      <section className="bg-[#1E293B] py-16"> {/* Slightly Lighter Navy */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Years Experience" },
              { number: "1000+", label: "Cases Won" },
              { number: "50+", label: "Expert Attorneys" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#FBBF24] mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="bg-[#0F172A] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#FBBF24]">
              Comprehensive Legal Solutions
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#FBBF24] sm:text-4xl">
              Our Practice Areas
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We offer a wide range of legal services to meet your needs, whether you're an individual, business, or organization.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Corporate Law',
                  description: 'Expert guidance for businesses of all sizes, from startups to established corporations.',
                  link: '/practice-areas/corporate-law'
                },
                {
                  name: 'Family Law',
                  description: 'Compassionate legal support for family matters, including divorce, custody, and adoption.',
                  link: '/practice-areas/family-law'
                },
                {
                  name: 'Cyber Law',
                  description: 'Protection and guidance in the digital age, handling cybercrime and online legal issues.',
                  link: '/practice-areas/cyber-law'
                }
              ].map((practice) => (
                <div key={practice.name} className="flex flex-col">
                  <dt className="text-lg font-semibold leading-7 text-[#FBBF24]">
                    {practice.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{practice.description}</p>
                    <p className="mt-6">
                      <Link
                        to={practice.link}
                        className="text-sm font-semibold leading-6 text-[#FBBF24] hover:text-[#D4AF37] transition duration-300"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#1E293B] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
            What Our Clients Say
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8">
            {[
              { quote: "Exceptional service and professionalism!", name: "John Doe", position: "CEO, Company A" },
              { quote: "They handled my case with great care and expertise.", name: "Jane Smith", position: "Client" },
              { quote: "Highly recommend for any legal needs!", name: "Mike Johnson", position: "Entrepreneur" },
              { quote: "A team of dedicated professionals who truly care.", name: "Emily Davis", position: "Non-Profit Director" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#0F172A] p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-[#FBBF24]">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;