import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import { Colors, Spacings, Typography } from '@/theme';
import TextField from '@/components/common/TextField';
import MapPicker from '@/components/common/MapPicker';
import MultiSelectInput from '@/components/common/MultiSelectInput';
import FileUpload from '@/components/common/FileUpload';
import Feather from '@expo/vector-icons/Feather';
import { CompleteProfileFormData } from '@/validations/user/validationSchemas';
import { useGetActivitiesQuery } from '@/services/ActivitiesApi';

interface Step2Props {
  control: Control<CompleteProfileFormData>;
  errors: FieldErrors<CompleteProfileFormData>;
}


const Step2: React.FC<Step2Props> = ({ control, errors }) => {
  const { data, isLoading } = useGetActivitiesQuery();
  
  // Transform API data to options format
  const secteurOptions = data?.map(activity => ({
    label: activity.name,
    value: activity.id.toString()
  })) || [];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <Controller
        control={control}
        name="raison"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Raison sociale"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.raison?.message as string}
            touched={!!errors.raison}
            placeholder="Entrez la raison sociale"
          />
        )}
      />

      <Controller
        control={control}
        name="immatriculeFiscale"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Immatricule fiscale"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.immatriculeFiscale?.message as string}
            touched={!!errors.immatriculeFiscale}
            placeholder="Entrez l'immatricule fiscale"
          />
        )}
      />

      <Controller
        control={control}
        name="adresseShop"
        render={({ field: { onChange, value } }) => (
          <MapPicker
            label="Adresse du shop"
            value={value}
            onChange={onChange}
            error={errors.adresseShop?.message as string}
            touched={!!errors.adresseShop}
          />
        )}
      />

      <Controller
        control={control}
        name="secteurActivite"
        render={({ field: { onChange, value } }) => (
          <MultiSelectInput
            label="Secteur d'activité"
            options={secteurOptions}
            selectedValues={value || []}
            isLoading={isLoading}
            onSelect={onChange}
            error={errors.secteurActivite?.message as string}
            touched={!!errors.secteurActivite}
          />
        )}
      />

      <Controller
        control={control}
        name="patente"
        render={({ field: { onChange, value } }) => (
          <FileUpload
            label="Patente"
            fileName={typeof value === 'object' && value && 'name' in value ? String(value.name) : String(value || '')}
            onChange={onChange}
            error={errors.patente?.message as string}
            touched={!!errors.patente}
          />
        )}
      />

      <Controller
        control={control}
        name="termsAccepted"
        render={({ field: { onChange, value } }) => (
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => onChange(!value)}
            >
              {value && (
                <Feather name="check" size={18} color={Colors.secondary} />
              )}
            </TouchableOpacity>
            <Text style={styles.checkboxText}>
              En me connectant, je suis d'accord avec tous les termes et conditions
            </Text>
          </View>
        )}
      />
      {errors.termsAccepted && (
        <Text style={styles.errorText}>{errors.termsAccepted.message as string}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: Spacings.s4,
    marginBottom: Spacings.s2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: Colors.neutral300,
    borderRadius: 4,
    marginRight: Spacings.s3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxText: {
    ...Typography.body2,
    color: Colors.textSecondary,
    flex: 1,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
    marginTop: Spacings.s2,
  },
});

export default Step2;
