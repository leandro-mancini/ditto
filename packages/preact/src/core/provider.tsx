'use client';

import { SystemContext } from '@dittox/styled-system';
import register from 'preact-custom-element';
import { createContext } from '../create-context';

// Criando o contexto Ditto usando o helper createContext para Preact
const [DittoContextProvider, useDittoContext] = createContext<SystemContext>({
  name: 'DittoContext',
  strict: true,
  providerName: '<DittoProvider />',
});

export interface DittoProviderProps {
  value: SystemContext;
  children: preact.ComponentChildren;
}

function DittoProvider(props: DittoProviderProps) {
  const { value: sys, children } = props;

  return <DittoContextProvider value={sys}>{children}</DittoContextProvider>;
}

register(DittoProvider, 'ditto-provider', ['value']);

export { DittoProvider, useDittoContext };
