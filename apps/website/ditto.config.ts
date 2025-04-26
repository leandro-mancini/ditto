import { createSystem, defineConfig } from '@dittox/styled-system';

const config = defineConfig({
  conditions: {
    off: '&:is([data-state=off])',
    on: '&:is([data-state=on])',
  },
  theme: {
    tokens: {
      colors: {
        primary: { value: '#0FEE0F' },
        secondary: { value: '#EE0F0F' },
        mancini: { value: '#EE0F0F' },
      },
      fonts: {
        miguel: { value: 'system-ui, sans-serif' },
        duda: { value: 'Inter' },
      },
    },
  },
});

export const system = createSystem(config);
