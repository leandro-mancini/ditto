import { defineTokens } from '../../core';

export const shadows = defineTokens.shadows({
  bottom: {
    1: { value: '0px 4px 4px -2px #0B17233D' },
    2: { value: '0px 4px 12px 0px #0B17231F' },
    3: { value: '0px 16px 32px 0px #0B172352' },
  },
  up: {
    1: { value: '0px -4px 4px -2px #0B17233D' },
    2: { value: '0px -4px 12px 0px #0B17231F' },
    3: { value: '0px -16px 32px 0px #0B172352' },
  },
});
