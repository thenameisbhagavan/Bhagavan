import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { socialLinks } from '../constants/socialLinks';

const SEO = ({ 
  title = "TheNameIsBhagavan | AI Engineer", 
  description = "Official portfolio of TheNameIsBhagavan, an AI Engineer specializing in Intelligent Systems, Agentic AI, Full Stack Development, Machine Learning, Deep Learning, Computer Vision, CareerOS, AuraOS, and AI-powered software engineering. Explore projects, research, experience, technical expertise, certifications, and professional achievements.", 
  type = "website", 
  image = "/og-image.jpg" 
}) => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://thenameisbhagavan.in${pathname === '/' ? '' : pathname}`;
  
  const keywords = "TheNameIsBhagavan, Bhagavan, Bhagavan AI Engineer, AI Engineer, Artificial Intelligence Engineer, Machine Learning Engineer, Deep Learning Engineer, Intelligent Systems Engineer, Agentic AI, Full Stack Developer, React Developer, Python Developer, MERN Stack Developer, Software Engineer, CareerOS, AuraOS, Portfolio, Developer Portfolio, India, Andhra Pradesh, JNTUK, Ramachandra College of Engineering";

  // Person Schema
  const personSchema = {
    "@type": "Person",
    "@id": "https://thenameisbhagavan.in/#person",
    "name": "Gopala Josyula Siva Satya Sai Bhagavan",
    "alternateName": "TheNameIsBhagavan",
    "url": "https://thenameisbhagavan.in",
    "image": "https://thenameisbhagavan.in/og-image.jpg",
    "jobTitle": "AI Engineer & Full Stack Developer",
    "description": "AI Engineer and Full Stack Developer building intelligent software systems, AI-powered applications, full-stack products, and developer tools.",
    "email": "thenameisbhagavan@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/thenameisbhagavan/",
      "https://github.com/thenameisbhagavan",
      "https://x.com/nameisbhagavan",
      "https://www.instagram.com/thenameisbhagavan_",
      "https://www.youtube.com/@TheNameIsBhagavan"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Generative AI",
      "Agentic AI",
      "Machine Learning",
      "Large Language Models",
      "Python",
      "FastAPI",
      "React",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "Full Stack Development",
      "Software Engineering",
      "System Design",
      "REST APIs"
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@type": "Organization",
    "@id": "https://thenameisbhagavan.in/#organization",
    "name": "TheNameIsBhagavan",
    "url": "https://thenameisbhagavan.in",
    "founder": {
      "@id": "https://thenameisbhagavan.in/#person"
    },
    "sameAs": [
      "https://www.linkedin.com/in/thenameisbhagavan/",
      "https://github.com/thenameisbhagavan",
      "https://x.com/nameisbhagavan",
      "https://www.instagram.com/thenameisbhagavan_",
      "https://www.youtube.com/@TheNameIsBhagavan"
    ]
  };

  // WebSite Schema
  const websiteSchema = {
    "@type": "WebSite",
    "@id": "https://thenameisbhagavan.in/#website",
    "url": "https://thenameisbhagavan.in",
    "name": "TheNameIsBhagavan",
    "publisher": {
      "@id": "https://thenameisbhagavan.in/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://thenameisbhagavan.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // WebPage Schema
  const webpageSchema = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}/#webpage`,
    "url": canonicalUrl,
    "name": title,
    "description": description,
    "isPartOf": {
      "@id": "https://thenameisbhagavan.in/#website"
    },
    "about": {
      "@id": "https://thenameisbhagavan.in/#person"
    }
  };

  // Breadcrumb Schema
  const pathnames = pathname.split('/').filter((x) => x);
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}/#breadcrumb`,
    "itemListElement": pathnames.length === 0 ? [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thenameisbhagavan.in/"
      }
    ] : [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thenameisbhagavan.in/"
      },
      ...pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": value.charAt(0).toUpperCase() + value.slice(1),
          "item": `https://thenameisbhagavan.in${to}`
        };
      })
    ]
  };

  // Link breadcrumb to webpage
  webpageSchema.breadcrumb = { "@id": `${canonicalUrl}/#breadcrumb` };

  // Software Applications Schemas
  const softwareApplications = [
    {
      "@type": "SoftwareApplication",
      "@id": "https://careeros-thenameisbhagavan.vercel.app/#software",
      "name": "CareerOS",
      "applicationCategory": "Career Intelligence Platform",
      "operatingSystem": "Web",
      "url": "https://careeros-thenameisbhagavan.vercel.app/",
      "creator": { "@id": "https://thenameisbhagavan.in/#person" },
      "description": "Career Intelligence Platform"
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://aura-os-thenameisbhagavan.vercel.app/#software",
      "name": "AuraOS",
      "applicationCategory": "Personal Intelligence Operating System",
      "operatingSystem": "Web",
      "url": "https://aura-os-thenameisbhagavan.vercel.app/",
      "creator": { "@id": "https://thenameisbhagavan.in/#person" },
      "description": "Personal Intelligence Operating System"
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://veritas-thenameisbhagavan.vercel.app/#software",
      "name": "VERITAS",
      "applicationCategory": "Explainable AI Platform",
      "operatingSystem": "Web",
      "url": "https://veritas-thenameisbhagavan.vercel.app/",
      "creator": { "@id": "https://thenameisbhagavan.in/#person" },
      "description": "Explainable AI Platform"
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://voltdrive-thenameisbhagavan.vercel.app/#software",
      "name": "VoltDrive",
      "applicationCategory": "Electric Vehicle Platform",
      "operatingSystem": "Web",
      "url": "https://voltdrive-thenameisbhagavan.vercel.app/",
      "creator": { "@id": "https://thenameisbhagavan.in/#person" },
      "description": "Electric Vehicle Platform"
    }
  ];

  // Combined Graph for JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      organizationSchema,
      websiteSchema,
      webpageSchema,
      breadcrumbSchema,
      ...softwareApplications
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
      <meta property="og:image" content={`https://thenameisbhagavan.in${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://thenameisbhagavan.in${image}`} />
      <meta name="twitter:creator" content="@nameisbhagavan" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
