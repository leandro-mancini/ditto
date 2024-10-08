'use client';

import { ditto, HTMLDittoProps } from '../../core';

export interface StackSeparatorProps extends HTMLDittoProps<'div'> {}

export const StackSeparator = ditto('div', {
  base: {
    borderWidth: 0,
    alignSelf: 'stretch',
    borderColor: 'inherit',
    width: 'auto',
    height: 'auto',
  },
});
