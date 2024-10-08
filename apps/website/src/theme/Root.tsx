import { defaultConfig, DittoProvider } from '@dittox/react';
import { createSystem } from '@dittox/styled-system';
import React from 'react';

export const system = createSystem(defaultConfig, {
  globalCss: {
    ':root': {
      '--header-height': { base: '64px', md: '104px' },
      '--content-height': 'calc(100dvh - var(--header-height))',
      '--font-inter': 'Inter, sans-serif',
      '--ifm-heading-font-family': 'var(--font-inter)',
      '--font-fallback': 'var(--font-inter)',
      bgColor: '#09090b',
    },
    '.theme-doc-sidebar-container': {
      border: 'none',
    },
    '.main-wrapper': {
      margin: 'auto',
      width: '90rem',
      paddingInline: '2rem',
      bgColor: '#09090b',
    },
  },
});

export default function Root({ children }) {
  return <DittoProvider value={system}>{children}</DittoProvider>;
}
