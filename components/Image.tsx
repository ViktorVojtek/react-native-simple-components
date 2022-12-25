import React, { memo } from 'react';
import {
  ImageStyle,
  StyleProp,
} from 'react-native';
import ImageBase, {
  FastImageProps as ImageBaseProps,
  Source,
} from 'react-native-fast-image';

type Props = {
  src: Source;
  style?: StyleProp<ImageStyle>;
} & ImageStyle &
  Omit<ImageBaseProps, 'source' | 'style'>;

export type ImageProps = Props;

const Image = (props: Props): JSX.Element => {
  const {
    src,
    accessible,
    accessibilityLabel,
    onError,
    onLayout,
    onLoad,
    onLoadEnd,
    onLoadStart,
    onProgress,
    resizeMode,
    style,
    ...restStyleProps
  } = props;

  return (
    <ImageBase source={src} style={[style, {...(restStyleProps as any)}]} />
  );
};

export default memo(Image);