import React from 'react';
import {ActivityIndicator} from 'react-native';
import type {ActivityIndicatorProps as Props} from 'react-native';

import Stack from '../Stack';

export type SpinnerProps = Props;

const Spinner = ({size = 'large', color = '#a16d02'}: Props) => {
  const width = size === 'large' ? 45 : 30;

  return (
    <Stack position="relative">
      <ActivityIndicator size={size} color={color} />
      <Stack
        aspectRatio={1 / 1}
        borderRadius={999}
        backgroundColor="#fff"
        width={width}
        position="absolute"
        opacity={0.25}
        top={-6}
        left={-6}
      />
    </Stack>
  );
};

export default Spinner;
