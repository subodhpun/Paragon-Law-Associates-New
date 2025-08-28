import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import supabase from '../../src/supabaseClient'; // ✅ Supabase client

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://supabasestrapi.onrender.com';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFromSupabase = async () => {
      try {
        const { data, error: supaError } = await supabase
          .from('articles')
          .select('*')
          .order('cached_at', { ascending: false });

        if (supaError) throw supaError;

        if (data && data.length > 0) {
          const formattedArticles = data.map(item => ({
            id: item.id,
            slug: item.slug || item.id,
            title: item.title || 'Untitled',
            date: item.published_at || item.cached_at || 'No date',
            image: item.featured_image_url || null,
            category: item.category || 'General',
            excerpt: item.data?.excerpt || item.excerpt || '',
            author: item.data?.author || 'Unknown',
            content: item.data?.content || ''
          }));
          console.log('Articles fetched from Supabase:', formattedArticles);
          setArticles(formattedArticles);
          return true;
        }
        return false;
      } catch (err) {
        console.warn('Supabase fetch failed:', err);
        return false;
      }
    };

    const fetchFromStrapi = async () => {
      try {
        console.log('Fetching articles from Strapi fallback:', `${BASE_URL}/api/articles?populate=*`);
        
        const res = await fetch(`${BASE_URL}/api/articles?populate=*`, {
          headers: { Authorization: `Bearer ${API_TOKEN}` },
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        const data = await res.json();
        const dataArray = Array.isArray(data.data) ? data.data : [data.data];
        if (dataArray.length === 0) {
          setArticles([]);
          return;
        }

        const formattedArticles = dataArray.map(item => ({
          id: item.id || item.Slug || item.slug || 'unknown',
          slug: item.Slug || item.slug || item.id,
          title: item.Title || item.title || 'Untitled',
          date: item.PublishedDate || item.publishedAt || item.date || 'No date',
          image: item.FeaturedIMage?.[0]?.url
            ? `${BASE_URL}${item.FeaturedIMage[0].url.replace(/^\/+/, '/')}`
            : null,
          category: item.Category || item.category || 'General',
          excerpt: item.Description || item.description || item.excerpt || '',
          author: item.Author || item.author || 'Unknown',
          content: item.Content || item.content || ''
        }));

        console.log('Articles fetched from Strapi fallback:', formattedArticles);
        setArticles(formattedArticles);

        // ✅ Optional: You could add code here to cache Strapi data into Supabase

      } catch (err) {
        console.error('Error fetching articles from Strapi fallback:', err);
        setError(err.message);
      }
    };

    const fetchArticles = async () => {
      setLoading(true);
      const supabaseSuccess = await fetchFromSupabase();
      if (!supabaseSuccess) await fetchFromStrapi();
      setLoading(false);
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    console.log('Articles state updated:', articles);
  }, [articles]);

  if (loading) {
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
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#FBBF24] mb-4"></div>
            <p className="text-gray-400">Loading articles...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
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
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-md mx-auto bg-red-900 border border-red-500 rounded-lg p-6">
            <h3 className="text-red-300 font-bold mb-2">Error Loading Articles</h3>
            <p className="text-red-200 text-sm mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-[#FBBF24] text-[#0F172A] px-4 py-2 rounded hover:bg-[#D4AF37] transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-xl mb-4">📰</div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No Articles Found</h3>
            <p className="text-gray-500">There are currently no news articles available.</p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article 
                key={`${article.id}-${index}`}
                className="bg-[#1E293B] border-2 border-[#FBBF24] rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
              >
                {article.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title || "Article image"}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">No Image</span>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-[#FBBF24] bg-[#FBBF24]/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <time className="text-xs text-gray-400">
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#FBBF24] mb-3 leading-tight hover:text-[#D4AF37] transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link
                    to={`/news/${article.slug || article.id}`}
                    className="inline-flex items-center text-[#FBBF24] hover:text-[#D4AF37] font-medium text-sm transition-colors group"
                  >
                    Read More
                    <svg 
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default News;
