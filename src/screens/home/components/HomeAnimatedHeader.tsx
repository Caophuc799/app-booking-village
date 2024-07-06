import { Input, makeStyles } from '@rneui/themed';
import { colors } from 'common/theme';
import { useTranslation } from 'react-i18next';
import { Animated, Dimensions, ImageBackground, View } from 'react-native';

const headerHeight = Dimensions.get('window').height / 3 - 50;
const HomeAnimatedHeader = ({ scrollY }: { scrollY: Animated.Value }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const headerStyle = {
    height: scrollY.interpolate({
      inputRange: [0, headerHeight],
      outputRange: [headerHeight, 0],
      extrapolate: 'clamp',
    }),
    opacity: scrollY.interpolate({
      inputRange: [0, headerHeight],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  const opacityStyle = {
    opacity: scrollY.interpolate({
      inputRange: [(headerHeight / 4) * 3, headerHeight],
      outputRange: [0, 1],
      extrapolate: 'extend',
    }),
  };

  const contentMarginTop = {
    marginTop: scrollY.interpolate({
      inputRange: [0, headerHeight * 2],
      outputRange: [headerHeight / 2, -50],
      extrapolate: 'clamp',
    }),
    opacity: scrollY.interpolate({
      inputRange: [0, headerHeight],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  return (
    <>
      <Animated.View style={[styles.header, headerStyle]}>
        <ImageBackground
          style={styles.backgroundImage}
          source={{
            uri: 'https://pix7.agoda.net/hotelImages/32911637/0/58f1907169842e755774b7447f449173.jpg?ce=0&s=414x232&ar=16x9',
          }}
        ></ImageBackground>
      </Animated.View>
      <Animated.View style={[{ zIndex: 3 }, contentMarginTop]}>
        <Input
          inputContainerStyle={styles.inputContainer}
          leftIcon={{ type: 'entypo', name: 'location-pin', color: colors.primary700 }}
          placeholder={t('home.whereAreYouGoing')}
        />
      </Animated.View>

      <Animated.View style={[styles.inputSearch, opacityStyle]}>
        <View style={{ marginTop: 50 }} />
        <Input
          inputContainerStyle={styles.inputContainer}
          leftIcon={{ type: 'entypo', name: 'location-pin', color: colors.primary700 }}
          placeholder={t('home.whereAreYouGoing')}
        />
      </Animated.View>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  header: {
    position: 'absolute',
    top: -40,
    left: 0,
    right: 0,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: headerHeight,
    padding: 12,
  },
  inputSearch: {
    backgroundColor: 'white',
    position: 'absolute',
    top: -30,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  inputContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    borderBottomColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 0,
    margin: 0,
  },
}));

export default HomeAnimatedHeader;
