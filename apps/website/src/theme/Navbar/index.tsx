import { Box, Container, ditto, HStack, Spacer } from '@dittox/react';
import React from 'react';
import Link from '@docusaurus/Link';
import { BsGithub } from 'react-icons/bs';
import { LuMoon } from 'react-icons/lu';
import { SearchButton } from './search-button';
import { IconButton } from '@site/src/ui/icon-button';
import { Logo } from './logo';
// import {  } from '@docusaurus/constants'

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  // return useThemeConfig().navbar.items;
  // return useDocusaurusContext().siteConfig.
}

export const ColorModeButton = () => {
  // const { theme, setTheme } = useTheme();
  const handleClick = () => {
    // setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <IconButton onClick={handleClick}>
      <LuMoon />
    </IconButton>
  );
};

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
      <Link href="/" aria-label="Ditto, Voltar para a página inicial">
        <Logo />
      </Link>
    </HStack>
  );
};

const HeaderPrimaryNavbar = () => {
  // const route = useRoute();
  // const items = route.getPrimaryNavItems();

  return (
    <HStack gap="8" minH="48px" aria-label="primary navigation">
      <HeaderLogoLink />
      {/* {items.map((item) => (
          <TopNavLink
            key={item.title}
            href={item.url || '#'}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.title}
          </TopNavLink>
        ))} */}
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
    <Box hideBelow="md">
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
