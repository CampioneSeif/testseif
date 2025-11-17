import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';
import * as DocumentPicker from 'expo-document-picker';

interface FileInfo {
  uri: string;
  name: string;
  mimeType: string;
}

interface FileUploadProps {
  label: string;
  fileName?: string;
  onChange: (fileInfo: FileInfo | string) => void;
  error?: string;
  touched?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, fileName, onChange, error, touched }) => {
  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/*'],
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        onChange({
          uri: file.uri,
          name: file.name,
          mimeType: file.mimeType || 'application/pdf',
        });
      }
    } catch (error) {
      console.error('Error picking document:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {!fileName ? (
        <TouchableOpacity
          style={[styles.input, error && touched && styles.inputError]}
          onPress={handlePickDocument}
        >
          <View style={styles.content}>
            <Text style={[styles.text, !fileName && styles.placeholder]}>
              Télécharger un fichier
            </Text>
          </View>
          <Feather name="upload" size={20} color={Colors.textSecondary} />
        </TouchableOpacity>
      ) : (
        <View style={[styles.fileBox]}>
          <View style={styles.fileInfo}>
            <Feather name="image" size={20} color={Colors.textPrimary} />
            <Text style={styles.fileName} numberOfLines={1}>
              {fileName}
            </Text>
          </View>

          <TouchableOpacity onPress={handlePickDocument}>
            <Text style={styles.replaceText}>Remplacer</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'space-between',
  },
  inputError: {
    borderColor: Colors.error,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacings.s3,
    flex: 1,
  },
  text: {
    ...Typography.body1,
    color: Colors.textPrimary,
  },
  placeholder: {
    color: Colors.textSecondary,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
    marginTop: Spacings.s2,
  },
   /** When file exists */
  fileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.secondaryLightest,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: Spacings.s3,
    paddingVertical: Spacings.s3,
    paddingHorizontal: Spacings.s4,
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  fileName: {
    marginLeft: Spacings.s3,
    ...Typography.body2,
    maxWidth: 160,
  },
  replaceText: {
   color: Colors.secondaryDark,
  },
});

export default FileUpload;
