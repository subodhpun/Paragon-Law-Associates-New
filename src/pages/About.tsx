import React from 'react';
import { ChevronRight } from 'lucide-react';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-1 w-12 bg-amber-500"></div>
              <span className="text-amber-500 font-semibold tracking-wider uppercase">About Our Firm</span>
            </div>
            <h2 className="text-4xl font-serif mb-6 text-amber-500">A Legacy of Legal Excellence</h2>
            <p className="text-gray-400 mb-6">
              Founded on principles of excellence and integrity, Paragon Law Associates
              has been serving clients with distinction for over two decades. Our team
              of experienced attorneys brings deep expertise and a commitment to
              achieving the best possible outcomes for our clients.
            </p>
            <p className="text-gray-400 mb-8">
              We understand that each case is unique and requires personalized
              attention. Our approach combines thorough legal analysis with strategic
              thinking to deliver solutions that meet our clients' needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Our Mission</h3>
                <p className="text-gray-400">
                  To provide exceptional legal services while maintaining the highest standards
                  of professional integrity and client satisfaction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <ChevronRight className="w-4 h-4 text-amber-500 mr-2" />
                    Excellence
                  </li>
                  <li className="flex items-center text-gray-400">
                    <ChevronRight className="w-4 h-4 text-amber-500 mr-2" />
                    Integrity
                  </li>
                  <li className="flex items-center text-gray-400">
                    <ChevronRight className="w-4 h-4 text-amber-500 mr-2" />
                    Innovation
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Side Image */}
          <div className="relative">
            <div className="relative h-[500px] sm:h-[600px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1000"
                alt="Law office meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-8 right-8 bg-white p-8 rounded-lg shadow-xl max-w-sm">
              <div className="text-4xl font-bold text-amber-500 mb-2">20+</div>
              <div className="text-xl font-semibold mb-2 text-gray-800">Years of Excellence</div>
              <p className="text-gray-600">
                Providing outstanding legal services and building lasting client relationships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
