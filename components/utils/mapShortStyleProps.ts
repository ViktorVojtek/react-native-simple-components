import { ColorValue, ViewStyle } from "react-native";

type MarginProps = {
  m?: number | string;
  ml?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  mx?: number | string;
  my?: number | string;
};

type PaddingProps = {
  p?: number | string;
  pl?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  px?: number | string;
  py?: number | string;
};

export type ViewStyleProps = {
  bgColor?: ColorValue;
} & MarginProps &
  PaddingProps &
  ViewStyle;

export default function mapShortStyleProps(
  styleProps: ViewStyleProps
): ViewStyle {
  const { bgColor, ...marginProps } = styleProps;
  const { ...paddingProps } = marginProps;
  let result: ViewStyleProps = {};

  if (typeof bgColor !== "undefined") {
    result.backgroundColor = bgColor;
  }
  result = { ...result, ...mapMarginProps(marginProps) };
  result = { ...result, ...mapPaddingProps(paddingProps) };

  return result;
}

function mapMarginProps(props: MarginProps): ViewStyle {
  const { m, ml, mt, mr, mb, mx, my } = props;
  let result: ViewStyle = {};

  if (typeof m !== "undefined") {
    result.margin = m;
  }
  if (typeof ml !== "undefined") {
    result.marginLeft = ml;
  }
  if (typeof mt !== "undefined") {
    result.marginTop = mt;
  }
  if (typeof mr !== "undefined") {
    result.marginRight = mr;
  }
  if (typeof mb !== "undefined") {
    result.marginBottom = mb;
  }
  if (typeof mx !== "undefined") {
    result.marginHorizontal = mx;
  }
  if (typeof my !== "undefined") {
    result.marginVertical = my;
  }

  return result;
}

function mapPaddingProps(props: PaddingProps): ViewStyle {
  const { p, pl, pt, pr, pb, px, py } = props;
  let result: ViewStyle = {};

  if (typeof p !== "undefined") {
    result.padding = p;
  }
  if (typeof pl !== "undefined") {
    result.paddingLeft = pl;
  }
  if (typeof pt !== "undefined") {
    result.paddingTop = pt;
  }
  if (typeof pr !== "undefined") {
    result.paddingRight = pr;
  }
  if (typeof pb !== "undefined") {
    result.padding;
  }
  if (typeof px !== "undefined") {
    result.paddingHorizontal = px;
  }
  if (typeof py !== "undefined") {
    result.paddingVertical = py;
  }

  return result;
}
