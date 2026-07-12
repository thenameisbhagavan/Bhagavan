"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Download, Eye, X, MapPin, Mail, GithubIcon, Linkedin,
  ArrowUpRight, Calendar, ChevronRight,
  Terminal, Cpu, Globe, Database, Code2,
  Zap, Shield
} from "lucide-react";

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   CONFIG
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const RESUME_PREVIEW  = "https://drive.google.com/file/d/1W07CQFokR2Gx7GMspad1vp_cM0-GBa4j/preview";
const RESUME_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1W07CQFokR2Gx7GMspad1vp_cM0-GBa4j";

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   DESIGN TOKENS â€” Pure Black & White Architectural System
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const C = {
  bg:       "#0B0B0B",
  surface:  "#111111",
  elevated: "#161616",
  border:   "rgba(255,255,255,0.06)",
  border2:  "rgba(255,255,255,0.12)",
  text:     "#FFFFFF",
  muted:    "rgba(255,255,255,0.55)",
  muted2:   "rgba(255,255,255,0.70)",
  muted3:   "rgba(255,255,255,0.35)",
};
const E = "cubic-bezier(0.16, 1, 0.3, 1)";

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   DEVICON CDN MAP
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const IB = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const ICONS = {
  "React.js":   `${IB}/react/react-original.svg`,
  "React":      `${IB}/react/react-original.svg`,
  "Node.js":    `${IB}/nodejs/nodejs-original.svg`,
  "Express.js": `${IB}/express/express-original.svg`,
  "MongoDB":    `${IB}/mongodb/mongodb-original.svg`,
  "Python":     `${IB}/python/python-original.svg`,
  "TensorFlow": `${IB}/tensorflow/tensorflow-original.svg`,
  "Keras":      `${IB}/keras/keras-original.svg`,
  "Flask":      `${IB}/flask/flask-original.svg`,
  "Docker":     `${IB}/docker/docker-original.svg`,
  "AWS":        `${IB}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  "Git":        `${IB}/git/git-original.svg`,
  "JavaScript": `${IB}/javascript/javascript-original.svg`,
  "Scikit-learn":`${IB}/scikitlearn/scikitlearn-original.svg`,
  "Pandas":     `${IB}/pandas/pandas-original.svg`,
  "NumPy":      `${IB}/numpy/numpy-original.svg`,
  "Java":       `${IB}/java/java-original.svg`,
  "HTML5":      `${IB}/html5/html5-original.svg`,
  "CSS3":       `${IB}/css3/css3-original.svg`,
  "GitHub":     `${IB}/github/github-original.svg`,
  "MySQL":      `${IB}/mysql/mysql-original.svg`,
};

const TICKER = [
  "React.js","Node.js","Python","TensorFlow","MongoDB","Express.js","Keras",
  "Flask","AWS","Scikit-learn","Git","JavaScript","Pandas","NumPy","Java",
];

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   DATA
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const PROOF_METRICS = [
  { value:"4",   suffix:"",  label:"Industry Internships", sub:"MERN · AI/ML · Data Science" },
  { value:"4",   suffix:"",  label:"Deployed Systems",     sub:"ATS Builder Â· Chatbot Â· ML Â· NLP" },
  { value:"15",  suffix:"+", label:"Certifications",       sub:"Google Â· IBM Â· Infosys Â· AWS" },
  { value:"100", suffix:"+", label:"DSA Problems Solved",  sub:"LeetCode & HackerRank" },
];

const EXPERIENCES = [
  {
    role:"MERN Stack Engineer Intern", company:"StudyOwl Education Pvt Ltd",
    period:"May â€“ July 2025", location:"Hybrid",
    context:"EdTech platform serving students across India",
    bullets:[
      "Architected and shipped reusable React component library reducing feature delivery time by ~30% across team workflows",
      "Designed and owned REST API surface using Node.js + Express, implementing async request handling for real-time data flows",
      "Established Git-based review process for a 4-person frontend team, cutting merge conflicts and improving release cadence",
    ],
    tech:["React.js","Node.js","Express.js","MongoDB","Git"],
    decisions:[
      "Chose component-first architecture to ensure shared UI logic was reusable across multiple product teams",
      "Used async middleware pattern in Express to handle concurrent requests without blocking",
    ],
    outcome:"React component library now used across 3 product teams. API surface handles concurrent sessions with zero downtime incidents during internship period.",
  },
  {
    role:"AI/ML Engineer Intern â€” Smart Sorting", company:"SmartBridge",
    period:"May â€“ June 2025", location:"Remote",
    context:"Computer vision pipeline for industrial sorting automation",
    bullets:[
      "Built and trained CNN-based image classification models achieving production-grade inference accuracy using TensorFlow and Keras",
      "Deployed trained models into Flask inference APIs, enabling real-time object classification from live camera feeds",
      "Optimized model architecture reducing inference latency by 22% while maintaining accuracy targets for deployment constraints",
    ],
    tech:["TensorFlow","Keras","Flask","Python"],
    decisions:[
      "Chose CNN over simpler classifiers after testing showed 15% accuracy gap on industrial image data",
      "Wrapped model in Flask API rather than embedding directly â€” enables model hot-swap without redeployment",
    ],
    outcome:"Model deployed to production pipeline. 22% latency improvement validated against original benchmark. API handles 60+ classification requests per minute.",
  },
  {
    role:"Machine Learning & Data Science Intern", company:"Blackbucks",
    period:"May â€“ June 2024", location:"Remote",
    context:"Supervised ML pipeline for structured prediction tasks",
    bullets:[
      "Owned end-to-end ML pipeline: data ingestion â†’ preprocessing â†’ feature engineering â†’ model evaluation â†’ deployment",
      "Applied statistical feature selection techniques improving model F1-score by 18% over baseline configurations",
      "Implemented reproducible experiment tracking with Scikit-learn pipelines enabling consistent comparison across model runs",
    ],
    tech:["Python","Scikit-learn","Pandas","NumPy"],
    decisions:[
      "Used pipeline objects for reproducibility â€” prevents data leakage and ensures consistent preprocessing",
      "Applied variance threshold + correlation filter for feature selection before model training",
    ],
    outcome:"Pipeline reused for 3 additional internal datasets. F1 improvement validated on held-out test set. Documentation adopted as team reference for future ML projects.",
  },
];

const PROJECTS = [
  { name:"ATS-Based Resume Builder Platform", tag:"Full-Stack System",  year:"2025", status:"Live",
    problem:"Job seekers lack visibility into why resumes fail automated screening.",
    approach:"Built keyword-extraction engine parsing PDF resumes against job descriptions, scoring ATS compatibility in real-time.",
    outcome:"Full OAuth user flow, PDF parsing pipeline, and live scoring dashboard in production.",
    tech:["React.js","Node.js","MongoDB","Python"], github:"https://github.com/thenameisbhagavan" },
  { name:"AI Chatbot Web Application",          tag:"AI Integration",    year:"2025", status:"Live",
    problem:"Existing chatbot demos lack production-grade full-stack architecture.",
    approach:"Decoupled React frontend from Flask inference backend, integrating Gemini API for natural language response generation.",
    outcome:"Sub-200ms API response times with streaming UX and error boundary handling.",
    tech:["React.js","Flask","Python"], github:"https://github.com/thenameisbhagavan" },
  { name:"Career Path Recommendation System",   tag:"ML Pipeline",       year:"2024", status:"Deployed",
    problem:"Students lack personalized, data-driven career direction based on their skills.",
    approach:"Supervised classification pipeline on academic and skills data, evaluating Random Forest vs SVM for recommendation quality.",
    outcome:"Deployed model serving recommendations across 5 career clusters with 84% accuracy.",
    tech:["Python","Scikit-learn","Pandas"], github:"https://github.com/thenameisbhagavan" },
  { name:"Fake News Detection System",          tag:"NLP System",        year:"2023", status:"GitHub",
    problem:"Proliferation of misinformation in digital news requires automated detection at scale.",
    approach:"TF-IDF vectorization with logistic regression classifier trained on labeled news corpus with cross-validation evaluation.",
    outcome:"92% classification accuracy on test set; modular pipeline enabling easy retraining.",
    tech:["Python","Scikit-learn","Pandas"], github:"https://github.com/thenameisbhagavan" },
];

const CAPABILITIES = [
  { icon:Globe,    cluster:"Frontend Architecture", skills:["React.js","JavaScript (ES6+)","HTML5","CSS3","Component Systems","REST Integration"] },
  { icon:Terminal, cluster:"Backend Systems",        skills:["Node.js","Express.js","Flask","REST API Design","Authentication Flows"] },
  { icon:Cpu,      cluster:"AI / ML Engineering",    skills:["TensorFlow","Keras","Scikit-learn","CNNs","NLP","Supervised Learning","Deep Learning"] },
  { icon:Database, cluster:"Data & Infrastructure",  skills:["MongoDB","SQL","Pandas","NumPy","JDBC","Git","Postman","AWS (Basics)"] },
  { icon:Code2,    cluster:"Core CS Foundations",    skills:["Python","Java","C","DSA","OOP","Searching & Sorting"] },
];

const CERTIFICATIONS = [
  { name:"Google Generative AI (Gemini)", issuer:"Google",              year:"2025" },
  { name:"AI Fundamentals",               issuer:"IBM SkillsBuild",     year:"2025" },
  { name:"Large Language Models",         issuer:"IBM SkillsBuild",     year:"2025" },
  { name:"Machine Learning with Python",  issuer:"Simplilearn",         year:"2024" },
  { name:"AWS Basics",                    issuer:"Simplilearn",         year:"2024" },
  { name:"Full Stack Development",        issuer:"Infosys Springboard", year:"2024" },
  { name:"Python Programming",            issuer:"GeeksforGeeks",       year:"2024" },
  { name:"Java Programming",              issuer:"GeeksforGeeks",       year:"2024" },
];

const EDUCATION = {
  degree:"B.Tech â€” Artificial Intelligence and Data Science",
  school:"Ramachandra College of Engineering, Eluru Â· JNTUK",
  period:"2022 â€“ 2026", score:"75% Â· 4th Year",
  relevant:["Machine Learning","Deep Learning","Data Structures & Algorithms","Database Management","Cloud Computing","Software Engineering"],
  previous:[
    { level:"Intermediate Â· MPC",  institution:"Srividhya Junior College",              score:"78%", period:"2020â€“2022" },
    { level:"Secondary Â· Class X", institution:"Montessori English Medium High School", score:"95%", period:"2019â€“2020" },
  ],
};

const STATIC_ATS = {
  overall:87,
  breakdown:[
    { label:"Keyword Density",      score:91, note:"Strong match â€” Python, React, TensorFlow, Node.js, MongoDB all present" },
    { label:"Format & Parsability", score:95, note:"Clean single-column layout, no tables/columns that trip parsers" },
    { label:"Section Structure",    score:88, note:"All standard sections found: Objective, Education, Experience, Skills, Projects" },
    { label:"Action Verbs",         score:85, note:"Strong verbs used: Architected, Deployed, Optimized, Implemented, Owned" },
    { label:"Quantified Results",   score:82, note:"Good impact metrics: 30% faster delivery, 22% latency reduction, 18% F1 gain" },
    { label:"Contact Completeness", score:100,note:"Email, GitHub, LinkedIn, location â€” all present" },
  ],
  topKeywords:["Python","React.js","Node.js","TensorFlow","MongoDB","Machine Learning","REST API","Git","Flask","Scikit-learn","CNN","NLP"],
  missingKeywords:["Docker","CI/CD","TypeScript","System Design"],
  suggestions:[
    "Add Docker/containerization experience â€” requested in 73% of SWE JDs",
    "Mention TypeScript â€” listed in 68% of frontend roles",
    "Add a brief CI/CD or DevOps line â€” shows production maturity",
    "Quantify the ATS builder's user adoption or accuracy %",
  ],
};

const ATS_RESUME_TEXT = "python react node mongodb tensorflow keras flask scikit javascript html css sql git aws pandas numpy java machine learning deep learning cnn nlp rest api mern stack full stack internship production deployed backend frontend";
