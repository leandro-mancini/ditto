'use client';

import { ditto, HTMLDittoProps } from '../../core';

export interface BoxProps extends HTMLDittoProps<'div'> {}

export const Box = ditto('div');
