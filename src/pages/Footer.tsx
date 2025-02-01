import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Paragon Law Associates</h2>
            <p className="text-sm">
              Providing expert legal representation with integrity and professionalism. Your trusted partners in law.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#FFD700]">About Us</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#FFD700]">Practice Areas</Link></li>
              <li><Link to="/contact" className="hover:text-[#FFD700]">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-[#FFD700]">FAQs</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-[#FFD700]">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-[#FFD700]">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-[#FFD700]">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-[#FFD700]">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Paragon Law Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
