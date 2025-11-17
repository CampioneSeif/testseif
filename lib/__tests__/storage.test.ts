import { storage } from '../storage';


describe('storage utility', () => {
  beforeEach(() => {
    // Clear any stored data before each test
    jest.clearAllMocks();
  });

  describe('getItem', () => {
    it('should return null when item does not exist', async () => {
      const result = await storage.getItem('nonexistent-key');
      expect(result).toBeNull();
    });

    it('should return stored value', async () => {
      await storage.setItem('test-key', 'test-value');
      const result = await storage.getItem('test-key');
      expect(result).toBe('test-value');
    });
  });

  describe('setItem', () => {
    it('should store a value', async () => {
      await storage.setItem('key1', 'value1');
      const result = await storage.getItem('key1');
      expect(result).toBe('value1');
    });

    it('should overwrite existing value', async () => {
      await storage.setItem('key2', 'old-value');
      await storage.setItem('key2', 'new-value');
      const result = await storage.getItem('key2');
      expect(result).toBe('new-value');
    });
  });

  describe('removeItem', () => {
    it('should remove stored item', async () => {
      await storage.setItem('key3', 'value3');
      await storage.removeItem('key3');
      const result = await storage.getItem('key3');
      expect(result).toBeNull();
    });

    it('should not throw error when removing non-existent item', async () => {
      await expect(storage.removeItem('non-existent')).resolves.not.toThrow();
    });
  });

  describe('multiple operations', () => {
    it('should handle multiple keys independently', async () => {
      await storage.setItem('key-a', 'value-a');
      await storage.setItem('key-b', 'value-b');
      await storage.setItem('key-c', 'value-c');

      expect(await storage.getItem('key-a')).toBe('value-a');
      expect(await storage.getItem('key-b')).toBe('value-b');
      expect(await storage.getItem('key-c')).toBe('value-c');

      await storage.removeItem('key-b');

      expect(await storage.getItem('key-a')).toBe('value-a');
      expect(await storage.getItem('key-b')).toBeNull();
      expect(await storage.getItem('key-c')).toBe('value-c');
    });
  });
});
