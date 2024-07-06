import { Text as RNEText } from '@rneui/themed';
import { TextProps } from '@rneui/base/dist/Text/Text';
import { ReactNode, useMemo } from 'react';
import { colors } from 'common/theme';

interface Props extends TextProps {
  variant?: 'bodyMedium' | 'bodySmall' | 'header' | 'bodyBold' | 'note' | 'headerLarge';
  children?: string | ReactNode | undefined;
  color?: string;
}
export const Text = ({ variant, children, color, style, ...rest }: Props) => {
  const variantStyle = useMemo((): TextProps['style'] => {
    switch (variant) {
      case 'headerLarge': {
        return {
          fontSize: 24,
          fontWeight: '700',
          color: '#080000'
        };
      }
      case 'header': {
        return {
          fontSize: 20,
          fontWeight: '600',
          color: '#080000'
        };
      }
      case 'bodyBold': {
        return { fontStyle: 'normal', fontFamily: 'System', fontWeight: '600', fontSize: 14, lineHeight: 20 };
      }
      case 'bodyMedium': {
        return {
          fontStyle: 'normal',
          fontSize: 14,
          fontFamily: 'System',
          fontWeight: '400',
          lineHeight: 20,
        };
      }
      case 'bodySmall': {
        return {
          fontStyle: 'normal',
          fontSize: 10,
          fontFamily: 'System',
          fontWeight: '400',
          lineHeight: 15,
        };
      }
      case 'note': {
        return {
          fontStyle: 'normal',
          fontSize: 8,
          fontFamily: 'System',
          fontWeight: '400',
          lineHeight: 15,
          color: colors.neutral700,
        };
      }
      default: {
        return { fontStyle: 'normal', fontFamily: 'System', fontWeight: '400', fontSize: 14, lineHeight: 20 };
      }
    }
  }, [variant]);

  return (
    <RNEText style={[variantStyle, { color }, style]} {...rest}>
      {children}
    </RNEText>
  );
};
