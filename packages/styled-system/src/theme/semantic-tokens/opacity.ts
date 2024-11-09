import { defineSemanticTokens } from '../../core';

export const semanticOpacity = defineSemanticTokens.opacity({
  light: { value: '{opacity.8}' },
  neutral_light: { value: '{opacity.24}' },
  neutral: { value: '{opacity.48}' },
  neutral_dark: { value: '{opacity.72}' },
  dark: { value: '{opacity.96}' },
});
