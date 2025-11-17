import { useState, useCallback } from 'react';
import { useFocusEffect, useRouter } from 'expo-router';
import { useGetAllMyPromotionsInfiniteQuery } from '@/services/PromotionApi';
import { useGetDraftsQuery } from '@/services/DraftApi';
import { PromoDraft } from '@/types/draft';

export type TabType = 'drafts' | 'transferred';

export const useMiddleScreen = () => {
  const router = useRouter();
  
  // State management
  const [activeTab, setActiveTab] = useState<TabType>('drafts');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
  const [showFilterSheet, setShowFilterSheet] = useState(false);

  // API queries
  const {
    data: drafts = [],
    isLoading: isDraftsLoading,
    refetch: refetchDrafts,
  } = useGetDraftsQuery();

  const {
    data: myPromosData,
    isLoading: isPromosLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch: refetchPromos,
  } = useGetAllMyPromotionsInfiniteQuery(
    { search: searchQuery, status: selectedStatus },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    }
  );

  // Refetch data when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      refetchDrafts();
      refetchPromos();
    }, [refetchDrafts, refetchPromos])
  );

  // Data processing
  const serverPromotions = myPromosData?.pages?.flatMap(page => page.data) || [];

  const filteredDrafts = drafts.filter((draft) => {
    const matchesSearch = !searchQuery || 
      draft.promoName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      draft.promoPrice.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  // Computed values
  const currentData = activeTab === 'drafts' ? filteredDrafts : serverPromotions;
  const isLoading = activeTab === 'drafts' ? isDraftsLoading : isPromosLoading;
  const refetchCurrent = activeTab === 'drafts' ? refetchDrafts : refetchPromos;

  // Handlers
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleStatusChange = (status: string | undefined) => {
    setSelectedStatus(status);
  };

  const handleFilterPress = () => {
    setShowFilterSheet(true);
  };

  const handleFilterClose = () => {
    setShowFilterSheet(false);
  };

  const handleEndReached = () => {
    if (activeTab === 'transferred' && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleItemPress = (item: PromoDraft) => {
    router.push({
      pathname: '/draftDetail',
      params: {
        draftId: item.id,
        source: activeTab,
        itemData: JSON.stringify(item),
      },
    });
  };

  return {
    // State
    activeTab,
    searchQuery,
    selectedStatus,
    showFilterSheet,
    
    // Data
    currentData,
    isLoading,
    isFetchingNextPage,
    
    // Handlers
    handleTabChange,
    handleSearchChange,
    handleStatusChange,
    handleFilterPress,
    handleFilterClose,
    handleEndReached,
    handleItemPress,
    refetchCurrent,
  };
};
