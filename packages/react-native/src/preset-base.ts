import { defineConfig, createColorMixTransform } from '@dittox/styled-system';

export const defaultBaseConfig = defineConfig({
  utilities: {
    // background
    background: {
      values: 'colors',
      shorthand: ['bg'],
      transform: createColorMixTransform('background'),
    },
    backgroundColor: {
      values: 'colors',
      shorthand: ['bgColor'],
      transform: createColorMixTransform('backgroundColor'),
    },
    // border
    border: { values: 'borders' },
    borderTop: { values: 'borders' },
    borderLeft: { values: 'borders' },
    borderBlockStart: { values: 'borders' },
    borderRight: { values: 'borders' },
    borderInlineEnd: { values: 'borders' },
    borderBottom: { values: 'borders' },
    borderBlockEnd: { values: 'borders' },
    borderInlineStart: { values: 'borders', shorthand: ['borderStart'] },
    borderInline: { values: 'borders', shorthand: ['borderX'] },
    borderBlock: { values: 'borders', shorthand: ['borderY'] },
    // border colors
    borderColor: {
      values: 'colors',
      transform: createColorMixTransform('borderColor'),
    },
    borderTopColor: {
      values: 'colors',
      transform: createColorMixTransform('borderTopColor'),
    },
    borderBlockStartColor: {
      values: 'colors',
      transform: createColorMixTransform('borderBlockStartColor'),
    },
    borderBottomColor: {
      values: 'colors',
      transform: createColorMixTransform('borderBottomColor'),
    },
    borderBlockEndColor: {
      values: 'colors',
      transform: createColorMixTransform('borderBlockEndColor'),
    },
    borderLeftColor: {
      values: 'colors',
      transform: createColorMixTransform('borderLeftColor'),
    },
    borderInlineStartColor: {
      values: 'colors',
      shorthand: ['borderStartColor'],
      transform: createColorMixTransform('borderInlineStartColor'),
    },
    borderRightColor: {
      values: 'colors',
      transform: createColorMixTransform('borderRightColor'),
    },
    borderInlineEndColor: {
      values: 'colors',
      shorthand: ['borderEndColor'],
      transform: createColorMixTransform('borderInlineEndColor'),
    },
    // border styles
    borderStyle: { values: 'borderStyles' },
    borderTopStyle: { values: 'borderStyles' },
    borderBlockStartStyle: { values: 'borderStyles' },
    borderBottomStyle: { values: 'borderStyles' },
    borderBlockEndStyle: {
      values: 'borderStyles',
    },
    borderInlineStartStyle: {
      values: 'borderStyles',
      shorthand: ['borderStartStyle'],
    },
    borderInlineEndStyle: {
      values: 'borderStyles',
      shorthand: ['borderEndStyle'],
    },
    borderLeftStyle: { values: 'borderStyles' },
    borderRightStyle: { values: 'borderStyles' },
    // border radius
    borderRadius: { values: 'radii', shorthand: ['rounded'] },
    borderTopLeftRadius: { values: 'radii', shorthand: ['roundedTopLeft'] },
    borderStartStartRadius: {
      values: 'radii',
      shorthand: ['roundedStartStart', 'borderTopStartRadius'],
    },
    borderEndStartRadius: {
      values: 'radii',
      shorthand: ['roundedEndStart', 'borderBottomStartRadius'],
    },
    borderTopRightRadius: {
      values: 'radii',
      shorthand: ['roundedTopRight'],
    },
    borderStartEndRadius: {
      values: 'radii',
      shorthand: ['roundedStartEnd', 'borderTopEndRadius'],
    },
    borderEndEndRadius: {
      values: 'radii',
      shorthand: ['roundedEndEnd', 'borderBottomEndRadius'],
    },
    borderBottomLeftRadius: {
      values: 'radii',
      shorthand: ['roundedBottomLeft'],
    },
    borderBottomRightRadius: {
      values: 'radii',
      shorthand: ['roundedBottomRight'],
    },
    borderInlineStartRadius: {
      values: 'radii',
      property: 'borderRadius',
      shorthand: ['roundedStart', 'borderStartRadius'],
      transform: (value) => ({
        borderStartStartRadius: value,
        borderEndStartRadius: value,
      }),
    },
    borderInlineEndRadius: {
      values: 'radii',
      property: 'borderRadius',
      shorthand: ['roundedEnd', 'borderEndRadius'],
      transform: (value) => ({
        borderStartEndRadius: value,
        borderEndEndRadius: value,
      }),
    },
    borderTopRadius: {
      values: 'radii',
      property: 'borderRadius',
      shorthand: ['roundedTop'],
      transform: (value) => ({
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
      }),
    },
    borderBottomRadius: {
      values: 'radii',
      property: 'borderRadius',
      shorthand: ['roundedBottom'],
      transform: (value) => ({
        borderBottomLeftRadius: value,
        borderBottomRightRadius: value,
      }),
    },
    borderLeftRadius: {
      values: 'radii',
      property: 'borderRadius',
      shorthand: ['roundedLeft'],
      transform: (value) => ({
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value,
      }),
    },
    borderRightRadius: {
      values: 'radii',
      property: 'borderRadius',
      shorthand: ['roundedRight'],
      transform: (value) => ({
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
      }),
    },
    // Border Widths
    borderWidth: { values: 'borderWidths' },
    borderBlockStartWidth: { values: 'borderWidths' },
    borderTopWidth: { values: 'borderWidths' },
    borderBottomWidth: { values: 'borderWidths' },
    borderBlockEndWidth: { values: 'borderWidths' },
    borderRightWidth: { values: 'borderWidths' },
    borderInlineWidth: {
      values: 'borderWidths',
      shorthand: ['borderXWidth'],
    },
    borderInlineStartWidth: {
      values: 'borderWidths',
      shorthand: ['borderStartWidth'],
    },
    borderInlineEndWidth: {
      values: 'borderWidths',
      shorthand: ['borderEndWidth'],
    },
    borderLeftWidth: { values: 'borderWidths' },
    borderBlockWidth: {
      values: 'borderWidths',
      shorthand: ['borderYWidth'],
    },
    // colors
    color: {
      values: 'colors',
      transform: createColorMixTransform('color'),
    },
    fill: {
      values: 'colors',
      transform: createColorMixTransform('fill'),
    },
    stroke: {
      values: 'colors',
      transform: createColorMixTransform('stroke'),
    },
    accentColor: {
      values: 'colors',
      transform: createColorMixTransform('accentColor'),
    },
    // effects
    boxShadow: { values: 'shadows', shorthand: ['shadow'] },
    boxShadowColor: {
      values: 'colors',
      transform: createColorMixTransform('--shadow-color'),
      shorthand: ['shadowColor'],
    },
    mixBlendMode: { shorthand: ['blendMode'] },
    backgroundBlendMode: { shorthand: ['bgBlendMode'] },
    opacity: { values: 'opacity' },
    // flexbox
    flexBasis: { values: 'sizes' },
    gap: { values: 'spacing' },
    rowGap: { values: 'spacing', shorthand: ['gapY'] },
    columnGap: { values: 'spacing', shorthand: ['gapX'] },
    flexDirection: { shorthand: ['flexDir'] },
    // grid
    gridGap: { values: 'spacing' },
    gridColumnGap: { values: 'spacing' },
    gridRowGap: { values: 'spacing' },
    // layout
    aspectRatio: { values: 'aspectRatios' },
    width: { values: 'sizes', shorthand: ['w'] },
    inlineSize: { values: 'sizes' },
    height: { values: 'sizes', shorthand: ['h'] },
    blockSize: { values: 'sizes' },
    boxSize: {
      values: 'sizes',
      property: 'width',
      transform: (v) => ({ width: v, height: v }),
    },
    minWidth: { values: 'sizes', shorthand: ['minW'] },
    minInlineSize: { values: 'sizes' },
    minHeight: { values: 'sizes', shorthand: ['minH'] },
    minBlockSize: { values: 'sizes' },
    maxWidth: { values: 'sizes', shorthand: ['maxW'] },
    maxInlineSize: { values: 'sizes' },
    maxHeight: { values: 'sizes', shorthand: ['maxH'] },
    maxBlockSize: { values: 'sizes' },
    // position
    position: { shorthand: ['pos'] },
    zIndex: { values: 'zIndex' },
    inset: { values: 'spacing' },
    insetInline: { values: 'spacing', shorthand: ['insetX'] },
    insetBlock: { values: 'spacing', shorthand: ['insetY'] },
    top: { values: 'spacing' },
    insetBlockStart: { values: 'spacing' },
    bottom: { values: 'spacing' },
    insetBlockEnd: { values: 'spacing' },
    left: { values: 'spacing' },
    right: { values: 'spacing' },
    insetInlineStart: {
      values: 'spacing',
      shorthand: ['insetStart'],
    },
    insetInlineEnd: {
      values: 'spacing',
      shorthand: ['insetEnd'],
    },
    // margin
    margin: { values: 'spacing', shorthand: ['m'] },
    marginTop: { values: 'spacing', shorthand: ['mt'] },
    marginBlockStart: { values: 'spacing', shorthand: ['mt'] },
    marginRight: { values: 'spacing', shorthand: ['mr'] },
    marginBottom: { values: 'spacing', shorthand: ['mb'] },
    marginBlockEnd: { values: 'spacing' },
    marginLeft: { values: 'spacing', shorthand: ['ml'] },
    marginInlineStart: { values: 'spacing', shorthand: ['ms', 'marginStart'] },
    marginInlineEnd: { values: 'spacing', shorthand: ['me', 'marginEnd'] },
    marginInline: { values: 'spacing', shorthand: ['mx', 'marginX'] },
    marginBlock: { values: 'spacing', shorthand: ['my', 'marginY'] },
    // padding
    padding: { values: 'spacing', shorthand: ['p'] },
    paddingTop: { values: 'spacing', shorthand: ['pt'] },
    paddingRight: { values: 'spacing', shorthand: ['pr'] },
    paddingBottom: { values: 'spacing', shorthand: ['pb'] },
    paddingBlockStart: { values: 'spacing' },
    paddingBlockEnd: { values: 'spacing' },
    paddingLeft: { values: 'spacing', shorthand: ['pl'] },
    paddingInlineStart: {
      values: 'spacing',
      shorthand: ['ps', 'paddingStart'],
    },
    paddingInlineEnd: { values: 'spacing', shorthand: ['pe', 'paddingEnd'] },
    paddingInline: { values: 'spacing', shorthand: ['px', 'paddingX'] },
    paddingBlock: { values: 'spacing', shorthand: ['py', 'paddingY'] },
    // text decoration
    textDecoration: { shorthand: ['textDecor'] },
    textDecorationColor: {
      values: 'colors',
      transform: createColorMixTransform('textDecorationColor'),
    },
    textShadow: { values: 'shadows' },
    // typography
    fontFamily: { values: 'fonts' },
    fontSize: { values: 'fontSizes' },
    fontWeight: { values: 'fontWeights' },
    lineHeight: { values: 'lineHeights' },
    letterSpacing: { values: 'letterSpacings' },
    textIndent: { values: 'spacing' },
    truncate: {
      values: { type: 'boolean' },
      transform(value) {
        if (value === true) {
          return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          };
        }
        return {};
      },
    },
    lineClamp: {
      transform(value) {
        if (value === 'none') {
          return {
            WebkitLineClamp: 'unset',
          };
        }
        return {
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: value,
          WebkitBoxOrient: 'vertical',
        };
      },
    },
    // helpers
    srOnly: {
      values: { type: 'boolean' },
      transform(value) {
        return srMapping[value] || {};
      },
    },
  },
});

const srMapping: Record<string, any> = {
  true: {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: '0',
    margin: -1,
    overflow: 'hidden',
    // clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  },
  false: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    padding: 0,
    margin: 0,
    overflow: 'visible',
    // clip: 'auto',
    whiteSpace: 'normal',
  },
};
