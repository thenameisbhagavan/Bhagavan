---
title: "Explainable Intelligence Architecture"
description: "A technical deep dive into the middleware components that power VERITAS and enforce explainability."
slug: "explainable-intelligence-architecture"
series: "VERITAS"
category: "System Design"
tags: ["Explainable AI", "Architecture", "Backend"]
published: "2026-08-06"
updated: "2026-08-06"
featured: false
coverImage: "ev.png"
canonical: "https://thenameisbhagavan.in/journal/explainable-intelligence-architecture"
author: "Bhagavan"
---

Cover Image: Minimal isometric illustration of a multi-layered middleware architecture parsing data blocks.

## 1. Executive Summary

Explainability cannot be achieved through prompt engineering alone; it requires a systemic architectural approach. This article details the Explainable Intelligence Architecture of VERITAS, focusing on the multi-agent validation loops that enforce transparency.

## 2. Problem Statement

Standard generative pipelines merge retrieval, reasoning, and formatting into a single LLM call. This monolithic approach obfuscates the origin of facts. If an error occurs, it is impossible to determine if the retrieval failed, the reasoning failed, or the formatting introduced a hallucination.

## 3. Why Existing Solutions Were Not Enough

Current "cited generation" systems usually rely on the LLM generating `[1]` brackets during the initial draft. These are notoriously unreliable, often pointing to incorrect sources or hallucinating citations entirely (citation hallucination).

## 4. Design Goals

- **Separation of Concerns:** Isolate retrieval, reasoning, drafting, and citation.
- **Deterministic Verification:** Citations must only be generated if semantic overlap between the claim and the source exceeds a strict threshold.
- **Auditability:** Every step in the pipeline must produce structured logs.

## 5. System Architecture

The VERITAS architecture is built on a sequential, multi-agent pipeline.

Architecture Diagram: User Query -> Retrieval -> Drafting Agent -> (Draft) -> Extraction Agent -> (Claims) -> Verification Agent -> Final Aggregator

## 6. Technology Stack

```text
Framework: LangChain (Custom Orchestration)
Backend: Node.js (TypeScript) for strict type safety
LLM: OpenAI GPT-4o-mini
```

## 7. Component Breakdown

1. **Drafting Agent:** Generates a comprehensive answer based *only* on the provided context.
2. **Extraction Agent:** Converts the draft into an array of verifiable statements.
3. **Verification Agent:** Cross-references each statement against the original context vectors.

## 8. Data Flow

Sequence Diagram: Retrieve Context -> Generate Draft -> Extract Claims -> For Each Claim [Semantic Search against Context] -> Attach Source ID -> Format Final Output with Citations

## 9. Design Decisions

- **Strict TypeScript Interfaces:** We mandated that every agent in the pipeline communicate via strict JSON schemas parsed through Zod. If an agent outputs malformed data, the pipeline retries immediately. This guarantees structural integrity.

## 10. Trade-offs

- **Cost vs. Accuracy:** Running three separate LLM calls (Draft, Extract, Verify) significantly increases the token cost per query. This architecture is designed for enterprise accuracy, not consumer-scale cost efficiency.

## 11. Challenges Faced

Dealing with synthesized claims. If a draft states "Company X saw a 20% increase in revenue," but the source text says "Revenue went from $100M to $120M," a simple semantic matcher might fail to verify the claim.

## 12. Engineering Lessons

- **LLM-Based Entailment:** We learned that using an LLM to perform Textual Entailment (asking "Does Document A prove Claim B?") is far more accurate than using standard Cosine Similarity on embeddings for verifying synthesized claims.

## 13. Performance Considerations

To mitigate the latency introduced by multiple LLM calls, the Verification Agent processes claims concurrently using `Promise.all`.

## 14. Security Considerations

- *Current Implementation:* All internal agent communication is logged for auditing purposes.

## 15. Scalability

The multi-agent pipeline is entirely stateless and scales horizontally in serverless environments.

## 16. Future Roadmap

- **Streaming Validation:** Developing a pipeline that validates claims and streams them to the user in real-time, rather than waiting for the entire batch to complete.

## 17. Conclusion

By enforcing a strict separation of concerns and utilizing multi-agent verification, the Explainable Intelligence Architecture provides a robust foundation for building high-trust AI systems.

## 18. Related Articles

Related Reading

→ [Why VERITAS Exists](file:///journal/why-veritas-exists)

→ [VERITAS Reasoning Pipeline](file:///journal/veritas-reasoning-pipeline)

→ [Trust and Verification Layer](file:///journal/trust-and-verification-layer)

## 19. References

- Multi-Agent Collaboration in LLMs
- Zod Data Validation
