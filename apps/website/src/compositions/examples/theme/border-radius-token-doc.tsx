import {
  Box,
  defaultSystem,
  For,
  SimpleGrid,
  Square,
  Stack,
} from '@dittox/react';
import { TokenDoc } from './token-doc';
import React from 'react';

const { tokens, _config } = defaultSystem;
const keys = Object.keys(_config.theme?.tokens?.radii ?? {});
const keysSemantic = Object.keys(_config.theme?.semanticTokens?.radii ?? {});

export const BorderRadiusTokenDoc = () => {
  return (
    <TokenDoc title="theme.tokens.radii" mt="1rem">
      <SimpleGrid minChildWidth="120px" gap="1rem">
        <For each={keys}>
          {(radius) => {
            const token = tokens.getByName(`radii.${radius}`);
            return (
              <Stack key={radius} flex="1">
                <Square borderRadius={radius} size="120px" borderWidth="1px" />
                <Box lineHeight="1">{radius}</Box>
                <Box color="fg.subtle" fontSize="xs">
                  {token?.originalValue}
                </Box>
              </Stack>
            );
          }}
        </For>
      </SimpleGrid>
    </TokenDoc>
  );
};

export const BorderRadiusSemanticTokenDoc = () => {
  return (
    <TokenDoc title="theme.semanticTokens.radii" mt="1rem">
      <SimpleGrid minChildWidth="120px" gap="1rem">
        <For each={keysSemantic}>
          {(radius) => {
            const token = tokens.getByName(`radii.${radius}`);
            return (
              <Stack key={radius} flex="1">
                <Square borderRadius={radius} size="120px" borderWidth="1px" />
                <Box lineHeight="1">{radius}</Box>
                <Box color="fg.subtle" fontSize="xs">
                  {token?.originalValue}
                </Box>
              </Stack>
            );
          }}
        </For>
      </SimpleGrid>
    </TokenDoc>
  );
};
