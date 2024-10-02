'use client';

import { h } from 'preact';
import { SystemContext } from '@dittox/styled-system';
import register from 'preact-custom-element';
import { createContext } from '../create-context';
import React from 'react';
import { serializeStyles } from '@emotion/serialize';

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

  let globalStylesString = '';

  if (sys) {
    const globalStyles = serializeStyles([
      sys.getGlobalCss(),
      sys.getPreflightCss(),
      sys.getTokenCss(),
    ]);
    globalStylesString = globalStyles.styles;
  }

  return (
    <DittoContextProvider value={sys}>
      <style>{globalStylesString}</style>
      {children}
    </DittoContextProvider>
  );
}

register(DittoProvider, 'ditto-provider', ['value']);

export { DittoProvider, useDittoContext };
