import { Box, BoxProps } from '@dittox/react';
import React, { useEffect, useState } from 'react';
import { highlightCode } from './highlight-code';
import { CopyButton } from './copy-button';

interface CodeWrapperProps {
  maxHeight?: BoxProps['maxHeight'];
  bg?: BoxProps['bg'];
  px?: BoxProps['px'];
  py?: BoxProps['py'];
  children: React.ReactNode;
}

export const ExampleCodeWrapper = (props: CodeWrapperProps) => {
  const { children, maxHeight, bg, px = '32px', py = '24px' } = props;
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

interface CodeProps extends ExampleProps {
  showCopy?: boolean;
  ext?: string;
  content?: string;
}

export const ExampleCode = (props: CodeProps) => {
  const { content, showCopy } = props;
  const [highlightedCode, setHighlightedCode] = useState<string>('');

  // Executa a operação assíncrona no useEffect
  useEffect(() => {
    const highlight = async () => {
      if (content) {
        const html = await highlightCode(content);
        setHighlightedCode(html);
      }
    };

    highlight();
  }, [content]);

  return (
    <>
      <Box
        className="code-highlight"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
      {showCopy && (
        <Box pos="absolute" top="4" right="6">
          <CopyButton value={content} />
        </Box>
      )}
    </>
  );
};

interface ExampleProps {
  children?: any;
}

export const Example = (props: ExampleProps) => {
  const { children } = props;

  return (
    <Box rounded="0.5rem" overflow="hidden" divideY="1px">
      <ExampleCodeWrapper>
        <ExampleCode content={children} />
      </ExampleCodeWrapper>
    </Box>
  );
};
