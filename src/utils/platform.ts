import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isIos = () => Platform.OS === 'ios';
export const isAndroid = () => Platform.OS === 'android';
export const { OS, Version } = Platform;

export const getAppVersion = DeviceInfo.getVersion;
export const getAppBuildNumber = DeviceInfo.getBuildNumber;
export const { getModel, getBrand, getSystemVersion, getBundleId, getDeviceId, getSystemName } = DeviceInfo;

export const hasNotch = DeviceInfo.hasNotch();
export const bundleId = DeviceInfo.getBundleId();
export const isSimulator = DeviceInfo.isEmulatorSync();

export const getUserAgent = () =>
  `${DeviceInfo.getApplicationName()}/${getAppVersion()} (${bundleId}; build: ${getAppBuildNumber()}; ${OS} ${DeviceInfo.getSystemVersion()}) RNFetch`;
