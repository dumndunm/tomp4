#!/usr/bin/env node

import { argv } from 'process';
import { rm } from 'fs';
import { resolve, dirname, basename, extname } from 'path';
import { spawn } from 'child_process';

const { log } = console;
const [input] = argv.slice(2);
const childProcess = spawn('ffmpeg', [
  '-i',
  input,
  '-qscale',
  '0',
  resolve(dirname(input), `${basename(input, extname(input))}.mp4`),
]);
childProcess.stdout.on('data', (chunk) => log(chunk));
childProcess.stderr.setEncoding('utf8').on('data', (chunk) => log(chunk));
childProcess.on('close', () => rm(input, (error) => log(error ? error : '👍')));
