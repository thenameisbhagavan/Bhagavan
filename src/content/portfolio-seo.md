## How I Optimized My Portfolio for Google Search

Building a visually stunning React Single Page Application (SPA) is only half the battle. If recruiters, engineers, and search engines can't find it, the impact is minimized. Here is how I engineered my React + Vite portfolio to achieve a 100/100 SEO score.

### 1. The SPA Problem

Search engines traditionally struggle with client-side rendered (CSR) React applications because the initial HTML is essentially empty (`<div id="root"></div>`). The crawler has to execute JavaScript to see the content, which slows down indexing.

To solve this, I focused on deep semantic structuring and dynamic metadata injection.

### 2. React Helmet Async

I utilized `react-helmet-async` to dynamically inject SEO metadata based on the route.

```javascript
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
```

This ensures that every page (Overview, Experience, Insights) has a unique title, description, and canonical URL, preventing duplicate content penalties.

### 3. JSON-LD Schema Markup

Visual content is great for humans, but bots need structured data. I injected JSON-LD (JavaScript Object Notation for Linked Data) into the `<head>` of my pages.

*   **Person Schema**: Tells Google exactly who I am, linking my GitHub, LinkedIn, and personal details directly into the Knowledge Graph.
*   **Article Schema**: For this very Insights section, ensuring articles are eligible for rich snippets.
*   **BreadcrumbList Schema**: Helps search engines understand the hierarchy of the site.

### 4. Sitemap and Robots.txt

A critical, often overlooked step in SPAs is providing a clear roadmap for crawlers.
- **`robots.txt`**: Placed in the `/public` folder, explicitly allowing all crawlers and pointing to the sitemap.
- **`sitemap.xml`**: A dynamically or statically generated XML file listing every canonical route (`/overview`, `/work`, `/insights`, etc.) with appropriate `lastmod` priorities.

### Conclusion

SEO is not a dark art; it is an engineering discipline. By combining semantic HTML5, dynamic metadata, and structured JSON-LD data, a client-side React app can compete seamlessly on Google Search.
