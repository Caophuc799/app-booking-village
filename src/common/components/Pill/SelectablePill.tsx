/* eslint-disable no-nested-ternary */
import { makeStyles, Text } from '@rneui/themed';
import { colors } from 'common/theme';
import { ReactNode } from 'react';
import { TextStyle, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface Props extends TouchableOpacityProps {
  onChange: (isSelected: boolean) => void;
  isSelected: boolean;
  children: ReactNode;
  textStyle?: TextStyle;
}

export const SelectablePill = ({ isSelected, onChange, children, style, textStyle, disabled, ...rest }: Props) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.baseButton,
        isSelected ? styles.buttonSelected : disabled ? styles.buttonDisabled : styles.button,
        style,
      ]}
      onPress={() => onChange(!isSelected)}
      disabled={disabled}
      accessibilityRole='checkbox'
      accessibilityState={{ checked: isSelected, disabled }}
      {...rest}
    >
      <Text style={[isSelected ? styles.textSelected : disabled ? styles.textDisabled : styles.text, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const useStyles = makeStyles(theme => ({
  baseButton: {
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 36,
    marginRight: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
  },
  buttonSelected: {
    backgroundColor: colors.primary700,
  },
  buttonDisabled: {
    backgroundColor: colors.neutral300,
  },
  text: {
    color: colors.primary600,
  },
  baseText: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
  textSelected: {
    color: 'white',
  },
  textDisabled: {
    color: colors.neutral300,
  },
}));
