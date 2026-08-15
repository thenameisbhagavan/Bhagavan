---
title: "VERITAS Reasoning Pipeline"
description: "How VERITAS breaks down complex user queries into verifiable atomic steps before generation."
slug: "veritas-reasoning-pipeline"
series: "VERITAS"
category: "AI Engineering"
tags: ["Reasoning", "LLM", "Algorithms"]
published: "2026-08-06"
updated: "2026-08-06"
featured: false
coverImage: "ev.png"
canonical: "https://thenameisbhagavan.in/journal/veritas-reasoning-pipeline"
author: "Bhagavan"
---

Cover Image: Minimal isometric illustration of a complex query being split into discrete logical steps.

## 1. Executive Summary

Before validation can occur, an AI system must first reason correctly. The VERITAS Reasoning Pipeline tackles complex, multi-hop user queries by breaking them down into a sequence of verifiable atomic sub-queries.

## 2. Problem Statement

Standard RAG struggles with multi-hop reasoning. If a user asks, "Which CEO had a higher revenue growth in 2023, the CEO of Apple or the CEO of Microsoft?", a standard retrieval system might fail because the answer requires synthesizing multiple distinct facts across different documents.

## 3. Why Existing Solutions Were Not Enough

Chain-of-Thought (CoT) prompting within a single LLM call improves reasoning but does not improve the *retrieval* of the underlying facts needed to complete that reasoning.

## 4. Design Goals

- **Query Decomposition:** Break complex questions into independent sub-questions.
- **Iterative Retrieval:** Retrieve information for one sub-question before attempting the next.
- **Traceability:** Maintain a clear audit trail of how the final answer was synthesized.

## 5. System Architecture

The pipeline implements an iterative decompose-and-solve architecture.

Architecture Diagram: Complex Query -> Decomposer Agent -> Sub-Query 1 -> Retrieval 1 -> Sub-Query 2 -> Retrieval 2 -> Synthesizer Agent -> Final Draft

## 6. Technology Stack

```text
Backend: Python
Vector Store: ChromaDB
Orchestration: Custom Iterative Loop
```

## 7. Component Breakdown

1. **Decomposer Agent:** Analyzes the initial query and outputs a JSON array of dependent or independent sub-queries.
2. **Iterative Retriever:** Executes searches for each sub-query, feeding the results into the context for the next sub-query (if dependent).
3. **Synthesizer Agent:** Combines all retrieved facts into a cohesive final draft.

## 8. Data Flow

Sequence Diagram: User Query -> Decompose into Q1, Q2 -> Retrieve A1 for Q1 -> Retrieve A2 for Q2 -> Synthesize A1 + A2 -> Output

## 9. Design Decisions

- **Explicit Dependency Mapping:** The Decomposer Agent is required to specify if Sub-Query 2 depends on the answer to Sub-Query 1. (e.g., Q1: "Who is the CEO of Apple?", Q2: "What is [Answer to Q1]'s salary?"). This prevents premature retrieval failures.

## 10. Trade-offs

- **High Latency:** Iterative retrieval is slow. A query requiring 3 sequential hops will take 3x longer than a standard query. This system prioritizes deep accuracy over speed.

## 11. Challenges Faced

The Decomposer Agent would occasionally over-segment a simple query, turning a basic factual lookup into an unnecessary 4-step process, increasing latency and cost.

## 12. Engineering Lessons

- **Heuristic Bypasses:** We implemented a lightweight classifier before the Decomposer Agent. If the classifier determines the query is a simple factual lookup, it bypasses the iterative loop entirely and goes straight to standard RAG.

## 13. Performance Considerations

Independent sub-queries (e.g., "Get Apple's revenue" and "Get Microsoft's revenue") are executed in parallel, halving the latency for those specific types of multi-hop questions.

## 14. Security Considerations

- *Current Implementation:* N/A for this reasoning layer.

## 15. Scalability

The decomposer and synthesizer agents are stateless and easily parallelized.

## 16. Future Roadmap

- **Graph-Based Reasoning:** Integrating with Knowledge Graphs to natively traverse multi-hop relationships without requiring iterative vector searches.

## 17. Conclusion

By decomposing complex queries into atomic, iteratively retrieved steps, the VERITAS Reasoning Pipeline ensures that the LLM has all the necessary factual puzzle pieces before it attempts to synthesize a final, verifiable answer.

## 18. Related Articles

Related Reading

→ [Why VERITAS Exists](file:///journal/why-veritas-exists)

→ [Explainable Intelligence Architecture](file:///journal/explainable-intelligence-architecture)

→ [Evidence Extraction Engine](file:///journal/evidence-extraction-engine)

## 19. References

- Decompose, Retrieve, and Answer (DecomP) Architecture
