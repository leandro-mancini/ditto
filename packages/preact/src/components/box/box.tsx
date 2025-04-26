'use client';

import { h } from 'preact';
import register from 'preact-custom-element';
import { ditto, DittoProvider, HTMLDittoProps } from '../../core';
import { createSystem } from '@dittox/styled-system';
import { defaultConfig } from '../../preset';

export interface BoxProps extends HTMLDittoProps<'div'> {}

export const system = createSystem(defaultConfig);

export const BoxComponent = ditto('div') as preact.FunctionComponent<any>;

export const Box = (props: BoxProps) => {
  return (
    <DittoProvider value={system}>
      <BoxComponent {...props} />
    </DittoProvider>
  );
};

const systemPropertiesArray = [
  ...system.conditions.keys(),
  ...system.utility.keys(),
];

register(Box, 'ditto-box', [...systemPropertiesArray, 'disabled'], {
  shadow: true,
});
