import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import { defineCollection, defineConfig, s } from 'velite';
import { remarkCallout } from './src/lib/remark-callout';
import { remarkCodeTitle } from './src/lib/remark-code-title';
import { remarkCodeGroup } from './src/lib/remark-codegroup';
import { remarkSteps } from './src/lib/remark-steps';
import { remarkCard } from './src/lib/remark-card';
import rehypeSlug from 'rehype-slug';
import rehypeShiki from '@shikijs/rehype';
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const cwd = process.cwd();

const slugify = (str: string) => {
  return str
    .replace(/.*\/content\//, '')
    .replace(/\.mdx$/, '')
    .replace(cwd, '');
};

const docs = defineCollection({
  name: 'Docs',
  pattern: ['content/docs/**/*.mdx'],
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
      metadata: s.metadata(),
      content: s.markdown(),
      status: s.string().optional(),
      toc: s.toc(),
      code: s.mdx(),
      hideToc: s.boolean().optional(),
      composition: s.boolean().optional(),
      links: s
        .object({
          source: s.string().optional(),
          storybook: s.string().optional(),
          recipe: s.string().optional(),
          ark: s.string().optional(),
        })
        .optional(),
    })
    .transform((data, { meta }) => {
      return {
        ...data,
        slug: slugify(meta.path),
        category: meta.path
          .replace(/.*\/content\//, '')
          .replace(/\/[^/]*$/, '')
          .replace(cwd, ''),
      };
    }),
});

export default defineConfig({
  root: cwd,
  collections: { docs },
  mdx: {
    remarkPlugins: [
      remarkDirective,
      remarkGfm,
      remarkCallout,
      remarkCodeTitle,
      remarkCodeGroup,
      remarkSteps,
      remarkCard,
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeShiki,
        {
          transformers: [
            transformerNotationDiff(),
            transformerNotationFocus(),
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
            transformerMetaHighlight(),
            transformerMetaWordHighlight(),
          ],
          theme: 'dark-plus',
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['subheading-anchor'],
          },
        },
      ],
    ],
  },
});
