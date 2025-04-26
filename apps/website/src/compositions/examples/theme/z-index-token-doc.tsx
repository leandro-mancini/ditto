import { Box, defaultSystem, Flex, Stack } from '@dittox/react';
import { TokenDoc } from './token-doc';
import React from 'react';

const { tokens } = defaultSystem;

const allZIndex = tokens.categoryMap.get('zIndex')!.values();
export const defaultZIndex = Array.from(allZIndex).sort(
  (a, b) => parseFloat(a.originalValue) - parseFloat(b.originalValue)
);

export const ZIndexTokenDoc = () => {
  return (
    <TokenDoc title="theme.tokens.zIndex" mt="8">
      <Flex
        fontSize="sm"
        fontWeight="medium"
        py="1"
        px="3"
        borderBottomWidth="1px"
      >
        <Box width="100px">Name</Box>
        <Box width="100px">Value</Box>
      </Flex>

      <Stack px="3" pt="2">
        {defaultZIndex.map((token) => (
          <Flex key={token.name} py="1" fontSize="sm">
            <Box width="100px" fontWeight="medium">
              {token.extensions.prop}
            </Box>
            <Box width="100px" color="fg.muted">
              {token.originalValue}
            </Box>
          </Flex>
        ))}
      </Stack>
    </TokenDoc>
  );
};
