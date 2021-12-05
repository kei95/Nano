export const COLORS = {
  PRIMARY: '#FFFFEA',
  SECONDARY: '#8C8B7B',
  TERTIARY: '#B3A281',
  TEXT: '#000000',
} as const;

type colorsKeys = keyof typeof COLORS;

export type ColorsValue = typeof COLORS[colorsKeys];
