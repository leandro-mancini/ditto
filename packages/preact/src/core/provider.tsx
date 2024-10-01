'use client';

import { h, Fragment } from 'preact';
import { Global } from '@emotion/react';
import { SystemContext } from '@dittox/styled-system';
import register from 'preact-custom-element';
import { createContext } from '../create-context';

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

  return (
    <DittoContextProvider value={sys}>
      <style>
        {sys.getPreflightCss()}
        {sys.getGlobalCss()}
        {sys.getTokenCss()}
      </style>
      {children}
    </DittoContextProvider>
  );
}

register(DittoProvider, 'ditto-provider', ['value']);

export { DittoProvider, useDittoContext };
