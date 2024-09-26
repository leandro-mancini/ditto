'use client';

import { type HTMLDittoProps } from '@dittox/styled-system';
import { ditto } from '../../core';

export interface BoxProps extends HTMLDittoProps<'div'> {}

export const Box = ditto('div');
