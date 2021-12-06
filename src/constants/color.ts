export const COLORS = {
  PRIMARY: '#FFFFEA',
  SECONDARY: '#8C8B7B',
  SECONDARY_RGBA: 'rgba(140, 139, 123, 1)',
  SECONDARY_RGBA_TRANSPARENT: 'rgba(140, 139, 123, 0)',
  TERTIARY: '#B3A281',
  TEXT: '#000000',
  WHITE: '#FFFFFF',
} as const;

type colorsKeys = keyof typeof COLORS;

export type ColorsValue = typeof COLORS[colorsKeys];
