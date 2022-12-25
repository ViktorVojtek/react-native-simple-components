import React from 'react';

import Stack from './Stack';
import type {StackProps} from './Stack';

type Props = {flexDirection?: 'row' | 'row-reverse'} & Omit<
  StackProps,
  'flexDirection'
>;

const StackX = ({flexDirection = 'row', ...restProps}: Props) => <Stack flexDirection={flexDirection} {...restProps} />;

export default StackX;
