import { Box } from '@dittox/react';
import Link, { NavLinkProps } from '@docusaurus/Link';
import React from 'react';

export const Anchor = (props: any) => {
  return (
    <Box
      asChild
      css={{
        color: '#fafafa',
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        textDecorationThickness: '2px',
        textDecorationColor: '#d4d4d8',
        fontWeight: '500',
      }}
    >
      <Link {...props} />
    </Box>
  );
};
