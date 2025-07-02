import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BASE_URL } from '@/lib/api';

const ArticleList = () => {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const formattedSlug = slug?.replace(/-/g, " ").toUpperCase();

  useEffect(() => {
    const fetchArticles = async () => {
      const url = `${BASE_URL}/api/articles?filters[PracticeArea][slug][$eq]=${slug}&populate=PracticeArea`;
      console.log("🚀 Fetching articles for slug:", slug);
      console.log("🌐 Using BASE_URL:", BASE_URL);
      console.log("📥 Full request URL:", url);

      try {
        const res = await fetch(url);

        console.log("📡 Response status:", res.status);

        if (!res.ok) {
          console.error("❌ Network error:", res.statusText);
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const json = await res.json();
        console.log("✅ RAW article data:", json);

        setArticles(json.data || []);
      } catch (error) {
        console.error("❌ Failed to fetch articles:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [slug]);

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
                const title = article?.Title;
                const articleSlug = article?.slug;
                const excerpt = article?.Excerpt;

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
