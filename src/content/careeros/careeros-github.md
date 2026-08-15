---
title: "GitHub Intelligence"
slug: "careeros-github"
excerpt: "Moving beyond self-reported skills to verified engineering evidence."
description: "How CareerOS plans to use repository analysis to extract real engineering maturity signals."
seoTitle: "GitHub Intelligence in CareerOS | Engineering Journal"
seoDescription: "How CareerOS plans to use repository analysis to extract real engineering maturity signals."
publishedAt: "2026-08-18"
author: "TheNameIsBhagavan"
series: "CareerOS"
seriesOrder: 4
category: "Architecture"
articleType: "Technical-Investigation"
status: "Planned"
tags: ["CareerOS", "GitHub", "API", "Signals"]
heroImage: "/images/journal/features/journal_careeros_hero_1786809769288.jpg"
relatedArticles: ["careeros-architecture", "careeros-trust"]
coverImage: "careeros-ui.png"
---

Self-reported data is fundamentally unreliable. A candidate can list "React" on their resume after completing a weekend tutorial, or after spending three years maintaining production applications. To a standard deterministic Applicant Tracking System, these two candidates look identical.

The next evolutionary step for CareerOS—currently strictly in the architectural planning phase—is breaking out of the resume JSON silo and tapping into actual engineering evidence.

### Designing the Evidence Graph

The planned architecture relies on GitHub's GraphQL API to construct an Evidence Graph. When a user connects their GitHub account, the goal is not to scrape commit counts or repository stars, as these are easily manipulated vanity metrics. Instead, the system will look for verifiable maturity signals:

1. **Dependency Analysis**: Does the repository utilize `vite`, `jest`, or `eslint`? This proves environment configuration competence, not just basic syntax knowledge.
2. **Commit Semantic Quality**: Are commit messages logically structured (e.g., following Conventional Commits like `fix:` or `feat:`)? This signals experience with team-level engineering standards.
3. **Infrastructure Presence**: Is there a `.github/workflows` directory or a `docker-compose.yml` file? This helps separate local developers from engineers who understand production deployments.

<architecture-diagram data='{"title":"Proposed Signal Pipeline","accessibleText":"Diagram showing the planned flow from Resume JSON to GraphQL API to Signal Engine to Verified Output","nodes":[{"label":"Resume Claim","subtext":"Self-reported skill: React"},{"label":"GraphQL Fetch","subtext":"Extract repository metadata"},{"label":"Signal Engine","subtext":"Verify React + Vite + CI/CD presence"},{"label":"Verified Score","subtext":"Apply maturity multiplier"}]}'></architecture-diagram>

### The Engineering Challenge

The primary technical hurdle in implementing this planned feature is managing rate limits and payload sizes. Downloading entire repositories to execute static analysis is unfeasible for a real-time web application. 

The proposed solution relies entirely on repository metadata and file tree presence. By checking for the existence of specific configuration files rather than parsing raw source code, the system can remain highly performant. 

By eventually combining the existing deterministic text matching pipeline with these verified GitHub signals, the resulting ATS score will shift from a subjective guess into an objective reflection of engineering reality.
