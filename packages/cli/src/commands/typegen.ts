import { Command } from 'commander';
import createDebug from 'debug';

interface CodegenFlags {
  strict?: boolean;
  format?: boolean;
  watch?: string;
  clean?: boolean;
}

const debug = createDebug('dittox:typegen');

export const TypegenCommand = new Command('typegen')
  .argument('<source>', 'caminho para o arquivo de tema')
  .description('Gerar tipagens de tema e receita')
  .option(
    '--strict',
    'Gerar tipos estritos para variante e tamanho de adereços'
  )
  .option(
    '--watch [path]',
    'Observar o diretório para alterações e reconstruir'
  )
  .option('--clean', 'Limpar o diretório de saída')
  .action(async (source: string, flags: CodegenFlags) => {
    console.log('source', source);
    console.log('flags', flags);
    console.log(`Gerando tipos para o arquivo:`);
  });
