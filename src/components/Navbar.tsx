import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Scale, Clock, Phone, Languages } from 'lucide-react';

const Navbar = () => {
  const [language, setLanguage] = useState('en');

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-950 text-white py-2 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1 ${language === 'en' ? 'text-amber-500' : ''}`}
              >
                <Languages className="w-4 h-4" />
                <span>EN</span>
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center space-x-1 ${language === 'es' ? 'text-amber-500' : ''}`}
              >
                <Languages className="w-4 h-4" />
                <span>ES</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <NavLink to="/" className="flex items-center space-x-2">
              <Scale className="w-8 h-8 text-amber-500" />
              <span className="text-xl font-serif">Paragon Law Associates</span>
            </NavLink>
            <div className="hidden md:flex space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `hover:text-amber-500 transition ${isActive ? 'text-amber-500' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/practice-areas" 
                className={({ isActive }) => 
                  `hover:text-amber-500 transition ${isActive ? 'text-amber-500' : ''}`
                }
              >
                Practice Areas
              </NavLink>
              <NavLink 
                to="/attorneys" 
                className={({ isActive }) => 
                  `hover:text-amber-500 transition ${isActive ? 'text-amber-500' : ''}`
                }
              >
                Our Team
              </NavLink>
              <NavLink 
                to="/news" 
                className={({ isActive }) => 
                  `hover:text-amber-500 transition ${isActive ? 'text-amber-500' : ''}`
                }
              >
                News
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `hover:text-amber-500 transition ${isActive ? 'text-amber-500' : ''}`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `hover:text-amber-500 transition ${isActive ? 'text-amber-500' : ''}`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;