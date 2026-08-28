import { Layers, Brain, Database, Cpu, Code, Server } from "lucide-react";
import resumeImg from "./assets/resume.jpg";
import chatImg from "./assets/chat.jpeg";
import carrerImg from "./assets/carrer.jpg";
import fakeImg from "./assets/fake.jpg";
import heartImg from "./assets/heart.jpg";
import leaveImg from "./assets/leave.jpg";

export const PROFILE = {
  name: 'Siva Satya Sai Bhagavan Gopalajosyula',
  email: 'thenameisbhagavan@gmail.com',
  phone: '+91 7569205626',
  github: 'https://github.com/thenameisbhagavan',
  linkedin: 'https://www.linkedin.com/in/thenameisbhagavan/',
  objective: 'Technical AI/ML & Data Science Trainer at Data Valley, Vijayawada. AI Product Engineer building intelligent software systems, AI-powered applications, and data-driven products. B.Tech in AI & Data Science (2026).',
  internships: [
    { title: 'MERN Stack Intern', company: 'StudyOwl Education Pvt Ltd', period: 'May–July 2025', detail: ['Contributed to React frontend and Node.js backend integration.', 'Built reusable components and integrated REST APIs.'] },
    { title: 'AI/ML Intern – Smart Sorting', company: 'SmartBridge (Remote)', period: 'May–June 2025', detail: ['Developed CNN-based image classification models using TensorFlow and Keras.', 'Deployed trained models using Flask.'] },
    { title: 'ML & Data Science Intern', company: 'Blackbucks (Remote)', period: 'May–June 2024', detail: ['Performed data preprocessing and feature engineering.', 'Developed model training pipelines using Scikit-learn.'] },
  ],
  skills: { 
    languages: ['Python', 'Java', 'C', 'JavaScript'], 
    frontend: ['HTML', 'CSS', 'React.js', 'Bootstrap', 'Tailwind CSS'], 
    backend: ['Node.js', 'Express.js', 'Flask', 'REST APIs'], 
    databases: ['MongoDB', 'MySQL'], 
    ml: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV'], 
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Power Apps', 'Power Automate'] 
  }
};

export const PROJECTS = [
  {
    id:1,title:"Automated Leave Management System",
    tagline:"Low-code workflow automation project",
    subtitle:"Workflow automation system using Microsoft PowerApps",
    github:null,live:null,year:"2025",duration:"3 months",
    problem:"Managing leave requests manually via emails is error-prone and inefficient for organizations relying on manual approvals.",
    solution:"Built an automated leave approval system using Microsoft PowerApps, SharePoint, and Power Automate for streamlined enterprise workflows.",
    impact:[{label:"Workflow Automations",value:5,suffix:""},{label:"Approval Steps",value:3,suffix:""},{label:"Test Users",value:15,suffix:"+"}],
    screenshot:leaveImg
  },
  {
    id:2,title:"ATS-Based Resume Builder",
    tagline:"Full-stack MERN academic project",
    subtitle:"ATS-optimized resume platform built with MERN stack",
    github:"https://github.com/thenameisbhagavan/Resumebuilderwebapp",live:null,year:"2025",duration:"3 months",
    problem:"Job applicants struggle to get their resumes past ATS (Applicant Tracking Systems) filters due to keyword mismatches.",
    solution:"Developed a MERN platform where users create resumes and check keyword matches against job descriptions, with OAuth authentication and REST API integration.",
    impact:[{label:"ATS Feedback",value:100,suffix:"%"},{label:"Templates",value:5,suffix:""},{label:"Auth Providers",value:2,suffix:""}],
    screenshot:resumeImg
  },
  {
    id:3,title:"AI Chatbot Web Application",
    tagline:"AI conversational interface",
    subtitle:"React frontend with Flask AI backend",
    github:"https://github.com/thenameisbhagavan/chatbotwebapp",live:null,year:"2025",duration:"4 months",
    problem:"Web frontends need to communicate with AI APIs securely without exposing API keys in the browser.",
    solution:"Built a Flask backend to securely proxy the Gemini API, and a React frontend to render responses, with session state management.",
    impact:[{label:"Response Time",value:500,suffix:"ms"},{label:"Secure Endpoints",value:100,suffix:"%"},{label:"Conversation Turns",value:15,suffix:"+"}],
    screenshot:chatImg
  },
  {
    id:4,title:"Career Path Recommendation System",
    tagline:"Machine Learning classification system",
    subtitle:"Random Forest classification applied to career data",
    github:"https://github.com/thenameisbhagavan/Career-Path-Recommendation",live:null,year:"2024",duration:"2 months",
    problem:"Career decision-making lacks data-driven guidance, leaving applicants uncertain about which paths match their skill profiles.",
    solution:"Trained a Random Forest classifier on a skills dataset using Scikit-learn, and served predictions via a Flask API connected to a React UI.",
    impact:[{label:"Accuracy",value:88,suffix:"%"},{label:"Career Domains",value:20,suffix:"+"},{label:"Prediction Time",value:180,suffix:"ms"}],
    screenshot:carrerImg
  },
  {
    id:5,title:"Fake News Detection System",
    tagline:"NLP text classification system",
    subtitle:"TF-IDF and Logistic Regression pipeline",
    github:"https://github.com/thenameisbhagavan/News-detector",live:null,year:"2023",duration:"2 months",
    problem:"Misinformation spreads rapidly online, requiring automated systems to classify text credibility at scale.",
    solution:"Built a preprocessing pipeline using NLTK and trained a Logistic Regression model on a public dataset, integrated into a web UI.",
    impact:[{label:"Accuracy",value:92,suffix:"%"},{label:"Dataset Size",value:40,suffix:"K"},{label:"Prediction Time",value:90,suffix:"ms"}],
    screenshot:fakeImg
  },
  {
    id:6,title:"Heart Disease Prediction System",
    tagline:"Healthcare ML prediction system",
    subtitle:"Cross-validated classification on clinical data",
    github:"https://github.com/thenameisbhagavan/Heart-Disease-Prediction",live:null,year:"2024",duration:"2 months",
    problem:"Healthcare datasets are often small and high-dimensional, requiring careful evaluation to prevent overfitting and ensure clinical relevance.",
    solution:"Trained a classifier on the UCI Heart Disease dataset using cross-validation to prevent overfitting, deployed via a Flask interface.",
    impact:[{label:"Accuracy",value:85,suffix:"%"},{label:"Clinical Features",value:13,suffix:""},{label:"Precision",value:83,suffix:"%"}],
    screenshot:heartImg
  }
];

export const JOURNEY = [
  {
    year: "2026 — Present",
    title: "Technical AI/ML & Data Science Trainer",
    entity: "Data Valley, Vijayawada",
    type: "Professional",
    description: "Delivering hands-on technical training across Data Science, Machine Learning, and AI. Developing structured curricula, coding labs, and project-based learning experiences."
  },
  {
    year: "2025",
    title: "MERN Stack Intern",
    entity: "StudyOwl Education Pvt Ltd",
    type: "Internship",
    description: "Contributed to React frontend and Node.js backend integration. Built reusable components and integrated REST APIs."
  },
  {
    year: "2025",
    title: "AI/ML Intern – Smart Sorting",
    entity: "SmartBridge",
    type: "Internship",
    description: "Developed CNN-based image classification models using TensorFlow and Keras. Deployed trained models using Flask."
  },
  {
    year: "2024",
    title: "ML & Data Science Intern",
    entity: "Blackbucks",
    type: "Internship",
    description: "Performed data preprocessing and feature engineering. Developed model training pipelines using Scikit-learn."
  },
  {
    year: "2022-2026",
    title: "B.Tech in AI & Data Science",
    entity: "Ramachandra College of Engineering, JNTUK",
    type: "Education",
    description: "Comprehensive study of data structures, algorithms, databases, operating systems, machine learning, and artificial intelligence."
  }
];
