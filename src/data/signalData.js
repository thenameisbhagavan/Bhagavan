// src/data/signalData.js

export const signalHero = {
  headline: "THE THINGS\nSHAPING\nHOW I BUILD.",
  subtext: "Tools. Questions. Experiments. References. Decisions.\n\nNot everything I notice becomes a project. Some things simply change the way I build."
};

export const currentState = {
  BUILDING: ["CareerOS", "VoltDrive"],
  EXPLORING: ["Agentic AI", "Stateless Bridging"],
  WRITING: ["Engineering Journal"],
  STUDYING: ["Explainable AI", "System Design"],
  THINKING_ABOUT: ["Context", "Memory", "Transparency"]
};

export const currentObsession = {
  topic: "MEMORY",
  observation: "A conversational system becomes vastly more capable when it remembers context.\n\nBut memory introduces complexity: retrieval, relevance, staleness, and user control. In AuraOS, the tension is between stateless execution for speed and stateful graphs for intelligence.",
  meta: "READING · BUILDING · QUESTIONING"
};

export const signalStream = [
  {
    id: "05",
    type: "FIELD NOTE",
    title: "PORTFOLIO ARCHITECTURE",
    date: "15 AUG 2026",
    observation: "A digital portfolio becomes weaker when every new idea simply becomes another page.",
    whyItMatters: "Instead of building random pages, I started grouping them by cognitive intent: what I've built (Products), how I've evolved (Journey), what I'm writing (Journal), and what I'm noticing (Signal). The architecture now reflects focus, not just volume.",
    relatedProject: "TheNameIsBhagavan",
    status: "ACTIVE",
    visibility: "PUBLIC",
    importance: "FEATURED"
  },
  {
    id: "04",
    type: "DECISION",
    title: "STATELESS CONVERSATION BRIDGING",
    date: "10 AUG 2026",
    observation: "Decided to keep AuraOS stateless at the conversation bridge layer instead of persisting every interaction instantly.",
    whyItMatters: "Managing session state in the React client while using Flask purely as a secure bridge limits persistence overhead. True long-term persistence should happen at explicit boundaries, not implicitly on every turn.",
    relatedProject: "AuraOS",
    status: "ACTIVE",
    visibility: "PUBLIC",
    importance: "STANDARD"
  },
  {
    id: "03",
    type: "LESSON",
    title: "ANIMATING COMPLEX INTERFACES",
    date: "05 AUG 2026",
    observation: "Tested heavy scroll-driven animations and UI rendering in VoltDrive's automotive showroom.",
    whyItMatters: "Learned that cubic-bezier curves (e.g., appleEase) combined strictly with transform and opacity changes offer much smoother visual continuity than animating layout properties (like height or margins) directly.",
    relatedProject: "VoltDrive",
    status: "ARCHIVED",
    visibility: "PUBLIC",
    importance: "STANDARD"
  },
  {
    id: "02",
    type: "TOOL",
    title: "FLASK AS AN INTELLIGENCE BOUNDARY",
    date: "28 JUL 2026",
    observation: "Using Flask not just as a web server, but as a deliberate security and orchestration boundary.",
    whyItMatters: "By offloading LLM API interactions to a Python backend, the React frontend remains purely presentational. Flask handles preprocessing, secure key management, and stateless bridging before the data reaches the client.",
    relatedProject: "AuraOS / VERITAS",
    status: "ACTIVE",
    visibility: "PUBLIC",
    importance: "FEATURED"
  },
  {
    id: "01",
    type: "QUESTION",
    title: "EXPLAINABLE PIPELINES",
    date: "15 JUL 2026",
    observation: "How do you prove an AI is making a decision based on truth rather than hallucinated correlation?",
    whyItMatters: "In VERITAS, combining TF-IDF with Logistic Regression provides a baseline of mathematical transparency. It forces the system to rely on explicit linguistic weights rather than opaque neural activations.",
    relatedProject: "VERITAS",
    status: "ACTIVE",
    visibility: "PUBLIC",
    importance: "STANDARD"
  }
];

export const workingStack = [
  {
    category: "USE",
    items: [
      {
        name: "React",
        why: "Where system state translates into visual hierarchy, transitions, and user behavior."
      },
      {
        name: "Python",
        why: "The language I reach for when a problem requires a data pipeline or intelligence boundary."
      },
      {
        name: "Flask / FastAPI",
        why: "The orchestration layer used to securely bridge frontends with AI models and databases."
      }
    ]
  },
  {
    category: "STUDY",
    items: [
      {
        name: "Agentic Workflows",
        why: "Moving beyond single-prompt interactions toward autonomous, multi-step reasoning."
      },
      {
        name: "Explainability",
        why: "Intelligence without transparency is fundamentally a liability in production systems."
      }
    ]
  },
  {
    category: "BUILD",
    items: [
      {
        name: "CareerOS",
        why: "Applying deterministic scoring and ATS parsing algorithms to career intelligence."
      },
      {
        name: "AuraOS",
        why: "Building a conversational interface that separates client state from secure backend orchestration."
      }
    ]
  }
];

export const references = [
  {
    name: "APPLE",
    category: "PRODUCT STORYTELLING",
    why: "Proves that extreme restraint and meticulous typography can serve as a technical advantage in interface design."
  },
  {
    name: "LINEAR",
    category: "SOFTWARE FEEL",
    why: "Demonstrates that engineering speed and keyboard-first interaction models are primary product features."
  },
  {
    name: "STRIPE",
    category: "TECHNICAL COMMUNICATION",
    why: "Shows how deep engineering complexity can still be documented and communicated with exceptional clarity."
  }
];

export const publicOutput = [
  { action: "BUILD", platform: "GitHub", key: "github" },
  { action: "THINK", platform: "LinkedIn", key: "linkedin" },
  { action: "VISUALIZE", platform: "Instagram", key: "instagram" },
  { action: "DEMONSTRATE", platform: "YouTube", key: "youtube" }
];

export const nowNext = {
  now: [
    "AI Systems Integration",
    "Product Engineering",
    "Engineering Documentation"
  ],
  next: [
    "Agentic Workflows",
    "Context/Memory Architecture",
    "Explainable AI Pipelines"
  ]
};
