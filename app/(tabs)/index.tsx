import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import { useAppSelector } from '@/hooks/HookRedux';
import HomeHeader from '@/components/common/HomeHeader';
import CustomDrawer from '@/components/common/CustomDrawer';
import CategoryCard from '@/components/home/CategoryCard';
import PromoCard from '@/components/home/PromoCard';
import PromoBottomSheet from '@/components/promo/PromoBottomSheet';
import { useHomeData } from '@/hooks/useHomeData';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_PADDING = 2; // Spacings.s2
const HORIZONTAL_PADDING = 2; // Spacings.s2 on each side
const CARD_WIDTH = (SCREEN_WIDTH - (HORIZONTAL_PADDING * 2) - (CARD_PADDING * 4)) / 2;

export default function HomeScreen() {
  const { user } = useAppSelector((state) => state.auth);
  const {
    // Data
    categories,
    promos,
    searchQuery,
    selectedCategoryCode,
    
    // Loading states
    isLoadingPromos,
    isFetchingNextPage,
    
    // Promo bottom sheet state
    selectedPromo,
    bottomSheetVisible,
    
    // Drawer state
    drawerVisible,
    
    // Handlers
    handleCategoryPress,
    handleSearchPress,
    handleFilterPress,
    handleSearchChange,
    handlePromoPress,
    handleCloseBottomSheet,
    handleSubscribeToPromo,
    handleMenuPress,
    handleDrawerClose,
    handleLogout,
    handleNotificationPress,
    handleLoadMore,
  } = useHomeData();

  return (
    <View style={styles.container}>
      {/* Custom Home Header */}
      <HomeHeader
        userName={user?.full_name || 'Utilisateur'}
        onMenuPress={handleMenuPress}
        onNotificationPress={handleNotificationPress}
        onSearchPress={handleSearchPress}
        onFilterPress={handleFilterPress}
        onSearchChange={handleSearchChange}
        searchValue={searchQuery}
      />

      {/* FlatList with Infinite Scroll */}
      <FlatList
        data={promos}
        renderItem={({ item }) => (
          <View style={styles.promoWrapper}>
            <PromoCard item={item} onPress={handlePromoPress} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.promosRow}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            {/* Categories Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Nos catégories</Text>
              </View>
              <FlatList
                data={categories}
                renderItem={({ item }) => (
                  <CategoryCard 
                    item={item} 
                    isSelected={item.code === selectedCategoryCode}
                    onPress={handleCategoryPress} 
                  />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesList}
              />
            </View>

            {/* Promos Section Header */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Tous les promos</Text>
              </View>
            </View>
          </>
        }
        ListFooterComponent={
          isFetchingNextPage ? (
            <View style={styles.loadingFooter}>
              <ActivityIndicator size="large" color={Colors.primary} />
            </View>
          ) : null
        }
        ListEmptyComponent={
          isLoadingPromos ? (
            <View style={styles.emptyContainer}>
              <ActivityIndicator size="large" color={Colors.primary} />
            </View>
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Aucune promotion disponible</Text>
            </View>
          )
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />

      {/* Promo Bottom Sheet */}
      <PromoBottomSheet
        visible={bottomSheetVisible}
        promo={selectedPromo}
        onClose={handleCloseBottomSheet}
        onSubscribe={handleSubscribeToPromo}
      />

      {/* Custom Drawer */}
      <CustomDrawer
        visible={drawerVisible}
        onClose={handleDrawerClose}
        userName={user?.full_name || 'Utilisateur'}
        userPhone={user?.phone || '+216 XX XXX XXX'}
        onLogout={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    paddingBottom: Spacings.s4,
  },
  section: {
    marginTop: Spacings.s6,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacings.s4,
    marginBottom: Spacings.s4,
  },
  sectionTitle: {
    ...Typography.h4,
    color: Colors.textPrimary,
  },
  categoriesList: {
    paddingHorizontal: Spacings.s4,
  },
  promosRow: {
    paddingHorizontal: Spacings.s2,
  },
  promoWrapper: {
    width: CARD_WIDTH,
    padding: Spacings.s2,
  },
  loadingFooter: {
    paddingVertical: Spacings.s4,
    alignItems: 'center',
  },
  emptyContainer: {
    paddingVertical: Spacings.s8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    ...Typography.body1,
    color: Colors.textSecondary,
  },
});
