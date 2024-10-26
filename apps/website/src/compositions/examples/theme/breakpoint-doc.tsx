import { Box, defaultSystem, HStack, Stack } from '@dittox/react';
import { TokenDoc } from './token-doc';
import React from 'react';

const { _config: config } = defaultSystem;

const breakpoints = config.theme?.breakpoints || {};
const allBreakpoints = Object.entries(breakpoints)
  .sort((a, b) => parseFloat(a[1]) - parseFloat(b[1]))
  .map(([key]) => key);

export const BreakpointDoc = () => {
  return (
    <TokenDoc title="theme.breakpoints" mt="24px">
      <Stack gap="24px">
        {allBreakpoints.map((key, index) => {
          const width = (index + 1) * 2;
          return (
            <HStack key={key}>
              <Box minWidth="200px">
                <Box
                  rounded="0.25rem"
                  height="3rem"
                  borderInlineWidth="4px"
                  borderTopWidth="4px"
                  borderBottomWidth="12px"
                  width={`${width}rem`}
                />
              </Box>
              <Box minWidth="80px">
                <Box py="2" fontWeight="medium">
                  {key}
                </Box>
              </Box>
              <Box py="2" opacity="0.6">
                {`@media screen (min-width >= ${breakpoints[key]})`}
              </Box>
            </HStack>
          );
        })}
      </Stack>
    </TokenDoc>
  );
};
