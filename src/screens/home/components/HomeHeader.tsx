import { makeStyles } from '@rneui/themed';
import { SelectablePills, Text } from 'common/components';
import { colors } from 'common/theme';
import { t } from 'i18next';
import { useState } from 'react';
import { View } from 'react-native';
import { ComingSoon } from './ComingSoon';

const DISTRICT = [
  {
    key: 'quan1',
    label: t('home.districts.district_1'),
  },
  {
    key: 'quan2',
    label: t('home.districts.district_2'),
  },
  {
    key: 'quan3',
    label: t('home.districts.district_3'),
  },
  {
    key: 'quan4',
    label: t('home.districts.district_4'),
  },
  {
    key: 'quan5',
    label: t('home.districts.district_5'),
  },
  {
    key: 'quan6',
    label: t('home.districts.district_6'),
  },
  {
    key: 'quan7',
    label: t('home.districts.district_7'),
  },
  {
    key: 'quan8',
    label: t('home.districts.district_8'),
  },
  {
    key: 'quan9',
    label: t('home.districts.district_9'),
  },
];
export const HomeHeader = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>(DISTRICT[0].key);
  const styles = useStyles();
  const handleSelectDistrict = (value: string) => {
    if (selectedDistrict !== value) {
      setSelectedDistrict(value);
    }
  };

  return (
    <>
      <View style={styles.placeContainer}>
        <ComingSoon />
        <Text variant='headerLarge' style={styles.placeText}>
          {t('home.whenIn')}
          <Text
            variant='headerLarge'
            style={[styles.placeText, { color: colors.primary700, textDecorationLine: 'underline' }]}
          >
            Hồ Chí Minh
          </Text>
        </Text>
      </View>
      <View style={styles.districtContainer}>
        <SelectablePills
          allowDeselect={false}
          onChange={handleSelectDistrict}
          value={selectedDistrict}
          items={DISTRICT}
        />
      </View>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  placeContainer: {
    marginTop: 20,
    marginVertical: 8,
  },
  placeText: {
    fontWeight: 'bold',
  },
  districtContainer: {
    marginVertical: 8,
  },
}));
