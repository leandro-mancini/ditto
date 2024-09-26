import { SystemContext } from '@dittox/styled-system';
import { Global } from '@emotion/react';
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

  return <DittoContextProvider value={sys}>{children}</DittoContextProvider>;
}

export { DittoProvider, useDittoContext };
