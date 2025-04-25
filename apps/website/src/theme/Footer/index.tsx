import { Box, Container, ditto, HStack, Spacer, VStack } from '@ditto/react';
import Link from '@docusaurus/Link';
import { IconButton } from '@site/src/ui/icon-button';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { useThemeConfig } from '@docusaurus/theme-common';
import { Logo } from '../Navbar/logo';

const FooterRoot = ditto('footer', {
  base: {
    bg: 'var(--ifm-navbar-background-color)',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    borderTop: '1px solid',
    borderColor: '#18181b',
    paddingBlock: '24px',
  },
});

function Footer() {
  const { footer } = useThemeConfig();

  return (
    <FooterRoot>
      <Container maxW={'90rem'} width={'100%'}>
        <HStack paddingInline="2rem">
          <VStack align="flex-start">
            <Logo />
            <Box>{footer.copyright}</Box>
          </VStack>
          <Spacer />
          <IconButton asChild>
            <Link
              href="https://github.com/leandro-mancini/ditto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </Link>
          </IconButton>
        </HStack>
      </Container>
    </FooterRoot>
  );
}

export default React.memo(Footer);
