import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Scale, 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Mail,
  MapPin,
  ArrowRight,
  Globe,
  BookOpen,
  Clock
} from 'lucide-react';

// Practice Areas with detailed descriptions
const PRACTICE_AREAS = [
  { 
    path: '/practice-areas/corporate-law', 
    label: 'Corporate Law',
    description: 'Business formations, mergers & acquisitions'
  },
  { 
    path: '/practice-areas/family-law', 
    label: 'Family Law',
    description: 'Divorce, custody, and family matters'
  },
  { 
    path: '/practice-areas/criminal-law', 
    label: 'Criminal Law',
    description: 'Criminal defense and litigation'
  },
  { 
    path: '/practice-areas/real-estate', 
    label: 'Real Estate Law',
    description: 'Property transactions and disputes'
  },
  { 
    path: '/practice-areas/intellectual-property', 
    label: 'Intellectual Property',
    description: 'Patents, trademarks, and copyrights'
  },
  { 
    path: '/practice-areas/civil-litigation', 
    label: 'Civil Litigation',
    description: 'Civil disputes and resolutions'
  }
];

// Main Navigation Links
const NAV_LINKS = [
  { 
    path: '/', 
    label: 'Home',
    icon: Globe
  },
  {
    path: '/practice-areas',
    label: 'Practice Areas',
    hasDropdown: true,
    dropdownItems: PRACTICE_AREAS,
    icon: BookOpen
  },
  { 
    path: '/attorneys', 
    label: 'Our Team',
    icon: ChevronRight
  },
  { 
    path: '/news', 
    label: 'News & Updates',
    icon: ChevronRight
  },
  { 
    path: '/about', 
    label: 'About Us',
    icon: ChevronRight
  },
  { 
    path: '/contact', 
    label: 'Contact',
    icon: ChevronRight
  }
];

// Contact Information
const CONTACT_INFO = {
  phone: '+977 1-4444444',
  email: 'contact@khusilawgroup.com',
  address: 'Putalisadak, Kathmandu',
  hours: 'Sun-Fri: 9:00 AM - 6:00 PM'
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Desktop Dropdown Menu Component
  const DesktopDropdown = ({ isOpen }) => (
    <div
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      className={`absolute top-full left-0 w-72 bg-[#1E293B] rounded-b-lg shadow-xl py-2 transform transition-all duration-200 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      {PRACTICE_AREAS.map((area) => (
        <Link
          key={area.path}
          to={area.path}
          className="block px-4 py-3 hover:bg-[#0F172A] hover:text-[#FBBF24] transition-colors text-gray-300 group"
        >
          <div className="text-sm font-medium">{area.label}</div>
          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors mt-0.5">
            {area.description}
          </div>
        </Link>
      ))}
      <div className="px-4 py-3 mt-2 border-t border-gray-700">
        <Link
          to="/practice-areas"
          className="flex items-center text-sm text-[#FBBF24] hover:text-[#F59E0B] transition-colors"
        >
          View All Practice Areas
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="fixed w-full z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#0F172A] text-gray-300 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden sm:flex items-center divide-x divide-gray-700">
              <div className="flex items-center space-x-6 pr-6">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="flex items-center space-x-2 hover:text-[#FBBF24] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FBBF24]" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center space-x-2 hover:text-[#FBBF24] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FBBF24]" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </div>
              <div className="flex items-center space-x-6 px-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#FBBF24]" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#FBBF24]" />
                  <span>{CONTACT_INFO.hours}</span>
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className="hidden sm:flex items-center space-x-2 bg-[#FBBF24] text-[#0F172A] px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[#F59E0B] transition-colors"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`bg-[#1E293B] text-gray-300 transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-[#0F172A]/50' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-3">
              <Scale className="w-10 h-10 text-[#FBBF24]" />
              <div>
                <span className="text-xl font-serif text-white block">Khusi Law Group</span>
                <span className="text-xs text-gray-400">Excellence in Legal Practice</span>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((item) => (
                <div 
                  key={item.path} 
                  className="relative" 
                  ref={item.hasDropdown ? dropdownRef : null}
                  onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `hover:text-[#FBBF24] transition-colors py-2 flex items-center text-sm font-medium ${
                        isActive ? 'text-[#FBBF24]' : ''
                      }`
                    }
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`} />
                    )}
                  </NavLink>
                  {item.hasDropdown && <DesktopDropdown isOpen={dropdownOpen} />}
                </div>
              ))}
              <Link
                to="/attorneys"
                className="bg-[#FBBF24] text-[#0F172A] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#F59E0B] transition-colors flex items-center"
              >
                Meet Our Attorneys <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#0F172A] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#FBBF24]" />
              ) : (
                <Menu className="w-6 h-6 text-[#FBBF24]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[112px] bg-[#0F172A] z-40 overflow-y-auto">
            <div className="flex flex-col p-4">
              {/* Mobile Contact Info */}
              <div className="bg-[#1E293B] rounded-lg p-4 mb-4 space-y-2">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <Phone className="w-4 h-4 text-[#FBBF24]" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <Mail className="w-4 h-4 text-[#FBBF24]" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-4 h-4 text-[#FBBF24]" />
                  <span>{CONTACT_INFO.hours}</span>
                </div>
              </div>

              {/* Navigation Links */}
              {NAV_LINKS.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <div>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-lg transition-colors ${
                            isActive ? 'text-[#FBBF24]' : 'text-gray-300'
                          }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="flex items-center justify-between w-full px-4 py-2 text-lg text-gray-300 hover:bg-[#1E293B]"
                      >
                        <span>Browse Areas</span>
                        <ChevronRight className={`w-5 h-5 transition-transform ${
                          mobileDropdownOpen ? 'rotate-90' : ''
                        }`} />
                      </button>
                      {mobileDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {PRACTICE_AREAS.map((area) => (
                            <Link
                              key={area.path}
                              to={area.path}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setMobileDropdownOpen(false);
                              }}
                              className="block px-4 py-2 text-gray-300 hover:bg-[#1E293B] hover:text-[#FBBF24]"
                            >
                              {area.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-lg hover:bg-[#1E293B] transition-colors ${
                          isActive ? 'text-[#FBBF24]' : 'text-gray-300'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <Link
                to="/attorneys"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 bg-[#FBBF24] text-[#0F172A] px-4 py-3 rounded-lg text-center font-medium hover:bg-[#F59E0B] transition-colors flex items-center justify-center"
              >
                Meet Our Attorneys <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;