import { writeFile } from 'node:fs/promises';
// Only public runtime configuration is emitted into the browser build.
await writeFile(new URL('../dist/runtime-config.js', import.meta.url), 'window.KARLI_RUNTIME = { backend: true };\n');
console.log('Verceli veebileht on valmis. Salajasi keskkonnamuutujaid ei lisatud brauserikoodi.');

