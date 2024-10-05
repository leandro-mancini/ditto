import { createRecipeContext, HTMLDittoProps } from '@dittox/react';
import { RecipeProps } from '@dittox/styled-system';

const { withContext, PropsProvider } = createRecipeContext({
  key: 'button',
  recipe: {
    base: {
      display: 'inline-flex',
      appearance: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      position: 'relative',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      flexShrink: '0',
      outline: '0',
      lineHeight: '1.2',
      color: '#a1a1aa',
      isolation: 'isolate',
      fontWeight: 'medium',
      transitionProperty: 'common',
      transitionDuration: 'moderate',
      focusVisibleRing: 'outside',
      gap: '8px',
      h: '40px',
      minW: '40px',
      borderRadius: '0.375rem',
      textStyle: 'sm',
      px: '16px',
      bg: '#18181b',
      _hover: {
        bg: '#27272a/90',
      },
      _disabled: {
        layerStyle: 'disabled',
      },
      _icon: {
        fontSize: '1em',
        flexShrink: 0,
      },
    },

    variants: {
      size: {
        md: {
          gap: '8px',
          h: '40px',
          minW: '40px',
          borderRadius: '0.375rem',
          textStyle: 'sm',
          px: '16px',
        },
      },
    },
  },
});

export interface ButtonBaseProps extends RecipeProps<'button'> {}

export interface ButtonProps
  extends HTMLDittoProps<'button', ButtonBaseProps> {}

export const Button = withContext<HTMLButtonElement, ButtonProps>('button', {
  defaultProps: { type: 'button' },
});

export const ButtonPropsProvider =
  PropsProvider as React.Provider<ButtonBaseProps>;
