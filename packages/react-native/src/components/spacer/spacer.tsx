'use client';

import { ComponentType } from 'react';
import { ditto, NativeDittoProps } from '../../core';
import { View, ViewProps } from 'react-native';

export interface SpacerProps
  extends NativeDittoProps<ComponentType<ViewProps>> {}

export const Spacer = ditto(View, {
  base: {
    flex: 1,
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
});
