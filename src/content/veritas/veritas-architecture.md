---
title: "The Text Classification Pipeline"
slug: "veritas-architecture"
excerpt: "Architecting a decoupled system for Natural Language Processing and text classification."
description: "Deconstructing the VERITAS architecture, from React client interfaces to Flask-based NLP engines."
seoTitle: "VERITAS Pipeline Architecture | Engineering Journal"
seoDescription: "Deconstructing the VERITAS architecture, from React client interfaces to Flask-based NLP engines."
publishedAt: "2026-08-26"
author: "TheNameIsBhagavan"
series: "VERITAS"
seriesOrder: 2
category: "System Design"
articleType: "Architecture-Deep-Dive"
status: "Implemented"
tags: ["VERITAS", "Architecture", "Python", "Flask", "React", "NLP"]
heroImage: "/images/journal/features/journal_veritas_hero_1786810133328.jpg"
relatedArticles: ["veritas-origins", "veritas-dashboard"]
---

Natural Language Processing requires dedicated computational resources. Running text tokenization, matrix vectorization, and inference on a Node.js event loop is fundamentally inefficient. VERITAS circumvents this by strictly separating the user interface from the machine learning execution environment.

The system utilizes a decoupled architecture where the frontend handles state and presentation, while a specialized microservice manages the mathematics.

<architecture-diagram data='{"title":"VERITAS Pipeline Architecture","accessibleText":"Diagram showing React frontend connecting to a Flask backend for NLP processing.","nodes":[{"label":"React UI","subtext":"Client Interface"},{"label":"Express/Node Gateway","subtext":"Request Routing"},{"label":"Flask NLP Engine","subtext":"NLTK & Scikit-Learn"},{"label":"Logistic Regression Model","subtext":"Inference & Scoring"}]}'></architecture-diagram>

## Service Isolation

The architecture is divided into two distinct domains:

1. **The Client Layer (React)**: Responsible for capturing unstructured text input and rendering the classification metrics. It communicates strictly via REST payloads.
2. **The NLP Engine (Flask)**: A Python microservice dedicated to text processing. It loads a pre-trained Logistic Regression model and the associated TF-IDF vectorizer into memory upon initialization.

<technical-callout type="DECISION" title="Why Flask over Node for ML?">
  The Python ecosystem provides unparalleled tooling for text processing. Attempting to replicate NLTK's tokenization algorithms or Scikit-Learn's matrix operations in JavaScript would introduce unnecessary technical debt. Flask provides a lightweight, synchronous wrapper around these libraries, ideal for inference.
</technical-callout>

## The Processing Workflow

When text is submitted for analysis, the pipeline executes deterministically:

1. **Sanitization**: The input is stripped of HTML tags, special characters, and normalized to lowercase.
2. **Tokenization & Stopword Removal**: Using the Natural Language Toolkit (NLTK), the text is split into individual tokens, and high-frequency, low-signal words (stopwords) are discarded.
3. **Vectorization**: The remaining tokens are transformed into numerical vectors using TF-IDF. This evaluates the importance of a word within the specific document relative to its frequency across the entire training corpus.
4. **Inference**: The Logistic Regression model evaluates the vector matrix and outputs a probability score classifying the text.

<code-block language="python" title="nlp_inference.py">
def classify_text(raw_input, vectorizer, model):
    # Preprocess and vectorize the incoming text
    clean_text = preprocess_with_nltk(raw_input)
    vectorized_input = vectorizer.transform([clean_text])
    
    # Compute probability using Logistic Regression
    probability = model.predict_proba(vectorized_input)[0]
    
    return format_classification_result(probability)
</code-block>

## Computational Efficiency

By pre-loading the model and vectorizer into the Flask application context, the latency of a request is reduced strictly to the tokenization and inference steps. Logistic Regression, particularly when operating on sparse matrices produced by TF-IDF, is computationally inexpensive at inference time. This allows the backend to handle concurrent classification requests without significant degradation in response time.

This foundation enables more advanced text analysis techniques. In the next article, we detail the ongoing research into **[Bias and Claim Extraction](/journal/veritas-bias)**.
