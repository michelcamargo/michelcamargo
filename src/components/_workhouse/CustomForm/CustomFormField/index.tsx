import React, { ReactNode } from 'react';

import { TextareaAutosize } from "@mui/material";

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
}

export const FieldText = ({ name, type = 'text', label,  }: Props) => {
  if (!label) {
    return <input name={name} type={type} />;
  }
  
  return (
    <Styled.FormFieldBox>
      <Styled.FieldLabel>{label}</Styled.FieldLabel>
      <Styled.TextInput name={name} type={type} />
    </Styled.FormFieldBox>
  );
};

export const FieldTextArea = ({ id, name, label, placeholder, isDisabled, maxLength, hasErrors }: Props) => {
  if (!label) {
    return <TextareaAutosize name={name} />;
  }
  
  return (
    <Styled.FormFieldBox>
      <Styled.FieldLabel>{label}</Styled.FieldLabel>
      <Styled.TextArea
        name={name}
        id={id}
        placeholder={placeholder}
        // onChange={onChange}
        disabled={isDisabled}
        // minRows={minRows ?? 2}
        // maxRows={maxRows ?? undefined}
        maxLength={maxLength ?? undefined}
        // InputProps={{ inputProps: { min: 0.1 } }}
        // error={hasErrors}
        // helperText={helperText}
        color={hasErrors ? 'error' : 'primary'}
        // fullWidth={fullWidth}
        // variant={outlined ? 'outlined' : 'standard'}
        // size={size ? size : 'small'}
      />
    </Styled.FormFieldBox>
  );
};
