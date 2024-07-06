import { StyleSheet, View, Text } from 'react-native';
import { Screen } from './Screen';
import { Button } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { colors } from 'common/theme';

export const ErrorScreen = ({ retry }: { retry?: () => void }) => {
  const { t } = useTranslation();
  return (
    <Screen>
      <View style={styles.container}>
        <Text>There are some error</Text>
        {retry ? (
          <Button
            onPress={retry}
            title={t('actions.retry')}
            titleStyle={styles.selectRoomButtonTitle}
            buttonStyle={styles.selectRoomButton}
          />
        ) : null}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectRoomButton: {
    backgroundColor: colors.primary700,
    borderRadius: 50,
    padding: 10,
  },
  selectRoomButtonTitle: {
    fontSize: 13,
    fontWeight: '600',
  },
});
