import { StyleSheet, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Header from '@/components/common/Header';
import { useOrders } from '@/hooks/useOrders';
import { useRouter } from 'expo-router';
import { Order } from '@/types/order';
import Feather from '@expo/vector-icons/Feather';
import { OrderCard, OrderFilterBottomSheet } from '@/components/orders';
import SearchBar from '@/components/common/SearchBar';
import { useState, useCallback } from 'react';

export default function OrdersScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
  const [showFilterSheet, setShowFilterSheet] = useState<boolean>(false);

  const { 
    orders, 
    isLoading, 
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch 
  } = useOrders({ search: searchQuery, status: selectedStatus });

  const handleOrderPress = (orderId: string) => {
    router.push({
      pathname: '/orderDetail',
      params: { orderId },
    });
  };

  const renderOrderItem = ({ item }: { item: Order }) => (
    <OrderCard order={item} onPress={handleOrderPress} />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Feather name="shopping-bag" size={64} color={Colors.neutral300} />
      <Text style={styles.emptyTitle}>Aucune commande</Text>
      <Text style={styles.emptySubtitle}>
        Vos commandes apparaîtront ici
      </Text>
    </View>
  );

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color={Colors.primary} />
      </View>
    );
  };

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleSearchChange = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const handleStatusChange = useCallback((status: string | undefined) => {
    setSelectedStatus(status);
  }, []);

  const handleFilterPress = useCallback(() => {
    setShowFilterSheet(true);
  }, []);

  const handleFilterClose = useCallback(() => {
    setShowFilterSheet(false);
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Mes Commandes" backgroundColor={Colors.primary} />
      
      {/* Search Bar */}
      <SearchBar
        placeholder="Rechercher des commandes..."
        value={searchQuery}
        onChangeText={handleSearchChange}
        onFilterPress={handleFilterPress}
        style={{ marginTop: Spacings.s3, marginHorizontal: Spacings.s5 }}
      />
      
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          orders.length === 0 && styles.emptyListContent,
        ]}
        ListEmptyComponent={!isLoading ? renderEmptyState : null}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={isFetching && !isFetchingNextPage}
            onRefresh={refetch}
            tintColor={Colors.primary}
          />
        }
      />
      
      {/* Filter Bottom Sheet */}
      <OrderFilterBottomSheet
        visible={showFilterSheet}
        onClose={handleFilterClose}
        selectedStatus={selectedStatus}
        onStatusChange={handleStatusChange}
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
    padding: Spacings.s5,
  },
  emptyListContent: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacings.s10,
  },
  emptyTitle: {
    ...Typography.h5,
    color: Colors.textPrimary,
    marginTop: Spacings.s4,
    marginBottom: Spacings.s2,
  },
  emptySubtitle: {
    ...Typography.body2,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  footer: {
    paddingVertical: Spacings.s4,
    alignItems: 'center',
  },
});
