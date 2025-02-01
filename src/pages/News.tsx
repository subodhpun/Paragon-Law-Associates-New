import React from 'react';
import Footer from './Footer';
import { ChevronRight } from 'lucide-react';

const News = () => {
  const articles = [
    {
      title: "New Corporate Law Regulations: What You Need to Know",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500",
      category: "Corporate Law"
    },
    {
      title: "The Future of Legal Technology and AI",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500",
      category: "Legal Tech"
    },
    {
      title: "Understanding Recent Changes in Family Law",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=500",
      category: "Family Law"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-amber-500 mb-4">Latest News & Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay informed with our latest legal insights and firm updates.
          </p>
        </div>
        
        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-amber-500">
              <div className="relative overflow-hidden mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover rounded-2xl transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-500 mb-4">{article.title}</h3>
              <p className="text-gray-300 mb-6 text-sm">{article.date}</p>
              <div className="flex items-center text-sm text-gray-200">
                <ChevronRight className="w-4 h-4 text-amber-500 mr-2" />
                <span>{article.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default News;
