import { defineSemanticTokens } from '../../core';

export const semanticBorderWidths = defineSemanticTokens.borderWidths({
  none: { value: '{borderWidths.0}' },
  thin: { value: '{borderWidths.1x}' },
  light: { value: '{borderWidths.2x}' },
  medium: { value: '{borderWidths.4x}' },
  thick: { value: '{borderWidths.8x}' },
});
