import { defineTokens } from '../../core';

export const letterSpacings = defineTokens.letterSpacings({
  tighter: { value: '-0.065em' },
  tight: { value: '-0.05em' },
  wide: { value: '-0.045em' },
  regular: { value: '0' },
});
