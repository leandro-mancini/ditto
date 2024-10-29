import { Box, defaultSystem, For, Stack } from '@dittox/react';
import { TokenDoc } from './token-doc';
import React from 'react';

const { tokens, _config } = defaultSystem;

const fonts = Object.keys(_config.theme?.tokens?.fonts ?? {});
const fontSizes = Object.keys(_config.theme?.tokens?.fontSizes ?? {});
const fontWeights = Object.keys(_config.theme?.tokens?.fontWeights ?? {});

export const FontTokenDoc = () => {
  return (
    <TokenDoc title="theme.tokens.fonts" mt="8">
      <Stack gap="8">
        <For each={fonts}>
          {(font) => {
            const token = tokens.getByName(`fonts.${font}`);
            return (
              <Stack key={font} flex="1">
                <Box fontSize="3xl" fontFamily={font}>
                  Ag
                </Box>
                <Box>{font}</Box>
                <Box
                  as="pre"
                  whiteSpace="balance"
                  color="fg.muted"
                  fontSize="xs"
                >
                  {token?.originalValue}
                </Box>
              </Stack>
            );
          }}
        </For>
      </Stack>
    </TokenDoc>
  );
};

export const FontSizeTokenDoc = () => {
  return (
    <TokenDoc title="theme.tokens.fontSizes" mt="8">
      <Stack gap="4">
        {fontSizes.map((fontSize) => {
          const token = tokens.getByName(`fontSizes.${fontSize}`)!;
          return (
            <Stack key={fontSize} direction="row" align="center">
              <Box width="4rem">{token.extensions.prop}</Box>
              <Box width="6rem" color="fg.muted">
                {token.value}
              </Box>
              <Box fontSize={token.value}>Ag</Box>
            </Stack>
          );
        })}
      </Stack>
    </TokenDoc>
  );
};

export const FontWeightTokenDoc = () => {
  return (
    <TokenDoc title="theme.tokens.fontWeights" mt="8">
      <Stack gap="4">
        {fontWeights.map((fontWeight) => {
          const token = tokens.getByName(`fontWeights.${fontWeight}`)!;
          return (
            <Stack key={fontWeight} direction="row" align="center">
              <Box width="6rem">{token.extensions.prop}</Box>
              <Box width="6rem" color="fg.muted">
                {token.value}
              </Box>
              <Box fontWeight={token.value} fontSize="2xl">
                Ag
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </TokenDoc>
  );
};
