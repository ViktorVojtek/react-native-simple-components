import {ColorValue, ViewStyle} from 'react-native';

export type ViewStyleProps = {
  bgColor?: ColorValue;
  m?: number | string;
  ml?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  mx?: number | string;
  my?: number | string;
  p?: number | string;
  pl?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  px?: number | string;
  py?: number | string;
} & ViewStyle;

export default function mapShortStyleProps(
  styleProps: ViewStyleProps,
): ViewStyle {
  const {
    bgColor,
    m,
    ml,
    mt,
    mr,
    mb,
    mx,
    my,
    p,
    pl,
    pt,
    pr,
    pb,
    px,
    py,
    ...restStyleProps
  } = styleProps;
  let result: any = {};

  if (typeof bgColor !== 'undefined') {
    result.backgroundColor = bgColor;
  } else if (typeof m !== 'undefined') {
    result.margin = m;
  } else if (typeof ml !== 'undefined') {
    result.marginLeft = ml;
  } else if (typeof mt !== 'undefined') {
    result.marginTop = mt;
  } else if (typeof mr !== 'undefined') {
    result.marginRight = mr;
  } else if (typeof mb !== 'undefined') {
    result.marginBottom = mb;
  } else if (typeof mx !== 'undefined') {
    result.marginHorizontal = mx;
  } else if (typeof my !== 'undefined') {
    result.marginVertical = my;
  } else if (typeof p !== 'undefined') {
    result.padding = p;
  } else if (typeof pl !== 'undefined') {
    result.paddingLeft = pl;
  } else if (typeof pt !== 'undefined') {
    result.paddingTop = pt;
  } else if (typeof pr !== 'undefined') {
    result.paddingRight = pr;
  } else if (typeof pb !== 'undefined') {
    result.paddingBottom = pb;
  } else if (typeof px !== 'undefined') {
    result.paddingHorizontal = px;
  } else if (typeof py !== 'undefined') {
    result.paddingVertical = py;
  }

  return {
    ...restStyleProps,
    ...result,
  };
}
