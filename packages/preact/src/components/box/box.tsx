'use client';

import { h } from 'preact';
import register from 'preact-custom-element';
import { ditto, HTMLDittoProps } from '../../core';

export interface BoxProps extends HTMLDittoProps<'div'> {}

// Ajustamos o componente para Preact
export const Box = ditto('div') as preact.FunctionComponent<any>;

// Registra o componente com Preact Custom Elements
register(Box, 'ditto-box', ['class', 'style', 'id']);
