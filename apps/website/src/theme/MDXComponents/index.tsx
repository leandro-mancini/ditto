import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '../../components/Highlight';
import { Anchor } from './anchor';
import { P, Strong } from './text';
import { H1, H2, H3, H4 } from './heading';
import { Code, Pre } from './code';
import { Li, Ol, Ul } from './list';
import { CodeBlock } from './code-block';
import { ExamplePreview } from './example';
import {
  DurationTokenDoc,
  KeyframeDoc,
} from '../../compositions/examples/theme/keyframe-doc';
import { AspectRatioTokenDoc } from '../../compositions/examples/theme/aspect-ratio-token-doc';
import { BreakpointDoc } from '../../compositions/examples/theme/breakpoint-doc';
import {
  ColorSemanticTokenDoc,
  ColorTokenDoc,
} from '@site/src/compositions/examples/theme/color-token-doc';
import {
  BorderRadiusSemanticTokenDoc,
  BorderRadiusTokenDoc,
} from '@site/src/compositions/examples/theme/border-radius-token-doc';
import { ShadowTokenDoc } from '@site/src/compositions/examples/theme/shadow-token-doc';
import { SizesTokenDoc } from '@site/src/compositions/examples/theme/sizes-token-doc';
import {
  SpacingSemanticTokenDoc,
  SpacingTokenDoc,
} from '@site/src/compositions/examples/theme/spacing-token-doc';
import { ZIndexTokenDoc } from '@site/src/compositions/examples/theme/z-index-token-doc';
import {
  FontSizeTokenDoc,
  FontTokenDoc,
  FontWeightTokenDoc,
} from '@site/src/compositions/examples/theme/typography-token-doc';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Highlight,
  a: Anchor,
  p: P,
  strong: Strong,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  pre: Pre,
  // code: Code,
  ol: Ol,
  ul: Ul,
  li: Li,
  ExamplePreview,
  //   'code-group': CodeGroup,
  //   Example: Example,
  //   ExampleTabs: ExampleTabs,
  'code-block': CodeBlock,
  KeyframeDoc,
  DurationTokenDoc,
  AspectRatioTokenDoc,
  BreakpointDoc,
  ColorTokenDoc,
  ColorSemanticTokenDoc,
  BorderRadiusTokenDoc,
  BorderRadiusSemanticTokenDoc,
  ShadowTokenDoc,
  SizesTokenDoc,
  SpacingTokenDoc,
  SpacingSemanticTokenDoc,
  FontTokenDoc,
  FontSizeTokenDoc,
  FontWeightTokenDoc,
  ZIndexTokenDoc,
};
