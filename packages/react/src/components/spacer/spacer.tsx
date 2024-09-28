'use client';

import { ditto, HTMLDittoProps } from '../../core';

export interface SpacerProps extends HTMLDittoProps<'div'> {}

export const Spacer = ditto('div', {
  base: {
    flex: 1,
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
});
