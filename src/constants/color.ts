export const COLORS = {
  PRIMARY: '#FFFFEA',
  SECONDARY: '#8C8B7B',
} as const;

type colorsKeys = keyof typeof COLORS;

export type ColorsValue = typeof COLORS[colorsKeys];
