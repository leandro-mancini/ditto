import { defineSemanticTokens } from '../../core';

export const semanticColors = defineSemanticTokens.colors({
  theme1: {
    accent: {
      value: {
        _light: '{colors.neutral.slate}',
        _dark: '{colors.neutral.slate}',
      },
    },
    border: {
      a: {
        value: {
          _light: '{colors.neutral.white}',
          _dark: '{colors.neutral.white}',
        },
      },
      b: {
        value: {
          _light: '{colors.neutral.off_white}',
          _dark: '{colors.neutral.off_white}',
        },
      },
      c: {
        value: { _light: '{colors.gray.20}', _dark: '{colors.gray.20}' },
      },
      d: {
        value: {
          _light: '{colors.neutral.slate}',
          _dark: '{colors.neutral.slate}',
        },
      },
      brand: {
        a: {
          value: { _light: '{colors.aqua.60}', _dark: '{colors.aqua.60}' },
        },
        b: {
          value: { _light: '{colors.aqua.50}', _dark: '{colors.aqua.50}' },
        },
        c: {
          value: {
            _light: '{colors.neutral.white}',
            _dark: '{colors.neutral.white}',
          },
        },
      },
    },
    content: {
      a: {
        value: {
          _light: '{colors.neutral.slate}',
          _dark: '{colors.neutral.slate}',
        },
      },
      b: {
        value: { _light: '{colors.gray.70}', _dark: '{colors.gray.70}' },
      },
      c: {
        value: { _light: '{colors.gray.60}', _dark: '{colors.gray.60}' },
      },
      d: {
        value: {
          _light: '{colors.neutral.white}',
          _dark: '{colors.neutral.white}',
        },
      },
      brand: {
        a: {
          value: { _light: '{colors.aqua.60}', _dark: '{colors.aqua.60}' },
        },
        b: {
          value: { _light: '{colors.aqua.20}', _dark: '{colors.aqua.20}' },
        },
        c: {
          value: {
            _light: '{colors.neutral.white}',
            _dark: '{colors.neutral.white}',
          },
        },
      },
    },
    overlay: {
      bright: {
        value: {
          _light: '{colors.overlay.white_12}',
          _dark: '{colors.overlay.white_12}',
        },
      },
      brighter: {
        value: {
          _light: '{colors.overlay.white_96}',
          _dark: '{colors.overlay.white_96}',
        },
      },
      dark: {
        value: {
          _light: '{colors.overlay.black_12}',
          _dark: '{colors.overlay.black_12}',
        },
      },
      darker: {
        value: {
          _light: '{colors.overlay.black_96}',
          _dark: '{colors.overlay.black_96}',
        },
      },
      brand: {
        value: { _light: '{colors.overlay.96}', _dark: '{colors.overlay.96}' },
      },
    },
    support: {
      success: {
        a: {
          value: { _light: '{colors.green.100}', _dark: '{colors.green.100}' },
        },
        b: {
          value: { _light: '{colors.green.10}', _dark: '{colors.green.10}' },
        },
      },
      caution: {
        a: {
          value: {
            _light: '{colors.orange.100}',
            _dark: '{colors.orange.100}',
          },
        },
        b: {
          value: { _light: '{colors.orange.10}', _dark: '{colors.orange.10}' },
        },
      },
      critical: {
        a: {
          value: { _light: '{colors.red.100}', _dark: '{colors.red.100}' },
        },
        b: {
          value: { _light: '{colors.red.10}', _dark: '{colors.red.10}' },
        },
      },
    },
  },
});
