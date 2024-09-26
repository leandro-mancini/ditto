'use client';

import { type HTMLDittoProps } from '@dittox/styled-system';
import { ditto } from '../../core';

export interface StickyProps extends HTMLDittoProps<'div'> {}

export const Sticky = ditto('div', {
  base: {
    position: 'sticky',
    top: 0,
  },
});
