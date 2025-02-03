import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-12 mt-16"> {/* Dark Navy Blue background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-serif text-[#FBBF24] mb-4">Paragon Law Associates</h2> {/* Gold heading */}
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing expert legal representation with integrity and professionalism. Your trusted partners in law across Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-serif text-[#FBBF24] mb-4">Quick Links</h2> {/* Gold heading */}
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-[#FBBF24] transition-colors duration-300"
                  aria-label="About Us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/practice-areas" 
                  className="text-gray-400 hover:text-[#FBBF24] transition-colors duration-300"
                  aria-label="Practice Areas"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link 
                  to="/news" 
                  className="text-gray-400 hover:text-[#FBBF24] transition-colors duration-300"
                  aria-label="News"
                >
                  News
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-[#FBBF24] transition-colors duration-300"
                  aria-label="Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-serif text-[#FBBF24] mb-4">Follow Us</h2> {/* Gold heading */}
            <div className="flex space-x-4">
              <Link 
                to="#" 
                className="text-gray-400 hover:text-[#FBBF24] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link 
                to="#" 
                className="text-gray-400 hover:text-[#FBBF24] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link 
                to="#" 
                className="text-gray-400 hover:text-[#FBBF24] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link 
                to="#" 
                className="text-gray-400 hover:text-[#FBBF24] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Paragon Law Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;