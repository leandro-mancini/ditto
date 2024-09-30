export * from './config';
export * from './color-mix';

export type {
  ConditionalValue,
  GlobalStyleObject,
  JsxStyleProps,
  SystemStyleObject,
  MinimalNested,
} from './css.types';

export type {
  RecipeProps,
  SlotRecipeProps,
  SlotRecipeRecord,
  ConfigRecipes,
} from './generated/recipes.gen';

export type {
  CssVarProperties,
  SystemProperties,
} from './generated/system.gen';

export type { ColorPalette, Token, Tokens } from './generated/token.gen';

export type * from './recipe.types';

export { createSystem, isValidSystem } from './system';

export type {
  SystemConfig,
  SystemContext,
  Token as TokenInterface,
} from './types';
