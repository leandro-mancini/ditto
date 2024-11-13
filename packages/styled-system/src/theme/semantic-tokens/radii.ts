import { defineSemanticTokens } from '../../core';

export const semanticRadii = defineSemanticTokens.radii({
  zero: { value: '{sizes.0}' },
  xsm: { value: '{sizes.050}' },
  sm: { value: '{sizes.075}' },
  md: { value: '{sizes.100}' },
  lg: { value: '{sizes.125}' },
  xl: { value: '{sizes.150}' },
  '2xl': { value: '{sizes.200}' },
  '3xl': { value: '{sizes.250}' },
  '4xl': { value: '{sizes.300}' },
  full: { value: '9999999px' },
});
