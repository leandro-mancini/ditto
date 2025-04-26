import { SystemContext } from '@dittox/styled-system';

import * as io from '../utils/io';
import { tasks } from '../utils/tasks';
import { CodegenFlags } from '../utils/types';
import {
  generateCondition,
  generatePropTypes,
  generateRecipe,
  generateSystemTypes,
  generateTokens,
} from '../generates';

export async function codegen(sys: SystemContext, flags: CodegenFlags) {
  const path = await io.basePath;

  io.ensureDir(path);

  return tasks([
    {
      title: 'Gerando tipos de condições...',
      task: async () => {
        await io.write('conditions.gen', generateCondition(sys));
        return '✅ Tipagens de condições geradas';
      },
    },
    {
      title: 'Gerando tipos de receitas...',
      task: async () => {
        await io.write('recipes.gen', generateRecipe(sys, flags.strict));
        return '✅ Tipagens de receitas geradas';
      },
    },
    {
      title: 'Gerando tipos de utilitários...',
      task: async () => {
        await io.write('prop-types.gen', generatePropTypes(sys));
        return '✅ Tipagens de utilitários geradas';
      },
    },
    {
      title: 'Gerando tipos de token...',
      task: async () => {
        await io.write('token.gen', generateTokens(sys));
        return '✅ Tipagens de tokens geradas';
      },
    },
    {
      title: 'Gerando tipos de sistemas...',
      task: async () => {
        await io.write('system.gen', generateSystemTypes(sys));
        return '✅ Tipos de sistemas gerados';
      },
    },
  ]);
}
