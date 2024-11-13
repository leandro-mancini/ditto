import { createSystem, defineRecipe } from 'packages/styled-system/src/index';
import {
  defaultConfig,
  defaultSystem,
  DittoProvider,
  Stack,
  Button,
} from 'packages/react/src/index';

export const buttonRecipe = defineRecipe({
  className: 'ditto-button',
  base: {
    display: 'inline-flex',
    appearance: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    borderWidth: '1px',
    borderColor: 'transparent',
    cursor: 'pointer',
    flexShrink: '0',
    outline: '0',
    lineHeight: '1.2',
    isolation: 'isolate',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'moderate',
    focusVisibleRing: 'outside',
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
      '2xl': {},
    },
    variant: {
      primary: {},
      secondary: {},
      dash: {},
      tertiary: {},
      link: {},
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

export const system = createSystem(defaultConfig, {
  theme: {
    recipes: {
      button: buttonRecipe,
    },
  },
});

export function App() {
  return (
    <DittoProvider value={system}>
      <Stack gap="2rem" m="2rem">
        <Button>Button</Button>
      </Stack>
    </DittoProvider>
  );
}

export default App;
