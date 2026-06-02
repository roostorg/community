#!/usr/bin/env node
/**
 * Process ROOST meeting notes from Google Docs Markdown export to GitHub Discussions format.
 *
 * Usage:
 *   node process-notes.mjs notes.md        # from file
 *   cat notes.md | node process-notes.mjs  # from stdin
 *
 * Transformation logic lives in transform.js. Name mapping lives in name-map.json.
 */
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { loadNameMap, processNotes } from './transform.js';

const configPath = join(dirname(fileURLToPath(import.meta.url)), 'name-map.json');

let emailToGithub = {}, nameToGithub = {};
if (existsSync(configPath)) {
  ({ emailToGithub, nameToGithub } = loadNameMap(JSON.parse(readFileSync(configPath, 'utf8'))));
} else {
  process.stderr.write(`Warning: ${configPath} not found; name mapping disabled\n`);
}

let text;
if (process.argv[2]) {
  text = readFileSync(process.argv[2], 'utf8');
} else {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  text = Buffer.concat(chunks).toString('utf8');
}

process.stdout.write(processNotes(text, emailToGithub, nameToGithub));
