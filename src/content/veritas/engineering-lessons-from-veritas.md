---
title: "Engineering Lessons from VERITAS"
description: "A retrospective on building a deterministic, explainable AI pipeline and the technical trade-offs involved."
slug: "engineering-lessons-from-veritas"
series: "VERITAS"
category: "System Design"
tags: ["Retrospective", "Architecture", "Lessons"]
published: "2026-08-06"
updated: "2026-08-06"
featured: false
coverImage: "ev.png"
canonical: "https://thenameisbhagavan.in/journal/engineering-lessons-from-veritas"
author: "Bhagavan"
---

Cover Image: Minimal isometric illustration of blueprints and measuring tools evaluating an AI architecture.

## 1. Executive Summary

Building VERITAS was an exercise in constraining the chaotic nature of generative AI. This retrospective outlines the core engineering lessons learned while attempting to force non-deterministic models to behave like deterministic state machines.

## 2. Problem Statement

LLMs are inherently probabilistic. Enterprise systems require determinism. VERITAS was built to bridge this gap, but doing so revealed significant architectural friction.

## 3. Why Existing Solutions Were Not Enough

Standard RAG architectures optimize for fluid conversation, not empirical proof. Trying to retrofit existing conversational frameworks to support strict entailment and citation proved impossible, necessitating a custom pipeline from scratch.

## 4. Design Goals

- **Honesty in Failure:** Document where the pipeline breaks down.
- **Actionable Insights:** Provide architectural guidance for future explainable AI systems.

## 5. System Architecture

The VERITAS multi-agent pipeline (Draft -> Extract -> Verify -> Format) proved robust but heavy.

Architecture Diagram: Monolithic Prompting (Failed) vs. Multi-Agent Verification (Succeeded)

## 6. Technology Stack

```text
Current: OpenAI GPT-4o / GPT-4o-mini, Node.js
Future Focus: Dedicated NLI Models, Rust
```

## 7. Component Breakdown

- *Current Implementation:* Relying on generalist LLMs (GPT-4o) for all stages (Extraction, Verification, Formatting).
- *Future Enhancement:* Transitioning to specialized, fine-tuned models for specific pipeline tasks.

## 8. Data Flow

N/A - Retrospective document.

## 9. Design Decisions

The decision to completely separate drafting from verification was the single most important architectural pivot. Forcing an LLM to "think, retrieve, cite, and draft" in one single prompt consistently resulted in hallucinated citations.

## 10. Trade-offs

- **Latency:** The multi-agent pipeline is slow. While a standard LLM call takes 2 seconds, the VERITAS pipeline takes 8-10 seconds. We sacrificed UX fluidity for absolute accuracy.

## 11. Challenges Faced

Rate limits. Running parallel verification checks for 30 atomic claims simultaneously often triggered OpenAI's `429 Too Many Requests` error, forcing us to implement exponential backoff queues.

## 12. Engineering Lessons

1. **Specialization Beats Generalization:** Using GPT-4o to extract claims is overkill and slow. Specialized NLP models or fine-tuned SLMs are better suited for the intermediate steps of the pipeline.
2. **Types over Text:** Enforcing strict JSON schemas (Zod) between agent handoffs is mandatory. Text-based handoffs will inevitably crash the pipeline.
3. **The Importance of "I don't know":** Training the system to elegantly redact unsupported claims and admit ignorance is harder than getting it to generate text, but vastly more important for user trust.

## 13. Performance Considerations

The future of this architecture relies on edge compute and concurrent task processing to hide the latency of multi-step validation from the user.

## 14. Security Considerations

Logging multi-step agent interactions creates massive datasets. Ensuring that sensitive information isn't permanently logged in the verification queues is an ongoing priority.

## 15. Scalability

The pipeline is inherently modular. Any specific step (e.g., Claim Extraction) can be swapped out for a faster, cheaper model as technology evolves without affecting the rest of the system.

## 16. Future Roadmap

- **Real-Time Verification:** Streaming the draft to the user and asynchronously validating and highlighting claims in the UI as they read.
- **Multimodal Verification:** Extending VERITAS to verify claims against charts, graphs, and images.

## 17. Conclusion

VERITAS proved that high-trust, explainable AI is possible today, provided you are willing to engineer strict, multi-agent validation loops around the raw generative models. 

## 18. Related Articles

Related Reading

→ [Why VERITAS Exists](file:///journal/why-veritas-exists)

→ [Explainable Intelligence Architecture](file:///journal/explainable-intelligence-architecture)

→ [Trust and Verification Layer](file:///journal/trust-and-verification-layer)

## 19. References

- Engineering Trustworthy AI Systems
