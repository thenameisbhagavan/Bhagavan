---
title: "Clean Architecture in Python Projects"
description: "Implementing Uncle Bob's Clean Architecture principles to create robust Python systems."
slug: "clean-architecture-in-python-projects"
series: "Python Engineering"
category: "Python"
tags: ["Architecture", "Clean Code", "Design Patterns"]
published: "2026-08-06"
updated: "2026-08-06"
featured: false
coverImage: "ev.png"
canonical: "https://thenameisbhagavan.in/journal/clean-architecture-in-python-projects"
author: "Bhagavan"
---

## 1. Executive Summary

Clean Architecture provides a blueprint for building software that is independent of frameworks, databases, and external interfaces. This article examines the practical implementation of Clean Architecture in Python, demonstrating how to achieve highly decoupled, testable, and maintainable systems.

## 2. Problem Statement

Framework-driven development often results in high coupling. When business rules are intertwined with Django ORM queries or FastAPI routing logic, testing becomes slow and migrating to new technologies becomes prohibitively expensive.

## 3. Engineering Perspective

The core philosophy is the Dependency Rule: source code dependencies must point only inward, toward the core business logic (entities and use cases). The outer layers (UI, databases, frameworks) act as plugins to the core. A Python engineer achieves this through abstractions and dependency injection.

## 4. Folder Structure

```text
clean_project/
├── core/
│   ├── entities/
│   └── use_cases/
├── adapters/
│   ├── repositories/
│   └── controllers/
├── external/
│   ├── database/
│   └── web_framework/
└── main.py
```

## 5. Code Examples

Defining an entity and a use case independent of any framework:

```python
from dataclasses import dataclass

# Entity (Core)
@dataclass
class User:
    id: int
    email: str
    is_active: bool

# Use Case Interface (Core)
class UserRepository(Protocol):
    def get_by_email(self, email: str) -> User | None: ...
    def save(self, user: User) -> None: ...

# Use Case Implementation (Core)
class RegisterUserUseCase:
    def __init__(self, repo: UserRepository):
        self.repo = repo

    def execute(self, email: str) -> User:
        if self.repo.get_by_email(email):
            raise ValueError("User already exists")
        new_user = User(id=0, email=email, is_active=True)
        self.repo.save(new_user)
        return new_user
```

## 6. Design Decisions

We define the `UserRepository` protocol in the core layer, dictating how data should be accessed. The concrete implementation (e.g., SQLAlchemy repository) resides in the `external` layer and implements this protocol. This inversion of control is central to Clean Architecture.

## 7. Trade-offs

The primary trade-off is the significant increase in boilerplate. Simple CRUD operations require traversing multiple layers and mapping data between domain entities and database models. This pattern is often overkill for small scripts or simple prototypes.

## 8. Performance

Data mapping between layers incurs a minor CPU and memory overhead. However, this is generally negligible compared to network or I/O latencies. The architectural clarity often reveals higher-level performance optimizations that would be hidden in a messy codebase.

## 9. Security

Security validations (e.g., authorization rules) can be embedded directly within the Use Case layer, ensuring they are consistently applied regardless of whether the action was triggered via an HTTP API, a background task, or a CLI script.

## 10. Best Practices

- Use Dataclasses or Pydantic models for core entities.
- Keep the core layer completely free of third-party dependencies (except typing utilities).
- Use a dependency injection container or explicit composition root in `main.py` to wire dependencies.

## 11. Common Mistakes

- Leaking database models (e.g., SQLAlchemy objects) into the Use Case layer.
- Allowing the core layer to import from adapters or external layers.
- Bypassing use cases for "simple" read operations (which fragments logic).

## 12. Lessons Learned

While the initial setup is heavy, Clean Architecture drastically simplifies unit testing. We can test complex business logic instantly using in-memory repository fakes, completely bypassing the database.

## 13. Future Improvements

Future iterations will formalize the boundaries using tools like `import-linter` to enforce the Dependency Rule automatically during CI builds.

## 14. Related Articles

- [Designing Maintainable Python Applications](/journal/designing-maintainable-python-applications)
- [Lessons Learned Building AI Systems with Python](/journal/lessons-learned-building-ai-systems-with-python)
