import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function News() {
  const articles = [
    {
      id: 'corporate-law-update-2024',
      title: "New Corporate Law Regulations: What You Need to Know",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      category: "Corporate Law",
      excerpt: "Explore the latest changes in corporate law and their implications for businesses in Nepal.",
      author: "Legal Research Team"
    },
    {
      id: 'legal-tech-ai-future',
      title: "The Future of Legal Technology and AI",
      date: "2024-03-10",
      image: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      category: "Legal Tech",
      excerpt: "Insights into how artificial intelligence is transforming the legal landscape and practice.",
      author: "Tech Innovation Department"
    },
    {
      id: 'family-law-changes',
      title: "Understanding Recent Changes in Family Law",
      date: "2024-03-05",
      image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=500&h=300&q=80",
      category: "Family Law",
      excerpt: "A comprehensive overview of the recent changes in family law and their impact on families.",
      author: "Family Law Team"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300"> {/* Dark Navy Blue background */}
      <Helmet>
        <title>News | Paragon Law Associates</title>
        <meta name="description" content="Stay updated with the latest news and updates from Paragon Law Associates." />
      </Helmet>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif mb-8 text-[#FBBF24] text-center">Latest News</h1> {/* Gold */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> {/* Fixed gap here */}
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-[#1E293B] border-2 border-gold rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300" // Slightly lighter navy
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-[#FBBF24]">{article.title}</h2> {/* Gold */}
                <p className="text-gray-400 text-sm">{article.date}</p> {/* Smaller font for date */}
                <p className="text-gray-300 mt-2">{article.excerpt}</p>
                <Link
                  to={`/news/${article.id}`}
                  className="text-[#FBBF24] hover:text-[#D4AF37] hover:underline mt-2 inline-block transition font-medium" // Enhanced hover effect
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default News;