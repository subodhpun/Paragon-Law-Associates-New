import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[700px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000"
            alt="Law office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-1 w-12 bg-amber-500"></div>
              <span className="text-amber-500 font-semibold tracking-wider uppercase">Trusted Legal Partners</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Excellence in Legal<br />Representation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Dedicated to providing exceptional legal services with integrity,
              professionalism, and a commitment to achieving the best possible outcomes for our clients.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-amber-500 text-slate-900 px-8 py-4 rounded-md font-semibold hover:bg-amber-400 transition"
              >
                Schedule Consultation
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/practice-areas"
                className="inline-flex items-center bg-white/10 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/20 transition"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ number: "20+", label: "Years Experience" }, { number: "1000+", label: "Cases Won" }, { number: "50+", label: "Expert Attorneys" }, { number: "98%", label: "Client Satisfaction" }].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">{stat.number}</div>
                <div className="text-white text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6 text-center">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center space-x-8">
            {[{ quote: "Paragon Law Associates provided me with excellent legal counsel. Their professionalism and dedication to my case were unmatched!", name: "John Doe", title: "Business Owner" }, { quote: "The team at Paragon Law was responsive and thorough. I highly recommend them for any legal needs.", name: "Jane Smith", title: "CEO" }, { quote: "Professional and efficient! They made a complicated legal matter simple for me to understand and resolve.", name: "Robert Lee", title: "Entrepreneur" }].map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/3 text-center p-4">
                <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6 text-center">Our Legal Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ title: "Corporate Law", description: "We provide legal services for businesses, including incorporation, mergers, and compliance with regulations.", link: "/practice-areas#corporate-law", imgSrc: "https://via.placeholder.com/500x300?text=Corporate+Law" }, { title: "Family Law", description: "Our experienced attorneys guide clients through divorce, custody, and other family-related legal matters.", link: "/practice-areas#family-law", imgSrc: "https://via.placeholder.com/500x300?text=Family+Law" }, { title: "Criminal Defense", description: "We offer robust legal defense for individuals facing criminal charges, ensuring their rights are protected.", link: "/practice-areas#criminal-defense", imgSrc: "https://via.placeholder.com/500x300?text=Criminal+Defense" }].map((service, index) => (
              <div key={index} className="text-center">
                <img src={service.imgSrc} alt={service.title} className="w-full h-56 object-cover mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link to={service.link} className="text-amber-500 hover:text-amber-400">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-amber-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Need Legal Assistance?</h2>
          <p className="text-lg text-white mb-6">Our team is ready to provide expert legal support for your case. Get in touch today for a consultation.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-slate-900 text-amber-500 px-8 py-4 rounded-md font-semibold hover:bg-slate-700 transition"
          >
            Contact Us
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Awards & Recognition Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">Awards & Recognition</h2>
          <div className="flex justify-center space-x-8">
            <img src="https://via.placeholder.com/150" alt="Award 1" className="h-16" />
            <img src="https://via.placeholder.com/150" alt="Award 2" className="h-16" />
            <img src="https://via.placeholder.com/150" alt="Award 3" className="h-16" />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[{ question: "What types of cases do you handle?", answer: "We handle a wide range of legal matters including corporate, family, criminal law, and more." }, { question: "How can I schedule a consultation?", answer: "You can schedule a consultation by contacting us through our website or calling our office." }, { question: "What should I bring to my consultation?", answer: "Please bring any relevant documents or case details that will help us understand your situation." }].map((faq, index) => (
              <div key={index} className="bg-white p-6 shadow-md rounded-md">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
