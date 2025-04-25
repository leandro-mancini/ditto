import { Box, BoxProps } from '@ditto/react';
import React from 'react';

interface TokenDocProps extends BoxProps {
  action?: React.ReactNode;
}

export const TokenDoc = (props: TokenDocProps) => {
  const { title, children, action, ...rest } = props;
  return (
    <Box bg="bg" rounded="0.5rem" borderWidth="0.5px" {...rest}>
      <Box p="1.5rem" pb="0">
        {title && (
          <Box fontWeight="medium" as="h2">
            {title}
          </Box>
        )}
        {action}
      </Box>
      <Box p="1.5rem">{children}</Box>
    </Box>
  );
};
