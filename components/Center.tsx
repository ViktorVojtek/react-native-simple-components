import React from 'react';
import type {ReactNode} from 'react';

import Stack from './Stack';
import type {StackProps} from './Stack';

type Props = {
  children: ReactNode;
} & StackProps;

const Center = (props: Props) => <Stack alignItems="center" justifyContent="center" flexGrow={1} {...props} />;

export default Center;
