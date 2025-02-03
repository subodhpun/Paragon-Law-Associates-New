import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Calendar, HelpCircle } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        <div className="flex items-center space-x-2 mb-6 -ml-4 sm:-ml-6 lg:-ml-8"> {/* Negative margin to offset parent padding */}
          <div className="h-1 w-12 bg-[#FBBF24]"></div>
          <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">Legal Updates & Insights</span>
        </div>
        <h1 className="text-4xl font-serif text-[#FBBF24] text-center">Latest News</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
          Stay informed with the latest legal developments and firm updates
        </p>
      </div>

      {/* News Articles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

      {/* Legal Trends Section */}
      <section className="bg-[#1E293B] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
            Emerging Legal Trends
          </h2>
          <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            Stay ahead of the curve with insights into the latest legal trends shaping the industry.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
            {[
              {
                title: "Digital Transformation in Law",
                description: "How technology is revolutionizing legal processes and client interactions."
              },
              {
                title: "Globalization of Legal Services",
                description: "The rise of cross-border legal practices and international compliance."
              },
              {
                title: "Environmental Law Advancements",
                description: "New regulations and frameworks addressing climate change and sustainability."
              }
            ].map((trend, index) => (
              <div key={index} className="bg-[#0F172A] p-6 rounded-lg shadow-lg">
                <ChevronRight className="w-8 h-8 text-[#FBBF24] mb-4" />
                <h3 className="text-lg font-semibold text-[#FBBF24]">{trend.title}</h3>
                <p className="text-gray-300 mt-2">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="bg-[#0F172A] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
            Client Success Stories
          </h2>
          <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            Real-life examples of how our expertise has made a difference for clients.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8">
            {[
              {
                quote: "Their team navigated a complex merger that exceeded our expectations.",
                name: "John Doe",
                role: "CEO, TechCorp"
              },
              {
                quote: "I couldn't have resolved my case without their strategic guidance.",
                name: "Jane Smith",
                role: "Client"
              }
            ].map((story, index) => (
              <div key={index} className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 italic">"{story.quote}"</p>
                <p className="mt-4 font-semibold text-[#FBBF24]">{story.name}</p>
                <p className="text-sm text-gray-400">{story.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-[#1E293B] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
            Upcoming Events
          </h2>
          <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            Join us for insightful discussions and networking opportunities.
          </p>
          <div className="mt-10 space-y-6">
            {[
              {
                title: "Annual Legal Tech Conference",
                date: "2024-05-10",
                location: "Kathmandu, Nepal",
                description: "Explore the future of legal technology with industry leaders."
              },
              {
                title: "Workshop on Corporate Compliance",
                date: "2024-06-15",
                location: "Online",
                description: "Learn best practices for maintaining corporate governance."
              }
            ].map((event, index) => (
              <div key={index} className="bg-[#0F172A] p-6 rounded-lg shadow-lg">
                <Calendar className="w-8 h-8 text-[#FBBF24] mb-4" />
                <h3 className="text-lg font-semibold text-[#FBBF24]">{event.title}</h3>
                <p className="text-gray-300 mt-2">{event.date} | {event.location}</p>
                <p className="text-gray-300 mt-2">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs About Legal News */}
      <section className="bg-[#0F172A] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-[#FBBF24]">
            FAQs About Our Legal News
          </h2>
          <div className="mt-10 space-y-6">
            {[
              { question: "How often do you publish new articles?", answer: "We publish new articles weekly to keep you informed about the latest legal developments." },
              { question: "Can I subscribe to your newsletter?", answer: "Yes, you can subscribe to our newsletter for regular updates on legal news and insights." },
              { question: "Are your articles written by experts?", answer: "All articles are authored by our experienced legal professionals and subject matter experts." }
            ].map((faq, index) => (
              <div key={index} className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
                <HelpCircle className="w-8 h-8 text-[#FBBF24] mb-4" />
                <h3 className="text-lg font-semibold text-[#FBBF24]">{faq.question}</h3>
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default News;