import { PromoSubscriptionFormData } from '@/validations/promotion/validationSchemas';

export type DraftStatus = 'draft' | 'pending' | 'approved' | 'rejected' | 'expired';

export interface PromoDraft {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: DraftStatus;
  // Promo params
  promoName: string;
  promoPrice: string;
  promoDiscount: string;
  promoImage: string;
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  brandLogo: string | undefined;
  promotionId: string;
  // Form data
  formData: PromoSubscriptionFormData;
}

export interface CreateDraftInput extends Omit<PromoDraft, 'id' | 'createdAt' | 'updatedAt'> {
  id?: string;
}

export interface UpdateDraftStatusInput {
  id: string;
  status: DraftStatus;
}
