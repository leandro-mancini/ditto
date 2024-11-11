import {
  Box,
  Center,
  defaultSystem,
  For,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  VStack,
} from '@dittox/react';
import React from 'react';
import { TokenDoc } from './token-doc';
import { TokenInterface } from '@dittox/styled-system';

const { tokens, _config } = defaultSystem;
const keys = Object.keys(_config.theme?.tokens?.colors ?? {});
const keysSemantic = Object.keys(_config.theme?.semanticTokens?.colors ?? {});

console.log('keysSemantic', keysSemantic);

const colors = tokens.categoryMap.get('colors')!;
const allColors = Array.from(colors.values());

export const ColorTokenDoc = () => {
  return (
    <Stack gap="2rem" my="2rem">
      <For each={keys}>
        {(color) => {
          const tokens = allColors.filter(
            (token) =>
              token.name.startsWith(`colors.${color}`) &&
              !token.extensions.conditions
          );

          return (
            <TokenDoc key={color} title={color}>
              <ColorGrid tokens={tokens} />
            </TokenDoc>
          );
        }}
      </For>
    </Stack>
  );
};

export const ColorSemanticTokenDoc = () => {
  return (
    <Stack gap="2rem" my="2rem">
      <For each={keysSemantic}>
        {(color) => {
          const tokens = allColors.filter((token) =>
            token.name.startsWith(`colors.${color}`)
          );

          return (
            <TokenDoc key={color} title={color}>
              <ColorGrid tokens={tokens} />
            </TokenDoc>
          );
        }}
      </For>
    </Stack>
  );
};

interface VariantProps {
  variant?: 'border' | 'background' | 'text';
}

interface ColorGridProps extends VariantProps, SimpleGridProps {
  tokens: TokenInterface[];
}

export const ColorGrid = (props: ColorGridProps) => {
  const { tokens, variant = 'background', ...rest } = props;
  return (
    <SimpleGrid minChildWidth="160px" gap="1rem" {...rest}>
      {tokens.map((token) => (
        <ColorGridItem key={token.name} token={token} variant={variant} />
      ))}
    </SimpleGrid>
  );
};

interface ColorGridItemProps extends VariantProps {
  token: TokenInterface;
}

const ColorGridItem = (props: ColorGridItemProps) => {
  const { token, variant = 'background' } = props;
  const value = token.extensions.cssVar!.ref;
  const conditions = token.extensions.conditions;
  return (
    <VStack flex="1">
      <Center
        borderWidth="1px"
        bg={(() => {
          if (variant === 'text' && token.name.includes('inverted'))
            return 'bg.inverted';
          return variant === 'background' ? value : undefined;
        })()}
        w="100%"
        h="5rem"
        rounded="0.5rem"
        color={variant === 'text' ? value : undefined}
        borderColor={variant === 'border' ? value : undefined}
      >
        {variant === 'text' && <Box fontSize="1.125rem">Ag</Box>}
      </Center>
      <Box textStyle="xs">{token.name.replace('colors.', '')}</Box>
      {conditions && (
        <Stack mt="0.25rem">
          {Object.entries(conditions).map(([key, value]) => (
            <Box key={key} fontSize="0.75rem" mt="-0.25rem" color="fg.muted">
              {key.replace('_', '')}: {value.replace('colors.', '')}
            </Box>
          ))}
        </Stack>
      )}
      {!conditions && (
        <Box fontSize="0.75rem" mt="-0.25rem" color="fg.muted">
          {token.originalValue}
        </Box>
      )}
    </VStack>
  );
};
