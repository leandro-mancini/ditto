import { Box, ditto, HStack, Stack } from '@ditto/react';
import Link, { NavLinkProps } from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
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
    _currentPage: {
      background: '#18181b',
      color: '#e4e4e7',
      textDecor: 'none',
      fontWeight: '600',
    },
  },
});

export const SideNav = (props: SideNavProps) => {
  const { title, items } = props;
  const location = useLocation();

  return (
    <Stack gap="8px">
      {title && (
        <Box ps="16px" fontWeight="600">
          {title}
        </Box>
      )}
      <Stack gap="1px">
        {items.map((item, index) => {
          const currentUrl = location.pathname === item.href;

          return (
            <HStack
              key={index}
              asChild
              py="6px"
              ps="16px"
              pe="12px"
              rounded="0.25rem"
              color="#a1a1aa"
            >
              <SideNavLink
                href={item.href}
                aria-current={currentUrl ? 'page' : undefined}
              >
                {item.label}
              </SideNavLink>
            </HStack>
          );
        })}
      </Stack>
    </Stack>
  );
};
