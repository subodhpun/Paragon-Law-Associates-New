import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Building2, Phone, Mail, Clock, ArrowRight, CheckCircle2, Globe, MapPin, ChevronDown } from 'lucide-react';
import Footer from './Footer.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  practiceArea: '',
  message: ''
};

const INITIAL_ERROR_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  practiceArea: '',
  message: ''
};

const CustomSelect = ({ value, onChange, options, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`mt-1 block w-full px-4 py-3 border ${
          error ? 'border-red-500' : 'border-gray-600'
        } rounded-lg bg-[#1E293B] text-gray-300 cursor-pointer flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#FBBF24] focus:border-[#FBBF24]`}
      >
        <span>{value || 'Select an option'}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-[#1E293B] border border-gray-600 rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-[#FBBF24] hover:text-[#0F172A] transition-colors"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [formErrors, setFormErrors] = useState(INITIAL_ERROR_STATE);
  const formRef = useRef(null);

  // Form validation function
  const validateForm = () => {
    const errors = { ...INITIAL_ERROR_STATE };
    let hasErrors = false;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      hasErrors = true;
    }

    // Phone validation (simple numeric check)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone.replace(/[^\d]/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
      hasErrors = true;
    }

    // Required fields check
    Object.keys(formData).forEach(field => {
      if (!formData[field]) {
        errors[field] = `${field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} is required`;
        hasErrors = true;
      }
    });

    setFormErrors(errors);
    return !hasErrors;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);

      // Show success notification
      setShowNotification(true);

      // Reset form
      setFormData(INITIAL_FORM_STATE);

      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }
  };

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Contact Us | Paragon Law Associates - Legal Consultation</title>
        <meta
          name="description"
          content="Get in touch with Paragon Law Associates for expert legal consultation. Schedule a consultation with our team today."
        />
        <meta
          name="keywords"
          content="contact paragon law, legal consultation, law firm contact, legal services Nepal"
        />
        <link rel="canonical" href="https://lawparagon.com/contact" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us - Paragon Law Associates" />
        <meta
          property="og:description"
          content="Reach out to our expert legal team for personalized legal solutions. We're here to help!"
        />
        <meta property="og:url" content="https://lawparagon.com/contact" />
        <meta property="og:type" content="website" />
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Paragon Law Associates - Contact Us",
            "description": "Contact us for expert legal consultation and personalized legal solutions.",
            "provider": {
              "@type": "Organization",
              "name": "Paragon Law Associates",
              "url": "https://lawparagon.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Nepal"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+977-1-4444444",
              "contactType": "customer service",
              "areaServed": "NP",
              "availableLanguage": ["en", "ne"]
            }
          })}
        </script>
      </Helmet>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-1 w-12 bg-[#FBBF24]"></div>
                <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">Get In Touch</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-serif text-[#FBBF24] text-center">Contact Us</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
            Schedule a consultation with our expert legal team
          </p>
        </div>

        {/* Global Reach Section */}
        <section className="bg-[#1E293B] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-[#FBBF24]">Our Global Reach</h2> {/* Gold heading */}
            <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
              With partnerships across continents, we provide legal solutions worldwide.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
              {[
                {
                  icon: <Globe className="w-8 h-8 text-[#FBBF24] mb-4" />,
                  title: "International Cases",
                  description: "Handling cross-border legal matters with expertise."
                },
                {
                  icon: <Building2 className="w-8 h-8 text-[#FBBF24] mb-4" />,
                  title: "Global Partnerships",
                  description: "Collaborating with international law firms for seamless service."
                },
                {
                  icon: <Phone className="w-8 h-8 text-[#FBBF24] mb-4" />,
                  title: "Multilingual Support",
                  description: "Offering services in multiple languages for global clients."
                }
              ].map((reach, index) => (
                <div key={index} className="bg-[#0F172A] p-6 rounded-lg shadow-lg">
                  {reach.icon}
                  <h3 className="text-lg font-semibold text-[#FBBF24]">{reach.title}</h3>
                  <p className="text-gray-300 mt-2">{reach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Office Location Map */}
        <section className="bg-[#0F172A] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-[#FBBF24]">Our Office Location</h2>
            <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto mb-10">
              Visit us at our office in Putalisadak, Kathmandu
            </p>
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl bg-[#1E293B] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#FBBF24] mx-auto mb-4" />
                <p className="text-gray-300">Putalisadak, Kathmandu, Nepal</p>
                <a 
                  href="https://goo.gl/maps/YOUR_LOCATION_LINK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FBBF24] hover:text-[#F59E0B] mt-2 inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-[#1E293B] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-[#FBBF24]">Get in Touch</h2> {/* Gold heading */}
            <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8">
              {[
                {
                  icon: <MapPin className="w-8 h-8 text-[#FBBF24] mb-4" />,
                  title: "Office Location",
                  description: "123 Legal Avenue, Suite 500, New York, NY 10001"
                },
                {
                  icon: <Phone className="w-8 h-8 text-[#FBBF24] mb-4" />,
                  title: "Phone",
                  description: "(555) 123-4567"
                },
                {
                  icon: <Mail className="w-8 h-8 text-[#FBBF24] mb-4" />,
                  title: "Email",
                  description: "contact@paragonlaw.com"
                },
                {
                  icon: <Clock className="w-8 h-8 text-[#FBBF24] mb-4" />,
                  title: "Office Hours",
                  description: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday - Sunday: Closed"
                }
              ].map((info, index) => (
                <div key={index} className="bg-[#0F172A] p-6 rounded-lg shadow-lg">
                  {info.icon}
                  <h3 className="text-lg font-semibold text-[#FBBF24]">{info.title}</h3>
                  <p className="text-gray-300 mt-2">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-[#0F172A] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-[#FBBF24]">Send Us a Message</h2> {/* Gold heading */}
            <form onSubmit={handleSubmit} ref={formRef} className="mt-10 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#FBBF24]">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full px-4 py-3 border ${
                      formErrors.firstName ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg bg-[#1E293B] text-gray-300 focus:outline-none focus:border-[#FBBF24]`}
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#FBBF24]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full px-4 py-3 border ${
                      formErrors.lastName ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg bg-[#1E293B] text-gray-300 focus:outline-none focus:border-[#FBBF24]`}
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#FBBF24]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full px-4 py-3 border ${
                      formErrors.email ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg bg-[#1E293B] text-gray-300 focus:outline-none focus:border-[#FBBF24]`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#FBBF24]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full px-4 py-3 border ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg bg-[#1E293B] text-gray-300 focus:outline-none focus:border-[#FBBF24]`}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                  )}
                </div>

                {/* Select Practice Area */}
                <div className="sm:col-span-2">
                  <label htmlFor="practiceArea" className="block text-sm font-medium text-[#FBBF24]">
                    Select Practice Area
                  </label>
                  <CustomSelect
                    value={formData.practiceArea}
                    onChange={(value) => handleInputChange({ target: { name: 'practiceArea', value } })}
                    options={[
                      { value: 'Corporate Law', label: 'Corporate Law' },
                      { value: 'Family Law', label: 'Family Law' },
                      { value: 'Criminal Defense', label: 'Criminal Defense' },
                      { value: 'Real Estate', label: 'Real Estate' },
                      { value: 'Intellectual Property', label: 'Intellectual Property' }
                    ]}
                    error={formErrors.practiceArea}
                  />
                  {formErrors.practiceArea && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.practiceArea}</p>
                  )}
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-[#FBBF24]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`mt-1 block w-full px-4 py-3 border ${
                      formErrors.message ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg bg-[#1E293B] text-gray-300 focus:outline-none focus:border-[#FBBF24]`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#0F172A] bg-[#FBBF24] hover:bg-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FBBF24]"
                >
                  Schedule Consultation
                </button>
              </div>
            </form>
          </div>
        </section>
                {/* Success Notification */}
                {showNotification && (
          <div className="fixed bottom-4 right-4 bg-[#1E293B] text-[#FBBF24] px-6 py-4 rounded-lg shadow-lg flex items-center space-x-2">
            <CheckCircle2 className="w-6 h-6" />
            <span>Message sent successfully! We'll get back to you soon.</span>
          </div>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

// Wrap the component with HelmetProvider
const ContactWithHelmet = () => (
  <HelmetProvider>
    <Contact />
  </HelmetProvider>
);

export default ContactWithHelmet; // Export the wrapped component