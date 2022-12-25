import React, {forwardRef, memo, useState} from 'react';
import {Check} from 'react-native-feather';

import Pressable from './Pressable';
import StackX from './Stack/StackX';
import Text from './Text';

type Props = {
  children?: string;
  onChange?: (isChecked: boolean) => void;
  isChecked?: boolean;
};

const Checkbox = ({children, isChecked, onChange}: Props, ref?: any) => {
  const [checked, toggleChecked] = useState(false);

  const onPress = () => {
    onChange?.(!checked);
    toggleChecked(!checked);
  };

  const isRealChecked = typeof isChecked === 'boolean' ? isChecked : checked;
  const backgroundColor = isRealChecked ? '#b88b2d' : '#fff';
  const iconSize = 18;
  const size = iconSize * 1.5;

  return (
    <Pressable ref={ref} onPress={onPress}>
      <StackX alignItems="center" space={12}>
        <StackX
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="#b88b2d"
          borderRadius={999}
          backgroundColor={backgroundColor}
          width={size}
          height={size}>
          {isRealChecked && (
            <Check color="#fff" width={iconSize} height={iconSize} />
          )}
        </StackX>

        {typeof children === 'string' ? (
          <Text fontSize={14}>{children}</Text>
        ) : (
          children
        )}
      </StackX>
    </Pressable>
  );
};

export default memo(forwardRef(Checkbox));
