import { BackgroundImage, color } from '@rneui/base';
import { Image, makeStyles } from '@rneui/themed';
import { Text } from 'common/components';
import { colors } from 'common/theme';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Dimensions, ImageBackground, View } from 'react-native';

export const ComingSoon = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  return (
    <View>
      <Text variant='headerLarge'>{t('home.comingSoons.title')}</Text>
      <View style={styles.container}>
        <ImageBackground
          resizeMode='stretch'
          style={styles.backgroundImage}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/1200px-The_Event_2010_Intertitle.svg.png',
          }}
        >
          <View>
            <Text variant='header' color={colors.primary600}>
              M VILLAGE TAO DAN PARK
            </Text>
            <Text color={colors.primary600}>14 Trường Chinh, Võ Thị Sáu, Quận 3, HCMC</Text>
            <View style={styles.timeContainer}>
              <Text color={colors.primary600}>{t('home.comingSoons.availableOn')}</Text>
              <View style={styles.time}>
                <Text color={'white'}>July 2024</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  container: { overflow: 'hidden', borderRadius: 10, marginVertical: 16 },
  backgroundImage: {
    width: Dimensions.get('window').width - 24,
    alignItems: 'flex-end',
    flexDirection: 'row',
    aspectRatio: 1.8,
    padding: 12,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 2,
    borderRadius: 4,
  },
}));
