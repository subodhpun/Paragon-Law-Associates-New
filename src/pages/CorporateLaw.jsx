// src/pages/CorporateLaw.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const CorporateLaw = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Law | Khusi Law Group</title>
        <meta
          name="description"
          content="Comprehensive legal solutions for businesses of all sizes, including mergers, acquisitions, and compliance."
        />
      </Helmet>
      <div className="bg-[#0F172A] text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-serif text-[#FBBF24] mb-6">Corporate Law</h1>
          <p className="text-gray-400 mb-8">
            We provide comprehensive legal solutions for businesses of all sizes, including mergers, acquisitions, and compliance.
          </p>

          {/* Articles Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-[#FBBF24] mb-4">Articles & Resources</h2>
            <div className="space-y-6">
              <article>
                <h3 className="text-xl text-[#FBBF24]">Understanding Mergers and Acquisitions</h3>
                <p className="text-gray-400 mt-2">
                  An overview of the legal process involved in business mergers...
                </p>
              </article>
              <article>
                <h3 className="text-xl text-[#FBBF24]">Corporate Governance Best Practices</h3>
                <p className="text-gray-400 mt-2">
                  How to maintain compliance and transparency in corporate governance...
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CorporateLaw;