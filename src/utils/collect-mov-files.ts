import { readdirSync } from 'node:fs';

const checkIsMovFile = (file: string): boolean => file.endsWith('.mov');

export const collectMovFiles = (path: string): Array<string> => {
  const dir = readdirSync(path);
  return dir.filter(checkIsMovFile).map((file) => `${path}/${file}`);
};
