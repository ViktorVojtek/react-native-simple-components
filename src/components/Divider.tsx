import React, { memo, useMemo } from "react";

import Stack from "./Stack";
import type { StackProps } from "./Stack";
import { useTheme } from "../ThemeProvider";

type Props = {
  color?: string;
  isVertical?: boolean;
} & StackProps;

const Divider = ({ color = "#d3d3d3", isVertical = false }: Props) => {
  const theme = useTheme();

  const colorValue = useMemo(() => {
    return Object.keys(theme?.colors ?? {}).includes(color)
      ? theme?.colors?.[color]
      : color;
  }, [theme, color]);

  const flexDirection = isVertical ? "column" : "row";
  const borderBottomWidth = !isVertical ? 1 : undefined;
  const borderLeftWidth = isVertical ? 1 : undefined;
  const width = !isVertical ? "100%" : undefined;
  const height = isVertical ? "100%" : undefined;

  return (
    <Stack
      flexDirection={flexDirection}
      borderBottomWidth={borderBottomWidth}
      borderLeftWidth={borderLeftWidth}
      borderColor={colorValue}
      width={width}
      height={height}
    />
  );
};

export default memo(Divider);
