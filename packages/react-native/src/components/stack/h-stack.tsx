'use client';

import { forwardRef } from 'react';
import { Stack, type StackProps } from './stack';
import { View } from 'react-native';

export const HStack = forwardRef<View, StackProps>(function HStack(props, ref) {
  return <Stack align="center" {...props} direction="row" ref={ref} />;
});
