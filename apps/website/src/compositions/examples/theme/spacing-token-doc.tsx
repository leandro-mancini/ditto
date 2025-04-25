import { Box, defaultSystem, Flex, For, Stack } from '@ditto/react';
import { TokenDoc } from './token-doc';
import React from 'react';

const { tokens, _config } = defaultSystem;
const keys = Object.keys(_config.theme?.tokens?.spacing ?? {});
const keysSemantic = Object.keys(_config.theme?.semanticTokens?.spacing ?? {});

export const SpacingTokenDoc = () => {
  return (
    <TokenDoc title="theme.tokens.spacing" mt="1rem">
      <Flex
        fontSize="sm"
        fontWeight="medium"
        py="1"
        px="3"
        borderBottomWidth="1px"
      >
        <Box width="100px">Name</Box>
        <Box width="100px">Value</Box>
        <Box width="100px">Pixel</Box>
      </Flex>

      <Stack px="12px" pt="8px">
        <For each={keys}>
          {(spacings) => {
            const token = tokens.getByName(`spacing.${spacings}`);

            return (
              <Flex key={token?.name} py="1" fontSize="sm">
                <Box width="100px" fontWeight="medium">
                  {token?.extensions.prop}
                </Box>
                <Box width="100px" color="fg.muted">
                  {token?.originalValue}
                </Box>
                <Box flex="1">
                  <Box
                    bg="primary.500"
                    height="16px"
                    width={token?.extensions.cssVar!.ref}
                  />
                </Box>
              </Flex>
            );
          }}
        </For>
      </Stack>
    </TokenDoc>
  );
};

export const SpacingSemanticTokenDoc = () => {
  return (
    <TokenDoc title="theme.semanticTokens.spacing" mt="1rem">
      <Flex
        fontSize="sm"
        fontWeight="medium"
        py="1"
        px="3"
        borderBottomWidth="1px"
      >
        <Box width="100px">Name</Box>
        <Box width="120px">Value</Box>
        <Box width="100px">Pixel</Box>
      </Flex>

      <Stack px="12px" pt="8px">
        <For each={keysSemantic}>
          {(spacings) => {
            const token = tokens.getByName(`spacing.${spacings}`);

            return (
              <Flex key={token?.name} py="1" fontSize="sm">
                <Box width="100px" fontWeight="medium">
                  {token?.extensions.prop}
                </Box>
                <Box width="120px" color="fg.muted">
                  {token?.originalValue}
                </Box>
                <Box flex="1">
                  <Box
                    bg="primary.500"
                    height="16px"
                    width={token?.extensions.cssVar!.ref}
                  />
                </Box>
              </Flex>
            );
          }}
        </For>
      </Stack>
    </TokenDoc>
  );
};
