import React, { memo } from "react";
import {
  ImageBackground as ImageBackgroundBase,
  ImageBackgroundProps as ImageBackgroundPropsBase,
  ImageStyle,
  StyleProp,
} from "react-native";
import { ViewStyleProps, mapShortStyleProps } from "../utils";
import useColoredProps from "../hooks/useColoredProps";

export type ImageBackgroundProps = {
  children?: React.ReactNode;
  style?: StyleProp<ImageStyle>;
} & ImageBackgroundPropsBase &
  ViewStyleProps;

const ImageBackground = (props: ImageBackgroundProps) => {
  const coloredPropItems = useColoredProps(props);

  const {
    id,
    accessible,
    accessibilityLabel,
    accessibilityLanguage,
    accessibilityIgnoresInvertColors,
    accessibilityViewIsModal,
    accessibilityElementsHidden,
    accessibilityLabelledBy,
    accessibilityLiveRegion,
    onAccessibilityTap,
    alt,
    blurRadius,
    defaultSource,
    loadingIndicatorSource,
    onError,
    onLayout,
    onLoad,
    onLoadEnd,
    onLoadStart,
    onMagicTap,
    onProgress,
    source,
    testID,
    resizeMode,
    resizeMethod,
    onAccessibilityEscape,
    role,
    children,
    style,
    imageStyle,
    imageRef,
    ...restStyleProps
  } = props;

  const restImageProps = {
    id,
    accessible,
    accessibilityLabel,
    accessibilityLanguage,
    accessibilityIgnoresInvertColors,
    accessibilityViewIsModal,
    accessibilityElementsHidden,
    accessibilityLabelledBy,
    accessibilityLiveRegion,
    onAccessibilityTap,
    alt,
    blurRadius,
    defaultSource,
    loadingIndicatorSource,
    onError,
    onLayout,
    onLoad,
    onLoadEnd,
    onLoadStart,
    onMagicTap,
    onProgress,
    source,
    testID,
    resizeMode,
    resizeMethod,
    onAccessibilityEscape,
    role,
    children,
    imageStyle,
    imageRef,
  };

  const styleProps = mapShortStyleProps(
    restStyleProps
  ) as unknown as StyleProp<ImageStyle>[];

  return (
    <ImageBackgroundBase
      style={[style, ...styleProps, ...coloredPropItems]}
      {...restImageProps}
    />
  );
};

export default memo(ImageBackground);
