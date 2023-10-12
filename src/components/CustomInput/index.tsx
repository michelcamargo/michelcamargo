import React, { ChangeEventHandler } from 'react';

import { TextField } from "@mui/material";

import Styled, { StyledProps } from './styles';

interface Props extends StyledProps {
  value: string,
  hasErrors: boolean,
  type?: 'text' | 'number',
  mode?: 'text' | 'email' | 'search' | 'tel' | 'url' | 'none' | 'numeric' | 'decimal' | undefined
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  isDisabled?: boolean,
  helperText?: string | false,
  id?: string,
  name: string,
  label: string,
  fullWidth?: boolean,
  size?: 'small' | 'medium',
}

const TextFieldComponent = ({
  value, id, name, label, type, mode, fullWidth, size,
  hasErrors, onChange, helperText, outlined, isDisabled
}: Props) => {
  return (
    <TextField
      id={id}
      name={name}
      type={type ?? 'text'}
      value={value}
      label={label}
      onChange={onChange}
      disabled={isDisabled}
      // InputProps={{ inputProps: { min: 0.1 } }}
      error={hasErrors}
      helperText={helperText}
      color={hasErrors ? 'error' : 'primary'}
      fullWidth={fullWidth}
      variant={outlined ? 'outlined' : 'standard'}
      size={size ? size : 'small'}
      inputMode={mode ?? 'text'}
    />
  );
};

export default {
  TextField: TextFieldComponent
};
