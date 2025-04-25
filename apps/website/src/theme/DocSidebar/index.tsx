import { Box, BoxProps, ditto, Stack } from '@ditto/react';
import React from 'react';
import { SideNav } from './sidenav';
import Link from '@docusaurus/Link';

export default function DocSidebar(props) {
  const { sidebar, onCollapse, ...restProps } = props;

  return (
    <Box
      className="no-bg-scrollbar"
      as="aside"
      position="sticky"
      top="var(--header-height)"
      pe="20px"
      // ms="-12px"
      py="32px"
      flexShrink="0"
      height="var(--content-height)"
      overflowY="auto"
      overscrollBehavior="contain"
      width="16rem"
      hideBelow="md"
      fontSize="0.875rem"
      {...restProps}
    >
      <Stack gap="24px">
        {sidebar.map((item, index) => {
          if (item.type === 'link') {
            return (
              <Link href={item.href} key={index}>
                {item.label}
              </Link>
            );
          }

          return (
            <SideNav
              key={item.label}
              // currentUrl={route.currentUrl}
              title={item.label}
              items={item.items}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
