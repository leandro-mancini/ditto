import { defineTokens } from '../../core';

export const shadows = defineTokens.shadows({
  xs: { value: '0px 1px 2px 0px #1212170D' },
  sm: { value: '0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A' },
  md: { value: '0px 2px 4px -1px #1212170F, 0px 4px 6px -1px #12121714' },
  lg: { value: '0px 4px 6px -2px #1212170D, 0px 10px 15px -3px #12121714' },
  xl: { value: '0px 20px 65px -5px #1212170A, 0px 10px 20px -5px #1212170A' },
  '2xl': { value: '0px 25px 80px -12px #12121729' },
  '3xl': { value: '-12px 12px 24px 0px #1212173D' },
  overlay: {
    value:
      '0px 2px 4px 0px #1212170A, 0px 5px 8px 0px #1212170A, 0px 10px 18px 0px #12121708, 0px 24px 48px 0px #12121708, 0px 0px 0px 1px #FFFFFF3D',
  },
});
