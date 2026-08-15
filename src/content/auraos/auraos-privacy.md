---
title: "Privacy and Agentic Boundaries"
slug: "auraos-privacy"
excerpt: "Managing execution boundaries and data exposure in a hybrid cloud-local system."
description: "Establishing strict execution boundaries and privacy controls when routing local data to the Gemini API."
seoTitle: "Privacy and Agentic Boundaries in AuraOS | Engineering"
seoDescription: "Establishing strict execution boundaries and privacy controls when routing local data to the Gemini API."
publishedAt: "2026-08-23"
author: "TheNameIsBhagavan"
series: "AuraOS"
seriesOrder: 4
category: "Security"
articleType: "Engineering-Decision-Record"
status: "Implemented"
tags: ["AuraOS", "Security", "Sandboxing", "API"]
heroImage: "/images/journal/features/journal_auraos_hero_1786810157061.jpg"
relatedArticles: ["auraos-local-llms", "auraos-architecture"]
---

An operating system with intelligence is useful. An operating system with autonomous tool execution powered by a cloud API introduces significant security considerations.

Because AuraOS relies on the Gemini API for its reasoning engine, local context must be transmitted over the network. Furthermore, the orchestrator allows Gemini to dictate actions executed locally on the user's machine. 

The primary engineering challenge was establishing rigid boundaries between what the cloud model can see and what it can do.

## The Principle of Least Privilege

AuraOS operates on a strict model of least privilege. The local Flask orchestrator does not run with root access. The Python virtual environment is heavily restricted, and the tool registry is intentionally limited.

### Execution Boundaries

When Gemini returns a function call, the Flask backend does not execute it blindly. It passes through a local validation and routing layer. Tools are categorized by risk.

Read-only operations, like checking the current directory state, are executed automatically. Stateful or destructive actions, such as modifying files or running arbitrary shell commands, require explicit validation. We enforce hardcoded constraints on which directories can be accessed, preventing the agent from navigating into system roots.

## Human in the Loop (HITL)

For high-risk executions, AuraOS intercepts the tool call and pauses the ReAct loop. The user receives a prompt in the frontend detailing exactly what command the agent wishes to run. 

If the user approves, the command executes and the result is fed back to Gemini. If the user denies it, an error state is injected into the context, forcing the model to rethink its strategy.

## Data Minimization

To mitigate privacy risks associated with cloud APIs, the Flask backend acts as a data sanitizer. Instead of sending raw, unparsed file dumps to the API, local tools summarize and truncate data before it ever leaves the machine. 

By strictly defining these agentic boundaries, AuraOS ensures that the intelligence serves the user without compromising the security of the host environment.
