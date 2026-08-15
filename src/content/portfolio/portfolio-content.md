---
title: "Information Architecture"
slug: "portfolio-content"
excerpt: "Structuring an engineering narrative without relying on chronological resumes."
description: "How TheNameIsBhagavan organizes technical content, projects, and journal entries into a cohesive information architecture."
seoTitle: "Information Architecture for Engineering Portfolios"
seoDescription: "How TheNameIsBhagavan organizes technical content, projects, and journal entries into a cohesive information architecture."
publishedAt: "2026-09-07"
author: "TheNameIsBhagavan"
series: "Portfolio"
seriesOrder: 4
category: "Content Strategy"
articleType: "Product-Investigation"
status: "Implemented"
tags: ["Portfolio", "Information Architecture", "Content"]
heroImage: "/images/journal/features/journal_architecture_1786810365296.jpg"
relatedArticles: ["portfolio-origins", "portfolio-antigravity"]
coverImage: "logo.png"
---

The information architecture of an engineer's portfolio typically defaults to a chronological timeline. It lists what you did and when, but rarely explains *how* or *why*.

When engineering `TheNameIsBhagavan`, I designed the content architecture to prioritize technical depth over chronological history. The portfolio acts as an evidence map, demonstrating actual engineering capability.

<technical-callout type="DECISION" title="The Engineering Narrative">
  Every project is broken down into its architectural components. By presenting the work as an engineering journal, the portfolio forces a focus on system design rather than surface-level UI features.
</technical-callout>

## Custom Metadata and SEO Engine

To support this content structure, the React ecosystem required a resilient metadata and SEO engine. A Single Page Application (SPA) naturally struggles with web crawlers. To mitigate this, every Markdown article is injected with strict YAML frontmatter.

<code-block language="markdown" title="Frontmatter Schema">
title: "Information Architecture"
slug: "portfolio-content"
seoTitle: "Information Architecture for Engineering Portfolios"
seoDescription: "How TheNameIsBhagavan organizes technical content."
articleType: "Product-Investigation"
</code-block>

This metadata is consumed by our custom SEO engine, which dynamically injects the appropriate `<title>`, `<meta>`, and OpenGraph tags into the document head upon route transitions.

<architecture-diagram data='{"title":"Metadata Injection Pipeline","nodes":[{"label":"Markdown Frontmatter"},{"label":"Vite Parser"},{"label":"SEO Engine"},{"label":"DOM Head Injection"}]}'></architecture-diagram>

This strict editorial schema ensures that the narrative remains highly structured, indexable, and conceptually tied to the underlying React architecture.
