import React, { memo, useMemo } from "react";
import type { ReactNode } from "react";
import { Text as TextBase, TextStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "../../ThemeProvider";

type Props = {
  children: ReactNode;
  color?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  letterSpacing?: string;
  numberOfLines?: number;
} & Omit<TextStyle, "fontSize" | "fontWeight" | "color">;

export type TextProps = Props;

const Text = (props: Props) => {
  const {
    children,
    fontSize: fontSizeProp,
    fontWeight: fontWeightProp,
    letterSpacing: letterSpacingProp,
    numberOfLines,
    color,
    ...restStyleProps
  } = props;

  const theme = useTheme();

  const colorValue = useMemo(() => {
    if (!color) return undefined;

    const isThemeColor = Object.keys(theme?.colors ?? {}).includes(color);

    if (isThemeColor) {
      return theme?.colors?.[color];
    }

    return color;
  }, [theme, color]);

  const fontSize = useMemo(
    () => RFValue(+(fontSizeProp ?? 14)),
    [fontSizeProp]
  );

  const fontWeight = fontWeightProp ?? "500";

  const computedStyle = {
    fontSize,
    fontWeight,
    fontFamily: theme?.fonts?.[0] ?? "System",
    color: colorValue,
    ...restStyleProps,
  } as TextStyle;

  return (
    <TextBase numberOfLines={numberOfLines} style={{ ...computedStyle }}>
      {children}
    </TextBase>
  );
};

export default memo(Text);
