import { Image, Text } from '@rneui/themed';
import { View } from 'react-native';

export const BookingItem = ({ booking }: { booking: any }) => {
  return (
    <View>
      <Image source={{ uri: booking.image }} />
      <Text>Item</Text>
    </View>
  );
};
