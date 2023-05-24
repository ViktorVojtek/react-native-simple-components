import React, {useMemo} from 'react';
import {ActivityIndicator} from 'react-native';
import type {ActivityIndicatorProps} from 'react-native';

import Stack from '../Stack';
import {useTheme} from '../../ThemeProvider';

export type SpinnerProps = {color?: string} & Omit<
  ActivityIndicatorProps,
  'color'
>;

const Spinner = ({size = 'large', color = '#a16d02'}: SpinnerProps) => {
  const theme = useTheme();

  const colorValue = useMemo(() => {
    const isThemeColor = Object.keys(theme?.colors ?? {}).includes(color);

    if (isThemeColor) {
      return theme?.colors?.[color];
    }

    return color;
  }, [theme, color]);

  return (
    <Stack position="relative">
      <ActivityIndicator size={size} color={colorValue} />
    </Stack>
  );
};

export default Spinner;
