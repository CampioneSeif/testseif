import { Promo } from "@/types/promotion";
import { PromotionApiItem } from "@/types/api";

// Helper function to transform API data to Promo format
export const transformPromotionToPromo = (item: PromotionApiItem): Promo => {
  const savings = item.discount_value;
  const discountPercentage = ((savings / item.base_price) * 100).toFixed(0);
  
  return {
    id: item.promotion_product,
    name: item.product_name,
    discount: `-${discountPercentage}%`,
    image:item.image_url,
    brandLogo:item.brand_logo,
    basePrice: item.base_price,
    discountedPrice: item.discounted_price,
    savings: savings,
    promotionId: item.promotion_product,
    productId: item.product_id,
    description: item.description,
  };
};
