#!/usr/bin/env node

import { argv } from 'process';
import { checkIsDir } from './utils/check-is-dir.js';
import { collectMovFiles } from './utils/collect-mov-files.js';
import { processFile } from './utils/process-file.js';

const [path] = argv.slice(2);

const files: string[] = [];

if (checkIsDir(path)) {
  const movFiles = collectMovFiles(path);
  files.push(...movFiles);
}

for (const file of files) {
  processFile(file);
}
