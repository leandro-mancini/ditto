import { Box, Center, Container } from '@ditto/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { AiOutlineArrowRight } from 'react-icons/ai';

import React from 'react';
import Link from '@docusaurus/Link';
import { Logo } from '../theme/Navbar/logo';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Center as="main" height="vh">
      <Container maxWidth="breakpoint-xl" m="auto">
        <Logo />
        <Box>
          Componentes lindamente projetados, que funcionam com uma variedade de
          estruturas JS.
        </Box>
        <Link to="/styling/overview">
          Começar
          <AiOutlineArrowRight />
        </Link>
      </Container>
    </Center>
  );
}
