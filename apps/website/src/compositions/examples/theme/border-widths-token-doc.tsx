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
const keys = Object.keys(_config.theme?.tokens?.borderWidths ?? {});
const keysSemantic = Object.keys(
  _config.theme?.semanticTokens?.borderWidths ?? {}
);

export const BorderWidthsTokenDoc = () => {
  return (
    <TokenDoc title="theme.tokens.borderWidths" mt="1rem">
      <SimpleGrid minChildWidth="120px" gap="1rem">
        <For each={keys}>
          {(border) => {
            const token = tokens.getByName(`borderWidths.${border}`);
            return (
              <Stack key={border} flex="1">
                <Square size="120px" borderWidth={border} />
                <Box lineHeight="1">{border}</Box>
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

export const BorderWidthsSemanticTokenDoc = () => {
  return (
    <TokenDoc title="theme.semanticTokens.borderWidths" mt="1rem">
      <SimpleGrid minChildWidth="120px" gap="1rem">
        <For each={keysSemantic}>
          {(border) => {
            const token = tokens.getByName(`borderWidths.${border}`);
            return (
              <Stack key={border} flex="1">
                <Square size="120px" borderWidth={border} />
                <Box lineHeight="1">{border}</Box>
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
