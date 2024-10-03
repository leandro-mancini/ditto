import { Metadata } from 'next';
import { docs } from '../../../../.velite';
import { notFound } from 'next/navigation';
import { Box, Stack } from '@dittox/react';
import { MDXContent } from '../../../components';

interface Props {
  params: { slug: string[] };
}

export default function Page(props: Props) {
  const { params } = props;

  const page = docs.find(
    (doc) => doc.slug === ['docs', ...params.slug].join('/')
  );

  if (!page) {
    return notFound();
  }

  return (
    // <Stack></Stack>
    <MDXContent code={page.code} />
    // <Stack
    //     flex="1"
    //     width="full"
    //     px={{ md: "12" }}
    //     pt="10"
    //     pb="16"
    //     overflow="auto"
    //     minHeight="var(--content-height)"
    // >
    //     <Box>
    //         <MDXContent code={page.code} />
    //         {/* <MDXPagination /> */}
    //     </Box>
    // </Stack>
  );
}

export const generateMetadata = (props: Props): Metadata => {
  const page = getPageBySlug(props.params.slug);

  const category = page?.slug
    .replace('docs/', '')
    .split('/')
    .slice(0, -1)
    .join(' > ')
    ?.replace('-', ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: page?.title,
    description: page?.description,
    openGraph: {
      images: `/og?title=${page?.title}&category=${category}`,
    },
  };
};

export function generateStaticParams() {
  return docs.map((item) => ({
    slug: item.slug.split('/').slice(1),
  }));
}

function getPageBySlug(slug: string[]) {
  return docs.find((doc) => doc.slug === ['docs', ...slug].join('/'));
}
