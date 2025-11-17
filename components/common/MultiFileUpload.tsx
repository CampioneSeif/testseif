import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';
import * as DocumentPicker from 'expo-document-picker';

interface FileInfo {
  uri: string;
  name: string;
  mimeType: string;
}

interface MultiFileUploadProps {
  label: string;
  files: FileInfo[];
  onChange: (files: FileInfo[]) => void;
  error?: string;
  touched?: boolean;
  maxFiles?: number;
}

const MultiFileUpload: React.FC<MultiFileUploadProps> = ({
  label,
  files,
  onChange,
  error,
  touched,
  maxFiles = 5,
}) => {
  const handlePickDocument = async () => {
    if (files.length >= maxFiles) {
      return;
    }

    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/*'],
        copyToCacheDirectory: true,
        multiple: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const newFiles = result.assets.map((file) => ({
          uri: file.uri,
          name: file.name,
          mimeType: file.mimeType || 'application/pdf',
        }));

        const remainingSlots = maxFiles - files.length;
        const filesToAdd = newFiles.slice(0, remainingSlots);
        onChange([...files, ...filesToAdd]);
      }
    } catch (error) {
      console.error('Error picking document:', error);
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    onChange(updatedFiles);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label} ({files.length}/{maxFiles})
      </Text>

      {/* Upload Button */}
      {files.length < maxFiles && (
        <TouchableOpacity
          style={[styles.uploadButton, error && touched && styles.inputError]}
          onPress={handlePickDocument}
        >
          <Feather name="upload" size={20} color={Colors.textSecondary} />
          <Text style={styles.uploadText}>Télécharger des fichiers</Text>
        </TouchableOpacity>
      )}

      {/* Files List */}
      {files.length > 0 && (
        <ScrollView
          style={styles.filesList}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
        >
          {files.map((file, index) => (
            <View key={index} style={styles.fileItem}>
              <View style={styles.fileInfo}>
                <Feather name="file" size={18} color={Colors.textPrimary} />
                <Text style={styles.fileName} numberOfLines={1}>
                  {file.name}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleRemoveFile(index)}
                style={styles.removeButton}
              >
                <Feather name="x" size={18} color={Colors.error} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}

      {error && touched && <Text style={styles.errorText}>{error}</Text>}
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
  uploadButton: {
    height: 56,
    borderWidth: 1,
    borderColor: Colors.neutral300,
    borderRadius: 10,
    paddingHorizontal: Spacings.s4,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacings.s2,
    marginBottom: Spacings.s3,
  },
  inputError: {
    borderColor: Colors.error,
  },
  uploadText: {
    ...Typography.body1,
    color: Colors.textSecondary,
  },
  filesList: {
    maxHeight: 200,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.secondaryLightest,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: Spacings.s2,
    paddingVertical: Spacings.s3,
    paddingHorizontal: Spacings.s4,
    marginBottom: Spacings.s2,
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: Spacings.s2,
  },
  fileName: {
    ...Typography.body2,
    color: Colors.textPrimary,
    flex: 1,
  },
  removeButton: {
    padding: Spacings.s1,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
    marginTop: Spacings.s2,
  },
});

export default MultiFileUpload;
