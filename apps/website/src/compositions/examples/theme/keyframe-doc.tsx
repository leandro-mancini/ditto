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

const { _config: config, tokens } = defaultSystem;

const allKeyframes = Object.keys(config.theme?.keyframes || {}).filter(
  (keyframe) => !keyframe.match(/expand|collapse|bg-|position|circular/)
);

export const KeyframeDoc = () => {
  return (
    <TokenDoc title="theme.keyframes" mt="24px">
      <SimpleGrid minChildWidth="100px" gap="80px">
        {allKeyframes.map((animationName) => {
          return (
            <Stack key={animationName}>
              <Box
                boxSize="48px"
                bg="white"
                animation={`${animationName} 1s ease-in-out infinite alternate`}
              />
              <Box fontWeight="medium">{animationName}</Box>
            </Stack>
          );
        })}
      </SimpleGrid>
    </TokenDoc>
  );
};

const allDurations = Array.from(tokens.categoryMap.get('durations')!.entries())
  .sort(
    ([, a], [, b]) => parseFloat(b.originalValue) - parseFloat(a.originalValue)
  )
  .map(([key]) => key);

export const DurationTokenDoc = () => {
  return (
    <TokenDoc title="theme.tokens.durations" mt="24px">
      <SimpleGrid minChildWidth="100px" gap="80px">
        {allDurations.map((durationName) => {
          return (
            <VStack key={durationName}>
              <Center h="24px">
                <Box
                  bg="white"
                  height="1px"
                  width="24px"
                  animationName="spin"
                  animationDuration={durationName}
                  animationTimingFunction="ease-in-out"
                  animationIterationCount="infinite"
                  animationDirection="alternate"
                />
              </Center>
              <Box fontWeight="medium">{durationName}</Box>
            </VStack>
          );
        })}
      </SimpleGrid>
    </TokenDoc>
  );
};
