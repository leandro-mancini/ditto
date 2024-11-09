import { defineTokens } from '../../core';

const fallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

export const fonts = defineTokens.fonts({
  heading: {
    value: `Inter, ${fallback}`,
  },
  body: {
    value: `Inter, ${fallback}`,
  },
});
