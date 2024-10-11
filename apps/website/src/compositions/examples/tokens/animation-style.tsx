import { Box, Center, For, HStack, Stack } from '@dittox/react';
import React from 'react';
import { useState } from 'react';

export const TokensAnimationStyle = () => {
  const [animation, setAnimation] = useState<string | undefined>(undefined);

  return (
    <Stack gap="8" mb="8" align="flex-start">
      <HStack wrap="wrap">
        <For
          each={[
            'slide-fade-in',
            'slide-fade-out',
            'scale-fade-in',
            'scale-fade-out',
          ]}
        >
          {(animation) => (
            <Box
              as="button"
              borderWidth="1px"
              padding="16px"
              cursor="pointer"
              key={animation}
              onClick={() => setAnimation(animation)}
            >
              {animation}
            </Box>
          )}
        </For>
      </HStack>

      <Box my="16px">
        <Center
          width="240px"
          height="240px"
          animationDuration="0.5s"
          animationStyle={animation}
          onAnimationEnd={() => setAnimation(undefined)}
          bg="bg"
          data-placement="bottom"
          borderWidth="1px"
          p="16px"
        >
          Animation
        </Center>
      </Box>
    </Stack>
  );
};
