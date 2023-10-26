import React, { ReactNode } from 'react';

import Styled from './styles';

interface Props {
  name: string,
  type?: 'text' | 'number' | 'email',
  label?: string,
  icon?: ReactNode,
  id: string,
  placeholder?: string,
  isDisabled?: boolean,
  maxLength?: number,
  hasErrors?: false | Array<string>
  height?: number,
  width?: number,
  fullWidth?: boolean,
}

export const FieldText = ({ name, type = 'text', label, fullWidth }: Props) => {
  
  const TextInputComponent = (
    <Styled.TextInput name={name} type={type} fullWidth={fullWidth} />
  );
  
  if (!label) {
    return TextInputComponent;
  }
  
  return (
    <Styled.FormFieldBox>
      <Styled.FieldLabel>{label}</Styled.FieldLabel>
      {TextInputComponent}
    </Styled.FormFieldBox>
  );
};

export const FieldTextArea = ({
  id, name, label, placeholder, isDisabled, maxLength, hasErrors, height, width, fullWidth
}: Props) => {
  
  const TextAreaComponent = (
    <Styled.TextArea
      name={name}
      id={id}
      placeholder={placeholder}
      height={height}
      width={width}
      fullWidth={fullWidth}
      // onChange={onChange}
      disabled={isDisabled}
      // minRows={minRows ?? 2}
      // maxRows={maxRows ?? undefined}
      maxLength={maxLength ?? undefined}
      // InputProps={{ inputProps: { min: 0.1 } }}
      // error={hasErrors}
      // helperText={helperText}
      color={hasErrors ? 'error' : 'primary'}
      // variant={outlined ? 'outlined' : 'standard'}
      // size={size ? size : 'small'}
    />
  );
  
  if (!label) {
    return TextAreaComponent;
  }
  
  return (
    <Styled.FormFieldBox>
      <Styled.FieldLabel>{label}</Styled.FieldLabel>
      {TextAreaComponent}
    </Styled.FormFieldBox>
  );
};
