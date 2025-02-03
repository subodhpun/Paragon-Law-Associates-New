import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Building2, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
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
          content="Paragon Law Associates, contact us, legal consultation, law firm Nepal, schedule consultation" 
        />
        <link rel="canonical" href="https://lawparagon.com/contact" />
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Paragon Law Associates - Legal Consultation" />
        <meta 
          property="og:description" 
          content="Schedule a consultation with our expert legal team. We provide personalized legal services tailored to your needs." 
        />
        <meta property="og:url" content="https://lawparagon.com/contact" />
        <meta property="og:site_name" content="Paragon Law Associates" />
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Paragon Law Associates",
            "url": "https://lawparagon.com",
            "logo": "https://lawparagon.com/images/logo.png",
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

      {/* Contact Form */}
      <div className="min-h-screen bg-[#0F172A] text-gray-300"> {/* Dark Navy Blue background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-serif text-[#FBBF24] mb-8 text-center">Contact Us</h1> {/* Gold heading */}
          <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
            Schedule a consultation with our expert legal team
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-[#FBBF24] mb-6">Get in Touch</h2> {/* Gold heading */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-[#FBBF24]" /> {/* Gold icon */}
                  <div>
                    <p className="font-semibold text-gray-300">Office Location</p>
                    <p className="text-gray-400">123 Legal Avenue, Suite 500<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#FBBF24]" /> {/* Gold icon */}
                  <div>
                    <p className="font-semibold text-gray-300">Phone</p>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#FBBF24]" /> {/* Gold icon */}
                  <div>
                    <p className="font-semibold text-gray-300">Email</p>
                    <p className="text-gray-400">contact@paragonlaw.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#FBBF24]" /> {/* Gold icon */}
                  <div>
                    <p className="font-semibold text-gray-300">Office Hours</p>
                    <p className="text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#FBBF24] mb-6">Send Us a Message</h2> {/* Gold heading */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-400">
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
                  } rounded-lg bg-[#1E293B] text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#FBBF24]`}
                  placeholder="Enter your first name"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-400">
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
                  } rounded-lg bg-[#1E293B] text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#FBBF24]`}
                  placeholder="Enter your last name"
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
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
                  } rounded-lg bg-[#1E293B] text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#FBBF24]`}
                  placeholder="Enter your email"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400">
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
                  } rounded-lg bg-[#1E293B] text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#FBBF24]`}
                  placeholder="Enter your phone number"
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                )}
              </div>
              <div>
                <label htmlFor="practiceArea" className="block text-sm font-medium text-gray-400">
                  Select Practice Area
                </label>
                <select
                  id="practiceArea"
                  name="practiceArea"
                  value={formData.practiceArea}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-4 py-3 border ${
                    formErrors.practiceArea ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg bg-[#1E293B] text-gray-300 focus:outline-none focus:border-[#FBBF24]`}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Criminal Defense">Criminal Defense</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Intellectual Property">Intellectual Property</option>
                </select>
                {formErrors.practiceArea && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.practiceArea}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">
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
                  } rounded-lg bg-[#1E293B] text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#FBBF24]`}
                  placeholder="Enter your message"
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-[#FBBF24] text-[#0F172A] font-semibold py-3 px-6 rounded-lg hover:bg-[#D4AF37] transition"
              >
                Schedule Consultation
              </button>
              <p className="text-gray-400 text-sm text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>

        {/* Success Notification */}
        {showNotification && (
          <div className="fixed bottom-8 right-8 bg-[#1E293B] text-[#FBBF24] p-6 rounded-lg shadow-xl">
            <CheckCircle2 className="w-6 h-6 inline-block mr-2" />
            Message sent successfully! We'll get back to you soon.
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