import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '../../components/Highlight';
import { Box } from '@dittox/react';
import { Anchor } from './anchor';
import { P, Strong } from './text';
import { H1, H2, H3, H4 } from './heading';
import { Code, Pre } from './code';
import { Li, Ol, Ul } from './list';
import { CodeBlock } from './code-block';

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
  //   code: Code,
  ol: Ol,
  ul: Ul,
  li: Li,
  //   'code-group': CodeGroup,
  //   Example: Example,
  //   ExampleTabs: ExampleTabs,
  'code-block': CodeBlock,
};
