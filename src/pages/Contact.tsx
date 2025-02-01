import React from 'react';
import { Building2, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Footer from './Footer';

const Contact = () => {
  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (could be sending form data)
  };

  return (
    <div className="bg-gray-900 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Schedule a consultation with our expert legal team
          </p>
        </div>

        {/* Main Contact Grid (Left: Contact Info, Right: Form) */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Contact Information */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {/* Office Location */}
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Building2 className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <div className="font-semibold">Office Location</div>
                  <div className="text-gray-400">123 Legal Avenue, Suite 500<br />New York, NY 10001</div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-400">(555) 123-4567</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400">contact@paragonlaw.com</div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <div className="font-semibold">Office Hours</div>
                  <div className="text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Inputs */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-amber-500"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-amber-500"
              required
            />

            {/* Phone Input */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-amber-500"
              required
            />

            {/* Select Practice Area */}
            <select
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-amber-500 text-gray-400"
              required
            >
              <option value="">Select Practice Area</option>
              <option value="corporate">Corporate Law</option>
              <option value="family">Family Law</option>
              <option value="criminal">Criminal Defense</option>
              <option value="real-estate">Real Estate</option>
              <option value="ip">Intellectual Property</option>
            </select>

            {/* Message Input */}
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-amber-500"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-500 text-slate-900 px-6 py-4 rounded-md font-semibold hover:bg-amber-400 transition flex items-center justify-center"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            {/* Privacy Policy Text */}
            <p className="text-sm text-gray-400 text-center">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Contact;
