import { Box, DittoProvider, defaultConfig } from 'packages/react/src/index'
import { createSystem } from 'packages/styled-system/src/index'

export const system = createSystem(defaultConfig)

console.log('system', system)

export function App() {
  return (
    <DittoProvider value={system}>
      <h1>Sandbox React</h1>
      <Box bgColor={'tomato'} padding={'24px'} color={'white'}>Box</Box>
    </DittoProvider>
  );
}

export default App;
