import { View } from 'react-native';

import { ditto, HTMLDittoProps } from '../../core';

export interface BoxProps extends HTMLDittoProps<'View'> {}

export const Box = ditto<any>(View);
