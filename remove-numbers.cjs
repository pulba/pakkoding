const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'lessons.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find: title: `[optional numbers and dots][space][Actual Title]`
// Example: title: `2.11 Elemen Semantik (Layout)` -> title: `Elemen Semantik (Layout)`
// Example: title: `8. Penutup` -> title: `Penutup`

const newContent = content.replace(/title:\s*`\d+(?:\.\d+)*\.\s*(.*?)`/g, 'title: `$1`')
                          .replace(/title:\s*`\d+(?:\.\d+)*\s+(.*?)`/g, 'title: `$1`');

fs.writeFileSync(filePath, newContent);
console.log('Titles updated successfully.');
