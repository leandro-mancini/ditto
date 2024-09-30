import { View, ViewProps } from 'react-native';

import { ditto, NativeDittoProps } from '../../core';
import { ComponentType } from 'react';

export interface BoxProps extends NativeDittoProps<ComponentType<ViewProps>> {}

export const Box = ditto(View);
