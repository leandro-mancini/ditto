import { Box, defaultSystem, For, Stack } from '@dittox/react';
import React from 'react';

const { tokens, _config } = defaultSystem;

const textStyles = Object.keys(_config.theme?.textStyles ?? {});

export const TokensTextStyles = () => {
  return (
    <Stack gap="32px">
      <For each={textStyles}>
        {(textStyle) => (
          <Stack>
            <Box textStyle="smallValue">textStyle: {textStyle}</Box>
            <Box textStyle={textStyle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Box>
          </Stack>
        )}
      </For>
    </Stack>
  );
};
