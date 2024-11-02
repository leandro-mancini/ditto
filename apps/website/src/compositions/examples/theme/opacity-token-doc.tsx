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
const keys = Object.keys(_config.theme?.tokens?.opacity ?? {});
const keysSemantic = Object.keys(_config.theme?.semanticTokens?.opacity ?? {});

export const OpacityTokenDoc = () => {
  return (
    <TokenDoc title="theme.tokens.opacity" mt="1rem">
      <SimpleGrid minChildWidth="120px" gap="1rem">
        <For each={keys}>
          {(opacity) => {
            const token = tokens.getByName(`opacity.${opacity}`);
            return (
              <Stack key={opacity} flex="1">
                <Square size="120px" bgColor={'aqua.10'} opacity={opacity} />
                <Box lineHeight="1">{opacity}</Box>
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

export const OpacitySemanticTokenDoc = () => {
  return (
    <TokenDoc title="theme.semanticTokens.opacity" mt="1rem">
      <SimpleGrid minChildWidth="120px" gap="1rem">
        <For each={keysSemantic}>
          {(opacity) => {
            const token = tokens.getByName(`opacity.${opacity}`);
            return (
              <Stack key={opacity} flex="1">
                <Square size="120px" bgColor={'aqua.10'} opacity={opacity} />
                <Box lineHeight="1">{opacity}</Box>
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
