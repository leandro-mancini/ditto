'use client';

import { h, Fragment } from 'preact';
import { Global } from '@emotion/react';
import { SystemContext } from '@dittox/styled-system';
import { createContext } from '../create-context';

// Criando o contexto Ditto
const [DittoContextProvider, useDittoContext] = createContext<SystemContext>({
  name: 'DittoContext',
  strict: true,
  providerName: '<DittoProvider />',
});

export interface DittoProviderProps {
  value: SystemContext;
  children: preact.ComponentChildren; // Altera para Preact.ComponentChildren
}

function DittoProvider(props: DittoProviderProps) {
  const { value: sys, children } = props;

  return (
    <DittoContextProvider value={sys}>
      {/* <Global
        styles={[sys.getPreflightCss(), sys.getGlobalCss(), sys.getTokenCss()]}
      /> */}
      {children}
    </DittoContextProvider>
  );
}

// Exporta o provider e o hook para o contexto
export { DittoProvider, useDittoContext };
