import { defineConfig } from '../core';
import { breakpoints } from './breakpoints';
import { globalCss } from './global-css';
import { keyframes } from './keyframes';
import { animationStyles } from './motion-styles';
import { semanticBorderWidths } from './semantic-tokens/border-widths';
import { semanticColors } from './semantic-tokens/colors';
import { semanticOpacity } from './semantic-tokens/opacity';
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
import { letterSpacings } from './tokens/letter-spacing';
import { lineHeights } from './tokens/line-heights';
import { opacity } from './tokens/opacity';
import { radii } from './tokens/radius';
import { shadows } from './tokens/shadows';
import { sizes } from './tokens/sizes';
import { spacing } from './tokens/spacing';
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
      letterSpacings,
      lineHeights,
      opacity,
      radii,
      shadows,
      sizes,
      spacing,
      zIndex: zIndices,
    },
    semanticTokens: {
      colors: semanticColors,
      borderWidths: semanticBorderWidths,
      opacity: semanticOpacity,
      radii: semanticRadii,
      spacing: semanticSpacing,
    },
    animationStyles: animationStyles,
    textStyles: textStyles,
  },
});
