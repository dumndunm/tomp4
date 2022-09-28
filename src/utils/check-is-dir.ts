import { type PathLike, statSync } from 'node:fs';

export const checkIsDir = (path: PathLike): boolean => {
  const stat = statSync(path);
  return stat.isDirectory();
};
