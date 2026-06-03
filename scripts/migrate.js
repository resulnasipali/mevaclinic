const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') || f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Add 'use client' if using hooks and not already present
  if ((content.includes('useState') || content.includes('useEffect') || content.includes('useRef') || content.includes('usePathname') || content.includes('useLocation')) && !content.includes("'use client'") && !content.includes('"use client"')) {
    content = "'use client';\n\n" + content;
    changed = true;
  }

  // 2. Fix useLocation / usePathname
  if (content.includes('useLocation')) {
    content = content.replace(/import\s+{([^}]*)}.*'react-router-dom';?/g, (match, p1) => {
      let imports = p1.split(',').map(s => s.trim());
      let newImports = [];
      let hasLink = false;
      let hasLocation = false;
      
      imports.forEach(i => {
        if (i === 'Link') hasLink = true;
        else if (i === 'useLocation') hasLocation = true;
      });
      
      let res = '';
      if (hasLink) res += "import Link from 'next/link';\n";
      if (hasLocation) res += "import { usePathname } from 'next/navigation';\n";
      return res;
    });
    content = content.replace(/const\s+location\s*=\s*useLocation\(\);?/g, 'const pathname = usePathname();');
    content = content.replace(/location\.pathname/g, '(pathname || "/")');
    changed = true;
  }

  // 3. Fix Link (if only Link was imported but not useLocation)
  if (content.includes("import { Link } from 'react-router-dom'") || content.includes('import {Link} from "react-router-dom"')) {
    content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?/g, "import Link from 'next/link';");
    changed = true;
  }
  
  // 4. Replace <Link to=... with <Link href=...
  if (content.includes('<Link')) {
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    changed = true;
  }

  // 5. Replace img src for flagcdn if needed (not strictly required if unoptimized, but Next Image is better. We'll leave img for now)

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Migrated: ${file}`);
  }
});
