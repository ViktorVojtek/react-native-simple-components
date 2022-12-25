import React, {memo} from 'react';
import type {ReactNode} from 'react';
import {Text as TextBase, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = {
  children: ReactNode;
  color?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  letterSpacing?: string;
  numberOfLines?: number;
} & Omit<TextStyle, 'fontSize' | 'fontWeight'>;

export type TextProps = Props;

const Text = (props: Props) => {
  const {
    children,
    fontSize: fontSizeProp,
    fontWeight: fontWeightProp,
    letterSpacing: letterSpacingProp,
    numberOfLines,
    ...restStyleProps
  } = props;

  const fontSize = RFValue(+(fontSizeProp ?? 14));
  const fontWeight = fontWeightProp ?? '500';

  const computedStyle = {
    fontSize,
    fontWeight,
    ...restStyleProps,
  } as TextStyle;

  return (
    <TextBase numberOfLines={numberOfLines} style={{...computedStyle}}>
      {children}
    </TextBase>
  );
};

export default memo(Text);
