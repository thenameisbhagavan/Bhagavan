// Centralized Projects Data Architecture
// Single Source of Truth for all portfolio projects
// Strict Non-Negotiable Priority: Company Projects FIRST, Personal Projects LAST

import dvLabsHeroImg from "../assets/dvlabs-hero.jpg";
import dvAssessmentImg from "../assets/datavalley-assessment-platform.png";
import careerOsImg from "../assets/careeros-new.jpg";
import auraOsImg from "../assets/aurabot-new.png";
import veritasImg from "../assets/fake.jpg";
import voltDriveImg from "../assets/ev.png";
import agrivisionImg from "../assets/agrivision.png";
import atsResumeImg from "../assets/resume.jpg";

export const PROJECT_CATEGORIES = {
  COMPANY: "COMPANY PROJECT",
  PROFESSIONAL: "PROFESSIONAL WORK",
  PERSONAL: "PERSONAL PROJECT"
};

export const ALL_PROJECTS = [
  // ============================================================
  // TIER 1: COMPANY PROJECTS (DATA VALLEY TRAINING, PLACEMENTS & IT SOLUTIONS / DV LABS)
  // ============================================================
  {
    id: "dv-labs-platform",
    title: "DV Labs — AI-Guided Capstone-to-Career Platform",
    shortTitle: "DV Labs",
    category: PROJECT_CATEGORIES.COMPANY,
    categoryPriority: 1,
    displayOrder: 1,
    organization: "Data Valley Training, Placements & IT Solutions / DV Labs",
    ownership: "Data Valley Training, Placements & IT Solutions",
    status: "ONGOING",
    statusBadge: "COMPANY PROJECT · ONGOING",
    tagline: "Where vision meets execution.",
    subline: "Milestone-locked projects. Defended in viva. Built for the real world.",
    description: "A Data Valley company development initiative designed to transform engineering capstone development through AI-powered mentorship, research intelligence, structured project engineering, technical evaluation, and career readiness.",
    contribution: "Software Engineer | Data Valley Engineering Team. Developed web application features, AI evaluation workflows, stage-gated milestone progress models, and assessment integrations as part of the Data Valley engineering team.",
    technologyStack: [
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "Node.js",
      "MongoDB Atlas",
      "AI Viva Engine",
      "Tailwind CSS"
    ],
    heroImage: dvLabsHeroImg,
    secondaryImage: dvLabsHeroImg,
    featured: true,
    projectUrl: "https://dvlabs.datavalley.ai/",
    detailRoute: "/work/dv-labs-platform",
    routeAliases: ["/work/dv-labs"],
    capabilities: [
      {
        title: "Milestone-Locked Engineering",
        desc: "Progressive, stage-gated development workflows where deliverables must satisfy strict test baselines before subsequent phases unlock."
      },
      {
        title: "AI Viva Defense System",
        desc: "Automated oral defense interrogations testing candidates on architectural decisions, algorithm trade-offs, and code mechanics."
      },
      {
        title: "Real-World Engineering Baselines",
        desc: "Replacing tutorial clones with enterprise code standards, automated testing, and comprehensive documentation."
      }
    ]
  },
  {
    id: "data-valley-assessment-platform",
    title: "DV Labs Assessment Platform",
    shortTitle: "DV Assessment Platform",
    category: PROJECT_CATEGORIES.COMPANY,
    categoryPriority: 1,
    displayOrder: 2,
    organization: "Data Valley Training, Placements & IT Solutions",
    ownership: "Data Valley Training, Placements & IT Solutions",
    status: "ONGOING / IN DEVELOPMENT",
    statusBadge: "COMPANY PROJECT · IN DEVELOPMENT",
    tagline: "Candidate assessment platform with secure sessions, live timers, and server-side evaluation.",
    subline: "40 structured technical challenges with synchronized countdown timers, background delta auto-sync, and 100% tamper-proof server-side scoring.",
    description: "An end-to-end technical evaluation application built for Data Valley Training, Placements & IT Solutions. Combines authenticated candidate workflows, synchronized countdown timers, background auto-save sync, deterministic server scoring, and proctoring telemetry.",
    contribution: "Software Engineer | Data Valley Engineering Team. Designed and developed candidate authentication with HTTP-only cookies, continuous auto-sync via /api/assessment/sync, 100% server-side scoring via /api/assessment/submit, MongoDB Atlas schemas, and integrity event logging.",
    technologyStack: [
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "MongoDB Atlas",
      "JWT / Cookies",
      "Bcrypt",
      "Tailwind CSS",
      "Vercel"
    ],
    heroImage: dvAssessmentImg,
    secondaryImage: dvAssessmentImg,
    featured: true,
    projectUrl: "https://dv-assesments.vercel.app/",
    detailRoute: "/work/data-valley-assessment-platform",
    routeAliases: ["/work/dv-assessments", "/work/dv-assessment-platform"],
    capabilities: [
      {
        title: "Candidate Authentication & Session Binding",
        desc: "Secure login flow with HTTP-only cookies and bcrypt password hashing, binding candidate identity directly to their active test instance."
      },
      {
        title: "Timed Technical Assessment Canvas",
        desc: "Structured 40-question technical challenge delivery with live synchronized countdown timer, interactive question palette, and code display."
      },
      {
        title: "Continuous Delta Auto-Sync",
        desc: "Idempotent background state synchronization via /api/assessment/sync protecting candidate responses against accidental page refreshes."
      },
      {
        title: "Deterministic Server-Side Scoring",
        desc: "Zero client-side score computation. Submissions are processed via /api/assessment/submit and evaluated server-side to eliminate tampering."
      },
      {
        title: "Integrity Telemetry Workflows",
        desc: "Session focus tracking, window blur occurrence logging, and UUID idempotency keys to ensure fair testing conditions."
      }
    ]
  },

  // ============================================================
  // TIER 3: PERSONAL PROJECTS (INDEPENDENT ENGINEERING)
  // ============================================================
  {
    id: "careeros",
    title: "CareerOS",
    shortTitle: "CareerOS",
    category: PROJECT_CATEGORIES.PERSONAL,
    categoryPriority: 3,
    displayOrder: 3,
    organization: "Independent Project",
    status: "Active Iteration",
    statusBadge: "PERSONAL PROJECT · ACTIVE",
    tagline: "Career intelligence and deterministic skill gap analysis.",
    subline: "An intelligence layer that parses resumes, analyzes skill gaps against market benchmarks, and models trajectory paths.",
    description: "An AI-powered career intelligence system that parses resumes, maps competencies against real-world job requirements, and computes actionable skill trajectory recommendations using deterministic scoring.",
    contribution: "Sole Developer & Architect. Built React frontend, modular FastAPI backend, ATS keyword extraction engine, and trajectory scoring algorithms.",
    technologyStack: ["React", "FastAPI", "Python", "Pandas", "Scikit-Learn", "REST APIs"],
    heroImage: careerOsImg,
    secondaryImage: careerOsImg,
    featured: true,
    projectUrl: "https://careeros-thenameisbhagavan.vercel.app/",
    detailRoute: "/work/careeros",
    routeAliases: []
  },
  {
    id: "auraos",
    title: "AuraOS",
    shortTitle: "AuraOS",
    category: PROJECT_CATEGORIES.PERSONAL,
    categoryPriority: 3,
    displayOrder: 4,
    organization: "Independent Project",
    status: "Active Exploration",
    statusBadge: "PERSONAL PROJECT · ACTIVE",
    tagline: "Context-aware conversational interface with secure backend bridging.",
    subline: "A conversational platform built around context preservation, prompt design, and an intuitive operating-system-inspired workspace.",
    description: "A personal intelligence operating system featuring stateful conversation memory, custom prompt engineering, and a secure stateless proxy bridge interfacing with upstream LLM APIs.",
    contribution: "Sole Developer. Implemented React workspace interface, Flask backend bridge for Gemini API key encapsulation, and session state management.",
    technologyStack: ["React", "Flask", "Python", "Google Gemini API", "Tailwind CSS"],
    heroImage: auraOsImg,
    secondaryImage: auraOsImg,
    featured: true,
    projectUrl: "https://aura-os-thenameisbhagavan.vercel.app/",
    detailRoute: "/work/auraos",
    routeAliases: []
  },
  {
    id: "veritas",
    title: "VERITAS",
    shortTitle: "VERITAS",
    category: PROJECT_CATEGORIES.PERSONAL,
    categoryPriority: 3,
    displayOrder: 5,
    organization: "Independent Project",
    status: "Demonstrated Model",
    statusBadge: "PERSONAL PROJECT · DEMO",
    tagline: "Deterministic credibility evaluation and claim extraction engine.",
    subline: "An NLP-driven credibility analysis platform that extracts textual claims and evaluates patterns using explainable machine learning models.",
    description: "An explainable AI platform designed to evaluate textual credibility, trace source evidence, and calculate confidence scores using mathematically transparent linear models rather than black-box approximations.",
    contribution: "Sole Developer & ML Engineer. Trained Scikit-learn TF-IDF + Logistic Regression classification pipelines, built Flask inference service, and created React visualization canvas.",
    technologyStack: ["Python", "Flask", "Scikit-Learn", "TF-IDF", "React", "Tailwind CSS"],
    heroImage: veritasImg,
    secondaryImage: veritasImg,
    featured: true,
    projectUrl: "https://veritas-thenameisbhagavan.vercel.app/",
    detailRoute: "/work/veritas",
    routeAliases: []
  },
  {
    id: "voltdrive",
    title: "VoltDrive",
    shortTitle: "VoltDrive",
    category: PROJECT_CATEGORIES.PERSONAL,
    categoryPriority: 3,
    displayOrder: 6,
    organization: "Independent Project",
    status: "Completed Experience",
    statusBadge: "PERSONAL PROJECT · COMPLETED",
    tagline: "High-performance digital vehicle experience and telemetry UI.",
    subline: "A fluid automotive digital experience demonstrating modern frontend engineering, responsive interaction choreography, and simulated vehicle telemetry.",
    description: "A fluid automotive digital experience demonstrating modern frontend engineering, responsive interaction choreography, spring-based animations, and real-time vehicle telemetry simulation.",
    contribution: "Sole Frontend Engineer. Built 60fps hardware-accelerated animations, configuration state panels, telemetry gauges, and responsive interaction design.",
    technologyStack: ["React", "Framer Motion", "Tailwind CSS", "JavaScript", "SVG Dynamics"],
    heroImage: voltDriveImg,
    secondaryImage: voltDriveImg,
    featured: true,
    projectUrl: "https://voltdrive-thenameisbhagavan.vercel.app/",
    detailRoute: "/work/voltdrive",
    routeAliases: []
  },
  {
    id: "agrivision",
    title: "AgriVision AI",
    shortTitle: "AgriVision AI",
    category: PROJECT_CATEGORIES.PERSONAL,
    categoryPriority: 3,
    displayOrder: 7,
    organization: "Independent Project",
    status: "Completed Project",
    statusBadge: "PERSONAL PROJECT · COMPLETED",
    tagline: "From crop leaf image to explainable AI diagnostics.",
    subline: "Deep learning agricultural pathology detection pipeline identifying plant leaf diseases.",
    description: "A computer vision model and web interface trained to classify crop leaf diseases across multiple agricultural crops, outputting diagnostic confidence and recommended treatments.",
    contribution: "ML Engineer & Developer. Trained CNN architecture on plant disease datasets, optimized preprocessing pipelines, and wrapped model in Flask API.",
    technologyStack: ["Python", "TensorFlow / Keras", "OpenCV", "Flask", "HTML5 / CSS3"],
    heroImage: agrivisionImg,
    secondaryImage: agrivisionImg,
    featured: false,
    projectUrl: "https://github.com/thenameisbhagavan/Plant-disease-detection",
    detailRoute: "/work#agrivision",
    routeAliases: []
  },
  {
    id: "ats-resume",
    title: "ATS Resume Builder",
    shortTitle: "ATS Resume",
    category: PROJECT_CATEGORIES.PERSONAL,
    categoryPriority: 3,
    displayOrder: 8,
    organization: "Independent Project",
    status: "Completed Project",
    statusBadge: "PERSONAL PROJECT · COMPLETED",
    tagline: "MERN application optimizing resumes against ATS filters with keyword extraction.",
    subline: "Full-stack web platform optimizing resumes against Applicant Tracking Systems.",
    description: "A full-stack resume construction web application implementing algorithmic keyword analysis, ATS format validation, and structured PDF generation.",
    contribution: "Full-Stack Developer. Built React frontend, Node/Express backend, MongoDB database models, and keyword scoring functions.",
    technologyStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    heroImage: atsResumeImg,
    secondaryImage: atsResumeImg,
    featured: false,
    projectUrl: "https://github.com/thenameisbhagavan/Resumebuilderwebapp",
    detailRoute: "/work#ats-resume",
    routeAliases: []
  }
];

// Centralized Deterministic Sorting Function:
// 1. Company Projects ALWAYS First (categoryPriority: 1)
// 2. Professional / Collaborative Projects Second (categoryPriority: 2)
// 3. Personal Projects ALWAYS Last (categoryPriority: 3)
export function getSortedProjects(projects = ALL_PROJECTS) {
  return [...projects].sort((a, b) => {
    if (a.categoryPriority !== b.categoryPriority) {
      return a.categoryPriority - b.categoryPriority;
    }
    return (a.displayOrder || 99) - (b.displayOrder || 99);
  });
}

// Get Company Projects only
export function getCompanyProjects(projects = ALL_PROJECTS) {
  return getSortedProjects(projects).filter(p => p.category === PROJECT_CATEGORIES.COMPANY);
}

// Get Personal Projects only
export function getPersonalProjects(projects = ALL_PROJECTS) {
  return getSortedProjects(projects).filter(p => p.category === PROJECT_CATEGORIES.PERSONAL);
}

// Get Featured Projects in Strict Priority Order
export function getFeaturedProjects(projects = ALL_PROJECTS) {
  return getSortedProjects(projects).filter(p => p.featured);
}
