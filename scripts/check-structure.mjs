import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
for (const file of ['index.html', 'README.md', '.cursorrules', '.cursor/rules/lavoro-italiano.mdc']) {
  assert.ok(existsSync(file), 'File mancante: ' + file);
}
const html = readFileSync('index.html', 'utf8');
assert.match(html, /<title>Diviso/i, 'Titolo Diviso mancante');
assert.match(html, /<html lang="it"/i, 'Lingua italiana mancante');
assert.match(html, /<\/html>/i, 'HTML incompleto');
assert.match(html, /diviso-v2/, 'Logica Diviso mancante');
console.log('Verifica struttura Diviso superata');
