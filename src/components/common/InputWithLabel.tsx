import React from 'react';
import {TextInputProps} from 'react-native/types';
import {Text} from './Text';
import {TextInput} from './TextInput';

type InputWithLabelProps = TextInputProps & {
  label: string;
  labelTestID?: string;
};

export const InputWithLabel = (props: InputWithLabelProps): JSX.Element => {
  const {label, labelTestID, ...inputProps} = props;
  return (
    <>
      <Text testID={labelTestID}>{label}</Text>
      <TextInput {...inputProps} />
    </>
  );
};
