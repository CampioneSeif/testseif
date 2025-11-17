// Random emoji images for products
export const RANDOM_IMAGES = ['📱', '💻', '🎧', '⌚', '📷', '🎮', '🖥️', '⌨️', '🖱️', '🎯'];

export interface Promo {
  id: string;
  name: string;
  discount: string;
  savings: number;
  image: string;
  brandLogo: string;
  description: string;
  // Additional fields from API
  basePrice?: number;
  discountedPrice?: number;
  promotionId?: string;
  productId?: string;
}

export interface PromotionItem {
  promotion_id: string;
  promotion_code: string;
  title: string;
  discount_value: number;
  discounted_price: number;
  quantity: number;
  start_date: string;
  end_date: string;
  description: string;
  product_id: string;
  product_name: string;
  sku: string;
  base_price: number;
  brand_logo: string | null;
}

export interface PromotionsResponse {
  data: PromotionItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PromotionsQueryParams {
  search?: string;
  category_code?: string;
}