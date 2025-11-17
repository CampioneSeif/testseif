import { StyleSheet, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Header from '@/components/common/Header';
import { PromoDraft } from '@/types/draft';
import Feather from '@expo/vector-icons/Feather';
import { DraftCard, FilterBottomSheet } from '@/components/promoScreen';
import SearchBar from '@/components/common/SearchBar';
import { useMiddleScreen, TabType } from '@/hooks/useMiddleScreen';

export default function MiddleScreen() {
  const {
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
  } = useMiddleScreen();

  const renderDraftItem = ({ item }: { item: PromoDraft }) => (
    <DraftCard
      draft={item}
      onPress={() => handleItemPress(item)}
    />
  );

  const renderEmptyState = (type: TabType) => (
    <View style={styles.emptyContainer}>
      <Feather name="inbox" size={48} color={Colors.gray} />
      <Text style={styles.emptyText}>
        {type === 'drafts' ? 'Aucun brouillon trouvé' : 'Aucune promotion transférée'}
      </Text>
      <Text style={styles.emptySubText}>
        {type === 'drafts' 
          ? 'Vos brouillons apparaîtront ici'
          : 'Vos promotions transférées apparaîtront ici'
        }
      </Text>
    </View>
  );


  const renderTabButton = (tab: TabType, label: string) => (
    <TouchableOpacity
      style={[
        styles.tabButton,
        activeTab === tab && styles.activeTabButton
      ]}
      onPress={() => handleTabChange(tab)}
    >
      <Text style={[
        styles.tabButtonText,
        activeTab === tab && styles.activeTabButtonText
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Mes Promotions" backgroundColor={Colors.primary} />
      
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {renderTabButton('drafts', 'Brouillons')}
        {renderTabButton('transferred', 'Transférées')}
      </View>
      {/* searchBar */}
      <SearchBar
        placeholder="Rechercher des promotions..."
        value={searchQuery}
        onChangeText={handleSearchChange}
        onFilterPress={handleFilterPress}
        style={{ marginTop: Spacings.s3 }}
      />
      <FlatList
        key={activeTab} // Force re-render when switching tabs
        data={currentData}
        renderItem={renderDraftItem}
        keyExtractor={(item) => `${activeTab}-${item.id}`} // Ensure unique keys across tabs
        contentContainerStyle={[
          styles.listContent,
          currentData.length === 0 && styles.emptyListContent,
        ]}
        ListEmptyComponent={!isLoading ? renderEmptyState(activeTab) : null}
        refreshControl={
          <RefreshControl
            refreshing={isLoading || isFetchingNextPage}
            onRefresh={refetchCurrent}
            tintColor={Colors.primary}
          />
        }
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true} // Optimize performance
        maxToRenderPerBatch={10} // Optimize rendering
        windowSize={10} // Optimize memory usage
      />
      
      {/* Filter Bottom Sheet */}
      <FilterBottomSheet
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingHorizontal: Spacings.s4,
    paddingTop: Spacings.s3,
    //borderBottomWidth: 1,
    //borderBottomColor: Colors.border,
  },
  tabButton: {
    flex: 1,
    paddingVertical: Spacings.s3,
    paddingHorizontal: Spacings.s4,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: Colors.primary,
  },
  tabButtonText: {
    ...Typography.button,
    //color: Colors.textSecondary,
  },
  activeTabButtonText: {
    color: Colors.primary,
    fontWeight: '600',
  },
  listContent: {
    padding: Spacings.s5,
  },
  emptyListContent: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacings.s10,
  },
  emptyText: {
    ...Typography.h5,
    color: Colors.textPrimary,
    marginTop: Spacings.s4,
    marginBottom: Spacings.s2,
  },
  emptySubText: {
    ...Typography.body2,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
