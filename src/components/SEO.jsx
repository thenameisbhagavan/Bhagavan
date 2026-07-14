import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = "Gopala Josyula Siva Satya Sai Bhagavan | AI Engineer | TheNameIsBhagavan", 
  description = "Official portfolio of Gopala Josyula Siva Satya Sai Bhagavan (TheNameIsBhagavan), an AI Engineer specializing in Intelligent Systems, Agentic AI, Full Stack Development, Machine Learning, Deep Learning, Computer Vision, CareerOS, AuraOS, and AI-powered software engineering. Explore projects, research, experience, technical expertise, certifications, and professional achievements.", 
  type = "website", 
  image = "/og-image.jpg" 
}) => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://thenameisbhagavan.vercel.app${pathname === '/' ? '' : pathname}`;
  
  const keywords = "Gopala Josyula Siva Satya Sai Bhagavan, TheNameIsBhagavan, Bhagavan, Bhagavan AI Engineer, AI Engineer, Artificial Intelligence Engineer, Machine Learning Engineer, Deep Learning Engineer, Intelligent Systems Engineer, Agentic AI, Full Stack Developer, React Developer, Python Developer, MERN Stack Developer, Software Engineer, CareerOS, AuraOS, Portfolio, Developer Portfolio, India, Andhra Pradesh, JNTUK, Ramachandra College of Engineering";

  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gopala Josyula Siva Satya Sai Bhagavan",
    "alternateName": "TheNameIsBhagavan",
    "url": "https://thenameisbhagavan.vercel.app/",
    "image": "https://thenameisbhagavan.vercel.app/og-image.jpg",
    "jobTitle": "AI Engineer",
    "description": "AI Engineer specializing in Intelligent Systems, Agentic AI, Machine Learning, Deep Learning, Full Stack Development, AI Products, and Software Engineering.",
    "email": "thenameisbhagavan@gmail.com",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Ramachandra College of Engineering"
    },
    "sameAs": [
      "https://www.linkedin.com/in/thenameisbhagavan/",
      "https://github.com/thenameisbhagavan",
      "https://www.instagram.com/thenameisbhagavan_/",
      "https://www.facebook.com/thenameisbhagavan",
      "https://x.com/nameisbhagavan",
      "https://www.youtube.com/@TheNameIsBhagavan"
    ],
    "knowsAbout": [
      "Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", 
      "Natural Language Processing", "Large Language Models", "Generative AI", "Agentic AI", 
      "Retrieval Augmented Generation", "React", "Next.js", "Vite", "Python", "JavaScript", 
      "Java", "SQL", "MongoDB", "Node.js", "Express", "REST APIs", "FastAPI", "TensorFlow", 
      "PyTorch", "Docker", "Git", "GitHub", "Cloud Computing", "Full Stack Development", "Software Engineering"
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TheNameIsBhagavan",
    "founder": {
      "@type": "Person",
      "name": "Gopala Josyula Siva Satya Sai Bhagavan"
    },
    "url": "https://thenameisbhagavan.vercel.app/"
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://thenameisbhagavan.vercel.app/",
    "name": "TheNameIsBhagavan",
    "publisher": {
      "@type": "Organization",
      "name": "TheNameIsBhagavan"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://thenameisbhagavan.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // WebPage Schema
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": canonicalUrl,
    "name": title,
    "description": description
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
        "item": "https://thenameisbhagavan.vercel.app/"
      }
    ] : [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thenameisbhagavan.vercel.app/"
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

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Gopala Josyula Siva Satya Sai Bhagavan" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Theme Options */}
      <meta name="theme-color" content="#0A0A0A" />
      <meta name="color-scheme" content="dark" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="TheNameIsBhagavan" />
      <meta property="og:image" content={`https://thenameisbhagavan.vercel.app${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://thenameisbhagavan.vercel.app${image}`} />
      <meta name="twitter:creator" content="@nameisbhagavan" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webpageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
