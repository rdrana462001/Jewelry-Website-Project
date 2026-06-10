const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, 'Myproject', 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const importRegex = /import\s+(?:[^\s,]+|{[^}]+})\s+from\s+['"]([^'"]+)['"]/g;

console.log("Checking import casing starting from:", projectRoot);

let totalErrors = 0;

walkDir(projectRoot, (filePath) => {
  if (!filePath.endsWith('.js') && !filePath.endsWith('.jsx') && !filePath.endsWith('.css')) return;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith('.')) {
      // Resolve path
      const dirOfFile = path.dirname(filePath);
      const targetPath = path.resolve(dirOfFile, importPath);
      
      // Let's find out if the file exists on disk with the EXACT casing
      const resolvedDir = path.dirname(targetPath);
      const baseName = path.basename(targetPath);
      
      if (!fs.existsSync(resolvedDir)) {
        console.error(`[Directory Missing] in ${path.relative(__dirname, filePath)}: cannot find directory of ${importPath}`);
        totalErrors++;
        continue;
      }
      
      const filesInDir = fs.readdirSync(resolvedDir);
      // We check for case-sensitive match
      // If we import it without extension, we try to match baseName with extension
      let foundExact = false;
      let foundCaseInsensitive = false;
      let matchedName = "";
      
      for (let f of filesInDir) {
        const fNoExt = path.parse(f).name;
        const fWithExt = f;
        
        if (fWithExt === baseName || fNoExt === baseName) {
          foundExact = true;
          break;
        }
        
        if (fWithExt.toLowerCase() === baseName.toLowerCase() || fNoExt.toLowerCase() === baseName.toLowerCase()) {
          foundCaseInsensitive = true;
          matchedName = f;
        }
      }
      
      // If it's a CSS file or other asset import, we check exact file name
      if (!foundExact) {
        // Try with common extensions (.js, .jsx, .css, .png, .jpg)
        const extensions = ['.js', '.jsx', '.css', '.png', '.jpg', '.svg', '.mp4'];
        for (let ext of extensions) {
          for (let f of filesInDir) {
            if (f === baseName + ext) {
              foundExact = true;
              break;
            }
            if (f.toLowerCase() === (baseName + ext).toLowerCase()) {
              foundCaseInsensitive = true;
              matchedName = f;
            }
          }
          if (foundExact) break;
        }
      }
      
      if (!foundExact) {
        if (foundCaseInsensitive) {
          console.error(`\x1b[31m[CASE ERROR]\x1b[0m in ${path.relative(__dirname, filePath)}:\n  Imported: "${importPath}"\n  Actual file on disk: "${matchedName}"`);
          totalErrors++;
        } else {
          // It might be an alias or missing file, but if it's completely missing, Rollup would fail anyway.
          // Let's check if it exists at all
          let existsAtAll = false;
          const extensions = ['', '.js', '.jsx', '.css', '.png', '.jpg', '.svg', '.mp4'];
          for (let ext of extensions) {
            if (fs.existsSync(targetPath + ext)) {
              existsAtAll = true;
              break;
            }
          }
          if (!existsAtAll) {
            // We ignore if it's node_modules or assets that we don't scan, but warning is fine
            console.warn(`[NOT FOUND] in ${path.relative(__dirname, filePath)}: "${importPath}"`);
          }
        }
      }
    }
  }
});

console.log(`\nScan finished. Total casing errors found: ${totalErrors}`);
