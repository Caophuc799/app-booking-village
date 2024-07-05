import { initialize as initializeI18n } from 'core/i18n';

import AppProviders from './AppProviders';
import ErrorBoundary from './ErrorBoundary';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import MainStack from 'screens/MainStack';

initializeI18n();

const App = () => (
  <AppProviders>
    <ErrorBoundary>
      <MainStack />
    </ErrorBoundary>
  </AppProviders>
);

export default App;
