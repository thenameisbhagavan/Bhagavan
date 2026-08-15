---
title: "CareerOS Architecture"
slug: "careeros-architecture"
excerpt: "Deconstructing the MERN stack pipeline that powers deterministic ATS scoring."
description: "A deep dive into the engineering architecture of CareerOS, from the React frontend to the Node.js matching algorithms."
seoTitle: "CareerOS System Architecture | Engineering Journal"
seoDescription: "A deep dive into the engineering architecture of CareerOS, from the React frontend to the Node.js matching algorithms."
publishedAt: "2026-08-16"
author: "TheNameIsBhagavan"
series: "CareerOS"
seriesOrder: 2
category: "System Design"
articleType: "Architecture-Deep-Dive"
status: "Implemented"
tags: ["CareerOS", "Architecture", "MERN", "React", "Node.js", "MongoDB"]
relatedArticles: ["careeros-origins", "careeros-trust", "careeros-retrospective"]
coverImage: "careeros-ui.png"
heroImage: "/images/journal/features/journal_careeros_hero_1786809769288.jpg"
heroAlt: "CareerOS Architecture Pipeline Diagram"
---

When building a system to evaluate engineering candidates, the architecture itself must reflect engineering maturity. 

CareerOS is built on the MERN stack. However, the stack is just a toolset; the actual architecture is defined by how data flows from user input, through validation layers, into the scoring engine, and back to the interface.

<architecture-diagram data='{"title":"System Data Flow","accessibleText":"Diagram showing flow from React UI to Express Gateway to Node Intelligence to MongoDB","nodes":[{"label":"React UI","subtext":"Strict JSON state management"},{"label":"Express Gateway","subtext":"OAuth & Rate Limiting"},{"label":"Intelligence Node","subtext":"Deterministic keyword processing"},{"label":"MongoDB","subtext":"Structured resume storage"}]}'></architecture-diagram>

### The Frontend: Enforcing Predictability

The React frontend has one primary mandate: ensure the user cannot construct an invalid JSON payload. 

Instead of treating the resume as a rich-text document, the UI is designed as a highly-controlled form interface. I explicitly decided against allowing rich-text editing within resume entries. While flexibility is appealing, ATS parsers frequently fail to strip complex HTML tags correctly. By forcing users into strict string inputs, the system guarantees parser compatibility downstream.

### The API Gateway: Identity and Routing

Security and identity management are handled by an Express.js API Gateway. Since users are storing sensitive career history, I implemented OAuth via standard providers to avoid rolling custom cryptographic password management.

The API exposes three primary domains:
- `/api/auth` handles session and token management.
- `/api/resume` processes CRUD operations for the structured JSON resume.
- `/api/analyze` acts as the intelligence endpoint for scoring.

### The Intelligence Pipeline

When a user tests their resume against a target job description, a deterministic pipeline executes on the Node.js backend:

1. **Extraction**: The system strips stop-words and tokenizes the target job description.
2. **Normalization**: Both the resume payload and the job tokens are forced to lowercase, punctuation is removed, and common technical synonyms are normalized.
3. **Intersection**: The engine calculates an exact subset intersection.

<code-block language="javascript" title="IntersectionEngine.js">
function calculateMatchScore(resumeSkills, jobRequirements) {
  const matched = jobRequirements.filter(req => 
    resumeSkills.has(req.normalized)
  );
  
  return {
    score: (matched.length / jobRequirements.length) * 100,
    missing: jobRequirements.filter(req => !resumeSkills.has(req.normalized))
  };
}
</code-block>

There is no Generative AI in this pipeline. The matching is purely deterministic. If the job requires "Docker" and the candidate has not explicitly listed it, the score drops. This accurately mirrors the unforgiving reality of early-stage automated application filters. 

### Current Limitations

While this MERN implementation successfully handles direct keyword parsing, it is fundamentally constrained by its lack of contextual understanding. If a role demands "Frontend Frameworks" and the user lists "React", the strict deterministic engine registers a miss. Addressing this semantic gap requires moving beyond simple string intersections—a problem space mapped out for future development.
