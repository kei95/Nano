import {COLORS} from './color';

export const TYPOGRAPHY = {
  SMALL: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: COLORS.TEXT,
  },
  MEDIUM: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: COLORS.TEXT,
  },
  LARGE: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: COLORS.TEXT,
  },
  X_LARGE: {
    fontFamily: 'Roboto',
    fontSize: 48,
    color: COLORS.TEXT,
  },
} as const;

type TypographyKeys = keyof typeof TYPOGRAPHY;

export type TypographyValues = typeof TYPOGRAPHY[TypographyKeys];
