'use client';

import { ditto, HTMLDittoProps } from '../../core';

export interface CenterProps extends HTMLDittoProps<'div'> {}

export const Center = ditto('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    inline: {
      true: {
        display: 'inline-flex',
      },
    },
  },
});
