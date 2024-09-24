import { Box, type BoxProps } from 'packages/react/src/index';

interface TokenDocProps extends BoxProps {
  action?: React.ReactNode;
}

export const TokenDoc = (props: TokenDocProps) => {
  const { title, children, action, ...rest } = props;
  return (
    <Box bg="bg" rounded="0.75rem" borderWidth="0.5px" {...rest}>
      <Box p="1.5rem" pb="0">
        {title && <Box as="h2">{title}</Box>}
        {action}
      </Box>
      <Box p="1.5rem">{children}</Box>
    </Box>
  );
};
