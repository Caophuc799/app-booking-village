import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Screen } from './Screen';

export const LoadingScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <ActivityIndicator />
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
});
