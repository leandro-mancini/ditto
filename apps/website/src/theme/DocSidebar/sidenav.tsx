import { Box, ditto, HStack, Stack } from '@dittox/react';
import Link, { NavLinkProps } from '@docusaurus/Link';
import React from 'react';

interface SideNavItem {
  label: React.ReactNode;
  href: NavLinkProps['href'];
  status?: string;
}

interface SideNavProps {
  currentUrl?: string;
  title?: React.ReactNode;
  items: Array<SideNavItem>;
}

const SideNavLink = ditto(Link, {
  base: {
    cursor: 'pointer',
    py: '6px',
    ps: '16px',
    pe: '12px',
    rounded: '0.25rem',
    color: 'fg.subtle',
    _hover: {
      background: '#18181b',
      color: '#e4e4e7',
      textDecor: 'none',
    },
  },
});

export const SideNav = (props: SideNavProps) => {
  const { title, items, currentUrl } = props;

  return (
    <Stack gap="8px">
      {title && (
        <Box ps="16px" fontWeight="600">
          {title}
        </Box>
      )}
      <Stack gap="1px">
        {items.map((item, index) => (
          <HStack
            key={index}
            asChild
            py="6px"
            ps="16px"
            pe="12px"
            rounded="0.25rem"
            color="#a1a1aa"
            _hover={{
              layerStyle: 'fill.subtle',
              colorPalette: 'gray',
            }}
            _currentPage={{
              fontWeight: 'medium',
              layerStyle: 'fill.subtle',
              colorPalette: 'gray',
            }}
          >
            <SideNavLink href={item.href}>
              {item.label}
              {/* <Link ref={item.href}>{item.label}</Link> */}
            </SideNavLink>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};
