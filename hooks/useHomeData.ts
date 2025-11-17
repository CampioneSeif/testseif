import { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'expo-router';
import { useGetDraftsQuery } from '@/services/DraftApi';
import { useGetShopCategoriesQuery } from '@/services/CategoryApi';
import { useGetAllPromotionsInfiniteQuery } from '@/services/PromotionApi';
import { Promo } from '@/types/promotion';
import { transformPromotionToPromo } from '@/lib/helpers/ApiDataPromoTransform';
import { Category } from '@/types/categorie';
import { PromoDraft } from '@/types/draft';
import { useAppDispatch } from './HookRedux';
import { logout } from '@/lib/slices/authSlice';


export function useHomeData() {
  const router = useRouter();
  
  // Fetch local drafts from storage
  const { data: drafts = [] } = useGetDraftsQuery();
  
  // Fetch categories from API
  const { data: categoriesData, isLoading: isLoadingCategories } = useGetShopCategoriesQuery();

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryCode, setSelectedCategoryCode] = useState<string | undefined>(undefined);
  const dispatch = useAppDispatch();
  // Fetch promotions from API with infinite query
  const { 
    data: promotionsData, 
    isLoading: isLoadingPromos, 
    error: promosError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetAllPromotionsInfiniteQuery({ 
    search: searchQuery,
    category_code: selectedCategoryCode,
  });
  
  // Transform and flatten all pages of API data to Promo format
  const promos = useMemo(() => {
    if (!promotionsData?.pages) return [];
    return promotionsData.pages.flatMap(page => 
      page.data.map(transformPromotionToPromo)
    );
  }, [promotionsData]);
  
  // Get pagination info from last page
  const lastPage = promotionsData?.pages[promotionsData.pages.length - 1];
  
  // Get categories from API
  const categories = useMemo(() => {
    return categoriesData || [];
  }, [categoriesData]);
  
  // Promo bottom sheet state
  const [selectedPromo, setSelectedPromo] = useState<Promo | null>(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  
  // Drawer state
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Category handlers
  const handleCategoryPress = useCallback((category: Category) => {
    console.log('Category pressed:', category.name, 'Code:', category.code);
    // Toggle category selection - deselect if same category is pressed again
    setSelectedCategoryCode(prevCode => 
      prevCode === category.code ? undefined : category.code
    );
  }, []);

  // Search handlers
  const handleSearchPress = useCallback(() => {
    console.log('Search pressed');
    // TODO: Navigate to search screen or show search modal
  }, []);

  const handleFilterPress = useCallback(() => {
    console.log('Filter pressed');
    // TODO: Show filter modal
  }, []);

  const handleSearchChange = useCallback((text: string) => {
    setSearchQuery(text);
    // TODO: Implement search logic
  }, []);

  // Promo handlers
  const handlePromoPress = useCallback((promo: Promo) => {
    setSelectedPromo(promo);
    setBottomSheetVisible(true);
  }, []);

  const handleCloseBottomSheet = useCallback(() => {
    setBottomSheetVisible(false);
  }, []);

  const handleSubscribeToPromo = useCallback((promo: Promo) => {
    setBottomSheetVisible(false);
    console.log("promo.promotionId", promo.promotionId);
    console.log("drafts", drafts);
    
    // Check if a draft exists for this promo (matching by promotionId)
    const existingDraft = drafts.find(
      (draft: PromoDraft) => draft.promotionId === promo.promotionId && 
      ['draft', 'pending', 'accepted'].includes(draft.status)
    );
    
    if (existingDraft) {
      // Navigate to draft detail screen if draft exists
      router.push({
        pathname: '/draftDetail',
        params: {
          draftId: existingDraft.id,
        },
      });
    } else {
      // Navigate to confirmation screen for new promo
      router.push({
        pathname: '/promoConfirmation',
        params: {
          name: promo.name,
          basePrice: promo.basePrice,
          discountedPrice: promo.discountedPrice,
          savings: promo.savings,
          discount: promo.discount,
          image: promo.image,
          brandLogo: promo.brandLogo,
          productId: promo.productId,
          promotionId: promo.promotionId,
        },
      });
    }
  }, [router, drafts]);

  // Menu handlers
  const handleMenuPress = useCallback(() => {
    setDrawerVisible(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setDrawerVisible(false);
  }, []);

  const handleLogout = useCallback(() => {
    setDrawerVisible(false);
    dispatch(logout());
    // TODO: Implement logout logic
    console.log('Logout pressed');
  }, []);

  const handleNotificationPress = useCallback(() => {
    console.log('Notification pressed');
    // TODO: Navigate to notifications screen
  }, []);

  // Pagination handlers
  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleRefresh = useCallback(() => {
    // Refresh will be handled by refetch from the query
    // You can add refetch here if needed
  }, []);

  return {
    // Data
    categories,
    promos,
    searchQuery,
    selectedCategoryCode,
    
    // Loading states
    isLoadingPromos,
    isLoadingCategories,
    promosError,
    isFetchingNextPage,
    
    // Pagination data
    currentPage: lastPage?.page || 1,
    totalPages: lastPage?.totalPages || 0,
    hasMore: hasNextPage || false,
    
    // Promo bottom sheet state
    selectedPromo,
    bottomSheetVisible,
    
    // Drawer state
    drawerVisible,
    
    // Category handlers
    handleCategoryPress,
    
    // Search handlers
    handleSearchPress,
    handleFilterPress,
    handleSearchChange,
    
    // Promo handlers
    handlePromoPress,
    handleCloseBottomSheet,
    handleSubscribeToPromo,
    
    // Pagination handlers
    handleLoadMore,
    handleRefresh,
    
    // Menu handlers
    handleMenuPress,
    handleDrawerClose,
    handleLogout,
    handleNotificationPress,
  };
}
