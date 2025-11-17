import React, { useState, useEffect, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { Colors, Spacings, Typography } from '@/theme';

interface TextFieldProps {
  placeholder?: string;
  floatingPlaceholder?: boolean;
  onChangeText?: (text: string) => void;
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
  enableErrors?: boolean;
  validateOnChange?: boolean;
  validate?: Array<string | ((value: string) => boolean)>;
  validationMessage?: string[];
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  ref?: React.Ref<TextInput>;
  keyboardType?: 'default' | 'number-pad' | 'numeric' | 'email-address' | 'phone-pad';
  maxLength?: number;
  value?: string;
}

const TextField: React.FC<TextFieldProps> = React.forwardRef<TextInput, TextFieldProps>(
  (
    {
      placeholder = '',
      floatingPlaceholder = false,
      onChangeText,
      onKeyPress,
      enableErrors = false,
      validateOnChange = false,
      validate = [],
      validationMessage = [],
      containerStyle,
      inputStyle,
      style,
      keyboardType = 'default',
      maxLength,
      value,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isFocused, setIsFocused] = useState(false);
    const animatedLabel = useRef(new Animated.Value(0)).current;
    const inputRef = useRef<TextInput>(null);

    // Use controlled value if provided, otherwise use internal state
    const displayValue = value !== undefined ? value : internalValue;

    // Forward the ref
    React.useImperativeHandle(ref, () => inputRef.current as TextInput);

    const validateInput = (text: string) => {
      if (!enableErrors) return null;
      for (let i = 0; i < validate.length; i++) {
        const rule = validate[i];
        if (rule === 'required' && !text.trim()) {
          return validationMessage[i] || 'Field is required';
        }
        if (typeof rule === 'function' && !rule(text)) {
          return validationMessage[i] || 'Invalid input';
        }
      }
      return null;
    };

    useEffect(() => {
      Animated.timing(animatedLabel, {
        toValue: isFocused || displayValue ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, [isFocused, displayValue]);

    const handleChangeText = (text: string) => {
      if (value === undefined) {
        setInternalValue(text);
      }
      if (onChangeText) onChangeText(text);
      if (validateOnChange) {
        setError(validateInput(text));
      }
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
      if (enableErrors) {
        setError(validateInput(displayValue));
      }
    };

    const labelStyle = {
      transform: [
        {
          translateY: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -Spacings.s6],
          }),
        },
        {
          scale: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.75],
          }),
        },
      ],
      color: animatedLabel.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.textSecondary, Colors.textPrimary],
      }),
    };

    return (
      <View style={[styles.container, containerStyle]}>
        {floatingPlaceholder && (
          <Animated.Text style={[styles.placeholder, labelStyle]}>{placeholder}</Animated.Text>
        )}
        <TextInput
          ref={inputRef}
          style={[
            styles.input,
            floatingPlaceholder && styles.inputWithFloating,
            error && styles.inputError,
            inputStyle,
            style,
          ]}
          value={displayValue}
          onChangeText={handleChangeText}
          onKeyPress={onKeyPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={floatingPlaceholder ? undefined : placeholder}
          placeholderTextColor={Colors.textSecondary}
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
        {error && enableErrors && (
          <View style={styles.footer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacings.s4,
  },
  input: {
    ...Typography.body1,
    fontFamily: 'Inter-Regular',
    height: 53,
    borderWidth: 1,
    borderColor: Colors.neutral300,
    borderRadius: Spacings.s2,
    padding: Spacings.s3,
    backgroundColor: Colors.white,
  },
  inputWithFloating: {
    paddingTop: Spacings.s5,
    paddingBottom: Spacings.s2,
  },
  inputError: {
    borderColor: Colors.error,
  },
  placeholder: {
    ...Typography.body1,
    position: 'absolute',
    left: Spacings.s3,
    top: Spacings.s3,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: Spacings.s1,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
  },
});

export default TextField;
