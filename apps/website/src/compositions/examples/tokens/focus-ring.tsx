import { Center, For, Stack } from '@dittox/react';
import React from 'react';

export const TokensFocusRing = () => {
  return (
    <Stack gap="4">
      <For each={['inside', 'outside', 'mixed']}>
        {(focusRing) => (
          <Center
            h="20"
            bg="bg"
            borderWidth="1px"
            focusRing={focusRing}
            data-focus
          >
            {focusRing}
          </Center>
        )}
      </For>
    </Stack>
  );
};
