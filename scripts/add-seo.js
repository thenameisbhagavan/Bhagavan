import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '..', 'src', 'pages');

const pagesData = [
  { file: 'Experience.jsx', name: 'Experience', title: 'Experience | TheNameIsBhagavan', desc: 'Professional experience and career journey of Bhagavan.' },
  { file: 'Vision.jsx', name: 'Vision', title: 'Vision | TheNameIsBhagavan', desc: 'Bhagavan\'s vision for the future of Artificial Intelligence and technology.' },
  { file: 'Connect.jsx', name: 'Connect', title: 'Connect & Contact | TheNameIsBhagavan', desc: 'Get in touch with Bhagavan for collaborations, opportunities, or just to say hi.' },
  { file: 'InnovationJourney.jsx', name: 'InnovationJourney', title: 'Innovation Journey | TheNameIsBhagavan', desc: 'Track the continuous innovation and learning journey of Bhagavan in AI.' },
  { file: 'Credentials.jsx', name: 'Credentials', title: 'Credentials & Certifications | TheNameIsBhagavan', desc: 'Professional certifications and educational credentials of Bhagavan.' },
  { file: 'TechnologyEcosystem.jsx', name: 'TechnologyEcosystem', title: 'Technology Ecosystem & Skills | TheNameIsBhagavan', desc: 'The tools, languages, and frameworks Bhagavan uses to build intelligent systems.' },
  { file: 'Resume.jsx', name: 'Resume', title: 'Resume | AI Engineer | TheNameIsBhagavan', desc: 'View and download the professional resume of Bhagavan.' }
];

pagesData.forEach(({ file, name, title, desc }) => {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Add import at the top if not present
  if (!content.includes('import SEO')) {
    content = `import SEO from "../components/SEO";\n${content}`;
  }

  // Find export default function
  const exportStr = `export default function ${name}`;
  const exportIndex = content.indexOf(exportStr);
  
  if (exportIndex === -1) {
    console.log(`Could not find export for ${name}`);
    return;
  }

  // Find the first return ( AFTER the export
  const returnIndex = content.indexOf('return (', exportIndex);
  if (returnIndex === -1) return;

  // Insert SEO component
  const seoTag = `\n    <>\n      <SEO title="${title}" description="${desc}" keywords="AI Engineer, Artificial Intelligence, Machine Learning, Portfolio, React, Full Stack" />\n`;
  content = content.slice(0, returnIndex + 8) + seoTag + content.slice(returnIndex + 8);

  // Close fragment at the end
  const lastParenIndex = content.lastIndexOf(');');
  if (lastParenIndex !== -1) {
    content = content.slice(0, lastParenIndex) + '\n    </>\n  ' + content.slice(lastParenIndex);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
