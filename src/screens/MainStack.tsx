import { createStackNavigator } from '@react-navigation/stack';

import { MainStackParamList } from './MainStack.types';
import HomeScreen from './home/HomeScreen';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => (
  <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='home' component={HomeScreen} />
  </Stack.Navigator>
);

export default MainStack;
