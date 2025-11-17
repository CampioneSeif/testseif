import { StyleSheet, ScrollView } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Header from '@/components/common/Header';
import { useAppSelector } from '@/hooks/HookRedux';

export default function ShopScreen() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      <Header title="Mon Profil" />
      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.full_name?.charAt(0).toUpperCase() || 'U'}
            </Text>
          </View>
          <Text style={styles.userName}>
            {user?.full_name || 'Utilisateur'}
          </Text>
          <Text style={styles.userEmail}>
            {user?.email || 'email@example.com'}
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
  profileSection: {
    alignItems: 'center',
    paddingTop: Spacings.s10,
    paddingHorizontal: Spacings.s4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 40,
    fontWeight: '700',
    color: Colors.white,
  },
  userName: {
    ...Typography.h4,
    color: Colors.textPrimary,
    marginTop: Spacings.s4,
  },
  userEmail: {
    ...Typography.body2,
    color: Colors.textSecondary,
    marginTop: Spacings.s2,
  },
});
