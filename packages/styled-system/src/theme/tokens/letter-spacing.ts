import { defineTokens } from '../../core';

export const letterSpacings = defineTokens.letterSpacings({
  'tighter-3': { value: '-2.5px' },
  'tighter-2': { value: '-2.3px' },
  'tighter-1': { value: '-1.75px' },
  tightest: { value: '-1.5px' },
  tighter: { value: '-0.75px' },
  tight: { value: '-0.5px' },
  base: { value: '-0.4px' },
  normal: { value: '-0.3px' },
  loose: { value: '-0.2px' },
});
