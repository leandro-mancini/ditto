import { defineSemanticTokens } from '../../core';

export const semanticRadii = defineSemanticTokens.radii({
  none: { value: '{radii.0}' },
  minimal: { value: '{radii.1x}' },
  tiny: { value: '{radii.2x}' },
  small: { value: '{radii.3x}' },
  medium: { value: '{radii.4x}' },
  large: { value: '{radii.8x}' },
  full: { value: '{radii.max}' },
});
