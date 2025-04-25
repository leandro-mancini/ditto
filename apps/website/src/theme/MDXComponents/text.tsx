import { Box, BoxProps } from '@ditto/react';
import React from 'react';

export const P = (props: BoxProps) => {
  return (
    <Box
      as="p"
      {...props}
      css={{
        color: 'fg.subtle',
        lineHeight: '1.75',
        marginTop: '1em',
        marginBottom: '1em',
        _first: { marginTop: '0' },
        _last: { marginBottom: '0' },
        '& + .example-tabs': { marginTop: '2em' },
        '& code': {
          fontSize: '0.8em',
          letterSpacing: '-0.01em',
          borderRadius: '0.5rem',
          borderWidth: '0.5px',
          bg: 'bg.subtle',
          color: 'fg',
          whiteSpace: 'pre',
          padding: '0.1em 0.4em',
        },
      }}
    />
  );
};

export const Strong = (props: BoxProps) => {
  return (
    <Box
      as="strong"
      {...props}
      css={{
        fontWeight: 'semibold',
        color: 'fg',
      }}
    />
  );
};
