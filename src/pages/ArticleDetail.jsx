import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import { BASE_URL } from '@/lib/api';

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://strapi-backend-6xyu.onrender.com/api/articles?filters[slug][$eq]=${slug}&populate=*`)
    .then((res) => res.json())
      .then((data) => {
        if (data.data && data.data.length > 0) {
          console.log("🔎 Full Article Object:", data.data[0]);
          setArticle(data.data[0]);
        } else {
          console.error('No article found with the given slug.');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching article:', error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p className="text-center py-10 text-gray-400">Loading article...</p>;
  }

  if (!article) {
    return <p className="text-center py-10 text-red-500">Article not found.</p>;
  }

  const { Title, Content, PracticeArea, Image } = article.attributes || article;

  // const imageUrl = Image
  //   ? `/${(Image.url || Image.formats?.medium?.url || '').replace(/^\//, '')}`
  //   : null;
  const imagePath = Image?.url || Image?.formats?.medium?.url;
  const imageUrl = imagePath ? `https://strapi-backend-6xyu.onrender.com${imagePath}` : null;


  console.log("🖼️ Final Image URL:", imageUrl); // Debugging line

  return (
    <>
      <Helmet>
        <title>{Title} | Paragon Law Associates</title>
        <meta name="description" content={Title} />
      </Helmet>

      <div className="bg-[#0F172A] text-gray-300 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-4xl font-serif text-[#FBBF24] text-justify mb-8 mt-10 justify-center flex">{Title}</h1>

          {/* Show image via proxy */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={Title}
              className="mb-8 w-full max-h-[500px] object-cover rounded-lg"
            />
          )}

          <div className="space-y-4 text-justify">
            {Array.isArray(Content) ? (
              Content.map((block, idx) => (
                <p key={idx} className="text-lg leading-relaxed">
                  {block.children?.map((child) => child.text).join(' ') || ''}
                </p>
              ))
            ) : (
              <p>{Content}</p>
            )}
          </div>

          <div className="mt-12">
            <Link
              to={`../practice-areas/${PracticeArea?.data?.attributes?.slug || ''}`}
              className="text-[#FBBF24] hover:underline"
            >
              ← Back to Practice Area
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ArticleDetail;