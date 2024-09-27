import { type HTMLDittoProps } from '@dittox/styled-system';
import { View } from 'react-native';

import { ditto } from '../../core';

export interface BoxProps extends HTMLDittoProps<'View'> {}

export const Box = ditto<any>(View);
