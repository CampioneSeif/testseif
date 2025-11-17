import * as yup from 'yup';

export const step1Schema = yup.object().shape({
/*   accountType: yup
    .string()
    .oneOf(['GROSSISTE', 'SHOP'], 'Veuillez sélectionner un type de compte')
    .required('Le type de compte est requis'), */
  nom: yup
    .string()
    .required('Le nom est requis')
    .min(2, 'Le nom doit contenir au moins 2 caractères'),
  prenom: yup
    .string()
    .required('Le prénom est requis')
    .min(2, 'Le prénom doit contenir au moins 2 caractères'),
  sexe: yup
    .string()
    .required('Le sexe est requis'),
  dateNaissance: yup
    .string()
    .required('La date de naissance est requise')
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/,
      'Format invalide (JJ/MM/AAAA)'
    ),
  adresse: yup
    .string()
    .required('L\'adresse est requise'),
  email: yup
    .string()
    .required('L\'email est requis')
    .email('Format invalide (email)'),
});

export const step2Schema = yup.object().shape({
  raison: yup
    .string()
    .required('La raison sociale est requise')
    .min(2, 'La raison sociale doit contenir au moins 2 caractères'),
  immatriculeFiscale: yup
    .string()
    .required('L\'immatricule fiscale est requis')
    .min(5, 'L\'immatricule fiscale doit contenir au moins 5 caractères'),
  adresseShop: yup
    .string()
    .required('L\'adresse du shop est requise'),
  secteurActivite: yup
    .array()
    .of(yup.string())
    .min(1, 'Veuillez sélectionner au moins un secteur d\'activité')
    .required('Le secteur d\'activité est requis'),
  patente: yup
    .string()
    .required('La patente est requise'),
  termsAccepted: yup
    .boolean()
    .oneOf([true], 'Vous devez accepter les termes et conditions')
    .required('Vous devez accepter les termes et conditions'),
});

export const completeProfileSchema = yup.object({
/*   accountType: yup
    .string()
    .oneOf(['GROSSISTE', 'SHOP'], 'Veuillez sélectionner un type de compte')
    .required('Le type de compte est requis'), */
  nom: yup
    .string()
    .required('Le nom est requis')
    .min(2, 'Le nom doit contenir au moins 2 caractères'),
  prenom: yup
    .string()
    .required('Le prénom est requis')
    .min(2, 'Le prénom doit contenir au moins 2 caractères'),
  sexe: yup
    .string()
    .required('Le sexe est requis'),
  dateNaissance: yup
    .string()
    .required('La date de naissance est requise')
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/,
      'Format invalide (JJ/MM/AAAA)'
    ),
  email: yup
    .string()
    .required('L\'email est requis')
    .email('Format invalide (email)'),
  adresse: yup
    .string()
    .required('L\'adresse est requise'),
  raison: yup
    .string()
    .required('La raison sociale est requise')
    .min(2, 'La raison sociale doit contenir au moins 2 caractères'),
  immatriculeFiscale: yup
    .string()
    .required('L\'immatricule fiscale est requis')
    .min(5, 'L\'immatricule fiscale doit contenir au moins 5 caractères'),
  adresseShop: yup
    .string()
    .required('L\'adresse du shop est requise'),
  secteurActivite: yup
    .array()
    .of(yup.string().required())
    .min(1, 'Veuillez sélectionner au moins un secteur d\'activité')
    .required('Le secteur d\'activité est requis'),
  patente: yup
    .mixed()
    .required('La patente est requise'),
  termsAccepted: yup
    .boolean()
    .oneOf([true], 'Vous devez accepter les termes et conditions')
    .required('Vous devez accepter les termes et conditions'),
});

export type Step1FormData = yup.InferType<typeof step1Schema>;
export type Step2FormData = yup.InferType<typeof step2Schema>;
export type CompleteProfileFormData = yup.InferType<typeof completeProfileSchema>;
