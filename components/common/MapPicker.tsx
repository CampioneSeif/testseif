import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';
import MapView, { Marker, PROVIDER_DEFAULT, UrlTile, MapPressEvent } from 'react-native-maps';

interface MapPickerProps {
  label: string;
  value?: string;
  onChange: (address: string) => void;
  error?: string;
  touched?: boolean;
}

const MapPicker: React.FC<MapPickerProps> = ({ label, value, onChange, error, touched }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCoordinates, setSelectedCoordinates] = useState({
    latitude: 36.8065,
    longitude: 10.1815,
  });

  const handleMapPress = (event: MapPressEvent) => {
    setSelectedCoordinates(event.nativeEvent.coordinate);
  };

  const handleConfirm = () => {
    // Format coordinates as address (you can add reverse geocoding here)
    const address = `${selectedCoordinates.latitude.toFixed(4)}, ${selectedCoordinates.longitude.toFixed(4)}`;
    onChange(address);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[styles.input, error && touched && styles.inputError]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[styles.text, !value && styles.placeholder]}>
          {value || 'Sélectionner une adresse'}
        </Text>
        <Feather name="map-pin" size={20} color={Colors.textSecondary} style={styles.icon} />
      </TouchableOpacity>
      {error && touched && <Text style={styles.errorText}>{error}</Text>}

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Feather name="x" size={24} color={Colors.white} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{label}</Text>
            <TouchableOpacity onPress={handleConfirm}>
              <Feather name="check" size={24} color={Colors.secondary} />
            </TouchableOpacity>
          </View>

          <MapView
            style={styles.map}
            provider={PROVIDER_DEFAULT}
            initialRegion={{
              latitude: selectedCoordinates.latitude,
              longitude: selectedCoordinates.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={handleMapPress}
          >
            {/* Using Stamen Terrain tiles - free alternative to OSM */}
            <UrlTile
              urlTemplate="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png"
              maximumZ={19}
              flipY={false}
            />
            <Marker
              coordinate={selectedCoordinates}
              title="Emplacement sélectionné"
              pinColor={Colors.primary}
            />
          </MapView>

          <View style={styles.footer}>
            <View style={styles.attributionContainer}>
              <Text style={styles.attribution}>
                © OpenStreetMap contributors
              </Text>
            </View>
            <Text style={styles.footerText}>
              Appuyez sur la carte pour sélectionner un emplacement
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacings.s4,
  },
  label: {
    ...Typography.body2,
    marginBottom: Spacings.s2,
    color: Colors.textPrimary,
  },
  input: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: Colors.neutral300,
    borderRadius: 10,
    paddingHorizontal: Spacings.s4,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputError: {
    borderColor: Colors.error,
  },
  icon: {
    marginRight: Spacings.s3,
  },
  text: {
    ...Typography.body1,
    color: Colors.textPrimary,
    flex: 1,
  },
  placeholder: {
    color: Colors.textSecondary,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
    marginTop: Spacings.s2,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacings.s5,
    backgroundColor: Colors.primary,
  },
  modalTitle: {
    ...Typography.h3,
    color: Colors.white,
  },
  map: {
    flex: 1,
  },
  footer: {
    padding: Spacings.s5,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral300,
  },
  attributionContainer: {
    marginBottom: Spacings.s3,
    alignItems: 'center',
  },
  attribution: {
    ...Typography.caption,
    color: Colors.textSecondary,
    fontSize: 10,
  },
  footerText: {
    ...Typography.body2,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});

export default MapPicker;
