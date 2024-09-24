import {
  Box,
  Center,
  SimpleGrid,
  SimpleGridProps,
  VStack,
} from 'packages/react/src/index';
import { TokenInterface } from 'packages/styled-system/src/index';

interface ColorGridItemProps {
  token: TokenInterface;
}

const ColorGridItem = (props: ColorGridItemProps) => {
  const { token } = props;
  const value = token.extensions.cssVar!.ref;
  const conditions = token.extensions.conditions;

  return (
    <VStack flex="1">
      <Center
        borderWidth="1px"
        bg={value}
        // bg={(() => {
        //   if (variant === "text" && token.name.includes("inverted"))
        //     return "bg.inverted"
        //   return variant === "background" ? value : undefined
        // })()}
        w="100%"
        h="20px"
        rounded="lg"
        // color={variant === "text" ? value : undefined}
        // borderColor={variant === "border" ? value : undefined}
      >
        {/* {variant === "text" && <Text fontSize="lg">Ag</Text>} */}
      </Center>
      <Box fontSize={'10px'}>{token.name.replace('colors.', '')}</Box>
      {/* <Text textStyle="xs">{token.name.replace("colors.", "")}</Text> */}
      {/* {conditions && (
        <Stack mt="1">
          {Object.entries(conditions).map(([key, value]) => (
            <Text key={key} fontSize="xs" mt="-1" color="fg.subtle">
              {key.replace("_", "")}: {value.replace("colors.", "")}
            </Text>
          ))}
        </Stack>
      )}
      {!conditions && (
        <Text fontSize="xs" mt="-1" color="fg.subtle">
          {token.originalValue}
        </Text>
      )} */}
    </VStack>
  );
};

interface ColorGridProps extends SimpleGridProps {
  tokens: TokenInterface[];
}

export const ColorGrid = (props: ColorGridProps) => {
  const { tokens, variant = 'background', ...rest } = props;

  return (
    <SimpleGrid minChildWidth="120px" gap="1rem" {...rest}>
      {tokens.map((token) => (
        <ColorGridItem key={token.name} token={token} />
      ))}
    </SimpleGrid>
  );
};
