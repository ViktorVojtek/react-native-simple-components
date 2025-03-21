import { ColorValue, ViewStyle } from "react-native";

export type MarginProps = {
  m?: number | string;
  ml?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  mx?: number | string;
  my?: number | string;
};

export type PaddingProps = {
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
): ViewStyle[] {
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

  const marginProps = { m, ml, mt, mr, mb, mx, my };
  const paddingProps = { p, pl, pt, pr, pb, px, py };

  let result: ViewStyleProps = {};

  const isMarginProps = Object.values(marginProps).some(
    (value) => typeof value !== "undefined"
  );
  const isPaddingProps = Object.values(paddingProps).some(
    (value) => typeof value !== "undefined"
  );

  if (isMarginProps) {
    result = {
      ...result,
      ...mapMarginProps(marginProps),
    };
  }

  if (isPaddingProps) {
    result = {
      ...result,
      ...mapPaddingProps(paddingProps),
    };
  }

  return [
    {
      ...restStyleProps,
      ...result,
    },
  ];
}

function mapMarginProps(props: MarginProps): ViewStyle {
  const { m, ml, mt, mr, mb, mx, my } = props;
  let result: ViewStyle = {};

  if (typeof m !== "undefined") {
    result.margin = m as ViewStyle["margin"];
  }
  if (typeof ml !== "undefined") {
    result.marginLeft = ml as ViewStyle["marginLeft"];
  }
  if (typeof mt !== "undefined") {
    result.marginTop = mt as ViewStyle["marginTop"];
  }
  if (typeof mr !== "undefined") {
    result.marginRight = mr as ViewStyle["marginRight"];
  }
  if (typeof mb !== "undefined") {
    result.marginBottom = mb as ViewStyle["marginBottom"];
  }
  if (typeof mx !== "undefined") {
    result.marginHorizontal = mx as ViewStyle["marginHorizontal"];
  }
  if (typeof my !== "undefined") {
    result.marginVertical = my as ViewStyle["marginVertical"];
  }

  return result;
}

function mapPaddingProps(props: PaddingProps): ViewStyle {
  const { p, pl, pt, pr, pb, px, py } = props;
  let result: ViewStyle = {};

  if (typeof p !== "undefined") {
    result.padding = p as ViewStyle["padding"];
  }
  if (typeof pl !== "undefined") {
    result.paddingLeft = pl as ViewStyle["paddingLeft"];
  }
  if (typeof pt !== "undefined") {
    result.paddingTop = pt as ViewStyle["paddingTop"];
  }
  if (typeof pr !== "undefined") {
    result.paddingRight = pr as ViewStyle["paddingRight"];
  }
  if (typeof pb !== "undefined") {
    result.paddingBottom = pb as ViewStyle["paddingBottom"];
  }
  if (typeof px !== "undefined") {
    result.paddingHorizontal = px as ViewStyle["paddingHorizontal"];
  }
  if (typeof py !== "undefined") {
    result.paddingVertical = py as ViewStyle["paddingVertical"];
  }

  return result;
}
