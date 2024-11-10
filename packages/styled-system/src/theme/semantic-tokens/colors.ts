import { defineSemanticTokens } from '../../core';

export const semanticColors = defineSemanticTokens.colors({
  primary: {
    25: { value: { _light: '{colors.blue.25}', _dark: '{colors.blue.25}' } },
    50: { value: { _light: '{colors.blue.50}', _dark: '{colors.blue.50}' } },
    100: { value: { _light: '{colors.blue.100}', _dark: '{colors.blue.100}' } },
    200: { value: { _light: '{colors.blue.200}', _dark: '{colors.blue.200}' } },
    300: { value: { _light: '{colors.blue.300}', _dark: '{colors.blue.300}' } },
    400: { value: { _light: '{colors.blue.400}', _dark: '{colors.blue.400}' } },
    500: { value: { _light: '{colors.blue.500}', _dark: '{colors.blue.500}' } },
    600: { value: { _light: '{colors.blue.600}', _dark: '{colors.blue.600}' } },
    700: { value: { _light: '{colors.blue.700}', _dark: '{colors.blue.700}' } },
    800: { value: { _light: '{colors.blue.800}', _dark: '{colors.blue.800}' } },
    900: { value: { _light: '{colors.blue.900}', _dark: '{colors.blue.900}' } },
  },
  success: {
    25: { value: { _light: '{colors.green.25}', _dark: '{colors.green.25}' } },
    50: { value: { _light: '{colors.green.50}', _dark: '{colors.green.50}' } },
    100: {
      value: { _light: '{colors.green.100}', _dark: '{colors.green.100}' },
    },
    200: {
      value: { _light: '{colors.green.200}', _dark: '{colors.green.200}' },
    },
    300: {
      value: { _light: '{colors.green.300}', _dark: '{colors.green.300}' },
    },
    400: {
      value: { _light: '{colors.green.400}', _dark: '{colors.green.400}' },
    },
    500: {
      value: { _light: '{colors.green.500}', _dark: '{colors.green.500}' },
    },
    600: {
      value: { _light: '{colors.green.600}', _dark: '{colors.green.600}' },
    },
    700: {
      value: { _light: '{colors.green.700}', _dark: '{colors.green.700}' },
    },
    800: {
      value: { _light: '{colors.green.800}', _dark: '{colors.green.800}' },
    },
    900: {
      value: { _light: '{colors.green.900}', _dark: '{colors.green.900}' },
    },
  },
  warning: {
    25: {
      value: { _light: '{colors.yellow.25}', _dark: '{colors.yellow.25}' },
    },
    50: {
      value: { _light: '{colors.yellow.50}', _dark: '{colors.yellow.50}' },
    },
    100: {
      value: { _light: '{colors.yellow.100}', _dark: '{colors.yellow.100}' },
    },
    200: {
      value: { _light: '{colors.yellow.200}', _dark: '{colors.yellow.200}' },
    },
    300: {
      value: { _light: '{colors.yellow.300}', _dark: '{colors.yellow.300}' },
    },
    400: {
      value: { _light: '{colors.yellow.400}', _dark: '{colors.yellow.400}' },
    },
    500: {
      value: { _light: '{colors.yellow.500}', _dark: '{colors.yellow.500}' },
    },
    600: {
      value: { _light: '{colors.yellow.600}', _dark: '{colors.yellow.600}' },
    },
    700: {
      value: { _light: '{colors.yellow.700}', _dark: '{colors.yellow.700}' },
    },
    800: {
      value: { _light: '{colors.yellow.800}', _dark: '{colors.yellow.800}' },
    },
    900: {
      value: { _light: '{colors.yellow.900}', _dark: '{colors.yellow.900}' },
    },
  },
  error: {
    25: { value: { _light: '{colors.red.25}', _dark: '{colors.red.25}' } },
    50: { value: { _light: '{colors.red.50}', _dark: '{colors.red.50}' } },
    100: { value: { _light: '{colors.red.100}', _dark: '{colors.red.100}' } },
    200: { value: { _light: '{colors.red.200}', _dark: '{colors.red.200}' } },
    300: { value: { _light: '{colors.red.300}', _dark: '{colors.red.300}' } },
    400: { value: { _light: '{colors.red.400}', _dark: '{colors.red.400}' } },
    500: { value: { _light: '{colors.red.500}', _dark: '{colors.red.500}' } },
    600: { value: { _light: '{colors.red.600}', _dark: '{colors.red.600}' } },
    700: { value: { _light: '{colors.red.700}', _dark: '{colors.red.700}' } },
    800: { value: { _light: '{colors.red.800}', _dark: '{colors.red.800}' } },
    900: { value: { _light: '{colors.red.900}', _dark: '{colors.red.900}' } },
  },
  state: {
    25: { value: { _light: '{colors.gray.25}', _dark: '{colors.gray.25}' } },
    50: { value: { _light: '{colors.gray.50}', _dark: '{colors.gray.50}' } },
    100: { value: { _light: '{colors.gray.100}', _dark: '{colors.gray.100}' } },
    200: { value: { _light: '{colors.gray.200}', _dark: '{colors.gray.200}' } },
    300: { value: { _light: '{colors.gray.300}', _dark: '{colors.gray.300}' } },
    400: { value: { _light: '{colors.gray.400}', _dark: '{colors.gray.400}' } },
    500: { value: { _light: '{colors.gray.500}', _dark: '{colors.gray.500}' } },
    600: { value: { _light: '{colors.gray.600}', _dark: '{colors.gray.600}' } },
    700: { value: { _light: '{colors.gray.700}', _dark: '{colors.gray.700}' } },
    800: { value: { _light: '{colors.gray.800}', _dark: '{colors.gray.800}' } },
    900: { value: { _light: '{colors.gray.900}', _dark: '{colors.gray.900}' } },
  },
});
