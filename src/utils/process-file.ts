import { spawnSync } from 'node:child_process';

export const processFile = (file: string): void => {
  console.info(`Process file: ${file}`);

  const { error } = spawnSync(
    'ffmpeg',
    ['-i', file, '-qscale', '0', `${file}.mp4`],
    { encoding: 'utf-8' }
  );

  if (error) {
    console.error(error);
    return;
  }

  console.info('Done');
};
