'use client';

import { Box } from '@dittox/react';

export const Img = (props: any) => {
  return (
    <Box
      asChild
      css={{
        marginTop: '1.7em',
        marginBottom: '1.7em',
        borderRadius: 'lg',
        boxShadow: 'inset',
      }}
    >
      <img {...props} />
    </Box>
  );
};
