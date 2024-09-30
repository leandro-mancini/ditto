'use client';

import { ComponentType } from 'react';
import { ditto, NativeDittoProps } from '../../core';
import { View, ViewProps } from 'react-native';

export interface CenterProps
  extends NativeDittoProps<ComponentType<ViewProps>> {}

export const Center = ditto(View, {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
