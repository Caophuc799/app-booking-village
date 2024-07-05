import { createTheme, useTheme } from '@rneui/themed';
import { colors, spacing } from './primitives';

export const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  spacing: { xs: 2, sm: 8, md: 12, lg: 24, xl: 40 },
  mode: 'light',
});

export type Theme = typeof theme;
