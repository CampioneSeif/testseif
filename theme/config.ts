// theme/config.ts
import { Colors, Typography, Spacings, ThemeManager } from 'react-native-ui-lib';

// ===== COLORS =====
// Load your color palette based on the design system
Colors.loadColors({
  // ===== NEUTRAL COLORS =====
  neutral100: '#fffff',
  neutral200: '#e8e8e8',
  neutral300: '#d2d2d2',
  neutral400: '#bbbbbb',
  neutral500: '#a4a4a4',
  neutral600: '#8e8e8e',
  neutral700: '#777777',
  neutral800: '#606060',
  neutral900: '#4a4a4a',
  neutral1000: '#333333',
  
  // ===== SECONDARY (YELLOW) COLORS =====
  secondary100: '#fff7e0',
  secondary200: '#ffdd80',
  secondary300: '#ffcc40',
  secondary400: '#ffbb00',
  secondary500: '#d19900',
  secondary600: '#a37800',
  secondary700: '#755600',
  
  // ===== PRIMARY (RED) COLORS =====
  primary100: '#fdc0c4',
  primary200: '#fc8088',
  primary300: '#fa414d',
  primary400: '#f40616',
  primary500: '#c80512',
  primary600: '#9c040e',
  primary700: '#71030a',
  
  // ===== GREEN COLORS =====
  green100: '#cbf7db',
  green200: '#98efb6',
  green300: '#64e892',
  green400: '#31e06e',
  green500: '#1cb953',
  green600: '#169041',
  green700: '#10682e',
  
  // ===== WARNING (ORANGE) COLORS =====
  warning100: '#ffdbbf',
  warning200: '#ffb780',
  warning300: '#ff9340',
  warning400: '#ff6f00',
  warning500: '#d15b00',
  warning600: '#a34700',
  warning700: '#753300',
  
  // ===== SEMANTIC COLOR ALIASES =====
  // Primary (Red)
  primary: '#f40616',
  primaryLight: '#fa414d',
  primaryLightest: '#fdc0c4',
  primaryDark:'#c80512',
  primaryDarkest: '#71030a',
  
  // Secondary (Yellow)
  secondary: '#ffbb00',
  secondaryLight: '#ffcc40',
  secondaryLightest: '#fff7e0',
  secondaryDark:'#d19900',
  secondaryDarkest: '#755600',
  
  // Success (Green)
  success: '#31e06e',
  successLight: '#64e892',
  successLightest:  '#cbf7db',
  successDark:  '#1cb953',
  successDarkest: '#10682e',
  
  // Error (Red - using primary)
  error:  '#f40616',
  errorLight: '#fa414d',
  errorLightest: '#fdc0c4',
  errorDark: '#c80512',
  errorDarkest: '#71030a',
  
  // Warning (Orange)
  warning: '#ff6f00',
  warningLight: '#ff9340',
  warningLightest:'#ffdbbf',
  warningDark: '#d15b00',
  warningDarkest: '#753300',
  
  // Info (keeping a blue for info)
  info: '#0ea5e9',
  infoLight: '#38bdf8',
  infoLightest: '#e0f2fe',
  infoDark: '#0284c7',
  infoDarkest: '#075985',
  
  // ===== BACKGROUND & TEXT COLORS =====
  background: '#ffffff',
  backgroundPaper: '#fffff',
  backgroundGrey: '#e2e2e2',
  
  textPrimary: '#1e1e1e',
  textSecondary: '#646464',
  textDisabled: '#a3a3a3',
  textWhite: '#ffffff',
  
  // ===== COMMON COLORS =====
  white: '#ffffff',
  black: '#1e1e1e',
  transparent: 'transparent',
  

});

// ===== SPACINGS =====
Spacings.loadSpacings({
  s1: 4,
  s2: 8,
  s3: 12,
  s4: 16,
  s5: 20,
  s6: 24,
  s7: 28,
  s8: 32,
  s9: 36,
  s10: 40,
  s20: 60,
  page: 16,
});

// ===== TYPOGRAPHY =====
Typography.loadTypographies({
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    fontFamily: 'Inter',
  },
  h2: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    fontFamily: 'Inter-Bold',
  },
  h3: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    fontFamily: 'Inter-SemiBold',
  },
  h4: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    fontFamily: 'Inter-SemiBold',
  },
  h5: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: 'Inter-SemiBold',
  },
  h6: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    fontFamily: 'Inter-SemiBold',
  },
  body1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: 'Inter-Regular',
  },
  body2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'Inter-Regular',
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'Inter-Medium',
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: 'Inter-Medium',
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    fontFamily: 'Inter-Regular',
  },
  overline: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontFamily: 'Inter-Medium',
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    fontFamily: 'Inter-SemiBold',
  },
});

// ===== COMPONENT THEME OVERRIDES =====
// Configure default styles for UI Lib components
ThemeManager.setComponentTheme('Button', {
  'bg-primary': true,
  'br40': true, // Border radius
  'paddingV-s4': true,
});

ThemeManager.setComponentTheme('TextField', {
  // Floating placeholder enabled by default
  floatingPlaceholder: false,
  floatingPlaceholderColor: Colors.textSecondary,

  // Field styling - matches your custom TextField
  fieldStyle: {
    height: 56,
    borderWidth: 1,
    borderColor: Colors.neutral300,
    borderRadius: 18,
    paddingHorizontal: Spacings.s3,
    paddingTop: 8,      // Space for floating label
    paddingBottom: Spacings.s2,
    backgroundColor: Colors.whiteNormal,
    fontSize: 16,
    lineHeight: 24,
  },

  // Enable errors by default
  enableErrors: true,
  validateOnChange: true,

  // Placeholder text color (when not floating)
  placeholderTextColor: Colors.textSecondary,

  // Text color
  color: Colors.textPrimary,

  // Error text styling
  validationMessageStyle: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.errorMain,
    marginTop: Spacings.s1,
  },

  // Floating placeholder animation config
  floatingPlaceholderStyle: {
    fontSize: 12,
    color: Colors.textPrimary,
  },
});

ThemeManager.setComponentTheme('Card', {
  borderRadius: Spacings.s2,
  enableShadow: true,
  padding: Spacings.s4,
});
