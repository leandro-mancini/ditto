import React from 'react';
import { TokenDoc } from './token-doc';
import {
  Box,
  Center,
  defaultSystem,
  For,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  VStack,
} from '@dittox/react';
import { TokenInterface } from '@dittox/styled-system';

const { tokens, _config } = defaultSystem;
const keys = Object.keys(_config.theme?.tokens?.shadows ?? {});
const shadows = tokens.categoryMap.get('shadows')!;
const allShadows = Array.from(shadows.values());

export const ShadowTokenDoc = () => {
  return (
    <Stack gap="2rem" my="2rem">
      {keys.map((key) => (
        <TokenDoc key={key} title={key}>
          <ShadowGrid
            tokens={allShadows.filter(
              (token) =>
                token.name.startsWith(`shadows.${key}`) &&
                !token.extensions.conditions
            )}
          />
        </TokenDoc>
      ))}
    </Stack>
  );
};

interface ShadowGridProps extends SimpleGridProps {
  tokens: TokenInterface[];
}

export const ShadowGrid = (props: ShadowGridProps) => {
  const { tokens, ...rest } = props;
  return (
    <SimpleGrid minChildWidth="160px" gap="1rem" {...rest}>
      {tokens.map((token) => (
        <ShadowGridItem key={token.name} token={token} />
      ))}
    </SimpleGrid>
  );
};

interface ColorGridItemProps {
  token: TokenInterface;
}

const ShadowGridItem = (props: ColorGridItemProps) => {
  const { token } = props;
  const value = token.extensions.cssVar!.ref;
  const conditions = token.extensions.conditions;
  return (
    <VStack flex="1">
      <Center
        boxShadow={value}
        borderWidth="1px"
        bg="aqua.10"
        w="100%"
        h="5rem"
        rounded="0.5rem"
      />
      <Box textStyle="xs">{token.name.replace('colors.', '')}</Box>
      {conditions && (
        <Stack mt="0.25rem">
          {Object.entries(conditions).map(([key, value]) => (
            <Box key={key} fontSize="0.75rem" mt="-0.25rem" color="fg.muted">
              {key.replace('_', '')}: {value.replace('colors.', '')}
            </Box>
          ))}
        </Stack>
      )}
      {!conditions && (
        <Box fontSize="0.75rem" mt="-0.25rem" color="fg.muted">
          {token.originalValue}
        </Box>
      )}
    </VStack>
  );
};
