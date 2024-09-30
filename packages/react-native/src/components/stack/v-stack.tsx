'use client';

import { forwardRef } from 'react';
import { Stack, type StackProps } from './stack';
import { View } from 'react-native';

export const VStack = forwardRef<View, StackProps>(function VStack(props, ref) {
  return <Stack align="center" {...props} direction="column" ref={ref} />;
});
