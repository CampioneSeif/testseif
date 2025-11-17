// Jest setup file
// Note: @testing-library/jest-native is deprecated
// Built-in matchers are now available in @testing-library/react-native v12.4+

// Define global __DEV__ for React Native
global.__DEV__ = true;

// Mock React Native bridge
global.__fbBatchedBridgeConfig = {
  remoteModuleConfig: [],
  localModulesConfig: [],
};

// Mock expo-router
jest.mock('expo-router', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  })),
  useLocalSearchParams: jest.fn(() => ({})),
  usePathname: jest.fn(() => '/'),
  Stack: {
    Screen: 'Screen',
  },
  Tabs: {
    Screen: 'Screen',
  },
  Link: 'Link',
}));

// Mock expo modules
jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn(() => true),
}));

jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

jest.mock('expo-status-bar', () => ({
  StatusBar: 'StatusBar',
}));

// Mock AsyncStorage with in-memory implementation
const mockStorage = {};
jest.mock('@react-native-async-storage/async-storage', () => ({
  default: {
    getItem: jest.fn((key) => Promise.resolve(mockStorage[key] || null)),
    setItem: jest.fn((key, value) => {
      mockStorage[key] = value;
      return Promise.resolve();
    }),
    removeItem: jest.fn((key) => {
      delete mockStorage[key];
      return Promise.resolve();
    }),
    clear: jest.fn(() => {
      Object.keys(mockStorage).forEach(key => delete mockStorage[key]);
      return Promise.resolve();
    }),
  },
}));

// Mock react-native-ui-lib
jest.mock('react-native-ui-lib', () => ({
  Colors: {
    error: '#FF0000',
    errorLightest: '#FFE5E5',
    success: '#00FF00',
    successLightest: '#E5FFE5',
    successDark: '#008000',
    warning: '#FFA500',
    warningLightest: '#FFF5E5',
    warningDark: '#FF8C00',
    info: '#0000FF',
    infoLightest: '#E5E5FF',
    infoDark: '#000080',
  },
  Spacings: {
    s1: 4,
    s2: 8,
    s3: 12,
    s4: 16,
    s5: 20,
  },
  Typography: {
    body1: { fontSize: 16 },
    body2: { fontSize: 14 },
  },
}));

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons/Feather', () => 'Feather');

// Mock react-native-svg
jest.mock('react-native-svg', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: (props) => React.createElement('Svg', props),
    Svg: (props) => React.createElement('Svg', props),
    Path: (props) => React.createElement('Path', props),
    Circle: (props) => React.createElement('Circle', props),
    Rect: (props) => React.createElement('Rect', props),
    G: (props) => React.createElement('G', props),
  };
});

// Silence console warnings in tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};
