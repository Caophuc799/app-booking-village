import { Button, Divider, Image, makeStyles } from '@rneui/themed';
import { Text } from 'common/components';
import { colors } from 'common/theme';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import { Room } from 'types/index';

export const BookingItem = ({ booking }: { booking: Room }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image
        resizeMode='stretch'
        style={{
          width: Dimensions.get('window').width,
          aspectRatio: 1.8,
        }}
        source={{
          uri: booking.image,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.informationContainer}>
        <View style={styles.title}>
          <Text variant='header'>{booking.name}</Text>
        </View>
        <Text style={styles.address}>{booking.address}</Text>
        <Divider style={styles.divider} />
        <View style={styles.booking}>
          <View style={{ flex: 1 }}>
            <Text variant='bodyBold'>{t('home.booking.onlyFrom')}</Text>
            <View style={styles.priceContainer}>
              <Text variant='header' style={styles.price}>
                {booking.price}
              </Text>
              <Text variant='bodySmall' style={styles.unit}>
                {t('home.booking.unit')}
              </Text>
            </View>
            <Text variant='note'>{t('home.booking.taxesAndFeeIncluded')}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={t('home.actions.selectRoom')}
              titleStyle={styles.selectRoomButtonTitle}
              buttonStyle={styles.selectRoomButton}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  informationContainer: {
    margin: 8,
  },
  title: {
    margin: 4,
  },
  address: {
    color: colors.neutral800,
    margin: 4,
  },
  image: {
    marginVertical: 8,
  },
  divider: {
    margin: 4,
  },
  booking: { flexDirection: 'row', justifyContent: 'space-between' },
  selectRoomButton: {
    backgroundColor: colors.primary700,
    borderRadius: 50,
    padding: 10,
  },
  selectRoomButtonTitle: {
    fontSize: 13,
    fontWeight: '600',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  price: {
    color: colors.primary700,
  },
  unit: {},
  buttonContainer: { justifyContent: 'center', alignItems: 'center' },
}));
