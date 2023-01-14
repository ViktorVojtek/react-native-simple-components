import React from 'react';
import {ActivityIndicator} from 'react-native';
import type {ActivityIndicatorProps as Props} from 'react-native';

import Stack from '../Stack';

export type SpinnerProps = Props;

const Spinner = ({size = 'large', color = '#a16d02'}: Props) => {
  return (
    <Stack position="relative">
      <ActivityIndicator size={size} color={color} />
    </Stack>
  );
};

export default Spinner;
