'use client';

import { Global } from '@emotion/react';
import { SystemContext } from '@ditto/styled-system';
import { createContext } from '../create-context';

const [DittoContextProvider, useDittoContext] = createContext<SystemContext>({
  name: 'DittoContext',
  strict: true,
  providerName: '<DittoProvider />',
});

export interface DittoProviderProps {
  value: SystemContext;
  children: React.ReactNode;
}

function DittoProvider(props: DittoProviderProps) {
  const { value: sys, children } = props;

  return (
    <DittoContextProvider value={sys}>
      <Global
        styles={[sys.getPreflightCss(), sys.getGlobalCss(), sys.getTokenCss()]}
      />
      {children}
    </DittoContextProvider>
  );
}

export { DittoProvider, useDittoContext };
