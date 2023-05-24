import React, { memo } from "react";
import {
  ImageStyle,
  StyleProp,
  Image as ImageBase,
  ImageProps as ImagePropsBase,
} from "react-native";
import { mapShortStyleProps } from "../utils";

type Props = {
  style?: StyleProp<ImageStyle>;
} & ImageStyle &
  ImagePropsBase;

export type ImageProps = Props;

const Image = (props: Props): JSX.Element => {
  const {
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
    height,
    loadingIndicatorSource,
    onError,
    onLayout,
    onLoad,
    onLoadEnd,
    onLoadStart,
    onMagicTap,
    onProgress,
    source,
    style,
    testID,
    tintColor,
    resizeMode,
    resizeMethod,
    onAccessibilityEscape,
    role,
    ...restStyleProps
  } = props;

  const restImageProps = {
    accessible,
    accessibilityLabel,
    alt,
    blurRadius,
    defaultSource,
    height,
    loadingIndicatorSource,
    onError,
    onLayout,
    onLoad,
    onLoadEnd,
    onLoadStart,
    onProgress,
    source,
    testID,
    tintColor,
    resizeMode,
  };

  const styleProps = mapShortStyleProps(
    restStyleProps
  ) as unknown as StyleProp<ImageStyle>[];

  return <ImageBase style={[style, ...styleProps]} {...restImageProps} />;
};

export default memo(Image);
