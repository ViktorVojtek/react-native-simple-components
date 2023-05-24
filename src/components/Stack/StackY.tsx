import React from 'react';

import Stack from './Stack';
import type {StackProps} from './Stack';

type Props = {flexDirection?: 'column' | 'column-reverse'} & Omit<
  StackProps,
  'flexDirection'
>;

const StackY = ({flexDirection = 'column', ...restProps}: Props) => <Stack flexDirection={flexDirection} {...restProps} />;

export default StackY;
