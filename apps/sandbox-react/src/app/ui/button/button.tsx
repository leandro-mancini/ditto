import { createRecipeContext, HTMLDittoProps } from '@dittox/react';
import { RecipeProps } from '@dittox/styled-system';

const { withContext, PropsProvider } = createRecipeContext({
  key: 'button',
});

export interface ButtonBaseProps extends RecipeProps<'button'> {}

export interface ButtonProps
  extends HTMLDittoProps<'button', ButtonBaseProps> {}

export const Button = withContext<HTMLButtonElement, ButtonProps>('button', {
  defaultProps: { type: 'button' },
});

export const ButtonPropsProvider =
  PropsProvider as React.Provider<ButtonBaseProps>;
