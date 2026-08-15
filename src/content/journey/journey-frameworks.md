---
title: "The Danger of Default Frameworks"
slug: "journey-frameworks"
excerpt: "Why choosing a technology stack because 'everyone else uses it' is an architectural failure."
description: "A critical look at the engineering anti-pattern of adopting massive web frameworks blindly without understanding the underlying trade-offs."
seoTitle: "Why I Stopped Using Frameworks Blindly | Engineering Journey"
seoDescription: "A critical look at the engineering anti-pattern of adopting massive web frameworks blindly without understanding the underlying trade-offs."
publishedAt: "2026-09-12"
author: "TheNameIsBhagavan"
series: "Engineering Journey"
seriesOrder: 4
category: "Engineering Philosophy"
articleType: "Product-Investigation"
status: "Implemented"
tags: ["Engineering", "Frameworks", "React", "System Design"]
heroImage: "/images/journal/features/journal_architecture_1786810365296.jpg"
relatedArticles: ["journey-relearning-architecture", "journey-philosophy"]
coverImage: "profile-hero.jpg"
---

The web engineering industry operates on hype cycles. We migrate between massive ecosystems, justifying the shift with buzzwords, but the reality is often simpler: we use them because everyone else uses them.

This is not engineering. This is fashion.

<technical-callout type="WARNING" title="The Cost of Complexity">
  Every framework you introduce is a dependency you do not control. If you adopt a meta-framework just to render a static blog, you have introduced architectural bloat. Engineering is about matching the weight of the tool to the severity of the problem.
</technical-callout>

## The "Hello World" Trap

Frameworks make the first 80% of a project trivial. But the last 20%—when you need precise interaction design or custom data flows—becomes a battle against the framework's internal abstractions.

When I built The Portfolio, I could have easily used a heavy meta-framework. Instead, I opted for React + Vite.

<timeline-diagram data='{"events":[{"date":"Analysis","title":"Evaluating Meta-Frameworks","desc":"Next.js and Remix offer incredible server-side capabilities, but they bring complex build steps and hydration overhead unnecessary for a highly interactive, mostly static portfolio."},{"date":"Decision","title":"React + Vite + Custom Routing","desc":"Choosing a lightweight Vite bundler allowed for instantaneous HMR and explicit control over the DOM. Everything else was built custom."},{"date":"Execution","title":"Lean Architecture","desc":"Features like dynamic Markdown article loading and modular layouts (AppShell) were implemented using pure JavaScript and Vite APIs, avoiding heavy third-party plugins."}]}'></timeline-diagram>

## Engineering as Subtraction

My current philosophy on technology stacks is simple: **Start with nothing.**

When architecting a new system, I begin with the absolute minimum viable technology.
- Do I need dynamic state for career roadmapping? Use the MERN stack (CareerOS).
- Do I need complex cinematic rendering? Use React and Framer Motion (VoltDrive).
- Do I need a resilient AI backend? Use Flask (AuraOS).

By forcing every technology to justify its existence, you prevent the codebase from becoming bloated. Every dependency in your `package.json` must earn its place.

In the final article of this series, I will synthesize these lessons into my overarching **[Engineering Philosophy](/journal/journey-philosophy)**.
