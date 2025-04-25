import {
  createSystem,
  defineConfig,
  defineRecipe,
} from '@ditto/styled-system';
import { defaultConfig } from '@ditto/react';

export const buttonRecipe = defineRecipe({
  className: 'ditto-button',
  base: {
    display: 'inline-flex',
    appearance: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    borderWidth: '1px',
    borderColor: 'transparent',
    cursor: 'pointer',
    flexShrink: '0',
    outline: '0',
    lineHeight: '1.2',
    isolation: 'isolate',
    transitionProperty: 'common',
    transitionDuration: 'moderate',
    focusVisibleRing: 'outside',
    focusRingColor: 'colorPalette.200',
    fontFamily: 'body',
    fontWeight: '!semibold',
    _disabled: {
      bg: 'colorPalette.100',
      cursor: 'not-allowed',
    },
  },
  variants: {
    size: {
      '2xs': {
        paddingX: 'xs',
        paddingY: '4xs',
        rounded: 'md',
        textStyle: 'label.xs',
        height: 24,
      },
      xs: {
        paddingX: 'sm',
        paddingY: 'xs',
        rounded: 'md',
        textStyle: 'label.sm',
        height: 36,
      },
      sm: {
        paddingX: 'md',
        paddingY: 'xs',
        rounded: 'md',
        textStyle: 'label.sm',
        height: 40,
      },
      md: {
        paddingX: 'xl',
        paddingY: 'sm',
        rounded: 'lg',
        textStyle: 'label.md',
        height: 48,
      },
      lg: {
        paddingX: 'xl',
        paddingY: 'md',
        rounded: 'lg',
        textStyle: 'label.lg',
        height: 56,
      },
      xl: {
        paddingX: 'xl',
        paddingY: 'md',
        rounded: 'lg',
        textStyle: 'label.lg',
        height: 58,
      },
      '2xl': {
        paddingX: 'xl',
        paddingY: 'md',
        rounded: 'lg',
        textStyle: 'label.xl',
        height: 64,
      },
    },
    variant: {
      filled: {
        bg: 'colorPalette.600',
        color: 'base.0',
        _hover: {
          bg: 'colorPalette.700',
        },
        _expanded: {
          bg: 'colorPalette.700',
        },
        _active: {
          bg: 'colorPalette.600',
        },
      },
      border: {},
    },
  },
  defaultVariants: {
    colorPalette: 'primary',
    variant: 'filled',
    size: 'md',
  },
});

const config = defineConfig({
  conditions: {
    off: '&:is([data-state=off])',
    on: '&:is([data-state=on])',
    mancini: '&:is([data-state=mancini])',
  },
  theme: {
    tokens: {
      colors: {
        miguel: { value: 'tomato' },
        duda: { value: 'tomato' },
        debora: { value: 'tomato' },
        mancini: { value: 'tomato' },
      },
      fonts: {
        miguel: { value: 'system-ui, sans-serif' },
        duda: { value: 'Inter' },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
    textStyles: {
      display: {
        DEFAULT: {
          value: {
            fontSize: '7xl',
            fontWeight: 'medium',
            lineHeight: '9xl',
            letterSpacing: 'tighter-3',
          },
        },
        strong: {
          value: {
            fontSize: '7xl',
            fontWeight: 'semibold',
            lineHeight: '9xl',
            letterSpacing: 'tighter-3',
          },
        },
      },
      heading: {
        sm: {
          DEFAULT: {
            value: {
              fontSize: '2xl',
              fontWeight: 'medium',
              lineHeight: '4xl',
              letterSpacing: 'base',
            },
          },
          strong: {
            value: {
              fontSize: '2xl',
              fontWeight: 'semibold',
              lineHeight: '4xl',
              letterSpacing: 'base',
            },
          },
        },
        md: {
          DEFAULT: {
            value: {
              fontSize: '3xl',
              fontWeight: 'medium',
              lineHeight: '5xl',
              letterSpacing: 'tighter',
            },
          },
          strong: {
            value: {
              fontSize: '3xl',
              fontWeight: 'semibold',
              lineHeight: '5xl',
              letterSpacing: 'tighter',
            },
          },
        },
        lg: {
          DEFAULT: {
            value: {
              fontSize: '4xl',
              fontWeight: 'medium',
              lineHeight: '6xl',
              letterSpacing: 'tightest',
            },
          },
          strong: {
            value: {
              fontSize: '4xl',
              fontWeight: 'semibold',
              lineHeight: '6xl',
              letterSpacing: 'tightest',
            },
          },
        },
        '2xl': {
          DEFAULT: {
            value: {
              fontSize: '5xl',
              fontWeight: 'medium',
              lineHeight: '7xl',
              letterSpacing: 'tighter-1',
            },
          },
          strong: {
            value: {
              fontSize: '5xl',
              fontWeight: 'semibold',
              lineHeight: '7xl',
              letterSpacing: 'tighter-1',
            },
          },
        },
        '3xl': {
          DEFAULT: {
            value: {
              fontSize: '6xl',
              fontWeight: 'medium',
              lineHeight: '8xl',
              letterSpacing: 'tighter-2',
            },
          },
          strong: {
            value: {
              fontSize: '6xl',
              fontWeight: 'semibold',
              lineHeight: '8xl',
              letterSpacing: 'tighter-2',
            },
          },
        },
      },
      body: {
        xs: {
          DEFAULT: {
            value: {
              fontSize: 'xs',
              fontWeight: 'normal',
              lineHeight: 'sm',
              letterSpacing: 'loose',
            },
          },
          strong: {
            value: {
              fontSize: 'xs',
              fontWeight: 'semibold',
              lineHeight: 'sm',
              letterSpacing: 'loose',
            },
          },
        },
        sm: {
          DEFAULT: {
            value: {
              fontSize: 'sm',
              fontWeight: 'normal',
              lineHeight: 'lg',
              letterSpacing: 'loose',
            },
          },
          strong: {
            value: {
              fontSize: 'sm',
              fontWeight: 'semibold',
              lineHeight: 'lg',
              letterSpacing: 'loose',
            },
          },
        },
        md: {
          DEFAULT: {
            value: {
              fontSize: 'md',
              fontWeight: 'normal',
              lineHeight: 'xl',
              letterSpacing: 'normal',
            },
          },
          strong: {
            value: {
              fontSize: 'md',
              fontWeight: 'semibold',
              lineHeight: 'xl',
              letterSpacing: 'normal',
            },
          },
        },
        lg: {
          DEFAULT: {
            value: {
              fontSize: 'lg',
              fontWeight: 'normal',
              lineHeight: 'xl',
              letterSpacing: 'base',
            },
          },
          strong: {
            value: {
              fontSize: 'lg',
              fontWeight: 'semibold',
              lineHeight: 'xl',
              letterSpacing: 'base',
            },
          },
        },
        xl: {
          DEFAULT: {
            value: {
              fontSize: 'xl',
              fontWeight: 'normal',
              lineHeight: '2xl',
              letterSpacing: 'normal',
            },
          },
          strong: {
            value: {
              fontSize: 'xl',
              fontWeight: 'semibold',
              lineHeight: '2xl',
              letterSpacing: 'normal',
            },
          },
        },
      },
      label: {
        '2xs': {
          DEFAULT: {
            value: {
              fontSize: '2xs',
              fontWeight: 'normal',
              lineHeight: '2xs',
              letterSpacing: 'loose',
            },
          },
          strong: {
            value: {
              fontSize: '2xs',
              fontWeight: 'semibold',
              lineHeight: '2xs',
              letterSpacing: 'loose',
            },
          },
        },
        xs: {
          DEFAULT: {
            value: {
              fontSize: 'xs',
              fontWeight: 'normal',
              lineHeight: 'xs',
              letterSpacing: 'loose',
            },
          },
          strong: {
            value: {
              fontSize: 'xs',
              fontWeight: 'semibold',
              lineHeight: 'xs',
              letterSpacing: 'loose',
            },
          },
        },
        sm: {
          DEFAULT: {
            value: {
              fontSize: 'sm',
              fontWeight: 'normal',
              lineHeight: 'md',
              letterSpacing: 'loose',
            },
          },
          strong: {
            value: {
              fontSize: 'sm',
              fontWeight: 'semibold',
              lineHeight: 'md',
              letterSpacing: 'loose',
            },
          },
        },
        md: {
          DEFAULT: {
            value: {
              fontSize: 'md',
              fontWeight: 'normal',
              lineHeight: 'xl',
              letterSpacing: 'normal',
            },
          },
          strong: {
            value: {
              fontSize: 'md',
              fontWeight: 'semibold',
              lineHeight: 'xl',
              letterSpacing: 'normal',
            },
          },
        },
        lg: {
          DEFAULT: {
            value: {
              fontSize: 'lg',
              fontWeight: 'normal',
              lineHeight: 'xl',
              letterSpacing: 'base',
            },
          },
          strong: {
            value: {
              fontSize: 'lg',
              fontWeight: 'semibold',
              lineHeight: 'xl',
              letterSpacing: 'base',
            },
          },
        },
        xl: {
          DEFAULT: {
            value: {
              fontSize: 'xl',
              fontWeight: 'normal',
              lineHeight: '2xl',
              letterSpacing: 'base',
            },
          },
          strong: {
            value: {
              fontSize: 'xl',
              fontWeight: 'semibold',
              lineHeight: '2xl',
              letterSpacing: 'base',
            },
          },
        },
        '2xl': {
          DEFAULT: {
            value: {
              fontSize: '2xl',
              fontWeight: 'normal',
              lineHeight: '3xl',
              letterSpacing: 'base',
            },
          },
          strong: {
            value: {
              fontSize: '2xl',
              fontWeight: 'semibold',
              lineHeight: '3xl',
              letterSpacing: 'base',
            },
          },
        },
      },
      underline: {
        xs: {
          DEFAULT: {
            value: {
              fontSize: 'xs',
              fontWeight: 'normal',
              lineHeight: 'xs',
              letterSpacing: 'loose',
              textDecoration: 'underline',
            },
          },
          strong: {
            value: {
              fontSize: 'xs',
              fontWeight: 'semibold',
              lineHeight: 'xs',
              letterSpacing: 'loose',
              textDecoration: 'underline',
            },
          },
        },
        sm: {
          DEFAULT: {
            value: {
              fontSize: 'sm',
              fontWeight: 'normal',
              lineHeight: 'md',
              letterSpacing: 'loose',
              textDecoration: 'underline',
            },
          },
          strong: {
            value: {
              fontSize: 'sm',
              fontWeight: 'semibold',
              lineHeight: 'md',
              letterSpacing: 'loose',
              textDecoration: 'underline',
            },
          },
        },
        md: {
          DEFAULT: {
            value: {
              fontSize: 'md',
              fontWeight: 'normal',
              lineHeight: 'xl',
              letterSpacing: 'normal',
              textDecoration: 'underline',
            },
          },
          strong: {
            value: {
              fontSize: 'md',
              fontWeight: 'semibold',
              lineHeight: 'xl',
              letterSpacing: 'normal',
              textDecoration: 'underline',
            },
          },
        },
        lg: {
          DEFAULT: {
            value: {
              fontSize: 'lg',
              fontWeight: 'normal',
              lineHeight: 'xl',
              letterSpacing: 'base',
              textDecoration: 'underline',
            },
          },
          strong: {
            value: {
              fontSize: 'lg',
              fontWeight: 'semibold',
              lineHeight: 'xl',
              letterSpacing: 'base',
              textDecoration: 'underline',
            },
          },
        },
        xl: {
          DEFAULT: {
            value: {
              fontSize: 'xl',
              fontWeight: 'normal',
              lineHeight: '2xl',
              letterSpacing: 'base',
              textDecoration: 'underline',
            },
          },
          strong: {
            value: {
              fontSize: 'xl',
              fontWeight: 'semibold',
              lineHeight: '2xl',
              letterSpacing: 'base',
              textDecoration: 'underline',
            },
          },
        },
        '2xl': {
          DEFAULT: {
            value: {
              fontSize: '2xl',
              fontWeight: 'normal',
              lineHeight: '3xl',
              letterSpacing: 'tight',
              textDecoration: 'underline',
            },
          },
          strong: {
            value: {
              fontSize: '2xl',
              fontWeight: 'semibold',
              lineHeight: '3xl',
              letterSpacing: 'tight',
              textDecoration: 'underline',
            },
          },
        },
      },
    },
  },
  globalCss: {
    html: {
      colorPalette: 'primary',
    },
  },
});

export const system = createSystem(defaultConfig, config);

console.log('system', system);
