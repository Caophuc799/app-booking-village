export const breakpoints = {
  smallPhone: 0,
  mediumPhone: {
    width: 0,
    height: 400, // For phones with height higher than 400 like iPhone SE
  },
  largePhone: {
    width: 0,
    height: 700, // For phones with height higher than 700 like iPhone 13 mini or higher
  },
  tablet: 768,
} as const;
