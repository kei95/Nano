import {TextStyle} from 'react-native';
import {COLORS} from './color';

//TODO: Bring all font families back once set it up
// const IOS_FONT = 'San Francisco';
// const ANDROID_FONT = 'Roboto';
// const DEFAULT_FONTS = Platform.select({ios: IOS_FONT, android: ANDROID_FONT});

export const TYPOGRAPHY = {
  SMALL: {
    // fontFamily: DEFAULT_FONTS,
    fontSize: 14,
    color: COLORS.TEXT,
  } as TextStyle,
  MEDIUM: {
    // fontFamily: DEFAULT_FONTS,
    fontSize: 18,
    color: COLORS.TEXT,
  },
  LARGE: {
    // fontFamily: DEFAULT_FONTS,
    fontSize: 24,
    color: COLORS.TEXT,
  },
  X_LARGE: {
    // fontFamily: DEFAULT_FONTS,
    fontSize: 48,
    color: COLORS.TEXT,
  },
} as const;

type TypographyKeys = keyof typeof TYPOGRAPHY;

export type TypographyValues = typeof TYPOGRAPHY[TypographyKeys];
