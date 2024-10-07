import { Box, HStack, Stack } from '@dittox/react';
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

export const SideNav = (props: SideNavProps) => {
  const { title, items, currentUrl } = props;

  return (
    <Stack gap="8px">
      {title && (
        <Box ps="16px" fontWeight="semibold">
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
            <Link href={item.href}>{item.label}</Link>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};
