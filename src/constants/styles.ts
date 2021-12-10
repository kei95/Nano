export const STYLES = {
  BODY_CENTER_ITEMS: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DEFAULT_HORIZONTAL_SPACE: {
    marginHorizontal: 32,
  },
} as const;

type styleKeys = keyof typeof STYLES;

export type StylesValue = typeof STYLES[styleKeys];
