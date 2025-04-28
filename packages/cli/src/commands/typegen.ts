import { Command } from 'commander';
import createDebug from 'debug';
import { log, outro } from '@clack/prompts';

import * as io from '../utils/io';
import { codegen } from './codegen';

interface CodegenFlags {
  strict?: boolean;
  format?: boolean;
  watch?: string;
  clean?: boolean;
}

const debug = createDebug('ditto:typegen');

/**
 * Comentário aqui
 */
export const TypegenCommand = new Command('typegen')
  .argument('<source>', 'caminho para o arquivo de tema')
  .description('Gerar tipagens de tema')
  .option(
    '--watch [path]',
    'Observar o diretório para alterações e reconstruir'
  )
  .option('--clean', 'Limpar o diretório de saída')
  .action(async (source: string, flags: CodegenFlags) => {
    if (flags.clean) {
      debug('diretório de saída de limpeza');
      await io.clean();
    }

    let result = await io.read(source);

    const build = async () => {
      await codegen(result.mod, flags);

      if (flags.watch) {
        log.info('\n⌛️ Observando as mudanças...');
      }
    };

    if (!flags.watch) {
      await build();
    } else {
      debug('watch dependencies', result.dependencies);
      io.watch(result.dependencies, async () => {
        result = await io.read(source);
        return build();
      });
    }

    outro('🎉 Feito!');
  });
