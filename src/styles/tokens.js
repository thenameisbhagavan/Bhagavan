/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN TOKENS — Apple-Level Editorial System
   Brand: TheNameIsBhagavan
   Primary Canvas: #F7F7F5 | Primary Text: #111111
   ═══════════════════════════════════════════════════════════════════════════ */

// ── Color Palette ──
export const C = {
  // Primary Editorial Canvas (Light Theme)
  bg:          "#F7F7F5",
  canvas:      "#F7F7F5",
  surface:     "#FFFFFF",
  surfaceMuted:"#F0F0EE",
  surfaceHi:   "#EBEBE9",
  elevated:    "#FFFFFF",

  // Dark Canvas Sections
  darkBg:      "#0A0A0C",
  darkSurface: "#141416",
  darkElevated:"#1C1C1F",

  // Borders
  border:      "rgba(0, 0, 0, 0.07)",
  border2:     "rgba(0, 0, 0, 0.12)",
  border3:     "rgba(0, 0, 0, 0.20)",
  darkBorder:  "rgba(255, 255, 255, 0.08)",
  darkBorder2: "rgba(255, 255, 255, 0.16)",

  // Typography Hierarchy
  text:        "#111111",
  textMuted:   "#6E6E73",
  textSub:     "#86868B",
  textTertiary:"#A1A1A6",

  // Dark Section Typography
  darkText:    "#F5F5F7",
  darkMuted:   "#A1A1A6",
  darkSub:     "#6E6E73",

  // Restrained Accents
  accent:      "#0071E3",
  accentHover: "#0077ED",
  accentMuted: "rgba(0, 113, 227, 0.08)",
  accentBorder:"rgba(0, 113, 227, 0.22)",

  // Verified / System Signals
  green:       "#34C759",
  greenMuted:  "rgba(52, 199, 89, 0.10)",
  purple:      "#AF52DE",
  orange:      "#FF9500",

  // Apple Liquid Glass
  glassBg:     "rgba(247, 247, 245, 0.75)",
  glassCard:   "rgba(255, 255, 255, 0.82)",
  glassBorder: "rgba(255, 255, 255, 0.60)",
  glassDark:   "rgba(15, 15, 18, 0.72)",
  glassDarkBorder: "rgba(255, 255, 255, 0.10)",
};

// ── Easing ──
export const E = "cubic-bezier(0.16, 1, 0.3, 1)";

// ── Motion Speeds ──
export const MS = {
  fast:   "130ms",
  base:   "190ms",
  slow:   "320ms",
  reveal: "440ms",
};

// ── Devicon CDN base ──
export const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// ── Shared icon map (superset of all pages) ──
export const ICONS = {
  "React":            `${ICON_BASE}/react/react-original.svg`,
  "React.js":         `${ICON_BASE}/react/react-original.svg`,
  "HTML":             `${ICON_BASE}/html5/html5-original.svg`,
  "HTML5":            `${ICON_BASE}/html5/html5-original.svg`,
  "CSS":              `${ICON_BASE}/css3/css3-original.svg`,
  "CSS3":             `${ICON_BASE}/css3/css3-original.svg`,
  "JavaScript":       `${ICON_BASE}/javascript/javascript-original.svg`,
  "TypeScript":       `${ICON_BASE}/typescript/typescript-original.svg`,
  "Node.js":          `${ICON_BASE}/nodejs/nodejs-original.svg`,
  "Express.js":       `${ICON_BASE}/express/express-original.svg`,
  "Express":          `${ICON_BASE}/express/express-original.svg`,
  "MongoDB":          `${ICON_BASE}/mongodb/mongodb-original.svg`,
  "MongoDB Atlas":    `${ICON_BASE}/mongodb/mongodb-original.svg`,
  "Python":           `${ICON_BASE}/python/python-original.svg`,
  "TensorFlow":       `${ICON_BASE}/tensorflow/tensorflow-original.svg`,
  "Keras":            `${ICON_BASE}/keras/keras-original.svg`,
  "Scikit-learn":     `${ICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "OpenCV":           `${ICON_BASE}/opencv/opencv-original.svg`,
  "NumPy":            `${ICON_BASE}/numpy/numpy-original.svg`,
  "Pandas":           `${ICON_BASE}/pandas/pandas-original.svg`,
  "Flask":            `${ICON_BASE}/flask/flask-original.svg`,
  "Flask API":        `${ICON_BASE}/flask/flask-original.svg`,
  "Django":           `${ICON_BASE}/django/django-plain.svg`,
  "Docker":           `${ICON_BASE}/docker/docker-original.svg`,
  "Kubernetes":       `${ICON_BASE}/kubernetes/kubernetes-original.svg`,
  "AWS":              `${ICON_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
  "Azure":            `${ICON_BASE}/azure/azure-original.svg`,
  "Git":              `${ICON_BASE}/git/git-original.svg`,
  "GitHub":           `${ICON_BASE}/github/github-original.svg`,
  "Git / GitHub":     `${ICON_BASE}/github/github-original.svg`,
  "Postman":          `${ICON_BASE}/postman/postman-original.svg`,
  "Jupyter Notebook": `${ICON_BASE}/jupyter/jupyter-original.svg`,
  "VS Code":          `${ICON_BASE}/vscode/vscode-original.svg`,
  "Figma":            `${ICON_BASE}/figma/figma-original.svg`,
  "Vercel":           `${ICON_BASE}/vercel/vercel-original.svg`,
  "Java":             `${ICON_BASE}/java/java-original.svg`,
  "Spring Boot":      `${ICON_BASE}/spring/spring-original.svg`,
  "Maven":            `${ICON_BASE}/maven/maven-original.svg`,
  "R":                `${ICON_BASE}/r/r-original.svg`,
  "MySQL":            `${ICON_BASE}/mysql/mysql-original.svg`,
  "PostgreSQL":       `${ICON_BASE}/postgresql/postgresql-original.svg`,
  "Redis":            `${ICON_BASE}/redis/redis-original.svg`,
  "Nginx":            `${ICON_BASE}/nginx/nginx-original.svg`,
  "Socket.io":        `${ICON_BASE}/socketio/socketio-original.svg`,
  "Jenkins":          `${ICON_BASE}/jenkins/jenkins-original.svg`,
  "Linux":            `${ICON_BASE}/linux/linux-original.svg`,
  "Bash":             `${ICON_BASE}/bash/bash-original.svg`,
  "C++":              `${ICON_BASE}/cplusplus/cplusplus-original.svg`,
  "PyTorch":          `${ICON_BASE}/pytorch/pytorch-original.svg`,
  "Matplotlib":       `${ICON_BASE}/matplotlib/matplotlib-original.svg`,
  "Solidity":         `${ICON_BASE}/solidity/solidity-original.svg`,
  "Ethereum":         `${ICON_BASE}/ethereum/ethereum-original.svg`,
  // Aliases for specialized skill names
  "OAuth":            `${ICON_BASE}/google/google-original.svg`,
  "JWT":              `${ICON_BASE}/nodejs/nodejs-plain.svg`,
  "NLTK":             `${ICON_BASE}/python/python-plain.svg`,
  "TF-IDF":           `${ICON_BASE}/python/python-original.svg`,
  "Streamlit":        `${ICON_BASE}/python/python-original.svg`,
  "CNN":              `${ICON_BASE}/tensorflow/tensorflow-original.svg`,
  "NLP":              `${ICON_BASE}/python/python-original.svg`,
  "YOLO":             `${ICON_BASE}/python/python-original.svg`,
  // Category abstractions
  "Hooks":            `${ICON_BASE}/react/react-original.svg`,
  "Context API":      `${ICON_BASE}/react/react-original.svg`,
  "Performance":      `${ICON_BASE}/react/react-original.svg`,
  "ES6+":             `${ICON_BASE}/javascript/javascript-original.svg`,
  "Async/Await":      `${ICON_BASE}/javascript/javascript-original.svg`,
  "Closures":         `${ICON_BASE}/javascript/javascript-original.svg`,
  "Prototypes":       `${ICON_BASE}/javascript/javascript-original.svg`,
  "REST API":         `${ICON_BASE}/fastapi/fastapi-original.svg`,
  "ORM":              `${ICON_BASE}/django/django-plain.svg`,
  "OOP":              `${ICON_BASE}/java/java-original.svg`,
  "Data Structures":  `${ICON_BASE}/python/python-original.svg`,
  "Algorithms":       `${ICON_BASE}/python/python-original.svg`,
  "Clean Code":       `${ICON_BASE}/python/python-original.svg`,
  "Problem Solving":  `${ICON_BASE}/cplusplus/cplusplus-original.svg`,
  "Optimization":     `${ICON_BASE}/cplusplus/cplusplus-original.svg`,
  "Design Patterns":  `${ICON_BASE}/cplusplus/cplusplus-original.svg`,
  "Neural Networks":  `${ICON_BASE}/tensorflow/tensorflow-original.svg`,
  "RNN":              `${ICON_BASE}/tensorflow/tensorflow-original.svg`,
  "Transfer Learning":`${ICON_BASE}/tensorflow/tensorflow-original.svg`,
  "GPT":              `${ICON_BASE}/openal/openal-plain.svg`,
  "Prompt Engineering":`${ICON_BASE}/python/python-original.svg`,
  "Fine-tuning":      `${ICON_BASE}/python/python-original.svg`,
  "Embeddings":       `${ICON_BASE}/python/python-original.svg`,
  "Model Tuning":     `${ICON_BASE}/python/python-original.svg`,
  "Model Deployment": `${ICON_BASE}/kubernetes/kubernetes-original.svg`,
  "Monitoring":       `${ICON_BASE}/prometheus/prometheus-original.svg`,
  "Microservices":    `${ICON_BASE}/spring/spring-original.svg`,
  "EC2":              `${ICON_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
  "S3":               `${ICON_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
  "Lambda":           `${ICON_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
  "Automation":       `${ICON_BASE}/jenkins/jenkins-original.svg`,
  "VMs":              `${ICON_BASE}/azure/azure-original.svg`,
  "Storage":          `${ICON_BASE}/azure/azure-original.svg`,
  "Networking":       `${ICON_BASE}/azure/azure-original.svg`,
  "Accessibility":    `${ICON_BASE}/html5/html5-original.svg`,
  "SEO":              `${ICON_BASE}/html5/html5-original.svg`,
  "Web Standards":    `${ICON_BASE}/html5/html5-original.svg`,
  "Flexbox":          `${ICON_BASE}/css3/css3-original.svg`,
  "Grid":             `${ICON_BASE}/css3/css3-original.svg`,
  "Animations":       `${ICON_BASE}/css3/css3-original.svg`,
  "Responsive Design":`${ICON_BASE}/css3/css3-original.svg`,
  "Statistical Computing":`${ICON_BASE}/r/r-original.svg`,
  "ggplot2":          `${ICON_BASE}/r/r-original.svg`,
  "Data Viz":         `${ICON_BASE}/r/r-original.svg`,
  "Data Analysis":    `${ICON_BASE}/pandas/pandas-original.svg`,
  "Distributed Systems":`${ICON_BASE}/kubernetes/kubernetes-original.svg`,
  "Scalability":      `${ICON_BASE}/kubernetes/kubernetes-original.svg`,
  "Fault Tolerance":  `${ICON_BASE}/kubernetes/kubernetes-original.svg`,
  "Kali Linux":       `${ICON_BASE}/linux/linux-original.svg`,
  "Wireshark":        `${ICON_BASE}/linux/linux-original.svg`,
  "Metasploit":       `${ICON_BASE}/linux/linux-original.svg`,
  "Tableau":          `${ICON_BASE}/python/python-original.svg`,
  "Power BI":         `${ICON_BASE}/python/python-original.svg`,
};
