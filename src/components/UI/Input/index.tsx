import React from 'react';

import { InputElement } from './styles';

type Props = {
  name: string,
  value?: string,
  min?: number,
  max?: number,
  label?: string,
  type: string,
  width?: string,
  height?: string
}

export function Input({name, value, label, width, type}: Props){
  return (
    <InputElement type={type} width={width} name={name} value={value} placeholder={label} />
  );
}
