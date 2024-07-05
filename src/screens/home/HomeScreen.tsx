import { makeStyles } from '@rneui/themed';
import { Screen } from 'common/components';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, StatusBar } from 'react-native';
import { MainScreenProps } from '../MainStack.types';
import { HomeHeader, users } from './components';
import { BookingItem } from './components/BookingItem';

const HomeScreen = ({ navigation }: MainScreenProps<'home'>) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const renderItem = useCallback(({ item }: { item: any }) => {
    return <BookingItem booking={item} />;
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        ListHeaderComponent={<HomeHeader />}
        data={users}
        keyExtractor={item => `${item.id}`}
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
  },
}));

export default HomeScreen;
