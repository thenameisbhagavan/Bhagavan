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
  objective: 'B.Tech Graduate 2026 in AI & Data Science eager to start a career in software development. Passionate about AI/ML, full-stack web development, and building practical applications. Completed academic projects including an AI chatbot and a leave automation system using Microsoft Power Apps.',
  internships: [
    { title: 'MERN Stack Intern', company: 'StudyOwl Education Pvt Ltd', period: 'May–July 2025', detail: ['Assisted in React frontend and Node.js backend integration.', 'Learned to build reusable components and REST APIs.'] },
    { title: 'AI/ML Intern – Smart Sorting', company: 'SmartBridge (Remote)', period: 'May–June 2025', detail: ['Learned CNN-based image classification using TensorFlow and Keras.', 'Assisted in deploying trained model using Flask.'] },
    { title: 'ML & Data Science Intern', company: 'Blackbucks (Remote)', period: 'May–June 2024', detail: ['Learned data preprocessing and feature engineering.', 'Practiced model training using Scikit-learn pipelines.'] },
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
    subtitle:"Academic final year project using Microsoft PowerApps",
    github:null,live:null,year:"2025",duration:"3 months",
    problem:"Managing leave requests manually via emails is error-prone. As a student, I wanted to learn how modern workplaces solve this using low-code tools.",
    solution:"Built an automated leave approval system using Microsoft PowerApps, SharePoint, and Power Automate to understand enterprise workflows.",
    impact:[{label:"Workflow Automations",value:5,suffix:""},{label:"Approval Steps",value:3,suffix:""},{label:"Test Users",value:15,suffix:"+"}],
    screenshot:leaveImg
  },
  {
    id:2,title:"ATS-Based Resume Builder",
    tagline:"Full-stack MERN academic project",
    subtitle:"A learning project to understand ATS keywords and MERN",
    github:"https://github.com/thenameisbhagavan/Resumebuilderwebapp",live:null,year:"2025",duration:"3 months",
    problem:"I wanted to learn React and Node.js while solving a real problem for students: getting their resumes past ATS (Applicant Tracking Systems) filters.",
    solution:"Developed a MERN platform where users create resumes and check keyword matches against job descriptions, learning OAuth and REST APIs in the process.",
    impact:[{label:"ATS Feedback",value:100,suffix:"%"},{label:"Templates",value:5,suffix:""},{label:"Auth Providers",value:2,suffix:""}],
    screenshot:resumeImg
  },
  {
    id:3,title:"AI Chatbot Web Application",
    tagline:"AI API integration learning project",
    subtitle:"Connecting React frontend with Flask backend",
    github:"https://github.com/thenameisbhagavan/chatbotwebapp",live:null,year:"2025",duration:"4 months",
    problem:"I needed a hands-on project to understand how web frontends communicate with AI APIs securely without exposing API keys in the browser.",
    solution:"Built a Flask backend to securely talk to the Gemini API, and a React frontend to render responses, learning about HTTP requests and session state.",
    impact:[{label:"Response Time",value:500,suffix:"ms"},{label:"Secure Endpoints",value:100,suffix:"%"},{label:"Conversation Turns",value:15,suffix:"+"}],
    screenshot:chatImg
  },
  {
    id:4,title:"Career Path Recommendation System",
    tagline:"Introductory Machine Learning project",
    subtitle:"Applying Random Forest classification to a real dataset",
    github:"https://github.com/thenameisbhagavan/Career-Path-Recommendation",live:null,year:"2024",duration:"2 months",
    problem:"Students struggle with career choices. I used this problem to practice my foundational Machine Learning skills and build my first classification model.",
    solution:"Trained a Random Forest classifier on a skills dataset using Scikit-learn, and served the predictions via a simple Flask API connected to a React UI.",
    impact:[{label:"Accuracy",value:88,suffix:"%"},{label:"Career Domains",value:20,suffix:"+"},{label:"Prediction Time",value:180,suffix:"ms"}],
    screenshot:carrerImg
  },
  {
    id:5,title:"Fake News Detection System",
    tagline:"NLP basics and text classification",
    subtitle:"Practicing TF-IDF and Logistic Regression",
    github:"https://github.com/thenameisbhagavan/News-detector",live:null,year:"2023",duration:"2 months",
    problem:"I wanted to learn the basics of Natural Language Processing (NLP) by building a text classifier that could distinguish real news from fake news.",
    solution:"Built a preprocessing pipeline using NLTK and trained a Logistic Regression model on a public dataset, integrating it into a basic web UI.",
    impact:[{label:"Accuracy",value:92,suffix:"%"},{label:"Dataset Size",value:40,suffix:"K"},{label:"Prediction Time",value:90,suffix:"ms"}],
    screenshot:fakeImg
  },
  {
    id:6,title:"Heart Disease Prediction System",
    tagline:"Healthcare data classification project",
    subtitle:"Practicing cross-validation on small datasets",
    github:"https://github.com/thenameisbhagavan/Heart-Disease-Prediction",live:null,year:"2024",duration:"2 months",
    problem:"I wanted to apply ML to tabular healthcare data to understand feature importance and learn how to evaluate models properly on smaller datasets.",
    solution:"Trained a classifier on the UCI Heart Disease dataset, learning to use cross-validation to prevent overfitting, and deployed a basic Flask UI.",
    impact:[{label:"Accuracy",value:85,suffix:"%"},{label:"Clinical Features",value:13,suffix:""},{label:"Precision",value:83,suffix:"%"}],
    screenshot:heartImg
  }
];

export const JOURNEY = [
  {
    year: "2025",
    title: "MERN Stack Intern",
    entity: "StudyOwl Education Pvt Ltd",
    type: "Internship",
    description: "Assisted in React frontend and Node.js backend integration. Learned to build reusable components and REST APIs."
  },
  {
    year: "2025",
    title: "AI/ML Intern – Smart Sorting",
    entity: "SmartBridge",
    type: "Internship",
    description: "Learned CNN-based image classification using TensorFlow and Keras. Assisted in deploying trained model using Flask."
  },
  {
    year: "2024",
    title: "ML & Data Science Intern",
    entity: "Blackbucks",
    type: "Internship",
    description: "Learned data preprocessing and feature engineering. Practiced model training using Scikit-learn pipelines."
  },
  {
    year: "2022-2026",
    title: "B.Tech in AI & Data Science",
    entity: "University Name (Add Here)",
    type: "Education",
    description: "Comprehensive study of data structures, algorithms, databases, operating systems, machine learning, and artificial intelligence."
  }
];
