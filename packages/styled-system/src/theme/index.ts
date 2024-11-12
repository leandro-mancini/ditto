import { defineConfig } from '../core';
import { breakpoints } from './breakpoints';
import { globalCss } from './global-css';
import { keyframes } from './keyframes';
import { animationStyles } from './motion-styles';
import { semanticColors } from './semantic-tokens/colors';
import { semanticRadii } from './semantic-tokens/radii';
import { semanticSpacing } from './semantic-tokens/spacing';
import { textStyles } from './text-styles';
import { animations } from './tokens/animations';
import { aspectRatios } from './tokens/aspect-ratios';
import { borderWidths } from './tokens/border-widths';
import { colors } from './tokens/colors';
import { durations } from './tokens/durations';
import { easings } from './tokens/easings';
import { fontSizes } from './tokens/font-sizes';
import { fontWeights } from './tokens/font-weights';
import { fonts } from './tokens/fonts';
import { gradients } from './tokens/gradients';
import { letterSpacings } from './tokens/letter-spacing';
import { lineHeights } from './tokens/line-heights';
import { opacity } from './tokens/opacity';
import { shadows } from './tokens/shadows';
import { sizes } from './tokens/sizes';
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
      borderWidths,
      durations,
      easings,
      fonts,
      fontSizes,
      fontWeights,
      gradients,
      letterSpacings,
      lineHeights,
      opacity,
      shadows,
      sizes,
      zIndex: zIndices,
    },
    semanticTokens: {
      colors: semanticColors,
      radii: semanticRadii,
      spacing: semanticSpacing,
    },
    animationStyles: animationStyles,
    textStyles: textStyles,
  },
});
