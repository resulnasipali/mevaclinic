import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const dirsToScan = [path.join(rootDir, 'src'), rootDir];
const extensions = ['.jsx', '.js', '.css', '.html'];
const excludeDirs = ['node_modules', 'dist', '.git', '.vercel', 'temp_master', 'temp_ultimate', 'temp_v3'];

let output = '';

function walkSync(currentDirPath, callback) {
    if (excludeDirs.some(ex => currentDirPath.includes(path.sep + ex) || currentDirPath.endsWith(ex))) {
        return;
    }
    
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

const processedFiles = new Set();

dirsToScan.forEach(dir => {
    if (fs.existsSync(dir)) {
        walkSync(dir, (filePath) => {
            if (processedFiles.has(filePath)) return;
            const ext = path.extname(filePath);
            if (extensions.includes(ext) && !filePath.includes('bundle.js') && !filePath.includes('vite.config') && !filePath.includes('tailwind.config') && !filePath.includes('postcss.config') && !filePath.includes('eslint.config')) {
                processedFiles.add(filePath);
                const relativePath = path.relative(rootDir, filePath);
                const content = fs.readFileSync(filePath, 'utf-8');
                output += `### Dosya Adı: ${relativePath}\n\`\`\`${ext.substring(1)}\n${content}\n\`\`\`\n\n`;
            }
        });
    }
});

const outputPath = path.join(rootDir, 'meva-clinic-source-code.md');
fs.writeFileSync(outputPath, output);
console.log('Source code bundled to:', outputPath);
