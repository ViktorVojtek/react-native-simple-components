import React, { memo, useMemo } from 'react';
import { TextInput as TextInputBase, ViewStyle } from 'react-native';
import type { StyleProp, TextInputProps } from 'react-native';

import { mapShortStyleProps } from './utils';
import type { ViewStyleProps } from './utils';
import Stack from './Stack/Stack';
import Text from './Text/Text';

type Props = { label?: string, style?: ViewStyle | StyleProp<ViewStyle> } & ViewStyleProps & TextInputProps;

const TextInput = (props: Props) => {
  const {
    label,
    allowFontScaling,
    autoCapitalize,
    autoComplete, // Android
    autoCorrect,
    autoFocus,
    blurOnSubmit,
    caretHidden,
    clearButtonMode, // iOS
    clearTextOnFocus, // iOS
    contextMenuHidden,
    dataDetectorTypes, // iOS
    defaultValue,
    cursorColor, // Android
    disableFullscreenUI, // Android
    editable,
    enablesReturnKeyAutomatically, // iOS
    importantForAutofill, // Android
    inlineImageLeft, // Android
    inlineImagePadding, // Android
    inputAccessoryViewID, // iOS
    keyboardAppearance, // iOS
    keyboardType,
    maxFontSizeMultiplier,
    maxLength,
    multiline = true,
    numberOfLines = 5, // Android
    onBlur,
    onChange,
    onChangeText,
    onContentSizeChange,
    onEndEditing,
    onPressIn,
    onPressOut,
    onFocus,
    onKeyPress,
    onLayout,
    onScroll,
    onSelectionChange,
    onSubmitEditing,
    placeholder,
    placeholderTextColor,
    returnKeyLabel, // Android
    returnKeyType,
    rejectResponderTermination, // iOS
    scrollEnabled, // iOS
    secureTextEntry,
    selection,
    selectionColor,
    selectTextOnFocus,
    showSoftInputOnFocus,
    spellCheck, // iOS
    textAlign,
    textContentType, // iOS
    passwordRules, // iOS
    style,
    ...restStyleProps
  } = props;

  const restProps = {
    allowFontScaling,
    autoCapitalize,
    autoComplete, // Android
    autoCorrect,
    autoFocus,
    blurOnSubmit,
    caretHidden,
    clearButtonMode, // iOS
    clearTextOnFocus, // iOS
    contextMenuHidden,
    dataDetectorTypes, // iOS
    defaultValue,
    cursorColor, // Android
    disableFullscreenUI, // Android
    editable,
    enablesReturnKeyAutomatically, // iOS
    importantForAutofill, // Android
    inlineImageLeft, // Android
    inlineImagePadding, // Android
    inputAccessoryViewID, // iOS
    keyboardAppearance, // iOS
    keyboardType,
    maxFontSizeMultiplier,
    maxLength,
    multiline,
    numberOfLines, // Android
    onBlur,
    onChange,
    onChangeText,
    onContentSizeChange,
    onEndEditing,
    onPressIn,
    onPressOut,
    onFocus,
    onKeyPress,
    onLayout,
    onScroll,
    onSelectionChange,
    onSubmitEditing,
    placeholder,
    placeholderTextColor,
    returnKeyLabel, // Android
    returnKeyType,
    rejectResponderTermination, // iOS
    scrollEnabled, // iOS
    secureTextEntry,
    selection,
    selectionColor,
    selectTextOnFocus,
    showSoftInputOnFocus,
    spellCheck, // iOS
    textAlign,
    textContentType, // iOS
    passwordRules, // iOS
  };

  const computedStyle = useMemo(() => mapShortStyleProps(restStyleProps), [restStyleProps]);

  const space = label ? 6 : 0;

  return (
    <>
      {label && <Text>{label}</Text>}
      <TextInputBase
        style={[
          {
            backgroundColor: '#fff',
            borderWidth: 2,
            borderColor: '#000',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 5,
            flexGrow: 1,
            maxWidth: 175,
          },
          style,
          {...computedStyle}
        ]}
        {...restProps}
      />
    </>
  );
};

export default memo(TextInput);