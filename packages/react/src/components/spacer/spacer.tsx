'use client';

import { HTMLDittoProps } from '@dittox/styled-system';
import { ditto } from '../../core';

export interface SpacerProps extends HTMLDittoProps<'div'> {}

export const Spacer = ditto('div', {
  base: {
    flex: 1,
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
});
