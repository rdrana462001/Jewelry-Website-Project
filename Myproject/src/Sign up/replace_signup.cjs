const fs = require('fs');

const path = "c:\\Users\\Rudra\\Desktop\\Internship\\Mini Project\\Myproject\\src\\Sign up\\signup2.jsx";
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
const newLines = [];
let skip = false;

for (let i = 0; i < lines.length; i++) {
  if (i === 197) { // Index 197 is line 198 {/* Navbar */}
    skip = true;
    newLines.push("      <Navbar />");
  }
  if (!skip) {
    newLines.push(lines[i]);
  }
  if (i === 248) { // Index 248 is line 249
    skip = false;
  }
}

let newContent = newLines.join('\n');
newContent = newContent.replace('import { Link } from "react-router-dom";', 'import { Link } from "react-router-dom";\nimport Navbar from "../components/Navbar";');

fs.writeFileSync(path, newContent, 'utf8');
console.log("Done");
