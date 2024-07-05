import { ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@rneui/themed';
import { theme } from 'common/theme/theme';
import { NavigationContainer } from '@react-navigation/native';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const AppProviders = ({ children }: { children: ReactNode }) => (
  <SafeAreaProvider>
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  </SafeAreaProvider>
);

export default AppProviders;
