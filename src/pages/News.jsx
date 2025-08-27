import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://supabasestrapi.onrender.com';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/articles?populate=*`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        if (!res.ok) throw new Error('Failed to fetch articles');

        const data = await res.json();
        const formattedArticles = data.data.map(item => {
          const attrs = item.attributes || {};
          return {
            id: attrs.slug || item.id, // fallback if slug is missing
            title: attrs.title || "Untitled",
            date: attrs.date || "No date",
            image: attrs.image?.data?.attributes?.url || '', // fallback if image missing
            category: attrs.category || "General",
            excerpt: attrs.excerpt || "",
            author: attrs.author || "Unknown",
          };
        });

        setArticles(formattedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
      <Helmet>
        <title>News | Khusi Law Group</title>
        <meta name="description" content="Stay updated with the latest news and updates from Khusi Law Group." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        <div className="flex items-center space-x-2 mb-6 -ml-4 sm:-ml-6 lg:-ml-8">
          <div className="h-1 w-12 bg-[#FBBF24]"></div>
          <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">Legal Updates & Insights</span>
        </div>
        <h1 className="text-4xl font-serif text-[#FBBF24] text-center">Latest News</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
          Stay informed with the latest legal developments and firm updates
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <p className="text-center text-gray-400">Loading articles...</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-400 italic">No articles found.</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map(article => (
              <div key={article.id} className="bg-[#1E293B] border-2 border-[#FBBF24] rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                {article.image ? (
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-[#FBBF24]">{article.title}</h2>
                  <p className="text-gray-400 text-sm">{article.date}</p>
                  <p className="text-gray-300 mt-2">{article.excerpt}</p>
                  <Link
                    to={`/news/${article.id}`}
                    className="text-[#FBBF24] hover:text-[#D4AF37] hover:underline mt-2 inline-block transition font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default News;
