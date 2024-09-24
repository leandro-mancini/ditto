import { createSystem } from 'packages/styled-system/src/index';
import {
  defaultConfig,
  defaultSystem,
  DittoProvider,
  Stack,
} from 'packages/react/src/index';

import { TokenDoc } from './token-doc';
import { ColorGrid } from './color-token-doc';

export const system = createSystem(defaultConfig);

const { tokens } = defaultSystem;
const colors = tokens.categoryMap.get('colors')!;
const allColors = Array.from(colors.values());

console.log('allColors', allColors);

export function App() {
  return (
    <DittoProvider value={system}>
      <Stack gap="2rem" m="2rem">
        <TokenDoc title="Accent">
          <ColorGrid
            tokens={allColors.filter((token) =>
              token.name.startsWith('colors.theme1.accent')
            )}
          />
        </TokenDoc>
        <TokenDoc title="Border">
          <ColorGrid
            tokens={allColors.filter((token) =>
              token.name.startsWith('colors.theme1.border')
            )}
          />
        </TokenDoc>
        <TokenDoc title="Content">
          <ColorGrid
            tokens={allColors.filter((token) =>
              token.name.startsWith('colors.theme1.content')
            )}
          />
        </TokenDoc>
        <TokenDoc title="Overlay">
          <ColorGrid
            tokens={allColors.filter((token) =>
              token.name.startsWith('colors.theme1.overlay')
            )}
          />
        </TokenDoc>
        <TokenDoc title="Support">
          <ColorGrid
            tokens={allColors.filter((token) =>
              token.name.startsWith('colors.theme1.support')
            )}
          />
        </TokenDoc>
      </Stack>
    </DittoProvider>
  );
}

export default App;
