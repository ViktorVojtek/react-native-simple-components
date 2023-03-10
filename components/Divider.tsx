import React, { memo } from "react";

import Stack from "./Stack";
import type { StackProps } from "./Stack";

type Props = {
  color?: string;
  isVertical?: boolean;
} & StackProps;

const Divider = ({ color = "#d3d3d3", isVertical = false }: Props) => {
  const flexDirection = isVertical ? "column" : "row";
  const borderColor = color;
  const borderBottomWidth = !isVertical ? 1 : undefined;
  const borderLeftWidth = isVertical ? 1 : undefined;
  const width = !isVertical ? "100%" : undefined;
  const height = isVertical ? "100%" : undefined;

  return (
    <Stack
      flexDirection={flexDirection}
      borderBottomWidth={borderBottomWidth}
      borderLeftWidth={borderLeftWidth}
      borderColor={borderColor}
      width={width}
      height={height}
    />
  );
};

export default memo(Divider);
