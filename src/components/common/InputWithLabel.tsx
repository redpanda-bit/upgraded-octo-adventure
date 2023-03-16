import React from 'react';
import {TextInputProps} from 'react-native/types';
import {Text} from './Text';
import {TextInput} from './TextInput';

type InputWithLabelProps = TextInputProps & {
  label: string;
};

export const InputWithLabel = (props: InputWithLabelProps): JSX.Element => {
  const {label, ...inputProps} = props;
  return (
    <>
      <Text>{label}</Text>
      <TextInput {...inputProps} />
    </>
  );
};
