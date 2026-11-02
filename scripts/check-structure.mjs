import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
for (const file of ['index.html', 'diviso-logo.svg', 'README.md', '.cursorrules', '.cursor/rules/lavoro-italiano.mdc']) {
  assert.ok(existsSync(file), 'File mancante: ' + file);
}
const html = readFileSync('index.html', 'utf8');
assert.match(html, /<title>Diviso/i);
assert.match(html, /<html lang="it"/i);
assert.match(html, /<\/html>/i);
assert.match(html, /diviso-v2/);
assert.match(html, /\.\/diviso-logo\.svg/);
assert.doesNotMatch(html, /https:\/\/sartoriluca65\.github\.io\/(?:analytics\/|diviso-logo|apple-touch-icon)/);
assert.match(html, /https:\/\/sartoriluca65\.github\.io\/Diviso\//);
const logo = readFileSync('diviso-logo.svg', 'utf8');
assert.match(logo, /<svg/);
console.log('Verifica struttura Diviso autonomo superata');
