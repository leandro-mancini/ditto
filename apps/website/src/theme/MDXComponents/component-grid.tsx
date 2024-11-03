import { Box, Center, SimpleGrid, Stack } from '@dittox/react';
import React from 'react';
import { kebabCase } from 'scule';

import { componentsSidebar } from '../../../sidebars-components';
import { getComponent } from '@site/src/components/illustrations';
import { LuCode } from 'react-icons/lu';
import Link from '@docusaurus/Link';

export const ComponentGrid = () => {
  console.log('componentsSidebar', componentsSidebar[0].items);
  const components = componentsSidebar[0].items;

  return (
    <SimpleGrid minChildWidth="240px" gap="24px" mt="32px">
      {components.map((item) => {
        const key = kebabCase(item.id).replace('layout-', '');
        const Illustration = getComponent(key) ?? LuCode;

        console.log('Illustration', Illustration);

        return (
          <Stack
            asChild
            gap="0"
            key={item.id}
            borderWidth="1px"
            rounded="0.375rem"
            focusRing="inside"
            overflow="hidden"
          >
            <Link href={`/components/${item.id}`}>
              <Center height="120px" bg="#18181b">
                <Illustration width="100%" height="100%" />
              </Center>
              <Stack gap="4px" padding="16px" flex="1" textStyle="sm">
                <Box fontWeight="medium">{item.label}</Box>
                <Box color="#18181b" lineClamp="2" lineHeight="short">
                  {/* {item.description} */}
                </Box>
              </Stack>
            </Link>
          </Stack>
        );
      })}
    </SimpleGrid>
  );
};
