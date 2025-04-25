import { Box, BoxProps, Stack } from '@ditto/react';
import React, { Suspense, lazy } from 'react';

interface Props {
  name: string;
}

function formatComponentName(name: string) {
  return name
    .split(/[-\/]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

export const ExamplePreview = (props: Props) => {
  const { name } = props;
  const componentName = formatComponentName(name);

  const Component = lazy(() =>
    import(`../../compositions/examples/${name}`).then((mod) => ({
      default: mod[componentName],
    }))
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

interface CodeWrapperProps {
  maxHeight?: BoxProps['maxHeight'];
  bg?: BoxProps['bg'];
  px?: BoxProps['px'];
  py?: BoxProps['py'];
  children: React.ReactNode;
}

export const ExampleCodeWrapper = (props: CodeWrapperProps) => {
  const { children, maxHeight, bg, px = 8, py = 6 } = props;

  return (
    <Box
      height="100%"
      overflow="auto"
      css={{
        position: 'relative',
        '& pre': {
          px,
          py,
          maxHeight,
          overflow: 'auto',
          my: '0',
          bg,
        },
      }}
    >
      {children}
    </Box>
  );
};

interface CodeProps extends Props {
  showCopy?: boolean;
  ext?: string;
}

export const ExampleCode = (props: CodeProps) => {
  return <Box>ExampleCode</Box>;

  // const { name, showCopy = true, ext = "tsx" } = props

  // const content = await readExampleFile(name, ext)
  // const html = await highlightCode(content)
  // return (
  //   <>
  //     <div
  //       className="code-highlight"
  //       dangerouslySetInnerHTML={{ __html: html }}
  //     />
  //     {showCopy && (
  //       <Box pos="absolute" top="4" right="6">
  //         <CopyButton value={content} />
  //       </Box>
  //     )}
  //   </>
  // )
};

export const ExampleMdx = (props: Props) => {
  const { name } = props;
  if (!name) return null;
  return (
    <Stack>
      <ExamplePreview name={name} />
      <ExampleCodeWrapper maxHeight="480px">
        <ExampleCode name={name} />
      </ExampleCodeWrapper>
    </Stack>
  );
};
