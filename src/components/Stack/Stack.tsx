import React, { Children, forwardRef, memo, useMemo } from "react";
import type { ForwardedRef, ReactNode } from "react";

import { View } from "react-native";
import type { ViewProps, ViewStyle } from "react-native";

import { mapShortStyleProps, ViewStyleProps } from "../../utils";
import useColoredProps from "../../hooks/useColoredProps";

type Props = {
  children?: ReactNode | ReactNode[];
  space?: string | number;
  style?: ViewStyle;
  pointerEvents?: "auto" | "none" | "box-none";
} & Pick<ViewProps, "style"> &
  ViewStyleProps;

export type StackProps = Props;

const Stack = forwardRef((props: Props, ref?: ForwardedRef<any>) => {
  const { children, pointerEvents, space, style, ...restStyleProps } = props;

  const coloredPropItems = useColoredProps(props);

  const computedProps = useMemo(
    () => mapShortStyleProps(restStyleProps),
    [restStyleProps]
  );

  const isRow = !!(
    props.flexDirection && props.flexDirection.toLowerCase().indexOf("row") > -1
  );

  const childrens = useMemo(() => {
    if (typeof space === "undefined") {
      return [children];
    }

    return getChildrenWithSpace(children, isRow, space);
  }, [children, isRow, space]);

  const isMore = childrens.length > 0;

  return (
    <View
      ref={ref}
      pointerEvents={pointerEvents}
      style={[style, { ...computedProps, ...coloredPropItems }]}
    >
      {isMore ? childrens : children}
    </View>
  );
});

function getChildrenWithSpace(
  children: ReactNode,
  isRow: boolean,
  space: string | number
) {
  const Childs = Children.toArray(children);

  const childrens = Childs.map((child: any, i: number) => {
    const marginLeft = isRow
      ? i <= Childs.length - 1 && i !== 0
        ? +space / 2
        : undefined
      : undefined;

    const marginRight = isRow
      ? i < Childs.length - 1
        ? +space / 2
        : undefined
      : undefined;

    const marginTop = isRow
      ? undefined
      : i <= Childs.length - 1 && i !== 0
      ? +space / 2
      : undefined;

    const marginBottom = isRow
      ? undefined
      : i < Childs.length - 1
      ? +space / 2
      : undefined;

    const style = {
      marginLeft,
      marginTop,
      marginRight,
      marginBottom,
    };

    return (
      <View style={style} key={i}>
        {child}
      </View>
    );
  });

  return childrens;
}

export default memo(Stack);
