import { defineConfig } from '../core';
import { breakpoints } from './breakpoints';
import { globalCss } from './global-css';
import { keyframes } from './keyframes';
import { animationStyles } from './motion-styles';
import { semanticColors } from './semantic-tokens/colors';
import { animations } from './tokens/animations';
import { aspectRatios } from './tokens/aspect-ratios';
import { colors } from './tokens/colors';
import { durations } from './tokens/durations';
import { easings } from './tokens/easings';
import { zIndices } from './tokens/z-indices';

export const defaultThemeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: 'ditto',
  cssVarsRoot: ':where(:root, :host)',
  globalCss: globalCss,
  theme: {
    breakpoints: breakpoints,
    keyframes: keyframes,
    tokens: {
      animations,
      aspectRatios,
      colors,
      durations,
      easings,
      zIndex: zIndices,
    },
    semanticTokens: {
      colors: semanticColors,
    },
    animationStyles: animationStyles,
  },
});
