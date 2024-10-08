import { Box, For, Stack } from '@dittox/react';
import React from 'react';

export const TokensTextStyles = () => {
  return (
    <Stack gap="8">
      <For
        each={[
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '3xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
        ]}
      >
        {(textStyle) => (
          <Stack>
            <Box textStyle="sm" fontWeight="medium" color="fg.subtle">
              textStyle: {textStyle}
            </Box>
            <Box textStyle={textStyle}>Chakra UI</Box>
          </Stack>
        )}
      </For>
    </Stack>
  );
};
