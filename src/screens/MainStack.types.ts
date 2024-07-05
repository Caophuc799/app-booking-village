import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainStackParamList = {
  home: undefined;
};

export type MainScreenProps<T extends keyof MainStackParamList> = StackScreenProps<MainStackParamList, T>;
