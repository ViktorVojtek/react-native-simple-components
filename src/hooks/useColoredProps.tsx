import React, { useMemo } from "react";
import { useTheme } from "../ThemeProvider";

const useColoredProps = (props: any) => {
  const theme = useTheme();

  const coloredPropItems = useMemo(() => {
    if (!props) return [];

    const entries =
      [
        { color: props.color },
        { borderColor: props.borderColor },
        { bgColor: props.bgColor },
        { backgroundColor: props.backgroundColor },
      ]
        ?.filter((item) => !!Object.values(item)[0])
        ?.map((item) => {
          const itemColor = Object.values(item)[0];
          const isThemeColor = Object.keys(theme?.colors ?? {}).includes(
            itemColor
          );

          if (isThemeColor) {
            return {
              [Object.keys(item)[0] === "bgColor"
                ? "backgroundColor"
                : Object.keys(item)[0]]: theme?.colors?.[itemColor],
            };
          }

          return item;
        }) ?? [];

    return entries;
  }, [
    theme?.colors,
    props.backgroundColor,
    props.color,
    props.borderColor,
    props.bgColor,
  ]);

  return coloredPropItems;
};

export default useColoredProps;
