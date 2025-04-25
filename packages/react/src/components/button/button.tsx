import { RecipeProps } from '@ditto/styled-system';
import { createRecipeContext, HTMLDittoProps } from '../../core';

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
