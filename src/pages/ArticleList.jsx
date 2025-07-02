import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BASE_URL } from '@/lib/api';

const ArticleList = () => {
  const { slug } = useParams(); // dynamic route param: /practice-areas/:slug
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://strapi-backend-6xyu.onrender.com/api/articles?filters[PracticeArea][slug][$eq]=${slug}&populate=PracticeArea`
        );        
        const json = await res.json();
        console.log("✅ RAW article data:", json);
        setArticles(json.data || []);
      } catch (error) {
        console.error("❌ Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [slug]);

  const formattedSlug = slug?.replace(/-/g, " ").toUpperCase();

  return (
    <>
      <Helmet>
        <title>{formattedSlug} Articles | Paragon Law Associates</title>
        <meta
          name="description"
          content={`Articles related to ${formattedSlug}.`}
        />
      </Helmet>

      <div className="min-h-screen bg-[#0F172A] text-gray-300 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-serif text-[#FBBF24] text-center mb-10">
            Articles on {formattedSlug}
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Explore our expert insights and publications.
          </p>

          {loading ? (
            <p className="text-center text-gray-400">Loading articles...</p>
          ) : articles.length === 0 ? (
            <p className="text-center text-gray-400 italic">
              No articles found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => {
                const attr = article;

                const title = attr?.Title;
                const articleSlug = attr?.slug;
                const excerpt = attr?.Excerpt;

                if (!title || !articleSlug) {
                  console.warn("⚠️ Missing title or slug in article:", article);
                  return null;
                }

                return (
                  <Link
                    key={article.id}
                    to={`/articles/${articleSlug}`}
                    className="block p-6 bg-[#1E293B] border border-[#FBBF24] rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                  >
                    <h3 className="text-xl text-[#FBBF24] font-semibold mb-3">
                      {title}
                    </h3>
                    <p className="text-gray-300">{excerpt || "Read more..."}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ArticleList;
