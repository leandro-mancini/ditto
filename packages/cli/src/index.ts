import { Command } from 'commander';
import { TypegenCommand } from './commands/typegen';

export async function run() {
  const program = new Command().name('ditto').version('1.0.0-beta.1');

  program.addCommand(TypegenCommand);

  program.parse();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
