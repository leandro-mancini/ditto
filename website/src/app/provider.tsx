'use client';

import { DittoProvider } from '@dittox/react';
import { ThemeProvider } from 'next-themes';
import { system } from './theme';

export const Provider = (props: { children: React.ReactNode }) => {
  return <DittoProvider value={system}>{props.children}</DittoProvider>;
};