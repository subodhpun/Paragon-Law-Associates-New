import React from 'react';
import { Star } from 'lucide-react';
import Footer from './Footer';

const Attorneys = () => {
  const attorneys = [
    {
      name: "Sarah Johnson",
      role: "Managing Partner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500",
      specialties: ["Corporate Law", "Mergers & Acquisitions"]
    },
    {
      name: "Michael Chen",
      role: "Senior Partner",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=500",
      specialties: ["Criminal Defense", "Civil Litigation"]
    },
    {
      name: "Emily Rodriguez",
      role: "Partner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500",
      specialties: ["Family Law", "Estate Planning"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-amber-500 mb-4">Our Expert Attorneys</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Meet our team of experienced legal professionals dedicated to your success.
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <div key={index} className="group bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-amber-500">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-[400px] object-cover rounded-xl group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="space-y-2 text-white">
                      {attorney.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-amber-500 mr-2" />
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-amber-500 mb-2">{attorney.name}</h3>
              <p className="text-gray-300">{attorney.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Attorneys;
