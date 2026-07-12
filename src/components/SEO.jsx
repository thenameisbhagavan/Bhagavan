import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, type = 'website', image = '/og-image.jpg' }) => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://thenameisbhagavan.vercel.app${pathname}`;
  
  // Base Schema (Person) for all pages
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bhagavan",
    "alternateName": "TheNameIsBhagavan",
    "jobTitle": "AI Engineer & Full Stack Developer",
    "description": "AI Engineer specializing in Intelligent Systems, Deep Learning, NLP, and Full Stack Development.",
    "url": "https://thenameisbhagavan.vercel.app",
    "image": "https://thenameisbhagavan.vercel.app/og-image.jpg",
    "email": "mailto:thenameisbhagavan@gmail.com",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "Full Stack Development",
      "Python",
      "React"
    ],
    "sameAs": [
      "https://github.com/thenameisbhagavan",
      "https://linkedin.com/in/thenameisbhagavan"
    ]
  };

  // Breadcrumb Schema
  const pathnames = pathname.split('/').filter((x) => x);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": pathnames.length === 0 ? [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thenameisbhagavan.vercel.app"
      }
    ] : [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thenameisbhagavan.vercel.app"
      },
      ...pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": value.charAt(0).toUpperCase() + value.slice(1),
          "item": `https://thenameisbhagavan.vercel.app${to}`
        };
      })
    ]
  };

  // WebSite schema for SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://thenameisbhagavan.vercel.app",
    "name": "TheNameIsBhagavan",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://thenameisbhagavan.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // ProfilePage schema specifically if requested
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2026-07-12T00:00:00-07:00",
    "dateModified": new Date().toISOString(),
    "mainEntity": baseSchema
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://thenameisbhagavan.vercel.app${image}`} />
      <meta property="og:site_name" content="TheNameIsBhagavan" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://thenameisbhagavan.vercel.app${image}`} />
      <meta name="twitter:creator" content="@TheNameIsBhagavan" />
      <meta name="twitter:site" content="@TheNameIsBhagavan" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(profilePageSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
