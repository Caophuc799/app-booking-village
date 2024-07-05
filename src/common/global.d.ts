declare module 'react-native-config' {
  interface Env {
    ENVIRONMENT: 'test' | 'uat' | 'prod';
  }

  const BuildConfig: Env;

  export default BuildConfig;
}
