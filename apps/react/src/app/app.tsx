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

const keys = [
  'alternate',
  'aqua',
  'gray',
  'green',
  'neutral',
  'orange',
  'overlay',
  'red',
];

export const ColorTokenDoc = () => {
  return (
    <Stack gap="8" my="8">
      {keys.map((key) => (
        <TokenDoc key={key} title={key}>
          <ColorGrid
            tokens={allColors.filter(
              (token) =>
                token.name.startsWith(`colors.${key}`) &&
                !token.extensions.conditions
            )}
          />
        </TokenDoc>
      ))}
    </Stack>
  );
};

export function App() {
  return (
    <DittoProvider value={system}>
      <Stack gap="2rem" m="2rem">
        <ColorTokenDoc />

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
