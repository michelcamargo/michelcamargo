import React from 'react';

import { TextInput1, TextAreaInput, EmailInput } from './styles';

interface Props{
  name: string;
  value?: string;
  min?: number;
  max?: number;
  label?: string;
}

export function InputText({name, value, label}: Props){
  
  return (
    <TextInput1 type={"text"} name={name} value={value} placeholder={label} />
  );

}

export function InputEmail({name, value, label}: Props){
  
  return (
    <EmailInput type={"email"} name={name} value={value} placeholder={label} />
  );

}

export function InputTextArea({name, value, label}: Props){
  
  return (
    <TextAreaInput type={"textarea"} name={name} value={value} placeholder={label} />
  );
  
}