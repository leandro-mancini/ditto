import { defineSemanticTokens } from '../../core';

export const semanticSpacing = defineSemanticTokens.spacing({
  none: { value: '{spacing.0}' },
  '4xsm': { value: '{spacing.1x}' },
  '3xsm': { value: '{spacing.2x}' },
  '2xsm': { value: '{spacing.3x}' },
  xsm: { value: '{spacing.4x}' },
  sm: { value: '{spacing.5x}' },
  md: { value: '{spacing.6x}' },
  lg: { value: '{spacing.7x}' },
  xlg: { value: '{spacing.8x}' },
  '3xlg': { value: '{spacing.10x}' },
  '4xlg': { value: '{spacing.12x}' },
});
