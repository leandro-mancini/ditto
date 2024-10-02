'use client';

import { ditto } from '@dittox/react';

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

export const HeaderSection = () => {
  return (
    <HeaderRoot>
      {/* <Container>
          <HeaderDesktopNavbar />
          <HeaderMobileNavbar />
        </Container> */}
    </HeaderRoot>
  );
};
