import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Scale,
  FileText,
  ArrowRight,
  Globe,
  BookOpen,
  Users
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      {/* Premium Consultation Banner */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif text-[#FBBF24] mb-3">Schedule a Consultation</h3>
              <p className="text-gray-400">Experience premier legal services tailored to your needs</p>
            </div>
            <div className="flex justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#FBBF24] text-[#0F172A] rounded-lg font-semibold hover:bg-[#F59E0B] transition-colors duration-300"
              >
                Request Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Use 2 columns on tablet (md), 4 on desktop (lg+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Scale className="w-10 h-10 text-[#FBBF24]" />
              <div>
                <h2 className="text-2xl font-serif text-[#FBBF24]">Khusi Law Group</h2>
                <p className="text-sm text-gray-400">Excellence in Legal Practice</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-[#FBBF24] pl-4">
              A premier law firm delivering exceptional legal services with integrity and expertise across Nepal and beyond.
            </p>
            <div className="flex items-center space-x-3 bg-[#1E293B] p-3 rounded-lg">
              <Award className="w-5 h-5 text-[#FBBF24]" />
              <div>
                <p className="text-sm font-semibold">ISO 9001:2015 Certified</p>
                <p className="text-xs text-gray-400">Quality Management System</p>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-serif text-[#FBBF24] mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Practice Areas
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                'Corporate Law',
                'Civil Litigation',
                'Real Estate',
                'Family Law',
                'Criminal Defense',
                'Intellectual Property',
                'International Law'
              ].map((area) => (
                <li key={area}>
                  <Link 
                    to={`/practice-areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-[#FBBF24] transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-serif text-[#FBBF24] mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Company
            </h3>
            <div className="grid grid-cols-1 gap-3 text-sm">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Our Team', path: '/team' },
                { label: 'Latest News', path: '/news' },
                { label: 'Careers', path: '/careers' },
                { label: 'Publications', path: '/publications' },
                { label: 'Client Portal', path: '/client-portal' }
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-gray-400 hover:text-[#FBBF24] transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-serif text-[#FBBF24] mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-[#FBBF24] mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  Central Business District<br />
                  Putalisadak, Kathmandu<br />
                  Nepal, 44600
                </p>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-[#FBBF24] flex-shrink-0" />
                <p className="text-gray-400">+977 9864423830</p>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-[#FBBF24] flex-shrink-0" />
                <p className="text-gray-400">contact@khusilawgroup.com</p>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-5 h-5 text-[#FBBF24] flex-shrink-0" />
                <p className="text-gray-400">Sun-Fri: 9:00 AM - 6:00 PM</p>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-gray-800">
                <div className="flex space-x-4">
                  {[
                    { Icon: Linkedin, label: 'LinkedIn' },
                    { Icon: Facebook, label: 'Facebook' },
                    { Icon: Twitter, label: 'Twitter' },
                    { Icon: Instagram, label: 'Instagram' }
                  ].map(({ Icon, label }) => (
                    <Link
                      key={label}
                      to="#"
                      className="bg-[#1E293B] p-2 rounded-lg text-gray-400 hover:text-[#FBBF24] hover:bg-[#0F172A] transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-sm text-gray-400">
            <div>
              <p>&copy; {new Date().getFullYear()} Khusi Law Group. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap space-x-6 md:justify-end">
              <Link to="/privacy" className="hover:text-[#FBBF24] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#FBBF24] transition-colors">Terms of Service</Link>
              <Link to="/disclaimer" className="hover:text-[#FBBF24] transition-colors">Legal Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;