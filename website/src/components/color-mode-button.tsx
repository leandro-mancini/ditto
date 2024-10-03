'use client';

import { useTheme } from 'next-themes';
import { LuMoon, LuSun } from 'react-icons/lu';
import { ClientOnly } from './client-only';
import { Box } from '@dittox/react';

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ClientOnly fallback={<Box>Carregando....</Box>}>
      <Box onClick={handleClick}>
        {theme === 'light' ? <LuSun /> : <LuMoon />}
      </Box>
    </ClientOnly>
  );
};
