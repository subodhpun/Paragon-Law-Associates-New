import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../lib/sanityClient';

const FamilyLaw = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const query = `*[_type == "article" && practiceArea == "family-law"]`;
        console.log('Fetching articles with query:', query);

        // Log the client configuration
        console.log('Sanity Client Configuration:', client.config());

        const result = await client.fetch(query);
        console.log('Fetched articles:', result);
        setArticles(result);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(err.message);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="bg-[#0F172A] text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-serif text-[#FBBF24] mb-6">Family Law</h1>
        <p className="text-gray-400 mb-8">
          Compassionate representation in family matters and disputes, ensuring your interests are protected.
        </p>

        {/* Articles Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#FBBF24] mb-4">Articles & Resources</h2>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="space-y-6">
              {articles.length > 0 ? (
                articles.map((article, idx) => (
                  <article key={idx}>
                    <Link
                      to={`/practice-areas/family-law/${article.slug.current}`}
                      className="block hover:text-[#FBBF24] transition"
                    >
                      <h3 className="text-xl text-[#FBBF24]">{article.title}</h3>
                      <p className="text-gray-400 mt-2 line-clamp-2">
                        {article.content[0]?.children[0]?.text}
                      </p>
                    </Link>
                  </article>
                ))
              ) : (
                <p>No articles available.</p>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default FamilyLaw;