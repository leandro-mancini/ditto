import { defineTextStyles } from '../core';

export const textStyles = defineTextStyles({
  display: {
    value: {
      fontSize: '7xl',
      lineHeight: '9xl',
      letterSpacing: 'tighter-3',
    },
  },
  heading: {
    sm: {
      value: {
        fontSize: '2xl',
        lineHeight: '4xl',
        letterSpacing: 'base',
      },
    },
    md: {
      value: {
        fontSize: '3xl',
        lineHeight: '5xl',
        letterSpacing: 'tighter',
      },
    },
    lg: {
      value: {
        fontSize: '4xl',
        lineHeight: '6xl',
        letterSpacing: 'tightest',
      },
    },
    '2xl': {
      value: {
        fontSize: '5xl',
        lineHeight: '7xl',
        letterSpacing: 'tighter-1',
      },
    },
    '3xl': {
      value: {
        fontSize: '6xl',
        lineHeight: '8xl',
        letterSpacing: 'tighter-2',
      },
    },
  },
  body: {
    xs: {
      value: {
        fontSize: 'xs',
        lineHeight: 'sm',
        letterSpacing: 'loose',
      },
    },
    sm: {
      value: {
        fontSize: 'sm',
        lineHeight: 'lg',
        letterSpacing: 'loose',
      },
    },
    md: {
      value: {
        fontSize: 'md',
        lineHeight: 'xl',
        letterSpacing: 'normal',
      },
    },
    lg: {
      value: {
        fontSize: 'lg',
        lineHeight: 'xl',
        letterSpacing: 'base',
      },
    },
    xl: {
      value: {
        fontSize: 'xl',
        lineHeight: '2xl',
        letterSpacing: 'normal',
      },
    },
  },
  label: {
    '2xs': {
      value: {
        fontSize: '2xs',
        lineHeight: '2xs',
        letterSpacing: 'loose',
      },
    },
    xs: {
      value: {
        fontSize: 'xs',
        lineHeight: 'xs',
        letterSpacing: 'loose',
      },
    },
    sm: {
      value: {
        fontSize: 'sm',
        lineHeight: 'md',
        letterSpacing: 'loose',
      },
    },
    md: {
      value: {
        fontSize: 'md',
        lineHeight: 'xl',
        letterSpacing: 'normal',
      },
    },
    lg: {
      value: {
        fontSize: 'lg',
        lineHeight: 'xl',
        letterSpacing: 'base',
      },
    },
    xl: {
      value: {
        fontSize: 'xl',
        lineHeight: '2xl',
        letterSpacing: 'base',
      },
    },
    '2xl': {
      value: {
        fontSize: '2xl',
        lineHeight: '3xl',
        letterSpacing: 'base',
      },
    },
  },
  underline: {
    xs: {
      value: {
        fontSize: 'xs',
        lineHeight: 'xs',
        letterSpacing: 'loose',
        textDecoration: 'underline',
      },
    },
    sm: {
      value: {
        fontSize: 'sm',
        lineHeight: 'md',
        letterSpacing: 'loose',
        textDecoration: 'underline',
      },
    },
    md: {
      value: {
        fontSize: 'md',
        lineHeight: 'xl',
        letterSpacing: 'normal',
        textDecoration: 'underline',
      },
    },
    lg: {
      value: {
        fontSize: 'lg',
        lineHeight: 'xl',
        letterSpacing: 'base',
        textDecoration: 'underline',
      },
    },
    xl: {
      value: {
        fontSize: 'xl',
        lineHeight: '2xl',
        letterSpacing: 'base',
        textDecoration: 'underline',
      },
    },
    '2xl': {
      value: {
        fontSize: '2xl',
        lineHeight: '3xl',
        letterSpacing: 'tight',
        textDecoration: 'underline',
      },
    },
  },
});
