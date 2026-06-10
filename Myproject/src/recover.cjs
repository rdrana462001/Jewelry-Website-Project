const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('C:\\Users\\Rudra\\.gemini\\antigravity-ide\\brain\\e14f40f9-cac7-45b0-bfc9-5a0ef76f9a65\\.system_generated\\logs\\transcript.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('Total Lines: 1396') && line.includes('Dashboard.jsx')) {
      const obj = JSON.parse(line);
      const content = obj.content;
      fs.writeFileSync('c:\\Users\\Rudra\\Desktop\\Internship\\Mini Project\\Myproject\\src\\Dashboard\\Dashboard.jsx.backup', content);
      console.log('Found and saved backup!');
    }
  }
}

processLineByLine();
