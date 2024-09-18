import { Box } from 'packages/react/src/index';
import { ChakraProvider } from 'packages/react/src/styled-system/provider';

export function App() {
  return (
    <div>
      <h1>Sandbox React</h1>

      <ChakraProvider value={{} as any}>
        <Box>Box</Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
