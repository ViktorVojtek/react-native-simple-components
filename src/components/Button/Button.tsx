import React, {memo} from 'react';

import Pressable from '../Pressable';
import type {PressableProps} from '../Pressable';
import {mapShortStyleProps} from '../../utils';
import useColoredProps from '../../hooks/useColoredProps';

type Props = PressableProps;

export type ButtonProps = Props;

const Button = (props: Props): JSX.Element => {
  const coloredPropItems = useColoredProps(props);

  const {
    backgroundColor = '#b39afd',
    children,
    disabled,
    hitSlop,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    pressRetentionOffset,
    style,
    ...restStyleProps
  } = props;

  const restPressableProps = {
    children,
    disabled,
    hitSlop,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    pressRetentionOffset,
  };

  const computedStyleProps = mapShortStyleProps(restStyleProps);

  return (
    <Pressable
      style={[
        style,
        [
          {
            backgroundColor,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
          },
        ],
        ...computedStyleProps,
        ...coloredPropItems,
      ]}
      {...restPressableProps}
    />
  );
};

export default memo(Button);
