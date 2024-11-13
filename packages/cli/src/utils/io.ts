import { existsSync, mkdirSync, rm } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { isValidSystem } from '@dittox/styled-system';
import { bundleNRequire } from 'bundle-n-require';
import chokidar from 'chokidar';
import { log } from '@clack/prompts';

import { ReadResult } from './types';
import { writeFile } from 'node:fs/promises';

const getBasePath = async () => {
  if (!process.env.LOCAL) {
    const rootPath = require.resolve('@dittox/styled-system');
    const rootUrl = pathToFileURL(rootPath).href;

    return resolve(
      fileURLToPath(dirname(rootUrl)),
      '..',
      'styled-system',
      'core',
      'generated'
    );
  }

  const root = join(process.cwd(), 'packages', 'react', 'src');
  return join(root, 'styled-system', 'generated');
};

export const basePath = getBasePath();

const outPath = async (file: string) => {
  const ext = process.env.LOCAL ? 'ts' : 'd.ts';
  const path = await basePath;

  return join(path, `${file}.${ext}`);
};

console.log('basePath', basePath);

export async function clean() {
  console.log('🧹 Cleaning output directory');

  const path = await basePath;

  rm(path, { recursive: true }, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
}

export const read = async (file: string): Promise<ReadResult> => {
  const filePath = resolve(file);

  const { mod, dependencies } = await bundleNRequire(filePath);

  const resolvedMod = mod.default || mod.preset || mod.system || mod;

  if (!isValidSystem(resolvedMod)) {
    throw new Error(
      `Exportação padrão não encontrada em ${file}. Você esqueceu de fornecer um export default?`
    );
  }

  return { mod: resolvedMod, dependencies };
};

export function watch(paths: string[], cb: () => Promise<void>) {
  const watcher = chokidar.watch(paths, { ignoreInitial: true });

  watcher.on('ready', cb).on('change', async (filePath) => {
    log.info(`📦 Arquivo alterado: ${filePath}`);
    return cb();
  });

  process.once('SIGINT', () => watcher.close());
  process.once('SIGTERM', () => watcher.close());
}

export function ensureDir(dirPath: string): void {
  if (existsSync(dirPath)) return;
  ensureDir(dirname(dirPath));
  mkdirSync(dirPath);
}

export const write = async (file: string, content: Promise<string>) => {
  try {
    const outpath = await outPath(file);

    console.log('file', file);
    console.log('content', content);

    await writeFile(outpath, await content);
  } catch (error) {
    console.log(error);
  }
};
