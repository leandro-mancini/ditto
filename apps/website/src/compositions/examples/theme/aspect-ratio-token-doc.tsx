import {
  Box,
  Center,
  defaultSystem,
  SimpleGrid,
  Stack,
  VStack,
} from '@ditto/react';
import { TokenDoc } from './token-doc';
import React from 'react';

const { tokens } = defaultSystem;

const aspectRatios = tokens.categoryMap.get('aspectRatios')!;
const allAspectRatios = Array.from(aspectRatios.values());

export const AspectRatioTokenDoc = () => {
  return (
    <TokenDoc title="theme.tokens.aspectRatios" mt="24px">
      <SimpleGrid minChildWidth="100px" gap="80px">
        {allAspectRatios.map((token) => {
          return (
            <Stack key={token.name} flex="1">
              <Center
                aspectRatio={token.value}
                width="40"
                bg="bg.subtle"
                color="fg.muted"
                borderWidth="1px"
              >
                <VStack gap="0">
                  <Box>{token.extensions.prop}</Box>
                  <Box color="fg.subtle">{token.value}</Box>
                </VStack>
              </Center>
            </Stack>
          );
        })}
      </SimpleGrid>
    </TokenDoc>
  );
};
