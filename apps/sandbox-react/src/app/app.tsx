import { Box, DittoProvider, Flex, HStack, Stack } from '@ditto/react';

import { system } from './ditto.config';
import { Button } from './ui/button/button';

export function App() {
  return (
    <DittoProvider value={system}>
      <Stack gap="2rem" m="2rem">
        <HStack>
          <Button colorPalette="primary" size="2xs">
            Button
          </Button>
          <Button colorPalette="primary" size="xs">
            Button
          </Button>
          <Button colorPalette="primary" size="sm">
            Button
          </Button>
          <Button colorPalette="primary" size="md">
            Button
          </Button>
          <Button colorPalette="primary" size="lg">
            Button
          </Button>
          <Button colorPalette="primary" size="xl">
            Button
          </Button>
          <Button colorPalette="primary" size="2xl">
            Button
          </Button>
        </HStack>
        <HStack>
          <Button colorPalette="neutral" size="2xs">
            Button
          </Button>
          <Button colorPalette="neutral" size="xs">
            Button
          </Button>
          <Button colorPalette="neutral" size="sm">
            Button
          </Button>
          <Button colorPalette="neutral" size="md">
            Button
          </Button>
          <Button colorPalette="neutral" size="lg">
            Button
          </Button>
          <Button colorPalette="neutral" size="xl">
            Button
          </Button>
          <Button colorPalette="neutral" size="2xl">
            Button
          </Button>
        </HStack>
        <HStack>
          <Button colorPalette="error" size="2xs">
            Button
          </Button>
          <Button colorPalette="error" size="xs">
            Button
          </Button>
          <Button colorPalette="error" size="sm">
            Button
          </Button>
          <Button colorPalette="error" size="md">
            Button
          </Button>
          <Button colorPalette="error" size="lg">
            Button
          </Button>
          <Button colorPalette="error" size="xl">
            Button
          </Button>
          <Button colorPalette="error" size="2xl">
            Button
          </Button>
        </HStack>
        <HStack>
          <Button colorPalette="success" size="2xs">
            Button
          </Button>
          <Button colorPalette="success" size="xs">
            Button
          </Button>
          <Button colorPalette="success" size="sm">
            Button
          </Button>
          <Button colorPalette="success" size="md">
            Button
          </Button>
          <Button colorPalette="success" size="lg">
            Button
          </Button>
          <Button colorPalette="success" size="xl">
            Button
          </Button>
          <Button colorPalette="success" size="2xl">
            Button
          </Button>
        </HStack>
        <HStack>
          <Button colorPalette="warning" size="2xs">
            Button
          </Button>
          <Button colorPalette="warning" size="xs">
            Button
          </Button>
          <Button colorPalette="warning" size="sm">
            Button
          </Button>
          <Button colorPalette="warning" size="md">
            Button
          </Button>
          <Button colorPalette="warning" size="lg">
            Button
          </Button>
          <Button colorPalette="warning" size="xl">
            Button
          </Button>
          <Button colorPalette="warning" size="2xl">
            Button
          </Button>
        </HStack>
      </Stack>
    </DittoProvider>
  );
}

export default App;
