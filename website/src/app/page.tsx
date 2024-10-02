'use client';

import { Stack } from '@dittox/react';
import { HeaderSection } from '../components/site';

export default function Index() {
  return (
    <Stack pos="relative" gap="8" overflowX="hidden" overflowY="hidden">
      <HeaderSection />
    </Stack>
  );
}
