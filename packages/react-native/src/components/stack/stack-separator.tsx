'use client';

import { ComponentType } from 'react';
import { ditto, NativeDittoProps } from '../../core';
import { View, ViewProps } from 'react-native';

export interface StackSeparatorProps
  extends NativeDittoProps<ComponentType<ViewProps>> {}

export const StackSeparator = ditto(View, {
  base: {
    borderWidth: 0,
    alignSelf: 'stretch',
    borderColor: 'inherit',
    width: 'auto',
    height: 'auto',
  },
});
