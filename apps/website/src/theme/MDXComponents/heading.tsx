import { Box, BoxProps } from '@dittox/react';
import React from 'react';

export const H1 = (props: BoxProps) => {
  return (
    <Box
      as="h1"
      css={{
        color: 'fg',
        fontSize: '2em',
        letterSpacing: '-0.02em',
        marginTop: '0',
        marginBottom: '0.8em',
        lineHeight: '1.2em',
        fontWeight: 'medium',
        scrollMarginTop: 'calc(var(--header-height) + 1.5em)',
      }}
      {...props}
    >
      <Box as="a" />
    </Box>
  );
};

export const H2 = (props: BoxProps) => {
  return (
    <Box
      as="h2"
      className="anchor"
      css={{
        color: 'fg',
        fontSize: '1.4em',
        letterSpacing: '-0.02em',
        marginTop: '1.6em',
        marginBottom: '0.8em',
        lineHeight: '1.4em',
        fontWeight: 'semibold',
        scrollMarginTop: 'calc(var(--header-height) + 1.5em)',
        '& code': { fontSize: '0.9em' },
        '& + *': { marginTop: '0' },
        '& a': { font: 'inherit!' },
      }}
      {...props}
    >
      <Box as="a" href={`#${props.id}`}>
        {props.children}
      </Box>
    </Box>
  );
};

export const H3 = (props: BoxProps) => {
  return (
    <Box
      as="h3"
      css={{
        color: 'fg',
        fontSize: '1.2em',
        letterSpacing: '-0.01em',
        marginTop: '1.5em',
        marginBottom: '0.4em',
        fontWeight: 'semibold',
        lineHeight: '1.5em',
        scrollMarginTop: 'calc(var(--header-height) + 1.5em)',
        '& code': { fontSize: '0.9em' },
        '& + *': { marginTop: '0' },
        '& a': { font: 'inherit!' },
      }}
      {...props}
    />
  );
};

export const H4 = (props: BoxProps) => {
  return (
    <Box
      as="h4"
      css={{
        color: 'fg',
        marginTop: '2em',
        marginBottom: '0.8em',
        letterSpacing: '-0.01em',
        fontWeight: 'semibold',
        lineHeight: '1.5em',
        scrollMarginTop: 'calc(var(--header-height) + 1.5em)',
        '& + *': { marginTop: '0' },
        '& a': { font: 'inherit!' },
      }}
      {...props}
    />
  );
};
