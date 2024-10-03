import * as runtime from 'react/jsx-runtime';
import {
  Anchor,
  Code,
  H1,
  H2,
  H3,
  H4,
  Img,
  Li,
  Ol,
  P,
  Pre,
  Strong,
  Ul,
} from './mdx';

// const sharedComponents = {
//     a: Anchor,
//     blockquote: Blockquote,
//     img: Img,
//     p: P,
//     strong: Strong,
//     h1: H1,
//     h2: H2,
//     h3: H3,
//     h4: H4,
//     kbd: Kbd,
//     pre: Pre,
//     code: Code,
//     ol: Ol,
//     ul: Ul,
//     li: Li,
//     table: Table,
//     steps: Steps,
//     callout: Callout,
//     'code-group': CodeGroup,
//     Example: Example,
//     ExampleTabs: ExampleTabs,
//     card: Card,
//     'card-group': CardGroup,
//     Card,
//     PropTable,
//     ComponentGrid,
//     ResourceCard: ResourceCard,
//     'code-block': CodeBlock,
//   };

const sharedComponents = {
  a: Anchor,
  code: Code,
  p: P,
  strong: Strong,
  pre: Pre,
  // blockquote: Blockquote,
  img: Img,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  ol: Ol,
  ul: Ul,
  li: Li,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export const MDXContent = (props: MDXProps) => {
  const { code, components = {} } = props;
  const Component = useMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
};
