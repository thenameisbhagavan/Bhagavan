const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = [
  // Email replacements
  { regex: /g\.sivasatyasaibhagavan@gmail\.com/g, replacement: 'thenameisbhagavan@gmail.com' },
  { regex: /g\.sivasatysaibhagavan@gmail\.com/g, replacement: 'thenameisbhagavan@gmail.com' },
  { regex: /gsssbhagavan@gmail\.com/g, replacement: 'thenameisbhagavan@gmail.com' },
  { regex: /security@thenameisbhagavan\.vercel\.app/g, replacement: 'thenameisbhagavan@gmail.com' }, // update SEO.jsx email too if any
  
  // LinkedIn replacements
  { regex: /https:\/\/www\.linkedin\.com\/in\/gsssbhagavan\/?/g, replacement: 'https://www.linkedin.com/in/thenameisbhagavan/' },
  { regex: /https:\/\/www\.linkedin\.com\/in\/gopalajosyula-siva-satya-sai-bhagavan-1624a027b\/?/g, replacement: 'https://www.linkedin.com/in/thenameisbhagavan/' },
  
  // GitHub replacements
  { regex: /https:\/\/github\.com\/bhagavan444/g, replacement: 'https://github.com/thenameisbhagavan' }
];

walk(path.join(__dirname, '..', 'src'), function(filePath) {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    let original = fs.readFileSync(filePath, 'utf8');
    let content = original;
    
    replacements.forEach(({ regex, replacement }) => {
      content = content.replace(regex, replacement);
    });
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated links in ${filePath}`);
    }
  }
});
