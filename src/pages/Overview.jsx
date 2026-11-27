import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  BrainCircuit,
  Scan,
  Server,
  FileText,
  CheckCircle2,
  Terminal,
  Code2,
  GitBranch,
  Workflow,
  Database,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  GraduationCap,
  Mail,
  Copy,
  Check,
  MapPin,
  Cpu
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { m as Motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiNodedotjs,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiHtml5,
  SiGooglegemini,
  SiOpenai,
  SiHuggingface,
  SiLangchain,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter
} from "react-icons/si";
import Reveal from "../components/motion/Reveal";
import ScaleReveal from "../components/motion/ScaleReveal";
import MagneticLink from "../components/motion/MagneticLink";
import SpringTilt from "../components/motion/SpringTilt";
import AppreciationLetterModal from "../components/AppreciationLetterModal";
import "../styles/Overview.css";

gsap.registerPlugin(ScrollTrigger);

// ─── Core Assets ──────────────────────────────────────────────────────────────
import profileHeroImg from "../assets/profile-hero.jpg";
import careerosImg from "../assets/careeros-new.jpg";
import auraosImg from "../assets/aurabot-new.png";
import voltdriveImg from "../assets/ev.png";
import veritasImg from "../assets/fake.jpg";
import datavalleyImg from "../assets/datascience coruse compltetion.jpeg";
import pbrTalkPhoto from "../assets/pbr-vits-ai-talk.jpg";
import paceImg from "../assets/pace.jpg";
import dvAssessmentImg from "../assets/datavalley-assessment-platform.png";
import dvLabsHeroImg from "../assets/dvlabs-hero.jpg";
import dheergayushHeroImg from "../assets/dheergayush-hero.jpg";
import agrivisionImg from "../assets/agrivision.png";

// ─── Dual-Direction Technology Trains (With Dark-Surface Brand Luminance) ───────
// Track A: Right-to-Left (Software Engineering, Modern Web, Backend, Databases & Dev Tools)
const TECH_TRAIN_1 = [
  { name: "Python", icon: SiPython, color: "#3776AB", darkColor: "#5AA9E6" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", darkColor: "#60A5FA" },
  { name: "React 19", icon: SiReact, color: "#61DAFB", darkColor: "#61DAFB" },
  { name: "Next.js App Router", icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", darkColor: "#2DD4BF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", darkColor: "#86EFAC" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", darkColor: "#818CF8" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", darkColor: "#4ADE80" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", darkColor: "#38BDF8" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", darkColor: "#38BDF8" },
  { name: "Flask", icon: SiFlask, color: "#000000", darkColor: "#F1F5F9" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", darkColor: "#F87171" },
  { name: "Git", icon: SiGit, color: "#F05032", darkColor: "#FB923C" },
  { name: "GitHub", icon: SiGithub, color: "#181717", darkColor: "#F8FAFC" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", darkColor: "#FB923C" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", darkColor: "#60A5FA" },
  { name: "Vercel Edge", icon: SiVercel, color: "#000000", darkColor: "#FFFFFF" },
  { name: "JavaScript (ESNext)", icon: SiJavascript, color: "#F7DF1E", darkColor: "#FACC15" },
  { name: "HTML5 & CSS3", icon: SiHtml5, color: "#E34F26", darkColor: "#F97316" },
  { name: "REST APIs", icon: Server, color: "#D97706", darkColor: "#FBBF24" },
  { name: "Microservices", icon: GitBranch, color: "#7C3AED", darkColor: "#A78BFA" }
];

// Track B: Left-to-Right (Data Science, Machine Learning, Generative AI & Agentic AI)
const TECH_TRAIN_2 = [
  { name: "Gemini API", icon: SiGooglegemini, color: "#1BA1E2", darkColor: "#38BDF8" },
  { name: "OpenAI API", icon: SiOpenai, color: "#10A37F", darkColor: "#34D399" },
  { name: "LangChain", icon: SiLangchain, color: "#1C3C3C", darkColor: "#6EE7B7" },
  { name: "Hugging Face", icon: SiHuggingface, color: "#FF9D00", darkColor: "#FBBF24" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", darkColor: "#FB7185" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", darkColor: "#FB923C" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E", darkColor: "#FBBF24" },
  { name: "Keras", icon: SiKeras, color: "#D00000", darkColor: "#F87171" },
  { name: "Pandas", icon: SiPandas, color: "#150458", darkColor: "#A78BFA" },
  { name: "NumPy", icon: SiNumpy, color: "#013243", darkColor: "#38BDF8" },
  { name: "Jupyter", icon: SiJupyter, color: "#F37626", darkColor: "#FB923C" },
  { name: "Agentic Workflows", icon: Workflow, color: "#8B5CF6", darkColor: "#A78BFA" },
  { name: "Multi-Agent Systems", icon: BrainCircuit, color: "#6366F1", darkColor: "#818CF8" },
  { name: "RAG Architectures", icon: Database, color: "#0EA5E9", darkColor: "#38BDF8" },
  { name: "Vector Search", icon: Scan, color: "#10B981", darkColor: "#34D399" },
  { name: "Tool Calling", icon: Terminal, color: "#EC4899", darkColor: "#F472B6" },
  { name: "Prompt Engineering", icon: Sparkles, color: "#F59E0B", darkColor: "#FBBF24" },
  { name: "Model Evaluation", icon: CheckCircle2, color: "#2563EB", darkColor: "#60A5FA" }
];

// ─── Section 04: The 6-Engine Capabilities Switcher ───────────────────────────
const CAPABILITY_DISCIPLINES = [
  {
    id: "ai",
    num: "01",
    title: "Artificial Intelligence",
    tagline: "Neural precision from raw tensor to inference.",
    desc: "Designing and evaluating predictive ML architectures, transfer-learning computer vision classifiers, and mathematically rigorous classification pipelines.",
    icon: Brain,
    accent: "#2997FF",
    runtime: "PyTorch & TensorFlow",
    architecture: "Supervised ML · CNNs · Cross-Validation",
    highlights: ["Explainable Model Weighting", "Transfer Learning & Vision", "Deterministic Inference APIs"],
    stackIcons: [
      { label: "PyTorch", icon: SiPytorch, color: "#FB7185" },
      { label: "TensorFlow", icon: SiTensorflow, color: "#FB923C" },
      { label: "Scikit-learn", icon: SiScikitlearn, color: "#FBBF24" },
      { label: "Keras", icon: SiKeras, color: "#F87171" }
    ]
  },
  {
    id: "genai",
    num: "02",
    title: "Generative AI",
    tagline: "Grounded language intelligence in production.",
    desc: "Building enterprise LLM gateways, structured JSON output pipelines, bilingual clinical assistants, and retrieval-augmented generation (RAG) knowledge engines.",
    icon: Sparkles,
    accent: "#38BDF8",
    runtime: "Gemini & OpenAI SDKs",
    architecture: "RAG · Structured Outputs · Prompt Conditioning",
    highlights: ["Context-Grounded Retrieval", "Zero/Few-Shot Conditioning", "Bilingual Voice Synthesis"],
    stackIcons: [
      { label: "Gemini API", icon: SiGooglegemini, color: "#38BDF8" },
      { label: "OpenAI API", icon: SiOpenai, color: "#34D399" },
      { label: "LangChain", icon: SiLangchain, color: "#6EE7B7" },
      { label: "Hugging Face", icon: SiHuggingface, color: "#FBBF24" }
    ]
  },
  {
    id: "agentic",
    num: "03",
    title: "Agentic AI",
    tagline: "Autonomous reasoning loops with verifiable guardrails.",
    desc: "Orchestrating multi-step agentic workflows, deterministic tool-calling contracts, vector retrieval pipelines, and stage-gated technical evaluation engines.",
    icon: Workflow,
    accent: "#A78BFA",
    runtime: "Multi-Agent Orchestration",
    architecture: "Tool Calling · Vector Search · Semantic Routing",
    highlights: ["Stage-Gated Reasoning", "Schema-Validated Tool Use", "State-Preserving Memory"],
    stackIcons: [
      { label: "Multi-Agent", icon: BrainCircuit, color: "#818CF8" },
      { label: "Workflows", icon: Workflow, color: "#A78BFA" },
      { label: "Vector RAG", icon: Database, color: "#38BDF8" },
      { label: "Tool Calls", icon: Terminal, color: "#F472B6" }
    ]
  },
  {
    id: "swe",
    num: "04",
    title: "Software Engineering",
    tagline: "High-concurrency APIs paired with tactile interfaces.",
    desc: "Architecting full-stack web applications with React 19 and Next.js App Router backed by high-throughput FastAPI, Flask, Node.js, MongoDB Atlas, and PostgreSQL services.",
    icon: Code2,
    accent: "#34D399",
    runtime: "FastAPI · Next.js · Node.js",
    architecture: "REST Gateways · JWT Security · Edge Rendering",
    highlights: ["Server-Side Scoring Engines", "Synchronized Assessment Sync", "Modular Full-Stack Design"],
    stackIcons: [
      { label: "Python", icon: SiPython, color: "#5AA9E6" },
      { label: "React 19", icon: SiReact, color: "#61DAFB" },
      { label: "FastAPI", icon: SiFastapi, color: "#2DD4BF" },
      { label: "Docker", icon: SiDocker, color: "#38BDF8" }
    ]
  },
  {
    id: "datascience",
    num: "05",
    title: "Data Science",
    tagline: "Distilling noisy datasets into clean statistical truth.",
    desc: "Executing high-dimensional data preprocessing, exploratory statistical validation, feature extraction, and quantitative model benchmarking across clinical and career domains.",
    icon: Database,
    accent: "#FBBF24",
    runtime: "Pandas · NumPy · Jupyter",
    architecture: "Feature Engineering · Statistical Validation",
    highlights: ["Clean Preprocessing Pipelines", "Multivariate Feature Selection", "Anti-Overfitting Validation"],
    stackIcons: [
      { label: "Python", icon: SiPython, color: "#5AA9E6" },
      { label: "Pandas", icon: SiPandas, color: "#A78BFA" },
      { label: "NumPy", icon: SiNumpy, color: "#38BDF8" },
      { label: "Jupyter", icon: SiJupyter, color: "#FB923C" }
    ]
  },
  {
    id: "education",
    num: "06",
    title: "Technical Education",
    tagline: "Making complex systems crystal clear.",
    desc: "Deconstructing advanced AI architectures into first-principles mental models through Data Valley training cohorts, hands-on workshops at PACE Ongole, and invited talks at PBR VITS.",
    icon: GraduationCap,
    accent: "#60A5FA",
    runtime: "Workshops & Cohort Training",
    architecture: "Curriculum Design · Live Coding · Mentorship",
    highlights: ["Data Valley Daily Mentorship", "150+ Students at PACE Ongole", "IQAC Commended Technical Talk"],
    stackIcons: [
      { label: "Python", icon: SiPython, color: "#5AA9E6" },
      { label: "Gemini API", icon: SiGooglegemini, color: "#38BDF8" },
      { label: "Scikit-learn", icon: SiScikitlearn, color: "#FBBF24" },
      { label: "Git", icon: SiGit, color: "#FB923C" }
    ]
  }
];

// ─── Section 05: Apple Keynote Horizontal Innovation Gallery ───────────────────
const INNOVATION_SHOWCASE = [
  {
    id: "01",
    name: "CareerOS",
    category: "AI CAREER INTELLIGENCE",
    headline: "Explainable career architecture.",
    desc: "Parses resumes, analyzes GitHub signals, and maps skill gaps against live technical benchmarks.",
    stack: ["React 19", "FastAPI", "Python", "MongoDB", "Gemini API"],
    problem: "Candidates receive opaque ATS scores without clear explanations of missing technical competencies.",
    solution: "Built a structured multi-stage extraction pipeline combining FastAPI with deterministic skill-graph mapping and Gemini analysis.",
    img: careerosImg,
    url: "/work/careeros",
    live: "https://careeros-thenameisbhagavan.vercel.app/",
    theme: "light"
  },
  {
    id: "02",
    name: "VERITAS",
    category: "EXPLAINABLE INTELLIGENCE",
    headline: "Truth traced mathematically.",
    desc: "Deterministic NLP credibility engine decomposing textual claims with transparent linguistic feature weights.",
    stack: ["Python", "FastAPI", "spaCy", "Transformers", "scikit-learn"],
    problem: "Black-box misinformation detectors fail to show which linguistic claims triggered credibility flags.",
    solution: "Engineered a hybrid TF-IDF, spaCy entity extraction, and transformer pipeline surfacing sentence-level evidence weights.",
    img: veritasImg,
    url: "/work/veritas",
    live: "https://veritas-thenameisbhagavan.vercel.app/",
    theme: "dark"
  },
  {
    id: "03",
    name: "DV Labs Assessment",
    category: "ENTERPRISE EVALUATION",
    headline: "40 questions. Zero data loss.",
    desc: "Synchronized candidate evaluation engine with server-side timer authority, delta auto-sync, and deterministic scoring.",
    stack: ["Next.js", "React 19", "TypeScript", "MongoDB Atlas", "JWT"],
    problem: "Timed browser assessments suffer from network drops, timer drift, and client-side score tampering.",
    solution: "Architected background /api/assessment/sync checkpoints backed by HTTP-only JWT binding and strict server grading.",
    img: dvAssessmentImg,
    url: "/work/data-valley-assessment-platform",
    live: "https://dv-assesments.vercel.app/",
    theme: "light"
  },
  {
    id: "04",
    name: "VoltDrive",
    category: "INTERACTIVE 3D SHOWROOM",
    headline: "Kinetic automotive precision.",
    desc: "High-framerate interactive EV configurator demonstrating WebGL lighting, 3D choreography, and tactile motion.",
    stack: ["React 19", "Three.js", "React Three Fiber", "Framer Motion"],
    problem: "Standard product showcases fail to evoke hardware tactility and responsive spatial depth on the web.",
    solution: "Combined custom camera orbital keyframes with physics-damped WebGL vehicle shaders in an editorial dark frame.",
    img: voltdriveImg,
    url: "/work/voltdrive",
    live: "https://voltdrive-thenameisbhagavan.vercel.app/",
    theme: "dark"
  },
  {
    id: "05",
    name: "AuraOS",
    category: "CONVERSATIONAL WORKSPACE",
    headline: "Context that stays alive.",
    desc: "Context-preserving conversational AI workspace bridging React interfaces with secure Python/Flask orchestration.",
    stack: ["React", "Python", "Flask", "Gemini API", "REST Architecture"],
    problem: "Browser-based LLM clients lose session memory and expose API credentials on the client tier.",
    solution: "Designed a server-mediated Flask proxy maintaining structured conversation state and safe rate-limited generation.",
    img: auraosImg,
    url: "/work/auraos",
    live: "https://aura-os-thenameisbhagavan.vercel.app/",
    theme: "light"
  },
  {
    id: "06",
    name: "AgriVision AI",
    category: "COMPUTER VISION DIAGNOSTICS",
    headline: "Field pathology at a glance.",
    desc: "Deep learning plant diagnostic classifier translating raw leaf imagery into disease detection and treatment steps.",
    stack: ["PyTorch", "OpenCV", "Transfer Learning", "Python"],
    problem: "Farmers need rapid, accurate crop pathology screening without specialized laboratory equipment.",
    solution: "Trained convolutional image classification networks with OpenCV leaf segmentation to surface actionable guidance.",
    img: agrivisionImg,
    url: "/work",
    live: null,
    theme: "dark"
  }
];

// ─── Section 06: Scroll-Scrubbed Trajectory Chapters ──────────────────────────
const TRAJECTORY_MILESTONES = [
  {
    period: "AUG 2026 – PRESENT",
    shortYear: "2026 — NOW",
    role: "Software Engineer & AI/Data Science Trainer",
    organization: "Data Valley Training, Placements & IT Solutions",
    location: "Vijayawada, AP",
    type: "Production & Education",
    featured: true,
    desc: "Architecting web application features, AI viva workflows, and milestone state models for DV Labs while delivering hands-on training in Python, Data Science, Machine Learning, and Generative AI."
  },
  {
    period: "JAN – APR 2025",
    shortYear: "2025",
    role: "Software Development Intern",
    organization: "StudyOwl Education Pvt. Ltd.",
    location: "Remote",
    type: "Backend & Full-Stack",
    featured: false,
    desc: "Developed RESTful APIs, JWT authentication modules, React components, and MongoDB backend services."
  },
  {
    period: "MAY – JUN 2024",
    shortYear: "2024",
    role: "Machine Learning Intern",
    organization: "Blackbucks",
    location: "Remote",
    type: "Applied ML",
    featured: false,
    desc: "Built automated Python data preprocessing pipelines, feature engineering routines, and Scikit-learn classification models."
  },
  {
    period: "2024",
    shortYear: "2024",
    role: "Applied Engineering & Automation Intern",
    organization: "SmartBridge & Helson",
    location: "Industry Tracks",
    type: "Applied Systems",
    featured: false,
    desc: "Delivered TensorFlow CNN classification APIs with Flask (SmartBridge) and enterprise workflow automation solutions (Helson)."
  },
  {
    period: "2022 – 2026",
    shortYear: "2022–26",
    role: "B.Tech in Artificial Intelligence & Data Science",
    organization: "Ramachandra College of Engineering (JNTUK)",
    location: "Eluru, AP",
    type: "7.5 CGPA",
    featured: false,
    desc: "Comprehensive engineering foundation spanning Machine Learning, Deep Learning, Data Mining, Database Systems, and Cloud Computing."
  },
  {
    period: "2020 – 2022",
    shortYear: "2020–22",
    role: "Intermediate (Class XII · MPC)",
    organization: "Sri Vidya Junior College",
    location: "Gudivada, AP",
    type: "78% · Grade A",
    featured: false,
    desc: "Higher secondary specialization in Higher Mathematics, Physics, and Chemistry (784 / 1000)."
  },
  {
    period: "2019 – 2020",
    shortYear: "2019–20",
    role: "Secondary School Certificate (Class X)",
    organization: "Montessori High School",
    location: "Gudivada, AP",
    type: "95% Distinction",
    featured: false,
    desc: "First Division with Distinction (546 / 600), scoring 98 / 100 in Mathematics."
  }
];

// ─── Section 07: Authentic Documentary Education Stages ───────────────────────
const EDUCATION_STAGES = [
  {
    id: "pbr-vits",
    tab: "01 · PBR VITS Talk",
    badge: "TECHNICAL TALK · OCTOBER 10, 2026",
    location: "PBR VITS (Autonomous), Kavali",
    headline: "AI Innovation & Startup Opportunities",
    audience: "IV-Year B.Tech AIML Students & Faculty",
    img: pbrTalkPhoto,
    imgAlt: "Students attending the AI Innovation and Startup Opportunities technical talk at PBR VITS, Kavali on October 10, 2026",
    summary:
      "Invited by the Internal Quality Assurance Cell (IQAC) of PBR Visvodaya Institute of Technology & Science to demystify production AI architectures, agentic workflows, and startup viability for final-year AIML engineers.",
    takeaways: ["Production AI APIs", "Agentic Systems", "Startup Problem Discovery"],
    hasLetter: true,
    route: "/experience#pbr-vits"
  },
  {
    id: "pace",
    tab: "02 · PACE Workshop",
    badge: "ONE-WEEK HANDS-ON WORKSHOP",
    location: "PACE Institute of Technology & Sciences, Ongole",
    headline: "Generative AI & Prompt Engineering",
    audience: "150+ Undergraduate Engineers (CSE · AI&DS · AI&ML)",
    img: paceImg,
    imgAlt: "Generative AI and Prompt Engineering hands-on workshop at PACE College of Engineering, Ongole",
    summary:
      "Delivered an intensive one-week practical workshop instructing 150+ engineering students on structured prompt taxonomies, few-shot conditioning, safe Flask/LLM API integration, and real-world project builds.",
    takeaways: ["Prompt Conditioning", "LLM API Integration", "150+ Students Trained"],
    hasLetter: false,
    route: "/experience#pace-ongole"
  },
  {
    id: "datavalley",
    tab: "03 · Data Valley Cohorts",
    badge: "ONGOING TECHNICAL INSTRUCTION",
    location: "Data Valley Training, Placements & IT Solutions",
    headline: "Python, Data Science & Applied AI",
    audience: "Full-Stack & Data Science Engineering Cohorts",
    img: datavalleyImg,
    imgAlt: "Technical training and mentorship session at Data Valley Training, Placements & IT Solutions in Vijayawada",
    summary:
      "Combining daily software engineering with practical technical instruction across Python, Data Science, Machine Learning, Deep Learning, NLP, and Generative AI through live coding labs and architecture reviews.",
    takeaways: ["Python & Data Pipelines", "ML / DL Architectures", "1-on-1 Code Reviews"],
    hasLetter: false,
    route: "/experience#training"
  }
];

// ─── Section 03: Flagship Interactive Architecture Pillars ────────────────────
const DV_LABS_PILLARS = [
  {
    num: "01",
    tab: "Platform Overview",
    title: "Milestone-Locked Sprints",
    desc: "Stage-gated engineering workflows where every capstone milestone advances only after architectural review.",
    img: dvLabsHeroImg,
    alt: "DV Labs — Where vision meets execution. Official production platform environment.",
    statusText: "LIVE · dvlabs.datavalley.ai"
  },
  {
    num: "02",
    tab: "AI Viva Defense",
    title: "AI Viva Defense Engine",
    desc: "Real-time automated technical interrogation verifying code ownership, system trade-offs, and comprehension.",
    img: dvLabsHeroImg,
    alt: "DV Labs — Automated AI viva defense and capstone evaluation workflows.",
    statusText: "VIVA ENGINE · PRODUCTION"
  },
  {
    num: "03",
    tab: "Assessment Sync",
    title: "Synchronized Assessment Canvas",
    desc: "40-question timed examination system backed by HTTP-only JWT security, delta auto-sync, and deterministic grading.",
    img: dvAssessmentImg,
    alt: "DV Labs Assessment Platform — 40-question timed testing canvas and synchronized countdown timer.",
    statusText: "LIVE · dv-assesments.vercel.app"
  }
];

const DHEERGAYUSH_PILLARS = [
  {
    num: "01",
    title: "Bilingual Voice Pipeline",
    desc: "Low-latency speech processing bridging native Telugu and clinical English for universal accessibility.",
    telemetry: "TELUGU ↔ ENGLISH · VOICE SYNTHESIS"
  },
  {
    num: "02",
    title: "Clinical Reasoning & RAG",
    desc: "Context-grounded medical and Ayurvedic protocol retrieval powered by GPT-4o-mini triage validation.",
    telemetry: "GPT-4o-mini · MEDICAL RAG ENGINE"
  },
  {
    num: "03",
    title: "Audio-Driven 2D Avatar",
    desc: "Real-time facial lip synchronization providing warm, reassuring visual guidance during patient consultation.",
    telemetry: "AUDIO-DRIVEN 2D LIP SYNCHRONIZATION"
  }
];

export default function Overview() {
  const navigate = useNavigate();
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  // Section 02 & 03: Hero Spotlight + Flagship Interactive Pillars
  const heroRef = useRef(null);
  const dheerRef = useRef(null);
  const [activeDvPillarIdx, setActiveDvPillarIdx] = useState(0);
  const [activeDheerPillarIdx, setActiveDheerPillarIdx] = useState(0);

  // Section 04: Interactive 6-Engine Capabilities Switcher + Spotlight Coordinates
  const [activeDiscIdx, setActiveDiscIdx] = useState(0);
  const siliconRef = useRef(null);

  // Section 05: Apple Horizontal Gallery + Quick-Inspect Overlay
  const galleryRef = useRef(null);
  const [galleryActiveIdx, setGalleryActiveIdx] = useState(0);
  const [inspectProject, setInspectProject] = useState(null);

  // Section 06: Scroll-Scrubbed Living Spine
  const spineContainerRef = useRef(null);
  const spineBeamRef = useRef(null);
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState(0);

  // Section 07: Documentary Education Switcher
  const [activeEduIdx, setActiveEduIdx] = useState(0);

  // Section 08: Vision Spotlight
  const visionRef = useRef(null);

  // Section 09: Clipboard Copy State
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Subtle GPU-only cursor radial light tracking (zero React re-renders!)
  const handleSpotlightMove = useCallback((refObj) => (e) => {
    const el = refObj.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  // Scroll-scrubbed laser spine animation with GSAP ScrollTrigger
  useEffect(() => {
    const container = spineContainerRef.current;
    const beam = spineBeamRef.current;
    if (!container || !beam) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      beam.style.transform = "scaleY(1)";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        beam,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 65%",
            end: "bottom 65%",
            scrub: 0.4
          }
        }
      );

      // Highlight individual milestone nodes on intersection
      const cards = container.querySelectorAll("[data-milestone-idx]");
      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 58%",
          end: "bottom 42%",
          onEnter: () => setActiveMilestoneIdx(Number(card.getAttribute("data-milestone-idx"))),
          onEnterBack: () => setActiveMilestoneIdx(Number(card.getAttribute("data-milestone-idx")))
        });
      });
    }, spineContainerRef);

    return () => ctx.revert();
  }, []);

  // Horizontal gallery scroll & arrow buttons
  const scrollGalleryBy = useCallback((direction) => {
    const el = galleryRef.current;
    if (!el) return;
    const cardEl = el.querySelector(".es-ik-card");
    const step = cardEl ? cardEl.offsetWidth + 24 : 380;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  const handleGalleryScroll = useCallback(() => {
    const el = galleryRef.current;
    if (!el) return;
    const cardEl = el.querySelector(".es-ik-card");
    const step = cardEl ? cardEl.offsetWidth + 24 : 380;
    const idx = Math.round(el.scrollLeft / step);
    setGalleryActiveIdx(Math.min(INNOVATION_SHOWCASE.length - 1, Math.max(0, idx)));
  }, []);

  // Quick-Inspect Modal keyboard ESC & scroll lock
  useEffect(() => {
    if (!inspectProject) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setInspectProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [inspectProject]);

  // Clipboard email copy feedback
  const handleCopyEmail = useCallback(() => {
    const email = "thenameisbhagavan@gmail.com";
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(email).catch(() => {});
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2400);
  }, []);

  const activeDvPillar = DV_LABS_PILLARS[activeDvPillarIdx];
  const activeDheerPillar = DHEERGAYUSH_PILLARS[activeDheerPillarIdx];
  const activeDisc = CAPABILITY_DISCIPLINES[activeDiscIdx];
  const ActiveDiscIcon = activeDisc.icon;
  const activeEdu = EDUCATION_STAGES[activeEduIdx];

  return (
    <>
      <SEO
        description="Official portfolio of Bhagavan (TheNameIsBhagavan) — Software Engineer & AI Solutions Developer at Data Valley Training, Placements & IT Solutions. Working across software engineering, intelligent application development, and Artificial Intelligence."
        keywords="TheNameIsBhagavan, Bhagavan, Software Engineer, AI Data Science Trainer, AI Solutions Developer, Data Valley Training Placements & IT Solutions, Machine Learning, Generative AI, Prompt Engineering, Agentic AI, DV Labs, DHEERGAYUSH, CareerOS, VERITAS, VoltDrive"
      />

      <div className="engineering-surface">

        {/* ============================================================
            SECTION 02 — ARCHITECTURAL STUDIO HERO (MATCHING APPLE KEYNOTE DNA)
            ============================================================ */}
        <section
          ref={heroRef}
          onMouseMove={handleSpotlightMove(heroRef)}
          className="es-hero"
          data-nav-theme="light"
        >
          <div className="es-hero-grid-bg" aria-hidden="true" />
          <div className="es-hero-spotlight" aria-hidden="true" />

          <div className="es-hero-grid">

            {/* LEFT COLUMN: EDITORIAL STUDIO CONTENT */}
            <div className="es-hero-left">
              {/* Live Identity Beacon Pill (Desktop) */}
              <div className="es-hero-beacon es-hero-eyebrow-desktop">
                <span className="es-cw-pulse-dot" style={{ background: "#34c759" }} aria-hidden="true" />
                <span>SOFTWARE ENGINEER &amp; AI TRAINER &middot; DATA VALLEY</span>
              </div>

              {/* Professional Identity Stack (Mobile) */}
              <div className="es-hero-mobile-identity" aria-label="Professional Roles">
                <span className="es-mobile-id-badge">SOFTWARE ENGINEER</span>
                <span className="es-hero-eyebrow-sep" aria-hidden="true">&bull;</span>
                <span className="es-mobile-id-badge">AI DEVELOPER</span>
                <span className="es-hero-eyebrow-sep" aria-hidden="true">&bull;</span>
                <span className="es-mobile-id-badge">TRAINER</span>
              </div>

              {/* Primary Headline — Mask Reveal Typography (Desktop) */}
              <div className="es-hero-title-group es-hero-title-desktop">
                <h1 className="es-hero-headline" aria-label="Engineering Intelligence. Building What's Next.">
                  <span className="es-hero-hl-mask">
                    <span className="es-hero-hl-line line-1">Engineering Intelligence.</span>
                  </span>
                  <span className="es-hero-hl-mask">
                    <span className="es-hero-hl-line line-2">Building What&apos;s Next.</span>
                  </span>
                </h1>
              </div>

              {/* Primary Headline — Apple-Inspired Typography (Mobile) */}
              <div className="es-hero-title-group es-hero-title-mobile">
                <h1 className="es-hero-headline-mobile" aria-label="I Build Intelligent Digital Experiences.">
                  <span className="es-hero-mobile-hl-line line-1">I Build Intelligent</span>
                  <span className="es-hero-mobile-hl-line line-2">Digital Experiences.</span>
                </h1>
              </div>

              {/* High-Impact Apple One-Liner (Desktop) */}
              <p className="es-hero-sub es-hero-sub-desktop">
                Intelligent software and applied AI, engineered for real-world impact.
              </p>

              {/* High-Impact Statement (Mobile) */}
              <p className="es-hero-sub-mobile">
                Intelligent software and applied AI, engineered for real-world impact.
              </p>

              {/* Mobile Portrait (Between text and CTAs on small viewports) */}
              <div className="es-hero-portrait-mobile">
                <div className="es-hero-portrait-frame">
                  <img
                    src={profileHeroImg}
                    alt="Siva Satya Sai Bhagavan Gopalajosyula — Software Engineer &amp; AI Solutions Developer"
                    loading="eager"
                    fetchpriority="high"
                    className="es-hero-portrait-img"
                  />
                  <div className="es-hero-portrait-scrim" aria-hidden="true" />
                </div>
              </div>

              {/* Tactile Apple Pill CTAs (Desktop) */}
              <div className="es-hero-actions-group es-hero-actions-desktop">
                <MagneticLink strength={0.2}>
                  <button
                    className="es-hero-btn-primary es-pill-cta apple-pressable"
                    onClick={() => navigate("/work")}
                    aria-label="Explore My Work"
                  >
                    <span>Explore My Work</span>
                    <ArrowRight size={15} className="es-hero-btn-arrow" strokeWidth={2.2} />
                  </button>
                </MagneticLink>

                <MagneticLink strength={0.2}>
                  <button
                    className="es-hero-btn-secondary es-pill-cta apple-pressable"
                    onClick={() => navigate("/resume")}
                    aria-label="View Resume"
                  >
                    <span>View Resume</span>
                  </button>
                </MagneticLink>

                <MagneticLink strength={0.2}>
                  <button
                    className="es-hero-btn-tertiary es-pill-cta apple-pressable"
                    onClick={() => navigate("/experience")}
                    aria-label="View Experience"
                  >
                    <span>Experience</span>
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </button>
                </MagneticLink>
              </div>

              {/* Interactive CTAs (Mobile) */}
              <div className="es-hero-actions-group-mobile">
                <button
                  className="es-mobile-btn-primary apple-pressable"
                  onClick={() => navigate("/work")}
                  aria-label="Explore My Work"
                >
                  <span>Explore My Work</span>
                  <ArrowRight size={15} className="es-hero-btn-arrow" strokeWidth={2.2} />
                </button>

                <button
                  className="es-mobile-btn-secondary apple-pressable"
                  onClick={() => navigate("/resume")}
                  aria-label="View Resume"
                >
                  <span>View Resume</span>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: STUDIO PORTRAIT */}
            <div className="es-hero-right">
              <SpringTilt maxTilt={3} scale={1.015} className="es-hero-portrait-env">
                <div className="es-hero-portrait-frame">
                  <img
                    src={profileHeroImg}
                    alt="Bhagavan — Software Engineer &amp; AI Solutions Developer"
                    loading="eager"
                    fetchpriority="high"
                    className="es-hero-portrait-img"
                  />
                  <div className="es-hero-portrait-scrim" aria-hidden="true" />
                </div>
              </SpringTilt>
            </div>

          </div>

          {/* Centered Bottom Apple Scroll Hint */}
          <div className="es-hero-scroll-indicator" aria-hidden="true">
            <span className="es-hero-scroll-text">Scroll to explore</span>
            <ChevronDown size={14} className="es-hero-scroll-chevron" />
          </div>
        </section>


        {/* ============================================================
            SECTION 03 — FEATURED ENGINEERING (PEARL + OBSIDIAN DUO CARDS)
            ============================================================ */}
        <section id="featured-work" className="es-company-work-section" data-nav-theme="light">
          <div className="es-bounds">

            {/* Section Header */}
            <div className="es-cw-header">
              <Reveal y={16} duration={0.8}>
                <div className="es-cw-eyebrow-row">
                  <span className="es-cw-live-pill">
                    <span className="es-cw-pulse-dot" aria-hidden="true"></span>
                    FEATURED FLAGSHIPS &middot; PRODUCTION &amp; RESEARCH
                  </span>
                  <span className="es-cw-company-badge">SELECTED WORK</span>
                </div>
              </Reveal>

              <Reveal y={20} duration={0.9} delay={0.1}>
                <h2 className="es-cw-headline">
                  Technology, built with purpose.
                </h2>
              </Reveal>

              <Reveal y={20} duration={0.9} delay={0.18}>
                <p className="es-cw-lead">
                  Production platforms and clinical AI architectures crafted to transform complex workflows into intuitive software.
                </p>
              </Reveal>
            </div>

            {/* Showcase Stack */}
            <div className="es-cw-projects-stack">

              {/* ────────────────────────────────────────────────────────
                  FLAGSHIP 01: DV LABS (LUMINOUS PEARL 2-COLUMN INTERACTIVE)
                  ──────────────────────────────────────────────────────── */}
              <ScaleReveal className="es-apple-duo-card theme-pearl">
                <div className="es-adc-grid">
                  {/* Left Column: Editorial & Interactive Architecture Pillars */}
                  <div className="es-adc-content">
                    <div className="es-adc-meta">
                      <span className="es-adc-eyebrow">
                        COMPANY FLAGSHIP &middot; DATA VALLEY
                      </span>
                      <span className="es-adc-status-pill">
                        <span className="es-cw-pulse-dot" style={{ background: "#34c759" }} aria-hidden="true"></span>
                        PRODUCTION PLATFORM
                      </span>
                    </div>

                    <h3 className="es-adc-title">
                      DV Labs<span className="es-adc-dot">.</span>
                    </h3>

                    <p className="es-adc-tagline">
                      Where vision meets execution.
                    </p>

                    <p className="es-adc-desc">
                      An AI-guided capstone-to-career engineering platform empowering cohorts to build, verify, and defend software through milestone-locked sprints and automated viva evaluation.
                    </p>

                    {/* Interactive Architecture Layer Tabs (Switches Right Stage Screenshot & Readout) */}
                    <div className="es-adc-interactive-list" role="tablist" aria-label="DV Labs Platform Capabilities">
                      {DV_LABS_PILLARS.map((pillar, idx) => {
                        const isActive = activeDvPillarIdx === idx;
                        return (
                          <button
                            key={pillar.num}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => setActiveDvPillarIdx(idx)}
                            className={`es-adc-layer-btn ${isActive ? "active" : ""}`}
                          >
                            <div className="es-adl-head">
                              <span className="es-adl-num">{pillar.num}</span>
                              <span className="es-adl-title">{pillar.title}</span>
                              <ArrowRight size={13} className="es-adl-arrow" aria-hidden="true" />
                            </div>
                            {isActive && <p className="es-adl-desc">{pillar.desc}</p>}
                          </button>
                        );
                      })}
                    </div>

                    <div className="es-adc-actions">
                      <MagneticLink strength={0.2}>
                        <button
                          className="es-hero-btn-primary es-pill-cta apple-pressable"
                          onClick={() => navigate(activeDvPillarIdx === 2 ? "/work/data-valley-assessment-platform" : "/work/dv-labs-platform")}
                        >
                          <span>{activeDvPillarIdx === 2 ? "Explore Assessment System" : "Explore DV Labs"}</span>
                          <ArrowRight size={15} />
                        </button>
                      </MagneticLink>

                      <MagneticLink strength={0.2}>
                        <a
                          href={activeDvPillarIdx === 2 ? "https://dv-assesments.vercel.app/" : "https://dvlabs.datavalley.ai/"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="es-adc-link"
                        >
                          <span>Visit Live Environment</span>
                          <ArrowUpRight size={14} />
                        </a>
                      </MagneticLink>
                    </div>

                    <div className="es-adc-attribution">
                      <span className="es-adc-attr-tag">ROLE</span>
                      <span className="es-adc-attr-text">
                        <strong>Software Engineer &middot; Data Valley:</strong> Architected web modules, AI viva pipelines, and candidate assessment sync.
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Single Optical Stage with AnimatePresence View Switch */}
                  <div className="es-adc-visual">
                    <SpringTilt maxTilt={2.6} scale={1.015} className="es-adc-tilt-wrap">
                      <div className="es-adc-frame es-adc-stage-frame">
                        <AnimatePresence mode="wait">
                          <Motion.img
                            key={`${activeDvPillar.num}-${activeDvPillar.tab}`}
                            src={activeDvPillar.img}
                            alt={activeDvPillar.alt}
                            initial={{ opacity: 0, scale: 1.03 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.985 }}
                            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                            className="es-adc-img"
                          />
                        </AnimatePresence>
                        <div className="es-adc-visual-scrim" aria-hidden="true" />
                        <div className="es-adc-float-status">
                          <span className="es-cw-pulse-dot" style={{ background: "#34c759" }} aria-hidden="true" />
                          <span>{activeDvPillar.statusText}</span>
                        </div>
                      </div>
                    </SpringTilt>
                  </div>
                </div>
              </ScaleReveal>


              {/* ────────────────────────────────────────────────────────
                  FLAGSHIP 02: DHEERGAYUSH (DARK OBSIDIAN TITANIUM 2-COLUMN)
                  ──────────────────────────────────────────────────────── */}
              <ScaleReveal className="es-apple-duo-card theme-obsidian">
                <div
                  ref={dheerRef}
                  onMouseMove={handleSpotlightMove(dheerRef)}
                  className="es-dheer-spotlight-inner"
                >
                  <div className="es-dheer-spotlight" aria-hidden="true" />
                  <div className="es-adc-grid reversed">
                  {/* Right Column on Desktop: Editorial & Clinical Capabilities */}
                  <div className="es-adc-content">
                    <div className="es-adc-meta">
                      <span className="es-adc-eyebrow">
                        HEALTHCARE INTELLIGENCE &middot; CLINICAL AI
                      </span>
                      <span className="es-adc-status-pill obsidian-blue">
                        <span className="es-cw-pulse-dot" style={{ background: "#2997ff" }} aria-hidden="true"></span>
                        VOICE &amp; MULTIMODAL
                      </span>
                    </div>

                    <h3 className="es-adc-title">
                      DHEERGAYUSH<span className="es-adc-dot">.</span>
                    </h3>

                    <p className="es-adc-tagline">
                      Healthcare interaction. In every language.
                    </p>

                    <p className="es-adc-desc">
                      A bilingual clinical voice intelligence system bridging Telugu and English across rural telemedicine, powered by GPT-4o-mini reasoning and real-time avatar lip synchronization.
                    </p>

                    {/* Interactive Clinical Pillar Selector */}
                    <div className="es-adc-interactive-list" role="tablist" aria-label="DHEERGAYUSH Clinical Architecture">
                      {DHEERGAYUSH_PILLARS.map((pillar, idx) => {
                        const isActive = activeDheerPillarIdx === idx;
                        return (
                          <button
                            key={pillar.num}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => setActiveDheerPillarIdx(idx)}
                            className={`es-adc-layer-btn obsidian ${isActive ? "active" : ""}`}
                          >
                            <div className="es-adl-head">
                              <span className="es-adl-num">{pillar.num}</span>
                              <span className="es-adl-title">{pillar.title}</span>
                              <ArrowRight size={13} className="es-adl-arrow" aria-hidden="true" />
                            </div>
                            {isActive && <p className="es-adl-desc">{pillar.desc}</p>}
                          </button>
                        );
                      })}
                    </div>

                    <div className="es-adc-actions">
                      <MagneticLink strength={0.2}>
                        <button
                          className="es-vision-btn-primary apple-pressable"
                          onClick={() => navigate("/work")}
                        >
                          <span>Explore Architecture</span>
                          <ArrowRight size={15} />
                        </button>
                      </MagneticLink>

                      <MagneticLink strength={0.2}>
                        <button
                          className="es-adc-link obsidian"
                          onClick={() => navigate("/work")}
                        >
                          <span>Clinical Specifications</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </MagneticLink>
                    </div>

                    <div className="es-adc-attribution obsidian">
                      <span className="es-adc-attr-tag">ROLE</span>
                      <span className="es-adc-attr-text">
                        <strong>AI Developer &middot; Clinical Architecture:</strong> Engineered bilingual voice pipelines, RAG triaging, and avatar sync.
                      </span>
                    </div>
                  </div>

                  {/* Left Column on Desktop: Authentic Platform Visual on Dark Display Stage */}
                  <div className="es-adc-visual">
                    <SpringTilt maxTilt={2.6} scale={1.015} className="es-adc-tilt-wrap">
                      <div className="es-adc-frame obsidian-frame">
                        <img
                          src={dheergayushHeroImg}
                          alt="DHEERGAYUSH — Consult a certified Vaidya from wherever you are. Official telemedicine and AI consultation platform."
                          className="es-adc-img"
                          loading="lazy"
                        />
                        <div className="es-adc-visual-scrim" aria-hidden="true" />
                        <div className="es-adc-float-status dark">
                          <span className="es-cw-pulse-dot" style={{ background: "#2997ff" }} aria-hidden="true" />
                          <span>{activeDheerPillar.telemetry}</span>
                        </div>
                      </div>
                    </SpringTilt>
                  </div>
                </div>
                </div>
              </ScaleReveal>

            </div>

          </div>
        </section>


        {/* ============================================================
            SECTION 04 — THE SILICON & INTELLIGENCE STAGE (DARK TITANIUM)
            ============================================================ */}
        <section
          id="capabilities"
          ref={siliconRef}
          onMouseMove={handleSpotlightMove(siliconRef)}
          className="es-silicon-section"
          data-nav-theme="dark"
        >
          <div className="es-silicon-spotlight" aria-hidden="true" />
          <div className="es-bounds es-silicon-inner">

            {/* Editorial Chrome Header */}
            <div className="es-silicon-header">
              <Reveal y={14} duration={0.8}>
                <span className="es-silicon-eyebrow">ENGINEERING ARCHITECTURE &amp; CAPABILITIES</span>
              </Reveal>
              <Reveal y={20} duration={0.9} delay={0.08}>
                <h2 className="es-silicon-headline">
                  Across intelligence.<br />Across engineering.
                </h2>
              </Reveal>
              <Reveal y={20} duration={0.9} delay={0.16}>
                <p className="es-silicon-lead">
                  Six interconnected engineering disciplines uniting mathematical AI foundations with deterministic full-stack systems.
                </p>
              </Reveal>
            </div>

            {/* Interactive Apple Feature Switcher Stage */}
            <div className="es-silicon-stage">
              {/* Left Rail: Interactive Selector List */}
              <div className="es-silicon-rail" role="tablist" aria-label="Engineering Capabilities">
                {CAPABILITY_DISCIPLINES.map((disc, idx) => {
                  const Icon = disc.icon;
                  const isActive = activeDiscIdx === idx;
                  return (
                    <button
                      key={disc.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveDiscIdx(idx)}
                      className={`es-silicon-tab ${isActive ? "active" : ""}`}
                      style={{ "--tab-accent": disc.accent }}
                    >
                      <span className="es-stab-indicator" aria-hidden="true" />
                      <span className="es-stab-num">{disc.num}</span>
                      <span className="es-stab-icon">
                        <Icon size={17} strokeWidth={2} />
                      </span>
                      <div className="es-stab-meta">
                        <span className="es-stab-title">{disc.title}</span>
                        <span className="es-stab-sub">{disc.tagline}</span>
                      </div>
                      <ArrowRight size={15} className="es-stab-arrow" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>

              {/* Right Viewport: Animated Optical Blueprint Display */}
              <div className="es-silicon-viewport" role="tabpanel">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={activeDisc.id}
                    initial={{ opacity: 0, y: 14, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.985 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="es-sv-panel"
                    style={{ "--disc-accent": activeDisc.accent }}
                  >
                    {/* Orbital Geometric Ring & Central Emblem */}
                    <div className="es-sv-top-visual">
                      <div className="es-sv-orbital-core">
                        <span className="es-sv-ring ring-outer" aria-hidden="true" />
                        <span className="es-sv-ring ring-inner" aria-hidden="true" />
                        <div className="es-sv-core-emblem">
                          <ActiveDiscIcon size={30} color={activeDisc.accent} strokeWidth={1.75} />
                        </div>
                      </div>

                      <div className="es-sv-telemetry">
                        <div className="es-sv-tel-item">
                          <span className="es-sv-tel-label">DISCIPLINE</span>
                          <span className="es-sv-tel-val">{activeDisc.num} / {activeDisc.title}</span>
                        </div>
                        <div className="es-sv-tel-item">
                          <span className="es-sv-tel-label">CORE RUNTIME</span>
                          <span className="es-sv-tel-val">{activeDisc.runtime}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="es-sv-title">{activeDisc.tagline}</h3>
                    <p className="es-sv-desc">{activeDisc.desc}</p>

                    <div className="es-sv-highlights">
                      {activeDisc.highlights.map((item) => (
                        <div key={item} className="es-sv-hl-chip">
                          <CheckCircle2 size={13} color={activeDisc.accent} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="es-sv-divider" />

                    {/* Signature Technology Stack */}
                    <div className="es-sv-stack-row">
                      <div className="es-sv-stack-icons">
                        {activeDisc.stackIcons.map((stk) => {
                          const SIcon = stk.icon;
                          return (
                            <div key={stk.label} className="es-sv-stack-pill">
                              <SIcon size={15} color={stk.color} />
                              <span>{stk.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      <button
                        type="button"
                        className="es-sv-explore-link"
                        onClick={() => navigate("/ecosystem")}
                      >
                        <span>Full Ecosystem</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Dark Chrome Dual-Direction Technology Marquee */}
          <div className="es-tech-trains-container es-tech-trains-dark" aria-label="Dual-direction continuous technology stream">
            {[
              { track: TECH_TRAIN_1, cls: "es-train-rtl", prefix: "t1" },
              { track: TECH_TRAIN_2, cls: "es-train-ltr", prefix: "t2" }
            ].map(({ track, cls, prefix }) => (
              <div key={prefix} className="es-tech-train-outer">
                <div className={`es-tech-train-track ${cls}`}>
                  {[false, true].map((isDup) => (
                    <div
                      key={`${prefix}-${isDup ? "dup" : "orig"}`}
                      className="es-tech-train-group"
                      aria-hidden={isDup || undefined}
                    >
                      {track.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div
                            className="es-tech-item"
                            style={{ "--brand-color": item.darkColor || item.color }}
                            key={`${prefix}-${isDup ? "d" : "o"}-${idx}`}
                          >
                            <span className="es-tech-icon" aria-hidden="true">
                              <Icon size={18} />
                            </span>
                            <span className="es-tech-name">{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ============================================================
            SECTION 05 — APPLE KEYNOTE HORIZONTAL INNOVATION GALLERY
            ============================================================ */}
        <section id="innovation-projects" className="es-inno-gallery-section" data-nav-theme="light">
          <div className="es-bounds">
            <div className="es-ik-top-row">
              <div className="es-ik-heading-group">
                <Reveal y={14} duration={0.8}>
                  <span className="es-section-label">INNOVATION &amp; SYSTEMS GALLERY</span>
                </Reveal>
                <Reveal y={18} duration={0.9} delay={0.08}>
                  <h2 className="es-display-headline">
                    Curiosity becomes creation.
                  </h2>
                </Reveal>
                <Reveal y={18} duration={0.9} delay={0.14}>
                  <p className="es-ik-sub">
                    Independently architected platforms across career intelligence, explainable NLP, synced assessments, and 3D experiences. Click <span className="es-ik-plus-hint">+</span> on any system to inspect architecture.
                  </p>
                </Reveal>
              </div>

              {/* Apple Gallery Navigation Controls */}
              <div className="es-ik-controls">
                <span className="es-ik-counter">
                  {String(galleryActiveIdx + 1).padStart(2, "0")} / {String(INNOVATION_SHOWCASE.length).padStart(2, "0")}
                </span>
                <div className="es-ik-arrows">
                  <button
                    type="button"
                    className="es-ik-nav-btn apple-pressable"
                    onClick={() => scrollGalleryBy(-1)}
                    disabled={galleryActiveIdx === 0}
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    className="es-ik-nav-btn apple-pressable"
                    onClick={() => scrollGalleryBy(1)}
                    disabled={galleryActiveIdx === INNOVATION_SHOWCASE.length - 1}
                    aria-label="Next project"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Scroll-Snap Showcase Deck */}
          <div
            ref={galleryRef}
            onScroll={handleGalleryScroll}
            className="es-ik-track-scroll"
            role="region"
            aria-label="Interactive Project Showcase Gallery"
          >
            <div className="es-ik-track-inner">
              {INNOVATION_SHOWCASE.map((proj) => (
                <article
                  key={proj.id}
                  className={`es-ik-card theme-${proj.theme}`}
                  onClick={() => setInspectProject(proj)}
                >
                  <div className="es-ik-card-head">
                    <div className="es-ik-meta-row">
                      <span className="es-ik-cat">{proj.id} &middot; {proj.category}</span>
                      <button
                        type="button"
                        className="es-ik-inspect-btn"
                        aria-label={`Quick inspect ${proj.name}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setInspectProject(proj);
                        }}
                      >
                        <Plus size={16} strokeWidth={2.3} />
                      </button>
                    </div>
                    <h3 className="es-ik-title">{proj.name}</h3>
                    <p className="es-ik-headline">{proj.headline}</p>
                    <p className="es-ik-desc">{proj.desc}</p>
                  </div>

                  <div className="es-ik-card-visual">
                    <img src={proj.img} alt={proj.name} loading="lazy" className="es-ik-img" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="es-bounds es-ik-bottom-bar">
            <div className="es-ik-dots" aria-hidden="true">
              {INNOVATION_SHOWCASE.map((proj, idx) => (
                <span
                  key={proj.id}
                  className={`es-ik-dot ${galleryActiveIdx === idx ? "active" : ""}`}
                />
              ))}
            </div>

            <div className="es-ik-footer-actions">
              <MagneticLink strength={0.2}>
                <button
                  type="button"
                  className="es-hero-btn-primary apple-pressable"
                  onClick={() => navigate("/work")}
                >
                  <span>Explore All Work</span>
                  <ArrowRight size={15} />
                </button>
              </MagneticLink>
              <MagneticLink strength={0.2}>
                <button
                  type="button"
                  className="es-adc-link"
                  onClick={() => navigate("/innovation")}
                >
                  <span>Innovation Lab</span>
                  <ArrowUpRight size={14} />
                </button>
              </MagneticLink>
            </div>
          </div>
        </section>


        {/* ============================================================
            SECTION 06 — SCROLL-SCRUBBED LIVING SPINE TRAJECTORY
            ============================================================ */}
        <section id="journey" className="es-spine-journey-section" data-nav-theme="light">
          <div className="es-bounds">
            <div className="es-sj-layout">

              {/* Sticky Editorial Anchor Left Column */}
              <div className="es-sj-sticky-col">
                <Reveal y={14} duration={0.8}>
                  <span className="es-section-label">CHRONOLOGICAL TRAJECTORY</span>
                </Reveal>
                <Reveal y={18} duration={0.9} delay={0.08}>
                  <h2 className="es-sj-headline">
                    Built through learning.<br />
                    <span className="text-muted">Driven by engineering.</span>
                  </h2>
                </Reveal>
                <Reveal y={18} duration={0.9} delay={0.14}>
                  <p className="es-sj-copy">
                    Every academic chapter and production internship stacked cleanly into real-world AI development and technical education.
                  </p>
                </Reveal>

                {/* Live Active Chapter Readout Pill */}
                <div className="es-sj-active-readout">
                  <span className="es-sj-readout-dot" aria-hidden="true" />
                  <div className="es-sj-readout-text">
                    <span className="es-sj-readout-kicker">ACTIVE CHAPTER</span>
                    <span className="es-sj-readout-val">
                      {TRAJECTORY_MILESTONES[activeMilestoneIdx]?.period}
                    </span>
                  </div>
                </div>

                <div className="es-sj-actions">
                  <MagneticLink strength={0.2}>
                    <button
                      type="button"
                      className="es-hero-btn-primary apple-pressable"
                      onClick={() => navigate("/experience")}
                    >
                      <span>Experience Timeline</span>
                      <ArrowRight size={15} />
                    </button>
                  </MagneticLink>
                  <MagneticLink strength={0.2}>
                    <button
                      type="button"
                      className="es-hero-btn-secondary apple-pressable"
                      onClick={() => navigate("/academic-archive")}
                    >
                      <span>Academic Archive</span>
                    </button>
                  </MagneticLink>
                </div>
              </div>

              {/* Right Column: GSAP Scrubbed Living Spine */}
              <div ref={spineContainerRef} className="es-sj-spine-col">
                <div className="es-sj-rail-track" aria-hidden="true">
                  <div ref={spineBeamRef} className="es-sj-rail-beam">
                    <span className="es-sj-beam-head" />
                  </div>
                </div>

                <div className="es-sj-chapters">
                  {TRAJECTORY_MILESTONES.map((item, idx) => {
                    const isActive = activeMilestoneIdx === idx;
                    return (
                      <Reveal
                        key={item.period}
                        y={22}
                        duration={0.75}
                        delay={0.05}
                        className={`es-sj-chapter ${isActive ? "active" : ""} ${item.featured ? "featured" : ""}`}
                        data-milestone-idx={idx}
                      >
                        <span className="es-sj-node-orb" aria-hidden="true" />
                        <div className="es-sj-card">
                          <div className="es-sj-card-meta">
                            <span className="es-sj-period">{item.period}</span>
                            <span className="es-sj-badge">{item.type}</span>
                          </div>
                          <h3 className="es-sj-role">{item.role}</h3>
                          <div className="es-sj-org">
                            {item.organization} &middot; <span className="es-sj-loc">{item.location}</span>
                          </div>
                          <p className="es-sj-desc">{item.desc}</p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ============================================================
            SECTION 07 — DOCUMENTARY FIELD PROOF THEATER (EDUCATION)
            ============================================================ */}
        <section id="education-impact" className="es-doc-edu-section" data-nav-theme="light">
          <div className="es-bounds">

            <div className="es-doc-header">
              <div className="es-doc-title-block">
                <Reveal y={14} duration={0.8}>
                  <span className="es-section-label">TECHNICAL EDUCATION &amp; IMPACT</span>
                </Reveal>
                <Reveal y={18} duration={0.9} delay={0.08}>
                  <h2 className="es-display-headline">
                    Making complex technology understandable.
                  </h2>
                </Reveal>
              </div>

              {/* Segmented Stage Selector */}
              <div className="es-doc-tabs" role="tablist" aria-label="Educational Engagements">
                {EDUCATION_STAGES.map((stage, idx) => (
                  <button
                    key={stage.id}
                    type="button"
                    role="tab"
                    aria-selected={activeEduIdx === idx}
                    onClick={() => setActiveEduIdx(idx)}
                    className={`es-doc-tab-btn apple-pressable ${activeEduIdx === idx ? "active" : ""}`}
                  >
                    {stage.tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Documentary Split Stage */}
            <AnimatePresence mode="wait">
              <Motion.div
                key={activeEdu.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="es-doc-stage-card"
                role="tabpanel"
              >
                <div className="es-doc-media-side">
                  <img
                    src={activeEdu.img}
                    alt={activeEdu.imgAlt}
                    className="es-doc-stage-img"
                  />
                  <div className="es-doc-media-scrim" aria-hidden="true" />
                  <div className="es-doc-location-pill">
                    <MapPin size={12} />
                    <span>{activeEdu.location}</span>
                  </div>
                </div>

                <div className="es-doc-dossier-side">
                  <span className="es-doc-badge">{activeEdu.badge}</span>
                  <h3 className="es-doc-stage-title">{activeEdu.headline}</h3>
                  <div className="es-doc-audience">{activeEdu.audience}</div>
                  <p className="es-doc-summary">{activeEdu.summary}</p>

                  <div className="es-doc-takeaways">
                    {activeEdu.takeaways.map((tag) => (
                      <span key={tag} className="es-doc-takeaway-pill">{tag}</span>
                    ))}
                  </div>

                  {activeEdu.hasLetter && (
                    <div className="es-doc-iqac-note">
                      <CheckCircle2 size={15} color="#1b8738" />
                      <span>Appreciation letter awarded by the Internal Quality Assurance Cell (IQAC).</span>
                    </div>
                  )}

                  <div className="es-doc-actions">
                    {activeEdu.hasLetter && (
                      <MagneticLink strength={0.2}>
                        <button
                          type="button"
                          className="es-hero-btn-primary apple-pressable"
                          onClick={() => setIsLetterModalOpen(true)}
                        >
                          <FileText size={15} />
                          <span>View IQAC Appreciation Letter</span>
                        </button>
                      </MagneticLink>
                    )}

                    <MagneticLink strength={0.2}>
                      <button
                        type="button"
                        className={activeEdu.hasLetter ? "es-hero-btn-secondary apple-pressable" : "es-hero-btn-primary apple-pressable"}
                        onClick={() => navigate(activeEdu.route)}
                      >
                        <span>Explore Teaching Dossier</span>
                        <ArrowRight size={15} />
                      </button>
                    </MagneticLink>
                  </div>
                </div>
              </Motion.div>
            </AnimatePresence>

            {/* Editorial Teaching Quote */}
            <Reveal y={16} duration={0.9} delay={0.1}>
              <p className="es-doc-pull-quote">
                &ldquo;Teaching is another form of engineering: breaking complex systems down until every layer is transparent.&rdquo;
              </p>
            </Reveal>

          </div>
        </section>


        {/* ============================================================
            SECTION 08 — SPATIAL VISION MANIFESTO (DARK COSMIC SECTION)
            ============================================================ */}
        <section
          id="vision"
          ref={visionRef}
          onMouseMove={handleSpotlightMove(visionRef)}
          className="es-vision-dark-section"
          data-nav-theme="dark"
        >
          <div className="es-vision-spotlight" aria-hidden="true" />
          <div className="es-vision-orbit" aria-hidden="true" />

          <div className="es-bounds text-center es-vision-content-wrap">
            <Reveal y={16} duration={0.8}>
              <span className="es-vision-eyebrow">PERSONAL VISION &amp; PHILOSOPHY</span>
            </Reveal>

            <Reveal y={24} duration={1.1} delay={0.1}>
              <h2 className="es-vision-headline">
                Building beyond what&apos;s possible.
              </h2>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.2}>
              <p className="es-vision-lead">
                My focus is on engineering intelligent systems, creating meaningful technology, and making advanced AI accessible through practical innovation.
              </p>
            </Reveal>

            {/* 3 Spatial Glass Manifesto Pillars */}
            <div className="es-vision-pillars-grid">
              {[
                {
                  id: "01",
                  title: "Rigorous Engineering",
                  desc: "Systems engineered with mathematical discipline, deterministic APIs, and maintainable structure under real production loads."
                },
                {
                  id: "02",
                  title: "Accessible Intelligence",
                  desc: "Translating frontier AI models into intuitive software that serves everyday healthcare, learning, and career workflows."
                },
                {
                  id: "03",
                  title: "Empowering Education",
                  desc: "Demystifying deep technical layers so aspiring engineers build with clarity, autonomy, and foundational rigor."
                }
              ].map((pillar, idx) => (
                <Reveal key={pillar.id} y={24} duration={0.8} delay={0.15 + idx * 0.1} className="es-vp-env">
                  <div className="es-vp-card apple-magnetic-card">
                    <div className="es-vp-top">
                      <span className="es-vp-id">{pillar.id}</span>
                      <Cpu size={16} color="#2997FF" opacity={0.8} />
                    </div>
                    <h3 className="es-vp-title">{pillar.title}</h3>
                    <p className="es-vp-desc">{pillar.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal y={20} duration={0.9} delay={0.4}>
              <div className="es-vision-actions">
                <MagneticLink strength={0.25}>
                  <button
                    type="button"
                    className="es-vision-btn-primary apple-pressable"
                    onClick={() => navigate("/vision")}
                  >
                    <span>Read Full Vision &amp; Manifesto</span>
                    <ArrowRight size={14} />
                  </button>
                </MagneticLink>

                <MagneticLink strength={0.25}>
                  <button
                    type="button"
                    className="es-vision-btn-secondary apple-pressable"
                    onClick={() => navigate("/work")}
                  >
                    <span>Explore Systems &amp; Code</span>
                  </button>
                </MagneticLink>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            SECTION 09 — THE MAGNETIC STUDIO INVITATION (CONTACT)
            ============================================================ */}
        <section id="contact" className="es-studio-contact-section" data-nav-theme="light">
          <div className="es-bounds">
            <ScaleReveal className="es-sc-card">
              <div className="es-sc-grid-bg" aria-hidden="true" />

              <div className="es-sc-inner">
                <div className="es-sc-status">
                  <span className="es-cw-pulse-dot" style={{ background: "#34c759" }} aria-hidden="true" />
                  <span>OPEN TO ENGINEERING &amp; AI COLLABORATION</span>
                </div>

                <h2 className="es-contact-headline">
                  Have an idea worth building?
                </h2>

                <p className="es-contact-sub">
                  Let&apos;s connect and create something meaningful — from intelligent platforms and backend systems to technical training cohorts.
                </p>

                <div className="es-contact-actions">
                  <MagneticLink strength={0.25}>
                    <button
                      type="button"
                      className="es-hero-btn-primary apple-pressable"
                      onClick={() => navigate("/connect")}
                    >
                      <span>Let&apos;s Connect</span>
                      <ArrowRight size={15} />
                    </button>
                  </MagneticLink>

                  <MagneticLink strength={0.25}>
                    <button
                      type="button"
                      className="es-hero-btn-secondary apple-pressable"
                      onClick={() => navigate("/resume")}
                    >
                      <span>View Resume</span>
                    </button>
                  </MagneticLink>
                </div>

                <div className="es-contact-links-row">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`es-contact-link-pill copy-pill ${emailCopied ? "copied" : ""}`}
                    aria-label="Copy email address thenameisbhagavan@gmail.com"
                  >
                    {emailCopied ? <Check size={14} color="#1b8738" /> : <Copy size={14} />}
                    <span>{emailCopied ? "Copied to clipboard!" : "thenameisbhagavan@gmail.com"}</span>
                  </button>

                  <a
                    href="mailto:thenameisbhagavan@gmail.com"
                    className="es-contact-link-pill"
                  >
                    <Mail size={14} />
                    <span>Open Mail</span>
                    <ArrowUpRight size={12} />
                  </a>

                  <a
                    href="https://github.com/thenameisbhagavan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="es-contact-link-pill"
                  >
                    <SiGithub size={14} />
                    <span>GitHub</span>
                    <ArrowUpRight size={12} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/thenameisbhagavan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="es-contact-link-pill"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </ScaleReveal>
          </div>
        </section>


        {/* Apple Quick-Inspect Project Specification Drawer */}
        <AnimatePresence>
          {inspectProject && (
            <Motion.div
              className="es-qi-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setInspectProject(null)}
            >
              <Motion.div
                className="es-qi-modal"
                role="dialog"
                aria-modal="true"
                aria-label={`${inspectProject.name} architecture overview`}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 14 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="es-qi-header">
                  <div>
                    <span className="es-qi-cat">{inspectProject.id} &middot; {inspectProject.category}</span>
                    <h3 className="es-qi-title">{inspectProject.name}</h3>
                  </div>
                  <button
                    type="button"
                    className="es-qi-close"
                    onClick={() => setInspectProject(null)}
                    aria-label="Close inspection dialog"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="es-qi-visual">
                  <img src={inspectProject.img} alt={inspectProject.name} />
                </div>

                <div className="es-qi-body">
                  <div className="es-qi-grid">
                    <div className="es-qi-block">
                      <span className="es-qi-label">CHALLENGE</span>
                      <p>{inspectProject.problem}</p>
                    </div>
                    <div className="es-qi-block">
                      <span className="es-qi-label">ARCHITECTURE</span>
                      <p>{inspectProject.solution}</p>
                    </div>
                  </div>

                  <div className="es-qi-stack">
                    {inspectProject.stack.map((tech) => (
                      <span key={tech} className="es-qi-stack-chip">{tech}</span>
                    ))}
                  </div>

                  <div className="es-qi-actions">
                    <button
                      type="button"
                      className="es-hero-btn-primary apple-pressable"
                      onClick={() => {
                        const target = inspectProject.url;
                        setInspectProject(null);
                        navigate(target);
                      }}
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={15} />
                    </button>

                    {inspectProject.live && (
                      <a
                        href={inspectProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="es-hero-btn-secondary apple-pressable"
                      >
                        <span>Visit Live System</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </Motion.div>
            </Motion.div>
          )}
        </AnimatePresence>

        {/* Live Document Viewer for PBR VITS Appreciation Letter */}
        <AppreciationLetterModal
          isOpen={isLetterModalOpen}
          onClose={() => setIsLetterModalOpen(false)}
        />

      </div>
    </>
  );
}
