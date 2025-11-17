import { StyleSheet, ScrollView } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Header from '@/components/common/Header';

export default function PanierScreen() {
  return (
    <View style={styles.container}>
      <Header title="Mon Panier" />
      <ScrollView style={styles.content}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Panier vide</Text>
          <Text style={styles.emptyText}>
            Votre panier est vide pour le moment
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyTitle: {
    ...Typography.h3,
    color: Colors.textPrimary,
  },
  emptyText: {
    ...Typography.body1,
    color: Colors.textSecondary,
    marginTop: Spacings.s2,
  },
});
