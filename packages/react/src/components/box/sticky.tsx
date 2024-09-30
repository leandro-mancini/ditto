'use client';

import { ditto, HTMLDittoProps } from '../../core';

export interface StickyProps extends HTMLDittoProps<'div'> {}

export const Sticky = ditto('div', {
  base: {
    position: 'sticky',
    top: 0,
  },
});
