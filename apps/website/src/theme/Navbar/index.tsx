'use client';

import { Box, Container, ditto, HStack, Spacer } from '@dittox/react';
import React, { useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import { BsGithub } from 'react-icons/bs';
import { LuMoon } from 'react-icons/lu';
import { SearchButton } from './search-button';
import { IconButton } from '@site/src/ui/icon-button';
import { Logo } from './logo';
import { useThemeConfig } from '@docusaurus/theme-common';

export const ColorModeButton = () => {
  // const { colorMode, setColorMode } = useColorMode();
  const handleClick = () => {
    // setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };
  return (
    <IconButton onClick={handleClick}>
      <LuMoon />
    </IconButton>
  );
};

const HeaderRoot = ditto('header', {
  base: {
    bg: 'var(--ifm-navbar-background-color)',
    position: 'sticky',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: '64px',
    borderBottom: '1px solid',
    borderColor: '#18181b',
    zIndex: '10',
  },
});

const TopNavLink = ditto(Link, {
  base: {
    fontSize: 'sm',
    color: 'fg.subtle',
    _currentPage: {
      color: 'fg',
      fontWeight: 'medium',
    },
    _hover: {
      color: 'fg',
    },
  },
  variants: {
    variant: {
      tab: {
        py: '2',
        borderBottomWidth: '2px',
        borderColor: 'transparent',
        transition: 'border-color 0.2s',
        _hover: { borderColor: 'border' },
        _currentPage: { borderColor: 'fg!' },
      },
    },
  },
});

const HeaderLogoLink = () => {
  return (
    <HStack asChild focusRing="outside">
      <Link href="/" aria-label="Ditto, Voltar para a página inicial">
        <Logo />
      </Link>
    </HStack>
  );
};

const HeaderPrimaryNavbar = () => {
  const { navbar } = useThemeConfig();
  const items = navbar.items || [];

  return (
    <HStack gap="32px" minH="48px" aria-label="primary navigation">
      <HeaderLogoLink />
      {items.map((item) => (
        <TopNavLink
          key={item.label}
          to={item.to || '#'}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.label}
        </TopNavLink>
      ))}
    </HStack>
  );
};

const HeaderDesktopActions = () => {
  return (
    <HStack gap="0.5rem" minH="48px" flexShrink="1" minW="0">
      <SearchButton width="256px" size="sm" flexShrink="1" />
      <IconButton asChild>
        <Link
          href="https://github.com/leandro-mancini/ditto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </Link>
      </IconButton>
      <ColorModeButton />
    </HStack>
  );
};

const HeaderDesktopNavbar = () => {
  return (
    <Box className="navbar" hideBelow="md" display="block" height="auto">
      <HStack paddingInline="2rem" height={64}>
        <HeaderPrimaryNavbar />
        <Spacer />
        <HeaderDesktopActions />
      </HStack>
    </Box>
  );
};

const HeaderSection = () => {
  return (
    <HeaderRoot>
      <Container maxW={'90rem'} width={'100%'}>
        <HeaderDesktopNavbar />
      </Container>
    </HeaderRoot>
  );
};

export default function NavbarContent() {
  return <HeaderSection />;
}
