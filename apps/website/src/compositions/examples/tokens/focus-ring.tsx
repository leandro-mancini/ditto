import { Box, Center, For, HStack, Stack } from '@ditto/react';
import React from 'react';

export const TokensFocusRing = () => {
  return (
    <HStack wrap="wrap" gap="16px">
      <For each={['inside', 'outside', 'mixed']}>
        {(focusRing) => (
          <Box
            borderWidth="1px"
            padding="16px"
            focusRing={focusRing}
            focusRingColor={'tomato'}
            key={focusRing}
            data-focus
          >
            {focusRing}
          </Box>
        )}
      </For>
    </HStack>
  );
};
