import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Scale, Clock, Phone, Languages, Menu, X, User, Calendar, ChevronDown, ChevronRight } from 'lucide-react';

const PRACTICE_AREAS = [
  { path: '/practice-areas/corporate-law', label: 'Corporate Law' },
  { path: '/practice-areas/family-law', label: 'Family Law' },
  { path: '/practice-areas/criminal-law', label: 'Criminal Law' },
  { path: '/practice-areas/real-estate', label: 'Real Estate Law' },
  { path: '/practice-areas/intellectual-property', label: 'Intellectual Property' },
  { path: '/practice-areas/civil-litigation', label: 'Civil Litigation' }
];

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  {
    path: '/practice-areas',
    label: 'Practice Areas',
    hasDropdown: true,
    dropdownItems: PRACTICE_AREAS
  },
  { path: '/attorneys', label: 'Our Team' },
  { path: '/news', label: 'News' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentDateTime = "2025-02-03 10:11:50";
  const currentUser = "subodhmagar";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
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
  const DesktopDropdown = () => (
    <div
      className={`absolute top-full left-0 w-64 bg-[#1E293B] rounded-b-lg shadow-xl py-2 transform transition-all duration-200 ${
        dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      {PRACTICE_AREAS.map((area) => (
        <NavLink
          key={area.path}
          to={area.path}
          className={({ isActive }) =>
            `block px-4 py-2 hover:bg-[#0F172A] hover:text-[#FBBF24] transition-colors ${
              isActive ? 'text-[#FBBF24] bg-[#0F172A]' : 'text-gray-300'
            }`
          }
          onClick={() => setDropdownOpen(false)}
        >
          {area.label}
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="bg-[#0F172A] text-gray-300 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden sm:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#FBBF24]" />
                <span>Sun-Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#FBBF24]" />
                <span>+977 1-4444444</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden sm:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-[#FBBF24]" />
                  <span>{currentUser}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-[#FBBF24]" />
                  <span>{currentDateTime}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 border-l border-gray-700 pl-4">
                {['en', 'np'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`flex items-center space-x-1 ${
                      language === lang ? 'text-[#FBBF24]' : ''
                    }`}
                  >
                    <Languages className="w-4 h-4" />
                    <span className="uppercase">{lang}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-[#1E293B] text-gray-300 sticky top-0 z-50 ${
        scrolled ? 'shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2">
              <Scale className="w-8 h-8 text-[#FBBF24]" />
              <span className="text-xl font-serif text-white">Paragon Law</span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((item) => (
                <div key={item.path} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center space-x-1 py-2 hover:text-[#FBBF24] transition-colors ${
                        dropdownOpen ? 'text-[#FBBF24]' : ''
                      }`}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      onMouseEnter={() => setDropdownOpen(true)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `hover:text-[#FBBF24] transition-colors py-2 ${
                          isActive ? 'text-[#FBBF24]' : ''
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                  {item.hasDropdown && <DesktopDropdown />}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#0F172A] transition-colors"
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
          <div className="md:hidden fixed inset-0 top-[88px] bg-[#0F172A] z-40 overflow-y-auto">
            <div className="flex flex-col p-4">
              {NAV_LINKS.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className={`flex items-center justify-between w-full px-4 py-2 text-lg hover:bg-[#1E293B] rounded-lg transition-colors ${
                          mobileDropdownOpen ? 'text-[#FBBF24] bg-[#1E293B]' : 'text-gray-300'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className={`w-5 h-5 transition-transform ${
                          mobileDropdownOpen ? 'rotate-90' : ''
                        }`} />
                      </button>
                      {mobileDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {PRACTICE_AREAS.map((area) => (
                            <NavLink
                              key={area.path}
                              to={area.path}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setMobileDropdownOpen(false);
                              }}
                              className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg hover:bg-[#1E293B] transition-colors ${
                                  isActive ? 'text-[#FBBF24] bg-[#1E293B]' : 'text-gray-300'
                                }`
                              }
                            >
                              {area.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-lg hover:bg-[#1E293B] rounded-lg transition-colors ${
                          isActive ? 'text-[#FBBF24] bg-[#1E293B]' : 'text-gray-300'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;