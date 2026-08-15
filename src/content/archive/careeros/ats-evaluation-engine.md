---
title: "ATS Evaluation Engine"
description: "Inside the deterministic reasoning engine that mimics enterprise Applicant Tracking Systems to evaluate candidate viability."
slug: "ats-evaluation-engine"
series: "CareerOS"
category: "System Design"
tags: ["Algorithms", "AI Engineering", "Backend"]
published: "2026-08-06"
updated: "2026-08-06"
featured: false
coverImage: "careeros-ui.png"
canonical: "https://thenameisbhagavan.in/journal/ats-evaluation-engine"
author: "Bhagavan"
---

Cover Image: Minimal isometric illustration of an Applicant Tracking System parsing pipeline.

## 1. Executive Summary

CareerOS is built on the premise that candidates need deterministic feedback before submitting their resume to a real ATS. This article dissects the ATS Evaluation Engine—a deterministic scoring system that cross-references extracted resume data against job description requirements to generate a reliable match score.

## 2. Problem Statement

Recruiters use ATS platforms (like Workday, Greenhouse, Lever) to filter candidates automatically. These systems evaluate hard skills, years of experience, and keyword density. Candidates usually guess how their resume will perform.

## 3. Why Existing Solutions Were Not Enough

Current "ATS Checkers" on the market are overly simplistic, often relying exclusively on keyword exact-matches. They penalize candidates for using synonyms (e.g., "React.js" vs "React") and lack semantic understanding of context (e.g., distinguishing between using a tool and managing a tool).

## 4. Design Goals

- **Semantic Matching:** Understand synonyms and contextual usage.
- **Explainability:** Output an exact list of matching and missing criteria.
- **Strict Scoring:** Produce a deterministic score out of 100 that does not fluctuate between identical runs.

## 5. System Architecture

The Evaluation Engine operates downstream from the Resume Intelligence Pipeline.

Architecture Diagram: Structured Resume JSON & Structured JD JSON -> Matching Algorithm -> LLM Semantic Verifier -> Scoring Matrix -> Final ATS Report

## 6. Technology Stack

```text
Backend Logic: Node.js (TypeScript)
Semantic Verification: OpenAI GPT-4o-mini
Scoring Logic: Custom Deterministic Algorithm
```

## 7. Component Breakdown

1. **Requirement Extractor:** Parses the job description into discrete criteria (Hard Skills, Soft Skills, Experience).
2. **Deterministic Matcher:** Uses standard string matching and synonym mapping for fast evaluation.
3. **Semantic Verifier:** Uses the LLM to verify edge cases where the deterministic matcher is uncertain.

## 8. Data Flow

Sequence Diagram: JD Input -> Criteria Extraction -> Cross-reference with Resume JSON -> Generate Match/Miss Arrays -> Calculate Score

## 9. Design Decisions

- **Hybrid Matching:** We combined a deterministic algorithm (for strict keyword checks) with an LLM (for semantic context). This prevents the LLM from hallucinating matches while still catching valid synonyms.

## 10. Trade-offs

- **Strictness vs. Forgiveness:** We tuned the engine to be intentionally strict. We decided it is better for a candidate to receive a slightly lower score and over-prepare, than to receive a false positive and be rejected by a real ATS.

## 11. Challenges Faced

Handling "Years of Experience" (YoE) is notoriously difficult. A candidate might list dates (e.g., "Jan 2020 - Present") but not explicitly write "4 years of experience."

## 12. Engineering Lessons

- **Separate Extraction from Evaluation:** By strictly separating the step that extracts data from the step that evaluates it, we drastically improved testability and reduced errors.

## 13. Performance Considerations

The deterministic matching runs in milliseconds. The semantic verification is parallelized across criteria to minimize LLM latency.

## 14. Security Considerations

- *Current Implementation:* All matching is done in memory.
- *Future Enhancement:* None required for this specific stateless component.

## 15. Scalability

The scoring algorithm is mathematically simple and computationally inexpensive, scaling perfectly in serverless environments.

## 16. Future Roadmap

- **Vendor-Specific Scoring:** Allowing users to select which ATS the company uses (e.g., "Optimize for Workday" vs. "Optimize for Greenhouse") as different vendors use different parsing rules.

## 17. Conclusion

By treating ATS evaluation as a compilation problem rather than a text generation problem, the ATS Evaluation Engine provides candidates with the harsh but necessary truth about their application viability.

## 18. Related Articles

Related Reading

→ [Why I Built CareerOS](file:///journal/why-i-built-careeros)

→ [Resume Intelligence Pipeline](file:///journal/resume-intelligence-pipeline)

→ [Skill Gap Analysis Engine](file:///journal/skill-gap-analysis-engine)

## 19. References

- Common ATS Parsing Rules
- Hybrid Search Architectures
