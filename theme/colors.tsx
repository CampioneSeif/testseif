// Orange variations
const orangeColors = {
  orangeLight: '#fff4e7',
  orangeLightHover: '#ffeedb',
  orangeLightActive: '#fedcb6',
  orangeNormal: '#fd8f12',
  orangeNormalHover: '#e48110',
  orangeNormalActive: '#ca720e',
  orangeDark: '#be6b0e',
  orangeDarkHover: '#98560b',
  orangeDarkActive: '#724008',
  orangeDarker: '#593206',
};

// Green variations
const greenColors = {
  greenLight: '#e6f9ed',
  greenLightHover: '#d9f6e4',
  greenLightActive: '#b0ecc7',
  greenNormal: '#00c24a',
  greenNormalHover: '#00af43',
  greenNormalActive: '#009b3b',
  greenDark: '#009238',
  greenDarkHover: '#00742c',
  greenDarkActive: '#005721',
  greenDarker: '#00441a',
};

// Red variations
const redColors = {
  redLight: '#fce7e8',
  redLightHover: '#fbdbdd',
  redLightActive: '#f7b4b8',
  redNormal: '#e50c1a',
  redNormalHover: '#ce0b17',
  redNormalActive: '#b70a15',
  redDark: '#ac0914',
  redDarkHover: '#890710',
  redDarkActive: '#67050c',
  redDarker: '#500409',
};

// Yellow variations
const yellowColors = {
  yellowLight: '#fff8e6',
  yellowLightHover: '#fff5d9',
  yellowLightActive: '#ffeab0',
  yellowNormal: '#ffbb00',
  yellowNormalHover: '#e6a800',
  yellowNormalActive: '#cc9600',
  yellowDark: '#bf8c00',
  yellowDarkHover: '#997000',
  yellowDarkActive: '#735400',
  yellowDarker: '#594100',
};

// White variations
const whiteColors = {
  whiteLight: '#ffffff',
  whiteLightHover: '#ffffff',
  whiteLightActive: '#ffffff',
  whiteNormal: '#ffffff',
  whiteNormalHover: '#e6e6e6',
  whiteNormalActive: '#cccccc',
  whiteDark: '#bfbfbf',
  whiteDarkHover: '#999999',
  whiteDarkActive: '#737373',
  whiteDarker: '#595959',
};

// Complete Color System
export const colorPalette = {
  // Primary Colors (using orange palette)
  primaryLightest: orangeColors.orangeLight,
  primaryLight: orangeColors.orangeLightHover,
  primaryMain: orangeColors.orangeNormal,
  primaryDark: orangeColors.orangeDark,
  primaryDarkest: orangeColors.orangeDarker,
  primaryAlpha4: `${orangeColors.orangeNormal}0A`,
  primaryAlpha8: `${orangeColors.orangeNormal}14`,
  primaryAlpha12: `${orangeColors.orangeNormal}1F`,
  primaryAlpha30: `${orangeColors.orangeNormal}4D`,
  primaryAlpha50: `${orangeColors.orangeNormal}80`,
  primaryContrastText: '#FFFFFF',

  // Secondary Colors (using green)
  secondaryLightest: greenColors.greenLight,
  secondaryLight: greenColors.greenLightHover,
  secondaryMain: greenColors.greenNormal,
  secondaryDark: greenColors.greenDark,
  secondaryDarkest: greenColors.greenDarker,
  secondaryAlpha4: `${greenColors.greenNormal}0A`,
  secondaryAlpha8: `${greenColors.greenNormal}14`,
  secondaryAlpha12: `${greenColors.greenNormal}1F`,
  secondaryAlpha30: `${greenColors.greenNormal}4D`,
  secondaryAlpha50: `${greenColors.greenNormal}80`,
  secondaryContrastText: '#FFFFFF',

  // Error Colors (using red)
  errorLight: redColors.redLight,
  errorMain: redColors.redNormal,
  errorDark: redColors.redDark,
  errorDarkest: redColors.redDarker,
  errorAlpha4: `${redColors.redNormal}0A`,
  errorAlpha8: `${redColors.redNormal}14`,
  errorAlpha12: `${redColors.redNormal}1F`,
  errorAlpha30: `${redColors.redNormal}4D`,
  errorAlpha50: `${redColors.redNormal}80`,
  errorContrastText: '#FFFFFF',

  // Success Colors (using green - alternative shades)
  successLightest: '#F0FDF4',
  successLight: greenColors.greenLight,
  successMain: greenColors.greenNormal,
  successDark: greenColors.greenDark,
  successDarkest: greenColors.greenDarker,
  successAlpha4: `${greenColors.greenNormal}0A`,
  successAlpha8: `${greenColors.greenNormal}14`,
  successAlpha12: `${greenColors.greenNormal}1F`,
  successAlpha30: `${greenColors.greenNormal}4D`,
  successAlpha50: `${greenColors.greenNormal}80`,
  successContrastText: '#FFFFFF',

  // Warning Colors (using yellow)
  warningLightest: yellowColors.yellowLight,
  warningLight: yellowColors.yellowLightHover,
  warningMain: yellowColors.yellowNormal,
  warningDark: yellowColors.yellowDark,
  warningDarkest: yellowColors.yellowDarker,
  warningAlpha4: `${yellowColors.yellowNormal}0A`,
  warningAlpha8: `${yellowColors.yellowNormal}14`,
  warningAlpha12: `${yellowColors.yellowNormal}1F`,
  warningAlpha30: `${yellowColors.yellowNormal}4D`,
  warningAlpha50: `${yellowColors.yellowNormal}80`,
  warningContrastText: '#000000',

  // Info Colors
  infoLightest: '#ECFDF5',
  infoLight: '#D1FAE5',
  infoMain: '#059669',
  infoDark: '#047857',
  infoDarkest: '#065F46',
  infoAlpha4: '#0596690A',
  infoAlpha8: '#05966914',
  infoAlpha12: '#0596691F',
  infoAlpha30: '#0596694D',
  infoAlpha50: '#05966980',
  infoContrastText: '#FFFFFF',

  // Neutral Colors (Grayscale)
  neutral100: '#F7FAFC',
  neutral200: '#EDF2F7',
  neutral300: '#E2E8F0',
  neutral400: '#CBD5E0',
  neutral500: '#A0AEC0',
  neutral600: '#718096',
  neutral700: '#4A5568',
  neutral800: '#2D3748',
  neutral900: '#1A202C',

  // Background Colors
  backgroundDefault: whiteColors.whiteNormal,
  backgroundPaper: '#F8FAFC',

  // Text Colors
  textPrimary: '#1A202C',
  textSecondary: '#718096',

  // Additional color groups
  ...orangeColors,
  ...greenColors,
  ...redColors,
  ...yellowColors,
  ...whiteColors,
};

// Export all color groups for easy access
export { orangeColors, greenColors, redColors, yellowColors, whiteColors };
