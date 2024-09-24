import {
  Box,
  Center,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  VStack,
} from 'packages/react/src/index';
import { TokenInterface } from 'packages/styled-system/src/index';

interface ColorGridItemProps {
  token: TokenInterface;
}

const ColorGridItem = (props: ColorGridItemProps) => {
  const { token } = props;
  const value = token.extensions.cssVar!.ref;
  const conditions = token.extensions.conditions;

  return (
    <VStack flex="1">
      <Center
        borderWidth="1px"
        borderColor="theme1.border.c"
        bg={value}
        w="100%"
        h="80px"
        rounded="0.5rem"
      />
      <Box fontSize={'10px'}>{token.name.replace('colors.', '')}</Box>
      {conditions && (
        <Stack mt="1">
          {Object.entries(conditions).map(([key, value]) => (
            <Box key={key} fontSize="10px" mt="-1">
              {key.replace('_', '')}: {value.replace('colors.', '')}
            </Box>
          ))}
        </Stack>
      )}
      {!conditions && (
        <Box fontSize="10px" mt="-1">
          {token.originalValue}
        </Box>
      )}
    </VStack>
  );
};

interface ColorGridProps extends SimpleGridProps {
  tokens: TokenInterface[];
}

export const ColorGrid = (props: ColorGridProps) => {
  const { tokens, variant = 'background', ...rest } = props;

  return (
    <SimpleGrid minChildWidth="120px" gap="1rem" {...rest}>
      {tokens.map((token) => (
        <ColorGridItem key={token.name} token={token} />
      ))}
    </SimpleGrid>
  );
};
