'use client';

import { h } from 'preact';
import register from 'preact-custom-element';
import { ditto, DittoProvider, HTMLDittoProps } from '../../core';
import { createSystem } from '@dittox/styled-system';

export interface BoxProps extends HTMLDittoProps<'div'> {}

export const system = createSystem({});

export const BoxComponent = ditto('div') as preact.FunctionComponent<any>;

export const Box = (props: BoxProps) => {
  console.log('props', props);

  return (
    <DittoProvider value={system}>
      <BoxComponent
        {...props}
        shadowRoot={document.querySelector('ditto-box')?.shadowRoot}
      />
    </DittoProvider>
  );
};

register(Box, 'ditto-box', ['class', 'style', 'id'], { shadow: true });
