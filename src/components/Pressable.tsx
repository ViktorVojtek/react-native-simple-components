import React, {forwardRef, memo} from 'react';
import type {ReactNode} from 'react';
import {
  Pressable as PressableBase,
  PressableProps as PressableBaseProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {mapShortStyleProps, ViewStyleProps} from '../utils';
import useColoredProps from '../hooks/useColoredProps';

type Props = {
  children?: ReactNode;
  style?: ViewStyle | StyleProp<ViewStyle>;
} & ViewStyleProps &
  Omit<PressableBaseProps, 'style'>;

export type PressableProps = Props;

const Pressable = (props: Props, ref?: any): JSX.Element => {
  const coloredPropItems = useColoredProps(props);

  const {
    children,
    style,
    onAccessibilityAction,
    onAccessibilityTap,
    onAccessibilityEscape,
    onBlur,
    onFocus,
    onLayout,
    onLongPress,
    onMagicTap,
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onPress,
    onPressIn,
    onPressOut,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture,
    onTouchCancel,
    onTouchEnd,
    onTouchEndCapture,
    onTouchMove,
    onTouchStart,
    ...restStyleProps
  } = props;

  const restProps = {
    onAccessibilityAction,
    onAccessibilityTap,
    onAccessibilityEscape,
    onBlur,
    onFocus,
    onLayout,
    onLongPress,
    onMagicTap,
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onPress,
    onPressIn,
    onPressOut,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture,
    onTouchCancel,
    onTouchEnd,
    onTouchEndCapture,
    onTouchMove,
    onTouchStart,
  };

  const computedProps = mapShortStyleProps(restStyleProps);

  return (
    <PressableBase
      ref={ref}
      style={[style, ...computedProps, ...coloredPropItems]}
      {...restProps}>
      {children}
    </PressableBase>
  );
};

export default memo(forwardRef(Pressable));
