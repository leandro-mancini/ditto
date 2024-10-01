'use client';

import { h } from 'preact';
import register from 'preact-custom-element';
import { ditto, DittoProvider, HTMLDittoProps } from '../../core';
import { createSystem } from '@dittox/styled-system';
import { useEffect, useRef, useState } from 'preact/hooks';

export interface BoxProps extends HTMLDittoProps<'div'> {}

export const system = createSystem({});

export const BoxComponent = ditto('div') as preact.FunctionComponent<any>;

export const Box = (props: BoxProps) => {
  return (
    <DittoProvider value={system}>
      <BoxComponent {...props} />
    </DittoProvider>
  );
};

register(
  Box,
  'ditto-box',
  ['class', 'style', 'id', 'background-color', 'bg-color'],
  { shadow: true }
);
