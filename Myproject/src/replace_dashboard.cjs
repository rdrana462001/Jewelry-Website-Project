const fs = require('fs');

const path = "c:\\Users\\Rudra\\Desktop\\Internship\\Mini Project\\Myproject\\src\\Dashboard\\Dashboard.jsx";
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
const newLines = [];
let inNav = false;

for (let i = 0; i < lines.length; i++) {
  if (i === 245) { // index 245 is line 246
    inNav = true;
    newLines.push("      <Navbar />");
  }
  if (!inNav) {
    newLines.push(lines[i]);
  }
  if (i === 695) { // index 695 is line 696
    inNav = false;
  }
}

let newContent = newLines.join('\n');
newContent = newContent.replace('import { Link } from "react-router-dom";', 'import { Link } from "react-router-dom";\nimport Navbar from "../components/Navbar";');

fs.writeFileSync(path, newContent, 'utf8');
console.log("Done");
