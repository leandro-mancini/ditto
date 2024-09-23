import {
  Box,
  DittoProvider,
  VStack,
  defaultConfig,
} from 'packages/react/src/index';
import { createSystem } from 'packages/styled-system/src/index';

export const system = createSystem(defaultConfig);

console.log('system', system);

export function App() {
  return (
    <DittoProvider value={system}>
      <h1>Sandbox React</h1>
      <VStack gap="16px">
        <Box bgColor={'tomato'} padding={'24px'} color={'white'}>
          Box
        </Box>

        <Box
          p="24px"
          borderWidth="1px"
          borderColor="#27272a"
          borderStyle="solid"
          color="tomato"
        >
          Somewhat disabled box
        </Box>
      </VStack>
    </DittoProvider>
  );
}

export default App;
