import { storage } from '../storage';
import { SortableItem } from '@/types/api';

/**
 * Generic helper to get items from storage
 * @param key - Storage key
 * @returns Parsed items or empty array
 */
export const getItemsFromStorage = async <T>(key: string): Promise<T[]> => {
  try {
    const itemsJson = await storage.getItem(key);
    return itemsJson ? JSON.parse(itemsJson) : [];
  } catch (error) {
    console.error(`Error reading items from storage (key: ${key}):`, error);
    return [];
  }
};

/**
 * Generic helper to save items to storage
 * @param key - Storage key
 * @param items - Items to save
 */
export const saveItemsToStorage = async <T>(key: string, items: T[]): Promise<void> => {
  try {
    await storage.setItem(key, JSON.stringify(items));
  } catch (error) {
    console.error(`Error saving items to storage (key: ${key}):`, error);
    throw error;
  }
};

/**
 * Generic helper to get a single item from storage
 * @param key - Storage key
 * @returns Parsed item or null
 */
export const getItemFromStorage = async <T>(key: string): Promise<T | null> => {
  try {
    const itemJson = await storage.getItem(key);
    return itemJson ? JSON.parse(itemJson) : null;
  } catch (error) {
    console.error(`Error reading item from storage (key: ${key}):`, error);
    return null;
  }
};

/**
 * Generic helper to save a single item to storage
 * @param key - Storage key
 * @param item - Item to save
 */
export const saveItemToStorage = async <T>(key: string, item: T): Promise<void> => {
  try {
    await storage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error(`Error saving item to storage (key: ${key}):`, error);
    throw error;
  }
};

/**
 * Helper to remove an item from storage
 * @param key - Storage key
 */
export const removeItemFromStorage = async (key: string): Promise<void> => {
  try {
    await storage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item from storage (key: ${key}):`, error);
    throw error;
  }
};

// Pagination-specific helpers
interface PaginationMetadata {
  lastFetchedPage: number;
  totalPages: number;
  limit: number;
  lastUpdated: number;
}

/**
 * Get pagination metadata from storage
 */
export const getPaginationMetadata = async (key: string): Promise<PaginationMetadata | null> => {
  return getItemFromStorage<PaginationMetadata>(`${key}_pagination`);
};

/**
 * Save pagination metadata to storage
 */
export const savePaginationMetadata = async (key: string, metadata: PaginationMetadata): Promise<void> => {
  return saveItemToStorage(`${key}_pagination`, metadata);
};

/**
 * Merge new items with existing items in storage, avoiding duplicates
 * @param key - Storage key
 * @param newItems - New items to merge
 * @param getId - Function to get unique ID from item
 */
export const mergeItemsToStorage = async <T>(
  key: string, 
  newItems: T[], 
  getId: (item: T) => string
): Promise<T[]> => {
  try {
    const existingItems = await getItemsFromStorage<T>(key);
    
    // Create a map of existing items by ID for fast lookup
    const existingMap = new Map(existingItems.map(item => [getId(item), item]));
    
    // Add new items, replacing existing ones with same ID
    newItems.forEach(item => {
      existingMap.set(getId(item), item);
    });
    
    // Convert back to array and sort by updatedAt if available
    const mergedItems = Array.from(existingMap.values());
    
    // Sort by updatedAt if the items have this property
    const sortedItems = mergedItems.sort((a: T, b: T) => {
      const aItem = a as T & SortableItem;
      const bItem = b as T & SortableItem;
      if (aItem.updatedAt && bItem.updatedAt) {
        return new Date(bItem.updatedAt).getTime() - new Date(aItem.updatedAt).getTime();
      }
      return 0;
    });
    
    await saveItemsToStorage(key, sortedItems);
    return sortedItems;
  } catch (error) {
    console.error(`Error merging items to storage (key: ${key}):`, error);
    throw error;
  }
};
