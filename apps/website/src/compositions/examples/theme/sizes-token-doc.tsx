import { Box, defaultSystem, Flex, For, Stack } from '@dittox/react';
import { TokenDoc } from './token-doc';
import React from 'react';

const { tokens } = defaultSystem;

const allSizes = tokens.categoryMap.get('sizes')!.values();
export const defaultSizes = Array.from(allSizes);

const fractionalSizes = defaultSizes.filter((token) =>
  token.name.includes('/')
);
const namedSizes = defaultSizes.filter((token) =>
  token.name.match(/v(h|w)|min|max|fit|prose|full/)
);
const breakpointSizes = defaultSizes.filter((token) =>
  token.name.match(/breakpoint/)
);

const tokenSizes = defaultSizes
  .filter(
    (token) =>
      !fractionalSizes.includes(token) &&
      !namedSizes.includes(token) &&
      !breakpointSizes.includes(token)
  )
  .sort(
    (a, b) =>
      parseInt(a.extensions.pixelValue!) - parseInt(b.extensions.pixelValue!)
  );

export const SizesTokenDoc = () => {
  return (
    <Stack mt="32px" gap="32px">
      <For
        each={[
          { name: 'tokenSizes', tokens: tokenSizes },
          { name: 'namedSizes', tokens: namedSizes },
          { name: 'fractionalSizes', tokens: fractionalSizes },
          { name: 'breakpointSizes', tokens: breakpointSizes },
        ]}
      >
        {(item) => (
          <TokenDoc title={item.name}>
            <Flex
              fontSize="sm"
              fontWeight="medium"
              py="4px"
              px="12px"
              borderBottomWidth="1px"
            >
              <Box width="160px">Name</Box>
              <Box width="100px">Value</Box>
              <Box width="100px">Pixel</Box>
            </Flex>

            <Stack px="12px" pt="8px">
              {item.tokens.map((token) => (
                <Flex key={token.name} py="4px" fontSize="sm">
                  <Box width="160px" fontWeight="medium" p="8px" pl="0">
                    {token.extensions.prop}
                  </Box>
                  <Box width="120px" color="fg.muted" p="8px" pl="0">
                    {token.value}
                  </Box>
                  <Flex flex={1} px="8px" align="center" pl="0">
                    <Box
                      bg="aqua.10"
                      height="16px"
                      width={`min(${token.originalValue}, 100%)`}
                    />
                  </Flex>
                </Flex>
              ))}
            </Stack>
          </TokenDoc>
        )}
      </For>
    </Stack>
  );
};
