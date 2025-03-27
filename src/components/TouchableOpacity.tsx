import React, { forwardRef, memo } from 'react';
import type { ReactNode } from 'react';
import {
  TouchableOpacity as TouchableOpacityBase,
  TouchableOpacityProps as TouchableOpacityBaseProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { mapShortStyleProps, ViewStyleProps } from '../utils';
import useColoredProps from '../hooks/useColoredProps';

type Props = {
  children?: ReactNode;
  style?: ViewStyle | StyleProp<ViewStyle>;
} & ViewStyleProps &
  Omit<TouchableOpacityBaseProps, 'style'>;

const TouchableOpacity = (props: Props, ref?: any): JSX.Element => {
  const coloredPropItems = useColoredProps(props);

  const {
    children,
    style,
    accessible,
    accessibilityLabel,
    accessibilityHint,
    accessibilityRole,
    accessibilityState,
    accessibilityActions,
    onAccessibilityAction,
    accessibilityValue,
    delayLongPress,
    delayPressIn,
    delayPressOut,
    disabled,
    hitSlop,
    id,
    onBlur,
    onFocus,
    onLayout,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    pressRetentionOffset,
    testID,
    touchSoundDisabled,
    ...restStyleProps
  } = props;

  const restProps = {
    accessible,
    accessibilityLabel,
    accessibilityHint,
    accessibilityRole,
    accessibilityState,
    accessibilityActions,
    onAccessibilityAction,
    accessibilityValue,
    delayLongPress,
    delayPressIn,
    delayPressOut,
    disabled,
    hitSlop,
    id,
    onBlur,
    onFocus,
    onLayout,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    pressRetentionOffset,
    testID,
    touchSoundDisabled,
  };

  const computedProps = mapShortStyleProps(restStyleProps);

  return (
    <TouchableOpacityBase
      ref={ref}
      style={[style, ...computedProps, ...coloredPropItems]}
      {...restProps}
    >
      {children}
    </TouchableOpacityBase>
  );
};

export default memo(forwardRef(TouchableOpacity));
