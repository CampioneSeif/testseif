import React from 'react';
import { StyleSheet, Modal, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { View, Text, Avatar } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';
import DrawerSvg from '@/assets/svgs/background/DrawerSvg';

const { width: screenWidth } = Dimensions.get('window');
const DRAWER_WIDTH = screenWidth * 0.8;

interface CustomDrawerProps {
  visible: boolean;
  onClose: () => void;
  userName?: string;
  userPhone?: string;
  userAvatar?: string;
  onLogout: () => void;
}

export default function CustomDrawer({
  visible,
  onClose,
  userName = 'Utilisateur',
  userPhone = '+216 XX XXX XXX',
  userAvatar,
  onLogout,
}: CustomDrawerProps) {
  const slideAnim = React.useRef(new Animated.Value(-DRAWER_WIDTH)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -DRAWER_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <View style={styles.overlay}>
        {/* Drawer */}
        <Animated.View
          style={[
            styles.drawer,
            {
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          {/* Background SVG - Fixed at top */}
          <View style={styles.svgContainer}>
            <DrawerSvg 
              width="90%" 
              height="35%" 
              viewBox="0 0 273 317"
              preserveAspectRatio="xMidYMid slice" 
            />
          </View>

          {/* Drawer content wrapper */}
          <View style={styles.drawerContent}>
            {/* Header */}
            <View style={styles.header}>
              {/* Close button */}
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Feather name="x" size={24} color={Colors.white} />
              </TouchableOpacity>

              {/* User info */}
              <View style={styles.userInfo}>
                <Avatar
                  source={userAvatar ? { uri: userAvatar } : undefined}
                  label={userName.charAt(0).toUpperCase()}
                  size={60}
                  backgroundColor={Colors.white}
                  labelColor={Colors.primary}
                  containerStyle={styles.avatar}
                />
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>{userName}</Text>
                  <Text style={styles.userPhone}>{userPhone}</Text>
                </View>
              </View>
            </View>

            {/* Content - Empty for now */}
            <View style={styles.content}>
              {/* This area can be filled with menu items later */}
            </View>

            {/* Footer with logout */}
            <View style={styles.footer}>
              <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
                <Feather name="log-out" size={20} color={Colors.white} />
                <Text style={styles.logoutText}>Se déconnecter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        {/* Backdrop */}
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000052',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: DRAWER_WIDTH,
  },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: DRAWER_WIDTH,
    height: '100%',
    backgroundColor: Colors.primary,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  svgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  drawerContent: {
    flex: 1,
    zIndex: 10,
    paddingTop: Spacings.s10,
    position: 'relative',
  },
  header: {
    paddingVertical: Spacings.s6,
    paddingHorizontal: Spacings.s4,
  },
  closeButton: {
    borderWidth: 1,
    backgroundColor: "#FFFFFF30",
    borderColor: "#FFFFFF82",
    borderRadius: Spacings.s2,
    position: 'absolute',
    top: Spacings.s2,
    right: Spacings.s4,
    padding: Spacings.s2,
    zIndex: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacings.s4,
    marginLeft: Spacings.s4,
  },
  avatar: {
    marginRight: Spacings.s3,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    ...Typography.h4,
    color: Colors.white,
    fontWeight: '600',
    marginBottom: Spacings.s1,
  },
  userPhone: {
    ...Typography.body2,
    color: Colors.white,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacings.s4,
    paddingVertical: Spacings.s6,
  },
  footer: {
    paddingHorizontal: Spacings.s4,
    paddingVertical: Spacings.s6,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacings.s3,
    paddingHorizontal: Spacings.s4,
    borderRadius: 8,
  },
  logoutText: {
    ...Typography.body1,
    color: Colors.white,
    marginLeft: Spacings.s3,
    fontWeight: '500',
  },
});