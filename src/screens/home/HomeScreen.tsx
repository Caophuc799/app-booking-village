import { FlatList, Text, View } from 'react-native';
import { MainScreenProps } from '../MainStack.types';
import { useCallback } from 'react';
import { BookingItem } from './components/BookingItem';
import { BookingListing } from './components';

const HomeScreen = ({ navigation }: MainScreenProps<'home'>) => {
  return (
    <View>
      <BookingListing />
    </View>
  );
};

export default HomeScreen;
