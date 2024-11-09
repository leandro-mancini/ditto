import { Box, BoxProps } from '@dittox/react';
import React from 'react';

export const Pre = (props: BoxProps) => {
  return (
    <Box
      as="pre"
      {...props}
      css={{
        backgroundColor: 'bg.subtle',
        shadow: 'inset',
        marginTop: '1.6em',
        marginBottom: '1.6em',
        borderRadius: '0.5rem',
        fontSize: '0.9em',
        paddingBlock: '0',
        paddingInline: '0',
        overflowX: 'auto',
        fontWeight: '400',
        '& code': {
          bg: 'transparent',
          fontSize: 'inherit',
          letterSpacing: 'inherit',
          borderWidth: 'inherit',
          padding: '0',
        },
      }}
    />
  );
};

export const Code = (props: BoxProps) => {
  return (
    <Box
      as="code"
      {...props}
      css={{
        fontSize: '0.8em',
        letterSpacing: '-0.01em',
        borderRadius: '0.5rem',
        borderWidth: '0.5px',
        bg: 'bg.subtle',
        color: 'fg',
        whiteSpace: 'pre',
        padding: '0.1em 0.4em',
      }}
    />
  );
};
