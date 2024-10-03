'use client';

import { ditto, Container, Box, HStack, Spacer } from '@dittox/react';
import { useRoute } from '../../lib/use-route';
import { websiteConfig } from '../../website.config';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { ColorModeButton } from '../color-mode-button';

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

const HeaderRoot = ditto('header', {
  base: {
    bg: 'bg',
    position: 'sticky',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: '64px',
    borderBottom: '1px solid',
    borderColor: 'border.subtle',
    zIndex: '10',
  },
});

const HeaderLogoLink = () => {
  return (
    <HStack asChild focusRing="outside">
      <Link
        href="/"
        aria-label={`${websiteConfig.title} ${websiteConfig.description}`}
      >
        <Box>Ditto</Box>
      </Link>
    </HStack>
  );
};

const HeaderPrimaryNavbar = () => {
  const route = useRoute();
  const items = route.getPrimaryNavItems();

  return (
    <HStack gap="16px" minH="48px" aria-label="primary navigation">
      <HeaderLogoLink />
      {items.map((item) => (
        <TopNavLink
          key={item.title}
          href={item.url || '#'}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.title}
        </TopNavLink>
      ))}
    </HStack>
  );
};

const HeaderDesktopActions = () => {
  return (
    <HStack gap="10px" minH="48px" flexShrink="1" minW="0">
      <BsGithub />
      <ColorModeButton />
    </HStack>
  );
};

const HeaderDesktopNavbar = () => {
  return (
    <Box hideBelow="md">
      <HStack py="10px">
        <HeaderPrimaryNavbar />
        <HeaderDesktopActions />
      </HStack>
    </Box>
  );
};

export const HeaderSection = () => {
  return (
    <HeaderRoot>
      <Container>
        <HeaderDesktopNavbar />
      </Container>
    </HeaderRoot>
  );
};
