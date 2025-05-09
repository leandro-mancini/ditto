import { Box, Center, For, HStack, Stack } from '@dittox/react';
import React from 'react';

const items = [
  ['Fill', ['fill.subtle', 'fill.surface', 'fill.solid']],
  ['Outline', ['outline.subtle', 'outline.solid']],
  [
    'Indicator',
    ['indicator.top', 'indicator.bottom', 'indicator.start', 'indicator.end'],
  ],
] as const;

export const TokensLayerStyle = () => {
  return (
    <Stack gap="20" mt="10" mb="20">
      <For each={items}>
        {([title, styles]) => (
          <Stack gap="4">
            <Box fontWeight="medium" color="fg.subtle">
              layerStyle: {title.toLowerCase()}.*
            </Box>
            <HStack wrap="wrap" gap="10">
              <For each={styles}>
                {(layerStyle) => (
                  <Center
                    colorPalette="teal"
                    key={layerStyle}
                    layerStyle={layerStyle}
                    height="10"
                    flex="1"
                    fontWeight="medium"
                  >
                    {layerStyle}
                  </Center>
                )}
              </For>
            </HStack>
          </Stack>
        )}
      </For>
    </Stack>
  );
};
