import { defineTokens } from '../../core';

export const colors = defineTokens.colors({
  transparent: { value: 'transparent' },
  current: { value: 'currentColor' },
  alternate: {
    citrus_green: { value: '#D2EE97' },
    sky_blue: { value: '#BCE6F0' },
    lavender_pink: { value: '#EAB6F7' },
    shock_pink: { value: '#FE5FEE' },
  },
  aqua: {
    100: { value: '#035247' },
    80: { value: '#118F7A' },
    60: { value: '#1BA285' },
    50: { value: '#3FB199' },
    40: { value: '#3FB199' },
    20: { value: '#C5EBE3' },
    10: { value: '#EBFFFA' },
  },
  gray: {
    100: { value: '#1F1F1F' },
    90: { value: '#333333' },
    80: { value: '#5C5C5C' },
    70: { value: '#7E7E7D' },
    60: { value: '#B8B8B8' },
    50: { value: '#C2C2C2' },
    40: { value: '#D6D6D6' },
    30: { value: '#E0E0E0' },
    20: { value: '#E5E5E5' },
    10: { value: '#F5F5F5' },
  },
  green: {
    100: { value: '#256A25' },
    10: { value: '#F0FAF0' },
  },
  neutral: {
    black: { value: '#000000' },
    slate: { value: '#141414' },
    ice: { value: '#EBEBE9' },
    off_white: { value: '#F2F2F0' },
    white: { value: '#FFFFFF' },
  },
  orange: {
    100: { value: '#DC5B04' },
    10: { value: '#FFF3EB' },
  },
  overlay: {
    white_12: { value: 'rgba(255, 255, 255, 0.12)' },
    white_96: { value: 'rgba(255, 255, 255, 0.96)' },
    black_8: { value: 'rgba(0, 0, 0, 0.08)' },
    black_12: { value: 'rgba(0, 0, 0, 0.12)' },
    black_96: { value: 'rgba(0, 0, 0, 0.96)' },
    gray_96: { value: 'rgba(242, 242, 240, 0.96)' },
    slate_20: { value: 'rgba(20, 20, 20, 0.20)' },
    slate_96: { value: 'rgba(20, 20, 20, 0.96)' },
    aqua_96: { value: 'rgba(60, 183, 153, 0.96)' },
  },
  red: {
    100: { value: '#FA6E5A' },
    10: { value: '#FDEDED' },
  },
});
