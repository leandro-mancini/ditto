'use client';

import React from 'react';
import { Container } from '@dittox/react';

import { HeaderSection } from './../../components/site';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderSection />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
