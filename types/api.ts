// API-related types for better type safety

export interface FileUpload {
  uri: string;
  name: string;
  mimeType: string;
  size?: number;
}

export interface ApiError {
  status: string | number;
  data?: {
    message?: string;
    error?: string;
  };
  error?: string;
}

export interface RTKQueryError {
  data?: {
    message?: string;
    error?: string;
  };
  status?: string | number;
  error?: string;
}

export interface ShopSubscriptionItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: 'pending' | 'approved' | 'rejected' | 'expired';
  promoName: string;
  promoPrice: string;
  promoDiscount: string;
  promoImage: string;
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  brandLogo?: string;
  promotionId: string;
  formData: {
    dateStock: string;
    quantite: number;
    conditionnement: string;
    files: FileUpload[];
  };
}

export interface ShopSubscriptionsResponse {
  data: ShopSubscriptionItem[];
  page: number;
  totalPages: number;
  limit: number;
  hasMore: boolean;
  pagination?: {
    page: number;
    totalPages: number;
  };
}

export interface PromotionApiItem {
  promotion_product: string;
  product_name: string;
  discount_value: number;
  base_price: number;
  discounted_price: number;
  image_url: string;
  brand_logo: string;
  product_id: string;
  description: string;
}

export interface SortableItem {
  updatedAt?: string;
}

export interface RawServerItem {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  status?: 'pending' | 'approved' | 'rejected' | 'expired';
  promoName?: string;
  promoPrice?: string | number;
  promoDiscount?: string | number;
  promoImage?: string;
  originalPrice?: string | number;
  discountedPrice?: string | number;
  savings?: string | number;
  brandLogo?: string;
  promotionId?: string;
  formData?: {
    dateStock?: string;
    quantite?: number;
    conditionnement?: string;
    files?: FileUpload[];
  };
}
