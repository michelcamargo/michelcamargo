import React from 'react';

import { InputLabel, InputElement } from './styles';

type Props = {
  name: string,
  placeholder?: string,
  value?: string,
  min?: number,
  max?: number,
  label?: string,
  type: string,
  width?: string,
  maxWidth?: string,
  height?: string,
  maxHeight?: string
}

export function Input({name, value, label, placeholder, width, maxWidth, height, maxHeight, type}: Props) {
  return (
    <InputLabel>
      <InputElement
        type={type}
        width={width}
        maxWidth={maxWidth}
        height={height}
        maxHeight={maxHeight}
        name={name}
        value={value}
        placeholder={placeholder}
      />
      {label}
    </InputLabel>
  );
}
