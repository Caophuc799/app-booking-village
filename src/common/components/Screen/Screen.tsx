import { ComponentProps } from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenProps extends ComponentProps<typeof View> {
  topInset?: boolean;
  bottomInset?: boolean;
  extraBottomInset?: boolean;
}

export const Screen = ({
  children,
  topInset = false,
  bottomInset = true,
  extraBottomInset = false,
  style,
  ...props
}: ScreenProps) => {
  const inset = useSafeAreaInsets();

  const viewStyle = [
    {
      flex: 1,
      ...((bottomInset || extraBottomInset) && {
        paddingBottom:
          bottomInset || extraBottomInset ? inset.bottom + (extraBottomInset ? 16 : 0) || theme.spacing[4] : 0,
      }),
      ...(topInset && {
        paddingTop: topInset ? inset.top || 24 : 0,
      }),
    },
    style,
  ];

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <View style={viewStyle} {...props}>
        {children}
      </View>
    </>
  );
};
