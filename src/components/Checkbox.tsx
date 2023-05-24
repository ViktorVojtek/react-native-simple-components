import React, { forwardRef, memo, useCallback, useState } from "react";

import Pressable from "./Pressable";
import StackX from "./Stack/StackX";
import Text from "./Text";
// import useColoredProps from "../hooks/useColoredProps";

type Props = {
  backgroundColorActive?: string;
  backgroundColor?: string;
  tickActiveColor?: string;
  tickColor?: string;
  children?: string;
  onChange?: (isChecked: boolean) => void;
  isChecked?: boolean;
  size?: number;
};

const Checkbox = (props: Props, ref?: any) => {
  const {
    backgroundColorActive,
    backgroundColor,
    children,
    isChecked,
    onChange,
    size,
    tickActiveColor,
    tickColor,
  } = props;

  const [checked, toggleChecked] = useState(false);

  // TODO: useColoredProps for this component
  // const coloredPropItems = useColoredProps(props);

  const onPress = useCallback(() => {
    onChange?.(!checked);
    toggleChecked(!checked);
  }, [checked, onChange]);

  const isRealChecked = typeof isChecked === "boolean" ? isChecked : checked;
  const backgroundColorResult = isRealChecked
    ? backgroundColorActive || "#ecf8ff"
    : backgroundColor || "#fff";
  const iconSize = size ?? 18;
  const componentSize = iconSize * 1.5;
  const tickColorResult = isRealChecked
    ? tickActiveColor || "#000"
    : tickColor || "#000";

  const isString = typeof children === "string";

  return (
    <Pressable ref={ref} onPress={onPress}>
      <StackX alignItems='center' space={12}>
        <StackX
          alignItems='center'
          justifyContent='center'
          borderWidth={1}
          borderColor='#b88b2d'
          borderRadius={999}
          backgroundColor={backgroundColorResult}
          width={componentSize}
          height={componentSize}
        >
          {isRealChecked && <Text fontSize={iconSize}>✓</Text>}
        </StackX>

        {isString ? (
          <Text color={tickColorResult} fontSize={14}>
            {children}
          </Text>
        ) : (
          children
        )}
      </StackX>
    </Pressable>
  );
};

export default memo(forwardRef(Checkbox));
