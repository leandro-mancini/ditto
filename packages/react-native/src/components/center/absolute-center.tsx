'use client';

import { ComponentType } from 'react';
import { ditto, NativeDittoProps } from '../../core';
import { View, ViewProps } from 'react-native';

export interface AbsoluteCenterProps
  extends NativeDittoProps<ComponentType<ViewProps>> {
  axis?: 'horizontal' | 'vertical' | 'both';
}

export const AbsoluteCenter = ditto(View, {
  base: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
