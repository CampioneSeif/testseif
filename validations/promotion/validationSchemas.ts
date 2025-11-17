import * as yup from 'yup';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

// Promo Subscription Schema
export const promoSubscriptionSchema = yup.object({
  dateStock: yup
    .string()
    .required('La date du stock est requise')
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/,
      'Format invalide (JJ/MM/AAAA)'
    ),
  quantite: yup
    .number()
    .required('La quantité est requise')
    .min(1, 'La quantité doit être au moins 1')
    .max(9999, 'La quantité ne peut pas dépasser 9999'),
  conditionnement: yup
    .string()
    .required('Le conditionnement est requis'),
  files: yup
    .array()
    .of(
      yup.object({
        uri: yup.string().required(),
        name: yup.string().required(),
        mimeType: yup.string().required(),
        size: yup.number().optional(),
      })
    )
    .min(1, 'Veuillez télécharger au moins un fichier')
    .max(5, 'Vous ne pouvez télécharger que 5 fichiers maximum')
    .test(
      'fileSize',
      'Un ou plusieurs fichiers dépassent la taille maximale de 5 Mo',
      (files) => {
        if (!files || files.length === 0) return true;
        return files.every((file) => !file.size || file.size <= MAX_FILE_SIZE);
      }
    )
    .required('Les pièces jointes sont requises'),
});

export type PromoSubscriptionFormData = yup.InferType<typeof promoSubscriptionSchema>;
