import { defineConfig } from '../core';
import { breakpoints } from './breakpoints';
import { globalCss } from './global-css';
import { keyframes } from './keyframes';
import { animationStyles } from './motion-styles';
import { semanticColors } from './semantic-tokens/colors';
import { colors } from './tokens/colors';

export const defaultThemeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: 'ditto',
  cssVarsRoot: ':where(:root, :host)',
  globalCss: globalCss,
  theme: {
    breakpoints: breakpoints,
    keyframes: keyframes,
    tokens: {
      colors,
    },
    semanticTokens: {
      colors: semanticColors,
    },
    animationStyles: animationStyles,
  },
});
