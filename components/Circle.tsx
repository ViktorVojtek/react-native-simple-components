import React, { memo } from "react";
import type { ReactNode } from "react";

import Center from "./Center";
import type { StackProps } from "./Stack";

type Props = {
  children?: ReactNode;
  size?: number;
} & StackProps;

const Circle = ({
  size = 40,
  bgColor = "#d3d3d3",
  children,
  ...restStyleProps
}: Props): JSX.Element => (
  <Center borderRadius={999} width={size} height={size} {...restStyleProps}>
    {children}
  </Center>
);

export default memo(Circle);
