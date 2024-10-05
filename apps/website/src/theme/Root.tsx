import { defaultConfig, DittoProvider } from '@dittox/react';
import { createSystem } from '@dittox/styled-system';
import React from 'react';

export const system = createSystem(defaultConfig);

export default function Root({ children }) {
  return <DittoProvider value={system}>{children}</DittoProvider>;
}
