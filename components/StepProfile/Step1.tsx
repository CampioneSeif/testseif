import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import { Colors, Spacings, Typography } from '@/theme';
import TextField from '@/components/common/TextField';
import DatePicker from '@/components/common/DatePicker';
import MapPicker from '@/components/common/MapPicker';
import SelectInput from '@/components/common/SelectInput';
/* import Grossiste from '@/assets/svgs/profile/Grossiste';
import GrossisteActive from '@/assets/svgs/profile/GrossisteActive';
import Shop from '@/assets/svgs/profile/Shop';
import ShopActive from '@/assets/svgs/profile/ShopActive'; */
import { CompleteProfileFormData } from '@/validations/user/validationSchemas';

interface Step1Props {
  control: Control<CompleteProfileFormData>;
  errors: FieldErrors<CompleteProfileFormData>;
}

const Step1: React.FC<Step1Props> = ({ control, errors }) => {
/*   const { watch, setValue } = useFormContext();
  const accountType = watch('accountType');

  const grossisteIcons = useMemo(
    () => ({
      active: <GrossisteActive />,
      inactive: <Grossiste />,
    }),
    []
  );

  const shopIcons = useMemo(
    () => ({
      active: <ShopActive />,
      inactive: <Shop />,
    }),
    []
  ); */

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    {/*  <Text style={styles.sectionTitle}>Type de compte</Text>
       <View style={styles.accountTypeContainer}>
        <TouchableOpacity
          style={[
            styles.accountTypeCard,
            accountType === 'GROSSISTE' && styles.accountTypeCardActive,
          ]}
          onPress={() => setValue('accountType', 'GROSSISTE', { shouldValidate: true })}
          activeOpacity={0.7}
        >
          {grossisteIcons[accountType === 'GROSSISTE' ? 'active' : 'inactive']}
          <Text
            style={[
              styles.accountTypeText,
              accountType === 'GROSSISTE' && styles.accountTypeTextActive,
            ]}
          >
            Grossiste
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.accountTypeCard, accountType === 'SHOP' && styles.accountTypeCardActive]}
          onPress={() => setValue('accountType', 'SHOP', { shouldValidate: true })}
          activeOpacity={0.7}
        >
          {shopIcons[accountType === 'SHOP' ? 'active' : 'inactive']}
          <Text
            style={[styles.accountTypeText, accountType === 'SHOP' && styles.accountTypeTextActive]}
          >
            Shop
          </Text>
        </TouchableOpacity>
      </View>
      {errors.accountType && (
        <Text style={styles.errorText}>{errors.accountType.message as string}</Text>
      )} */}

      <View style={styles.row}>
        <View style={styles.halfWidth}>
          <Controller
            control={control}
            name="nom"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                label="Nom"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.nom?.message as string}
                touched={!!errors.nom}
                placeholder="Entrez votre nom"
              />
            )}
          />
        </View>

        <View style={styles.halfWidth}>
          <Controller
            control={control}
            name="prenom"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                label="Prénom"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.prenom?.message as string}
                touched={!!errors.prenom}
                placeholder="Entrez votre prénom"
              />
            )}
          />
        </View>
      </View>
      <Controller
        control={control}
        name="sexe"
        render={({ field: { onChange, value } }) => (
          <SelectInput
            label="Sexe"
            options={[
              { label: 'Masculin', value: 'M' },
              { label: 'Féminin', value: 'F' },
            ]}
            selectedValue={value}
            onSelect={onChange}
            error={errors.sexe?.message as string}
            touched={!!errors.sexe}
            placeholder="Sélectionnez votre sexe"
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextField
            label="Email"
            value={value}
            onChangeText={onChange}
            error={errors.email?.message as string}
            touched={!!errors.email}
            placeholder="Entrez votre email"
          />
        )}
      />
      <Controller
        control={control}
        name="dateNaissance"
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label="Date de naissance"
            value={value}
            onChange={onChange}
            error={errors.dateNaissance?.message as string}
            touched={!!errors.dateNaissance}
            placeholder="JJ/MM/AAAA"
          />
        )}
      />

      <Controller
        control={control}
        name="adresse"
        render={({ field: { onChange, value } }) => (
          <MapPicker
            label="Adresse"
            value={value}
            onChange={onChange}
            error={errors.adresse?.message as string}
            touched={!!errors.adresse}
          />
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    ...Typography.h3,
    marginBottom: Spacings.s4,
    color: Colors.textPrimary,
  },
  accountTypeContainer: {
    flexDirection: 'row',
    gap: Spacings.s4,
    marginBottom: Spacings.s4,
  },
  accountTypeCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacings.s4,
    minHeight: 140,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.neutral300,
    backgroundColor: Colors.background,
  },
  accountTypeCardActive: {
    borderColor: Colors.secondary,
    backgroundColor: Colors.secondaryLightest,
  },
  accountTypeText: {
    ...Typography.body1,
    marginTop: Spacings.s3,
    color: Colors.textSecondary,
  },
  accountTypeTextActive: {
    color: Colors.textPrimary,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    gap: Spacings.s4,
  },
  halfWidth: {
    flex: 1,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
    marginTop: -Spacings.s2,
    marginBottom: Spacings.s4,
  },
});

export default Step1;
