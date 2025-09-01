import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import supabase from '../../src/supabaseClient';


const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://supabasestrapi.onrender.com';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(() => {
  console.log('ArticleDetail mounted with ID:', id);
  const fetchArticle = async () => {
    try {
      if (!id) {
        throw new Error('No article ID provided');
      }
  
      // Fetch article directly from Supabase by id
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single();
  
      if (error) throw error;
      if (!data) throw new Error('Article not found');
  
      // Process Supabase content array into HTML
      const processedContent = processSupabaseContent(data.content);
  
      const formattedArticle = {
        id: data.id,
        title: data.title || 'Untitled',
        date: data.created || 'No date',
        image: data.image_url || null,
        excerpt: data.description || '',
        author: data.author || 'Unknown',
        content: processedContent
      };
  
      console.log('Article fetched from Supabase:', formattedArticle);
      setArticle(formattedArticle);
  
    } catch (err) {
      console.error('Error fetching article:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  // Helper function to convert Supabase content array to HTML
  function processSupabaseContent(content) {
    if (!Array.isArray(content)) return '';
  
    return content.map(block => {
      switch (block.type) {
        case 'paragraph':
          return `<p class="mb-4 text-gray-300">${block.children.map(child => child.text).join('')}</p>`;
        case 'heading':
          const level = block.level || 2;
          return `<h${level} class="text-xl md:text-2xl font-bold text-[#FBBF24] mt-6 mb-4">${block.children.map(child => child.text).join('')}</h${level}>`;
        case 'list':
          const tag = block.format === 'ordered' ? 'ol' : 'ul';
          const listClass = tag === 'ol' ? 'list-decimal' : 'list-disc';
          return `<${tag} class="${listClass} ml-6 mb-4 space-y-2">${block.children.map(item => `<li class="text-gray-300">${item.children.map(c => c.text).join('')}</li>`).join('')}</${tag}>`;
        default:
          return '';
      }
    }).join('');
  }
  
  fetchArticle();
  }, [id]);
  


  // Function to process Strapi dynamic zone content
  function processStrapiContent(content) {
    if (!content || !Array.isArray(content)) return '';
  
    return content.map(block => {
      switch (block.type) {
        case 'paragraph':
          return `<p class="mb-4">${block.children.map(child => processInlineContent(child)).join('')}</p>`;
        
        case 'heading':
          const level = block.level || 2;
          return `<h${level} class="text-xl md:text-2xl font-bold text-[#FBBF24] mt-6 mb-4">${block.children.map(child => processInlineContent(child)).join('')}</h${level}>`;
        
        case 'list':
          const tag = block.format === 'ordered' ? 'ol' : 'ul';
          const listClass = tag === 'ol' ? 'list-decimal' : 'list-disc';
          return `<${tag} class="${listClass} ml-6 mb-4 space-y-2">${block.children.map(listItem => 
            `<li class="text-gray-300">${listItem.children.map(child => processInlineContent(child)).join('')}</li>`
          ).join('')}</${tag}>`;
        
        default:
          return '';
      }
    }).join('');
  }

  // Process inline content (bold, italic, links, etc.)
  function processInlineContent(node) {
    if (typeof node.text === 'string') {
      let text = node.text;
      
      // Apply formatting based on node properties
      if (node.bold) {
        text = `<strong class="font-bold">${text}</strong>`;
      }
      if (node.italic) {
        text = `<em class="italic">${text}</em>`;
      }
      if (node.underline) {
        text = `<u class="underline">${text}</u>`;
      }
      if (node.strikethrough) {
        text = `<s class="line-through">${text}</s>`;
      }
      
      return text;
    }
    return '';
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
        <Helmet>
          <title>Loading Article | Khusi Law Group</title>
        </Helmet>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link to="/news" className="text-[#FBBF24] hover:text-[#D4AF37] underline flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
          </div>
          <div className="bg-[#1E293B] border-2 border-[#FBBF24] rounded-lg shadow-md p-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded mb-4 w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded mb-2 w-1/2"></div>
              <div className="h-64 bg-gray-700 rounded mb-6"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
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
          <title>Error | Khusi Law Group</title>
        </Helmet>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link to="/news" className="text-[#FBBF24] hover:text-[#D4AF37] underline flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
          </div>
          <div className="bg-red-900 border border-red-500 rounded-lg p-6">
            <h3 className="text-red-300 font-bold mb-2">Error Loading Article</h3>
            <p className="text-red-200 mb-4">{error}</p>
            <div className="space-y-2">
              <p className="text-sm text-red-200">Troubleshooting tips:</p>
              <ul className="text-sm text-red-200 list-disc list-inside space-y-1">
                <li>Check if the article URL matches your Strapi slug exactly</li>
                <li>Verify the slug in Strapi is "{id}" or "Family-Law"</li>
                <li>Ensure your API token has proper read permissions</li>
                <li>Test the API directly: {`${BASE_URL}/api/articles?populate=*`}</li>
              </ul>
            </div>
            <div className="mt-4 space-x-2">
              <button 
                onClick={() => window.location.reload()}
                className="bg-[#FBBF24] text-[#0F172A] px-4 py-2 rounded hover:bg-[#D4AF37] transition-colors"
              >
                Retry
              </button>
              <Link
                to="/news"
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors"
              >
                Browse All Articles
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
        <Helmet>
          <title>Article Not Found | Khusi Law Group</title>
        </Helmet>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link to="/news" className="text-[#FBBF24] hover:text-[#D4AF37] underline flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
          </div>
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-400 mb-4">Article Not Found</h2>
            <p className="text-gray-500 mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <div className="text-sm text-gray-400 mb-4">
              Looking for: <code className="bg-gray-800 px-2 py-1 rounded">{id}</code>
            </div>
            <Link
              to="/news"
              className="bg-[#FBBF24] text-[#0F172A] px-6 py-3 rounded hover:bg-[#D4AF37] transition-colors inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Browse All Articles
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
      <Helmet>
        <title>{article.title} | Khusi Law Group</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link to="/news" className="text-[#FBBF24] hover:text-[#D4AF37] underline flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>
        </div>

        <article className="bg-[#1E293B] border-2 border-[#FBBF24] rounded-lg shadow-md overflow-hidden my-14">
          {article.image && (
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
          
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-sm font-medium text-[#FBBF24] bg-[#FBBF24]/10 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-gray-400">
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              {article.author && (
                <span className="text-sm text-gray-400">
                  by {article.author}
                </span>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#FBBF24] mb-6 leading-tight">
              {article.title}
            </h1>
            
            {article.excerpt && (
              <p className="text-gray-300 text-lg mb-8 italic border-l-4 border-[#FBBF24]/50 pl-4">
                {article.excerpt}
              </p>
            )}
            
            <div className="prose prose-lg prose-invert max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }} 
                className="content-style space-y-4"
              />
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}

export default ArticleDetail;