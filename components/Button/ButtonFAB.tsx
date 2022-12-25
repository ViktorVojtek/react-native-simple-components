import React, { useMemo } from 'react';
import {ColorValue} from 'react-native';
import {Plus} from 'react-native-feather';

import Center from '../Center';
import Pressable from '../Pressable';
import type {PressableProps} from '../Pressable';

type Props = {
  color?: ColorValue;
  IconComponent?: JSX.Element;
  size?: number;
} & Omit<PressableProps, 'children'>;

export type FABProps = Props;

const FAB = (props: Props): JSX.Element => {
  const {bgColor = 'green', color = '#fff', IconComponent = undefined, size = 60, ...restProps} = props;

  const roundedHalfSize = useMemo(() => Math.round(size / 2), [size]);

  const showDefaultIcon = typeof IconComponent === 'undefined';

  return (
    <Pressable
      bgColor={bgColor}
      width={size}
      height={size}
      {...restProps}
      borderRadius={roundedHalfSize}
    >
      <Center flexGrow={1}>
        {showDefaultIcon && (
          <Plus
            color={color}
            width={roundedHalfSize}
            height={roundedHalfSize}
          />
        )}
      </Center>
    </Pressable>
  );
}

export default FAB;
