// tsc only emits compiled .ts files — it does NOT copy plain .json data
// files into dist/. Without this step, the production build boots but
// every tool throws ENOENT the first time it tries to read mock data.
import { readdirSync, copyFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDataDir = join(__dirname, '..', 'src', 'data');
const distDataDir = join(__dirname, '..', 'dist', 'data');

mkdirSync(distDataDir, { recursive: true });

const jsonFiles = readdirSync(srcDataDir).filter((f) => f.endsWith('.json'));

for (const file of jsonFiles) {
  copyFileSync(join(srcDataDir, file), join(distDataDir, file));
  console.log(`Copied ${file} -> dist/data/${file}`);
}

console.log(`✅ Copied ${jsonFiles.length} data file(s) into dist/data/`);
