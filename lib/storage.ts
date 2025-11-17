// Storage utility for React Native

interface AsyncStorageStatic {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

let AsyncStorage: AsyncStorageStatic | null = null;

// Try to import AsyncStorage if available
try {
  AsyncStorage = require('@react-native-async-storage/async-storage').default;
} catch (e) {
  console.warn(`AsyncStorage not available, using in-memory fallback : ${e}`);
}

// In-memory fallback for development
const memoryStorage: Record<string, string> = {};

export const storage = {
  async getItem(key: string): Promise<string | null> {
    if (AsyncStorage) {
      return await AsyncStorage.getItem(key);
    }
    return memoryStorage[key] || null;
  },

  async setItem(key: string, value: string): Promise<void> {
    if (AsyncStorage) {
      await AsyncStorage.setItem(key, value);
    } else {
      memoryStorage[key] = value;
    }
  },

  async removeItem(key: string): Promise<void> {
    if (AsyncStorage) {
      await AsyncStorage.removeItem(key);
    } else {
      delete memoryStorage[key];
    }
  },
};
