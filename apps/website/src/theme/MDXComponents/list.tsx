import { Box, BoxProps } from '@dittox/react';
import React from 'react';

export const Ol = (props: BoxProps) => {
  return (
    <Box
      as="ol"
      css={{
        marginTop: '1em',
        marginBottom: '2em',
        paddingInlineStart: '1.5em',
        '& > li': {
          paddingInlineStart: '0.4em',
          listStyleType: 'decimal',
          '&::marker': {
            color: 'fg.muted/50',
          },
        },
        '& ol, & ul': {
          marginTop: '0.5em',
          marginBottom: '0.5em',
        },
      }}
      {...props}
    />
  );
};

export const Ul = (props: BoxProps) => {
  return (
    <Box
      as="ul"
      css={{
        marginTop: '1em',
        marginBottom: '2em',
        paddingInlineStart: '1.5em',
        '& > li': {
          paddingInlineStart: '0.4em',
          listStyleType: 'disc',
          '&::marker': {
            color: 'fg.muted/50',
          },
        },
        '& ol, & ul': {
          marginTop: '0.5em',
          marginBottom: '0.5em',
        },
      }}
      {...props}
    />
  );
};

export const Li = (props: BoxProps) => {
  return (
    <Box
      as="li"
      css={{
        marginY: '0.8em',
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
      {...props}
    />
  );
};
