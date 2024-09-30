import { forwardRef } from 'react';
import { Square, SquareProps } from './square';
import { View } from 'react-native';

export interface CircleProps extends SquareProps {}

export const Circle = forwardRef<View, SquareProps>(function Circle(
  props,
  ref
) {
  const { size, ...rest } = props;
  return <Square size={size} ref={ref as any} borderRadius={9999} {...rest} />;
});
