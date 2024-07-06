import { Input, makeStyles } from '@rneui/themed';
import { ErrorScreen, Screen, LoadingScreen } from 'common/components';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, Dimensions, FlatList, ImageBackground, StatusBar, View } from 'react-native';
import { MainScreenProps } from '../MainStack.types';
import { HomeAnimatedHeader, HomeInformation, users } from './components';
import { VillageItem } from './components/VillageItem';
import { Village } from 'types/index';
import { colors } from 'common/theme';
import useVillages from 'dataAccess/useVillages';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const HomeScreen = ({ navigation }: MainScreenProps<'home'>) => {
  const styles = useStyles();
  const [scrollY] = useState(new Animated.Value(0));
  const { data, error, isLoading, refetch } = useVillages();
  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false });

  const renderItem = useCallback(({ item }: { item: any }) => {
    return <VillageItem booking={item} />;
  }, []);

  if (error) {
    return <ErrorScreen retry={() => refetch()} />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Screen style={styles.screen}>
      <HomeAnimatedHeader scrollY={scrollY} />
      <AnimatedFlatList
        ListHeaderComponent={<HomeInformation />}
        data={users}
        onScroll={handleScroll}
        keyExtractor={item => `${(item as Village).id}`}
        renderItem={renderItem}
      />
    </Screen>
  );
};

const useStyles = makeStyles(theme => ({
  screen: {
    paddingHorizontal: 12,
    paddingVertical: 24,
    marginTop: 32,
    flex: 1,
  },
}));

export default HomeScreen;
