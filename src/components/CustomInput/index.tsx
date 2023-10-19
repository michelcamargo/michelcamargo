import React, { ChangeEventHandler } from 'react';

import { TextareaAutosize, TextField } from "@mui/material";

import { StyledProps } from './styles';

interface Props extends StyledProps {
  value: string,
  hasErrors: boolean,
  type?: 'text' | 'number',
  mode?: 'text' | 'email' | 'search' | 'tel' | 'url' | 'none' | 'numeric' | 'decimal' | undefined
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  isDisabled?: boolean,
  defaultValue?: string | number,
  placeholder?: string,
  helperText?: string | false,
  id?: string,
  name: string,
  label: string,
  fullWidth?: boolean,
  size?: 'small' | 'medium',
  height?: number,
  width?: number,
  minRows?: number,
  maxRows?: number,
  maxLength?: number
}

const TextFieldComponent = ({
  value, id, name, label, type, mode, fullWidth, size,
  hasErrors, onChange, helperText, outlined, isDisabled, height, width, defaultValue
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
      defaultValue={defaultValue}
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

const TextAreaComponent = ({
  value, id, name, placeholder, type, mode, fullWidth, size, defaultValue,
  hasErrors, onChange, helperText, outlined, isDisabled, height, width, minRows, maxRows, maxLength
}: Props) => {
  return (
    <TextareaAutosize
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      // label={label}
      onChange={onChange}
      disabled={isDisabled}
      defaultValue={defaultValue}
      minRows={minRows ?? 2}
      maxRows={maxRows ?? undefined}
      maxLength={maxLength ?? undefined}
      // InputProps={{ inputProps: { min: 0.1 } }}
      // error={hasErrors}
      // helperText={helperText}
      color={hasErrors ? 'error' : 'primary'}
      // fullWidth={fullWidth}
      // variant={outlined ? 'outlined' : 'standard'}
      // size={size ? size : 'small'}
      inputMode={mode ?? 'text'}
    />
  );
};

export default {
  TextField: TextFieldComponent,
  TextArea: TextAreaComponent,
};
