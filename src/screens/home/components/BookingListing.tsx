import { FlatList } from 'react-native-gesture-handler';
import { BookingItem } from './BookingItem';
import { useCallback } from 'react';

const users = [
  {
    id: 1,
    name: 'brynn',
    image:
      'https://rockrealty.in/wp-content/uploads/elementor/thumbs/images-13-1024x525-1-onbkf02nd43kk3tp98kgr1il7v4et27gg3bd04fm4w.jpg',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    id: 2,
    name: 'thot leader',
    image:
      'https://rockrealty.in/wp-content/uploads/elementor/thumbs/images-13-1024x525-1-onbkf02nd43kk3tp98kgr1il7v4et27gg3bd04fm4w.jpg',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    id: 3,
    name: 'jsa',
    image:
      'https://rockrealty.in/wp-content/uploads/elementor/thumbs/images-13-1024x525-1-onbkf02nd43kk3tp98kgr1il7v4et27gg3bd04fm4w.jpg',
    avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
  },
  {
    id: 4,
    name: 'talhaconcepts',
    image:
      'https://rockrealty.in/wp-content/uploads/elementor/thumbs/images-13-1024x525-1-onbkf02nd43kk3tp98kgr1il7v4et27gg3bd04fm4w.jpg',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 5,
    name: 'andy vitale',
    image:
      'https://rockrealty.in/wp-content/uploads/elementor/thumbs/images-13-1024x525-1-onbkf02nd43kk3tp98kgr1il7v4et27gg3bd04fm4w.jpg',
    avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
  },
  {
    id: 6,
    name: 'katy friedson',
    image:
      'https://rockrealty.in/wp-content/uploads/elementor/thumbs/images-13-1024x525-1-onbkf02nd43kk3tp98kgr1il7v4et27gg3bd04fm4w.jpg',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
  },
];

export const BookingListing = () => {
  const renderItem = useCallback(({ item }: { item: any }) => {
    return <BookingItem booking={item} />;
  }, []);

  return <FlatList data={users} keyExtractor={item => `${item.id}`} renderItem={renderItem} />;
};
